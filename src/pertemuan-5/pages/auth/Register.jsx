import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";
import { signUpUser, upsertUserProfile, getCurrentUser } from "../../utils/supabase";
import AuthLayout from "../../layouts/AuthLayout";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (dataForm.password !== dataForm.confirmPassword) {
        throw new Error("Password dan confirm password tidak sama.");
      }

      const { data, error } = await signUpUser({
        email: dataForm.email,
        password: dataForm.password,
      });
      if (error) throw error;

      const user = data?.user ?? null;
      if (user?.id) {
        await upsertUserProfile({
          userId: user.id,
          email: dataForm.email,
          role: dataForm.role,
        });
      }

      if (data?.session) {
        if (dataForm.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err?.message || "Register gagal");
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <AuthLayout>
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Create Your Account ✨
        </h2>

        {errorInfo}
        {loadingInfo}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
              placeholder="********"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={dataForm.role}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <p className="text-xs text-slate-500 mt-2">
              Pilih "Admin" hanya jika Anda ingin membuat akun admin.
            </p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={dataForm.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Register
          </button>

          <div className="mt-4 text-center text-sm text-slate-600">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}


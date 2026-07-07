import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate, Link } from "react-router-dom";
import AdminAuthPopupLayout from "../../layouts/AdminAuthPopupLayout";
import { getUserRoleFromProfiles, signInUser } from "../../utils/supabase";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await signInUser(dataForm);
      if (error) throw error;

      const userId = data?.user?.id;
      if (!userId) throw new Error("Session tidak valid.");

      const role = await getUserRoleFromProfiles(userId);
      console.log("ROLE =", role);

      if (role === "admin") {
        console.log("Admin terdeteksi");
        try {
          if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.setItem(
              "travelgo_auth",
              JSON.stringify({ isLoggedIn: true, role: "admin" })
            );
          }
        } catch (e) {
          console.warn("Gagal menyimpan auth ke localStorage", e);
        }
        navigate("/admin/dashboard");
        return;
      }
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          window.localStorage.setItem(
            "travelgo_auth",
            JSON.stringify({ isLoggedIn: true, role: role || null })
          );
        }
      } catch (e) {
        console.warn("Gagal menyimpan auth ke localStorage", e);
      }

      console.log("User biasa terdeteksi atau role tidak terdaftar");
      navigate("/");
    } catch (err) {
      setError(err?.message || "Login gagal");
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

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <AdminAuthPopupLayout>
      <div>
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Welcome Back 👋
        </h2>

        {errorInfo}
        {loadingInfo}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Mode demo: isi dummy credentials tidak akan bekerja tanpa akun Supabase.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-full mt-3 bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Close
          </button>

          <div className="flex justify-between mt-4">
            <Link to="/forgot" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <Link to="/register" className="text-sm text-blue-600 hover:underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </AdminAuthPopupLayout>
  );
}


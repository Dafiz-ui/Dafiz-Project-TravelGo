import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { registerMember } from "../utils/memberAuth";

export default function MemberRegister({ noLayout = false }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Masukkan nama member terlebih dahulu.");
      return;
    }

    if (password && password !== confirmPassword) {
      setError("Password dan konfirmasi harus sama.");
      return;
    }

    registerMember({ name, email, role });
    navigate(role === "vip" ? "/member/vip" : "/member/dashboard");
  };

  const page = (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Daftar Member TravelGo</h2>
      <p className="text-slate-500 text-center mb-6">
        Buat akun member lokal tanpa Supabase. Isi data bebas dan langsung bisa masuk.
      </p>

      {error ? (
        <div className="rounded-2xl bg-red-100 text-red-700 p-4 mb-5">{error}</div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Nama
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nama lengkap"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email (opsional)
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nama@travelgo.com"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
            Password (opsional)
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="********"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
            Konfirmasi Password (opsional)
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="********"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
            Akses Member
          </label>
          <select
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="member">Member Biasa</option>
            <option value="vip">Member VIP</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700 transition"
        >
          Buat Akun dan Masuk
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-500">
        <p>
          Sudah punya akun? <Link to="/member/login" className="text-emerald-600 hover:underline">Login Member</Link>
        </p>
        <p className="mt-3 text-xs text-slate-400">Data disimpan lokal di browser, hanya untuk demo TravelGo.</p>
      </div>
    </div>
  );

  return noLayout ? page : <AuthLayout>{page}</AuthLayout>;
}

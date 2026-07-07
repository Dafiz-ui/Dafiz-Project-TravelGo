import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MemberAuthPopupLayout from "../layouts/MemberAuthPopupLayout";
import { signInMember } from "../utils/memberAuth";

export default function MemberLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Masukkan nama member terlebih dahulu.");
      return;
    }
    if (!email.trim()) {
      setError("Masukkan email member terlebih dahulu.");
      return;
    }
    signInMember({ name, email, role });
    navigate(role === "vip" ? "/member/vip" : "/member/dashboard");
  };

  const page = (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Member Login TravelGo</h2>
      <p className="text-slate-500 text-center mb-6">
        Demo login tanpa Supabase. Isi data seperti login biasa lalu tekan tombol.
      </p>

      {error ? (
        <div className="mb-5 rounded-2xl bg-red-100 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
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
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nama@travelgo.com"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
            Password
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
          Login Sekarang
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-500">
        <p>
          Belum punya akun? <Link to="/member/register" className="text-emerald-600 hover:underline">Buat akun member</Link>
        </p>
        <p className="mt-3 text-xs text-slate-400">Semua data hanya untuk demo TravelGo, tanpa validasi server.</p>
      </div>
    </div>
  );

  return <MemberAuthPopupLayout>{page}</MemberAuthPopupLayout>;
}

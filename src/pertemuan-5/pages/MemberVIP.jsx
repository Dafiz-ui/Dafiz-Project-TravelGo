import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getMemberAuth, signOutMember } from "../utils/memberAuth";
import { FaUserCircle, FaTicketAlt, FaRegCalendarCheck, FaMoneyBillWave, FaComments, FaHeadset } from "react-icons/fa";

export default function MemberVIP() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "VIP Member", role: "vip" });

  useEffect(() => {
    const auth = getMemberAuth();
    setUser({
      name: auth.name || auth.email || "VIP Member",
      role: auth.role || "vip",
    });
  }, []);

  const handleLogout = () => {
    signOutMember();
    navigate("/member/login");
  };

  const stats = {
    status: "Active",
    level: "VIP",
    totalBooking: 12,
    totalTransactions: "Rp 38.200.000",
  };

  const promos = [
    { id: 1, title: "VIP 20% off - Paket Bali", desc: "Diskon eksklusif untuk member VIP" },
    { id: 2, title: "VIP Early Access", desc: "Akses lebih awal untuk paket populer" },
    { id: 3, title: "Lounge Access", desc: "Akses lounge eksklusif saat keberangkatan" },
  ];

  const samplePackages = [
    { id: 1, title: "Bali Sunrise", price: "Rp 2.8M" },
    { id: 2, title: "Lombok Romantis", price: "Rp 3.2M" },
    { id: 3, title: "Raja Ampat Adventure", price: "Rp 7.5M" },
  ];

  const bookingHistory = [
    { id: "TRX-101", paket: "Bali Sunrise", date: "2026-06-15", status: "Completed" },
    { id: "TRX-102", paket: "Raja Ampat Adventure", date: "2026-07-01", status: "Upcoming" },
  ];

  return (
    <div className="space-y-10">
      {/* Header / Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-purple-600 text-white p-8 shadow-2xl flex items-center justify-between">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-slate-300 mb-2">Member VIP TravelGo</p>
          <h1 className="text-3xl md:text-4xl font-bold">Halo, {user.name}</h1>
          <p className="text-slate-200 mt-2">Terima kasih atas dukungan Anda sebagai member VIP TravelGo.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-slate-200">Level</p>
            <p className="font-bold text-xl">{stats.level}</p>
          </div>
          <button onClick={handleLogout} className="rounded-2xl bg-white/10 px-4 py-2 border border-white/20">Logout</button>
        </div>
      </section>

      {/* Summary Card */}
      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="text-3xl text-emerald-600"><FaUserCircle /></div>
          <div>
            <p className="text-sm text-slate-500">Status Member</p>
            <p className="font-semibold text-slate-900">{stats.status}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="text-3xl text-purple-600"><FaRegCalendarCheck /></div>
          <div>
            <p className="text-sm text-slate-500">Level Membership</p>
            <p className="font-semibold text-slate-900">{stats.level}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="text-3xl text-teal-600"><FaTicketAlt /></div>
          <div>
            <p className="text-sm text-slate-500">Total Booking</p>
            <p className="font-semibold text-slate-900">{stats.totalBooking}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="text-3xl text-amber-500"><FaMoneyBillWave /></div>
          <div>
            <p className="text-sm text-slate-500">Total Transaksi</p>
            <p className="font-semibold text-slate-900">{stats.totalTransactions}</p>
          </div>
        </div>
      </section>

      {/* Profil & Promo */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow border border-slate-200">
          <h3 className="text-lg font-semibold mb-4">Profil Member</h3>
          <p className="text-sm text-slate-500">Nama</p>
          <p className="font-medium text-slate-900 mb-3">{user.name}</p>
          <p className="text-sm text-slate-500">Role</p>
          <p className="font-medium text-slate-900 mb-3">VIP</p>
          <Link to="/member/register" className="text-purple-600 hover:underline">Edit Profil</Link>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow border border-slate-200 md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Promo VIP</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {promos.map((p) => (
              <div key={p.id} className="rounded-xl border border-slate-100 p-4">
                <p className="font-semibold text-slate-900">{p.title}</p>
                <p className="text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daftar Paket Travel */}
      <section className="rounded-2xl bg-white p-6 shadow border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Daftar Paket Travel (Rekomendasi VIP)</h3>
          <Link to="/paket-wisata" className="text-purple-600 hover:underline">Lihat Semua</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {samplePackages.map((pkg) => (
            <div key={pkg.id} className="rounded-2xl p-4 border border-slate-100">
              <p className="font-semibold text-slate-900">{pkg.title}</p>
              <p className="text-sm text-slate-500">{pkg.price}</p>
              <Link to={`/paket/${pkg.id}`} className="text-purple-600 text-sm mt-2 inline-block">Detail</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Riwayat Booking */}
      <section className="rounded-2xl bg-white p-6 shadow border border-slate-200">
        <h3 className="text-lg font-semibold mb-4">Riwayat Booking</h3>
        <div className="space-y-3">
          {bookingHistory.map((b) => (
            <div key={b.id} className="flex items-center justify-between rounded-xl border border-slate-100 p-4">
              <div>
                <p className="font-medium">{b.paket}</p>
                <p className="text-sm text-slate-500">{b.date} • {b.id}</p>
              </div>
              <div>
                <p className={`px-3 py-1 rounded-full text-sm ${b.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{b.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback / Komplain & Customer Service */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow border border-slate-200">
          <h3 className="text-lg font-semibold mb-4">Feedback / Komplain</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <textarea placeholder="Tulis keluhan atau masukan Anda..." className="w-full rounded-xl border border-slate-200 p-3" rows={4}></textarea>
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">Kami akan menindaklanjuti secepatnya.</div>
              <button className="rounded-2xl bg-purple-600 px-4 py-2 text-white">Kirim</button>
            </div>
          </form>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow border border-slate-200">
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="text-2xl text-purple-600"><FaHeadset /></div>
              <div>
                <p className="font-semibold">VIP Support</p>
                <p className="text-sm text-slate-500">Prioritas respon untuk member VIP</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl text-purple-600"><FaComments /></div>
              <div>
                <p className="font-semibold">Email Support</p>
                <p className="text-sm text-slate-500">vip-support@travelgo.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

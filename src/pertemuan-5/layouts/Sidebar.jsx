import { NavLink } from "react-router-dom";
import { FiGrid, FiMap, FiBookOpen, FiCreditCard, FiUsers, FiLayers, FiStar, FiBarChart2, FiMessageCircle } from "react-icons/fi";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
      isActive
        ? "bg-slate-900 text-white shadow-sm"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <aside className="w-72 min-h-screen bg-white border-r border-slate-200 shadow-sm">
      <div className="h-full p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-slate-900">TravelGo</div>
        </div>
        <div className="mt-1 text-sm text-slate-500">Admin Travel Dashboard</div>

        <div className="mt-8">
          <ul className="space-y-2">
            <li>
              <NavLink to="/admin/dashboard" className={menuClass}>
                <FiGrid className="text-lg shrink-0" />
                <span className="font-medium">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <div className="mt-4 mb-2 px-3 text-xs text-slate-400 uppercase">Manajemen</div>
            </li>
            <li>
              <NavLink to="/admin/manajemen-data" className={menuClass}>
                <FiLayers className="text-lg shrink-0" />
                <span className="font-medium">Manajemen Data</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/diskon-tier" className={menuClass}>
                <FiStar className="text-lg shrink-0" />
                <span className="font-medium">Diskon Tier Member</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/kelola-promo-crm" className={menuClass}>
                <FiMessageCircle className="text-lg shrink-0" />
                <span className="font-medium">Kelola Promo CRM</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/kelola-paket" className={menuClass}>
                <FiMap className="text-lg shrink-0" />
                <span className="font-medium">Kelola Paket Wisata</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/kelola-booking" className={menuClass}>
                <FiBookOpen className="text-lg shrink-0" />
                <span className="font-medium">Kelola Booking</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/verifikasi-pembayaran" className={menuClass}>
                <FiCreditCard className="text-lg shrink-0" />
                <span className="font-medium">Verifikasi Pembayaran</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/kelola-user" className={menuClass}>
                <FiUsers className="text-lg shrink-0" />
                <span className="font-medium">Kelola User</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/user-crud-enhanced" className={menuClass}>
                <FiLayers className="text-lg shrink-0" />
                <span className="font-medium">Hooks User CRUD</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/paket-crud-enhanced" className={menuClass}>
                <FiMap className="text-lg shrink-0" />
                <span className="font-medium">Hooks Paket CRUD</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Sistem</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">All modules active</div>
          </div>
        </div>
      </div>
    </aside>
  );
}



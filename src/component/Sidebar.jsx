import { NavLink } from "react-router-dom";
import { FaHome, FaUsers, FaBox, FaSignOutAlt, FaLayerGroup } from "react-icons/fa";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center space-x-3 p-3 rounded-md transition ${
      isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"
    }`;

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink to="/dashboard" className={menuClass}>
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={menuClass}>
              <FaUsers />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={menuClass}>
              <FaBox />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/fitur-xyz" className={menuClass}>
              <FaLayerGroup />
              <span>Fitur XYZ</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="flex items-center space-x-3 p-3 hover:bg-red-500 rounded-md cursor-pointer mt-4">
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </div>
  );
}

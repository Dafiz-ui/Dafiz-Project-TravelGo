import { NavLink, Outlet } from "react-router-dom";


export default function UsersLayout() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Users Section</h1>
      <div className="mt-4 space-x-4">
        <NavLink to="profile" className="text-blue-500">Profile</NavLink>
        <NavLink to="settings" className="text-blue-500">Settings</NavLink>
      </div>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

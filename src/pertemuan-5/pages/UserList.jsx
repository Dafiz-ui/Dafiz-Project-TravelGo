import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listProfiles } from "../utils/supabase";

export default function UserList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const rows = await listProfiles();
        if (mounted) setUsers(rows);
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || "Gagal memuat data user");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-slate-500">Kelola User</p>
            <h1 className="text-3xl font-semibold text-slate-900">Daftar User Sistem</h1>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
            Total user: {users.length}
          </div>
        </div>
      </div>

      {error ? (
        <div className="rounded-3xl bg-red-50 p-6 shadow-sm border border-red-200 text-red-700">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
          Memuat data...
        </div>
      ) : (
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-slate-700">
            <thead className="bg-slate-100 text-left text-slate-600 uppercase text-xs tracking-[0.1em]">
              <tr>
                {['ID', 'Email', 'Role', 'Nama'].map((label) => (
                  <th key={label} className="px-4 py-3">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50">
                  <td className="px-4 py-4 font-medium">
                    <Link
                      to={`/admin/kelola-user/${user.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {user.id}
                    </Link>
                  </td>
                  <td className="px-4 py-4">{user.email}</td>
                  <td className="px-4 py-4">{user.role}</td>
                  <td className="px-4 py-4">
                    <Link
                      to={`/admin/kelola-user/${user.id}`}
                      className="text-slate-900 hover:text-blue-700"
                    >
                      {user.name || "-"}
                    </Link>
                  </td>
                </tr>
              ))}
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-slate-500">
                    Belum ada data user.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


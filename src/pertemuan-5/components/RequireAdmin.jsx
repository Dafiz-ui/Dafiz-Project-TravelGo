import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminAuthPopupLayout from "../layouts/AdminAuthPopupLayout";
import Login from "../pages/auth/Login";
import { getAuth, requireAdmin } from "../utils/auth";

export default function RequireAdmin() {
  const [checking, setChecking] = useState(true);
  const [auth, setAuth] = useState({ isLoggedIn: false, role: null });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const next = await getAuth();
        if (mounted) {
          setAuth(next);
        }
      } finally {
        if (mounted) {
          setChecking(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (checking) {
    return (
      <AdminAuthPopupLayout>
        <div className="text-slate-600">Memeriksa akses admin...</div>
      </AdminAuthPopupLayout>
    );
  }

  if (!requireAdmin(auth)) {
    return (
      <AdminAuthPopupLayout>
        <Login />
      </AdminAuthPopupLayout>
    );
  }

  return <Outlet />;
}


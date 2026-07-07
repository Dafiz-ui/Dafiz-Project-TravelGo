import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MemberLogin from "../pages/MemberLogin";
import { getMemberAuth, requireMember } from "../utils/memberAuth";

export default function RequireMember() {
  const [checking, setChecking] = useState(true);
  const [auth, setAuth] = useState({ isLoggedIn: false, role: null });

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const nextAuth = getMemberAuth();
      setAuth(nextAuth);
      setChecking(false);
    }

    return () => {
      mounted = false;
    };
  }, []);

  if (checking) {
    return (
      <AuthLayout>
        <div className="text-slate-600">Memeriksa akses member...</div>
      </AuthLayout>
    );
  }

  if (!requireMember(auth)) {
    return (
      <AuthLayout>
        <MemberLogin noLayout />
      </AuthLayout>
    );
  }

  return <Outlet />;
}

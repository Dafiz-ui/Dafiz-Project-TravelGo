import { getSession, getUserRoleFromProfiles, signOutUser } from "./supabase";

const AUTH_KEY = "travelgo_auth";

function safeParse(raw) {
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function getAuth() {
  const raw = typeof window !== "undefined" ? localStorage.getItem(AUTH_KEY) : null;
  const cached = safeParse(raw);
  if (cached?.isLoggedIn) return cached;

  // Ambil dari Supabase (session) untuk menghindari dummy
  try {
    const { data } = await getSession();
    const session = data?.session;
    if (!session?.user) return { isLoggedIn: false, role: null };

    const role = await getUserRoleFromProfiles(session.user.id);
    const auth = { isLoggedIn: true, role: role || null };

    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
    }

    return auth;
  } catch {
    return { isLoggedIn: false, role: null };
  }
}

export function requireAdmin(auth) {
  return Boolean(auth?.isLoggedIn && auth?.role === "admin");
}

export async function logout() {
  try {
    await signOutUser();
  } finally {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.removeItem(AUTH_KEY);
    }
  }
}


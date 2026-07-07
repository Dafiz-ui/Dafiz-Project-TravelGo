const MEMBER_AUTH_KEY = "travelgo_member_auth";

function getStorageData() {
  if (typeof window === "undefined" || !window.localStorage) return null;

  try {
    return JSON.parse(window.localStorage.getItem(MEMBER_AUTH_KEY));
  } catch {
    return null;
  }
}

function normalizeName(name, email) {
  if (name?.trim()) return name.trim();
  if (!email?.includes("@")) return "Traveler";
  const prefix = email.split("@")[0];
  return prefix
    .split(/[._-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getMemberAuth() {
  const stored = getStorageData();
  return stored && stored.isLoggedIn
    ? stored
    : { isLoggedIn: false, role: null, email: null, name: null };
}

export function signInMember({ email = "", role = "member", name = "" } = {}) {
  const finalName = normalizeName(name, email);
  const auth = { isLoggedIn: true, role, email, name: finalName };

  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(MEMBER_AUTH_KEY, JSON.stringify(auth));
  }

  return auth;
}

export function registerMember({ email = "", role = "member", name = "" } = {}) {
  return signInMember({ email, role, name });
}

export function signOutMember() {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.removeItem(MEMBER_AUTH_KEY);
  }
  return true;
}

export function requireMember(auth) {
  return Boolean(auth?.isLoggedIn);
}

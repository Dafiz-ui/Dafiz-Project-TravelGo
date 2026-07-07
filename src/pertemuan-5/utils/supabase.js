import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validasi ENV
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "VITE_SUPABASE_URL atau VITE_SUPABASE_ANON_KEY belum ditemukan di file .env"
  );
}

// Inisialisasi Supabase
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

// ================= AUTH =================

export async function signUpUser({ email, password }) {
  const response = await supabase.auth.signUp({
    email,
    password,
  });

  return response;
}

export async function signInUser({ email, password }) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw error;

  return data.user;
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw error;

  return data.session;
}

export function onAuthStateChange(callback) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;

  return true;
}

// ================= PROFILES =================

export async function getUserRoleFromProfiles(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  console.log("USER ID =", userId);
  console.log("PROFILE DATA =", data);
  console.log("PROFILE ERROR =", error);

  if (error) throw error;

  return data?.role?.trim()?.toLowerCase() || null;
}

export async function upsertUserProfile({
  userId,
  email,
  role = "user",
}) {
  const { data, error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: userId,
        email,
        role,
      },
      {
        onConflict: "id",
      }
    )
    .select();

  if (error) throw error;

  return data;
}

export async function listProfiles() {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, name, email, role, created_at")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data || [];
}

export async function getProfileById(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, name, email, role")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
}

export async function updateProfileById(userId, updates) {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteProfileById(userId) {
  const { error } = await supabase
    .from("profiles")
    .delete()
    .eq("id", userId);

  if (error) throw error;

  return true;
}
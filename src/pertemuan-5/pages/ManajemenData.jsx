import React from "react";
import { Link } from "react-router-dom";

export default function ManajemenData() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
        <h1 className="text-2xl font-semibold">Manajemen Data</h1>
        <p className="text-sm text-slate-500 mt-2">Kelola dataset aplikasi: paket, kategori, destinasi, dan referensi lain.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-4 border border-slate-100">
          <h3 className="font-semibold">Kelola Paket</h3>
          <p className="text-sm text-slate-500">Tambah, edit, atau hapus paket wisata.</p>
          <Link to="/admin/kelola-paket" className="text-emerald-600 hover:underline mt-3 inline-block">Buka Kelola Paket</Link>
        </div>

        <div className="rounded-2xl bg-white p-4 border border-slate-100">
          <h3 className="font-semibold">Kelola Kategori & Destinasi</h3>
          <p className="text-sm text-slate-500">Perbarui kategori, rute, dan destinasi unggulan.</p>
        </div>
      </div>
    </div>
  );
}

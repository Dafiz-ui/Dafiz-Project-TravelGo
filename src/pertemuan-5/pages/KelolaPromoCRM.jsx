import React from "react";

export default function KelolaPromoCRM() {
  const promos = [
    { id: 1, name: 'Promo Musim Libur', active: true },
    { id: 2, name: 'Diskon Early Bird', active: false },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
        <h1 className="text-2xl font-semibold">Kelola Promo CRM</h1>
        <p className="text-sm text-slate-500 mt-2">Buat dan kelola kampanye promo yang terintegrasi dengan CRM.</p>
      </div>

      <div className="grid gap-4">
        {promos.map(p => (
          <div key={p.id} className="rounded-2xl bg-white p-4 border border-slate-100 flex items-center justify-between">
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-xs text-slate-500">Status: {p.active ? 'Aktif' : 'Nonaktif'}</div>
            </div>
            <div className="text-sm text-emerald-600">Edit</div>
          </div>
        ))}
      </div>
    </div>
  );
}

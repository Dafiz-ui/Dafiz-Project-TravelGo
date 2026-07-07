import React from "react";

export default function DiskonTier() {
  const tiers = [
    { id: 'basic', name: 'Member Biasa', discount: '10%' },
    { id: 'vip', name: 'VIP', discount: '25%' },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
        <h1 className="text-2xl font-semibold">Diskon Tier Member</h1>
        <p className="text-sm text-slate-500 mt-2">Atur persentase diskon per tier member.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map(t => (
          <div key={t.id} className="rounded-2xl bg-white p-4 border border-slate-100 text-center">
            <div className="text-sm text-slate-500">{t.name}</div>
            <div className="mt-2 text-2xl font-bold text-emerald-600">{t.discount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

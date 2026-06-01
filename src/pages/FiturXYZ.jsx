import { useMemo, useState } from "react";
import Alert from "../components/ui/alert";
import Input from "../components/ui/input";
import Tabs from "../components/ui/tabs";

const travelMetrics = [
  { label: "Booking Hari Ini", value: "booking" },
  { label: "Pendapatan", value: "revenue" },
  { label: "Paket Baru", value: "newPackages" },
];

export default function FiturXYZ() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("booking");

  const tabs = useMemo(
    () => [
      {
        value: "booking",
        label: "Booking",
        content: (
          <div className="space-y-3 text-sm text-slate-700">
            <p className="font-medium text-slate-900">Ringkasan booking TravelGo</p>
            <p>3 paket wisata terbaru sedang diproses untuk pelanggan.</p>
            <ul className="list-disc pl-5 text-slate-600">
              <li>Jeda validasi tiket lebih cepat 20%</li>
              <li>Notifikasi booking berhasil dikirim otomatis</li>
            </ul>
          </div>
        ),
      },
      {
        value: "revenue",
        label: "Pendapatan",
        content: (
          <div className="space-y-3 text-sm text-slate-700">
            <p className="font-medium text-slate-900">Status pendapatan TravelGo</p>
            <p>Performa pendapatan minggu ini naik 14% dibandingkan minggu lalu.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {travelMetrics.map((metric) => (
                <div key={metric.value} className="rounded-3xl bg-white p-4 shadow-sm border border-slate-200">
                  <p className="text-sm text-slate-500">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{metric.value === "revenue" ? "Rp 28.560.000" : metric.value === "booking" ? "24" : "5"}</p>
                </div>
              ))}
            </div>
          </div>
        ),
      },
      {
        value: "feedback",
        label: "Feedback",
        content: (
          <div className="space-y-3 text-sm text-slate-700">
            <p className="font-medium text-slate-900">Umpan balik pengguna</p>
            <p>Tim ops TravelGo bisa menindaklanjuti permintaan fitur baru pada paket wisata.</p>
            <ul className="space-y-2 text-slate-600">
              <li>✅ Filter paket berdasarkan rating</li>
              <li>✅ Integrasi sistem pembayaran lebih cepat</li>
              <li>✅ Tampilan booking lebih responsif</li>
            </ul>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="p-4">
      <div className="mb-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Fitur XYZ TravelGo</h1>
        <p className="mt-2 text-slate-600">Demo penerapan komponen UI baru untuk dashboard TravelGo.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <Alert
            title="Perhatian: fitur baru aktif"
            description="Fitur XYZ sudah ditambahkan pada cabang coba-fitur-xyz. Silakan tinjau dan merge ke branch master setelah validasi." 
            variant="success"
          />

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Cari paket TravelGo</h2>
                <p className="text-sm text-slate-500">Gunakan input di bawah untuk mencari nama paket atau tujuan.</p>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                label="Cari paket atau lokasi"
                placeholder="Contoh: Bali, Yogyakarta, Labuan Bajo"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                Hasil pencarian akan tampil di panel setelah user mengetik pencarian.
              </div>
            </div>
          </div>

          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <aside className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Ringkasan fitur</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• UI component library custom tanpa dependency besar.</li>
              <li>• Komponen Alert, Input, dan Tabs terintegrasi.</li>
              <li>• Disesuaikan dengan desain TravelGo dan dashboard CRM.</li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Status cabang</p>
            <p className="mt-4 text-xl font-semibold">coba-fitur-xyz</p>
            <p className="mt-2 text-sm text-slate-400">Telah diterapkan di fitur baru dan siap merge setelah review.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

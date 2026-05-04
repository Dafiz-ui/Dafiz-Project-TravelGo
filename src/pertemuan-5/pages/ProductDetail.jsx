import { useParams } from "react-router-dom";

const travelPackages = [
  { id: 1, title: "Paket Wisata Bali Sunrise", category: "Alam", duration: "4 hari", price: 2800000, description: "Nikmati sunrise terbaik, tour pantai, dan kuliner Bali dalam paket lengkap." },
  { id: 2, title: "Romantic Lombok", category: "Romantis", duration: "3 hari", price: 3200000, description: "Pengalaman romantis dengan villa private, sunset dinner, dan tur pantai." },
  { id: 3, title: "Adventure Raja Ampat", category: "Adventure", duration: "5 hari", price: 7500000, description: "Snorkeling di perairan terindah, island hopping, dan hidden beach." },
  { id: 4, title: "City Tour Jakarta", category: "Kota", duration: "2 hari", price: 950000, description: "Wisata kota Jakarta dengan destinasi landmark dan kuliner lokal terbaik." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = travelPackages.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200 text-slate-700">
        Paket tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto space-y-6">
      <div className="rounded-3xl bg-slate-50 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">{product.category}</p>
        <h1 className="text-3xl font-semibold text-slate-900 mt-4">{product.title}</h1>
        <p className="mt-3 text-slate-600">{product.description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-6">
          <p className="text-slate-500">Durasi</p>
          <p className="mt-2 text-xl font-semibold text-slate-900">{product.duration}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6">
          <p className="text-slate-500">Harga</p>
          <p className="mt-2 text-xl font-semibold text-emerald-600">Rp {product.price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

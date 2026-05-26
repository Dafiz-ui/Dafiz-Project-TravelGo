import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /*Inisialisasi Handle perubahan nilai input form*/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _selectedTag = dataForm.selectedTag.toLowerCase();

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-emerald-50 to-lime-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-emerald-800 mb-2">
          🌿 Framework Garden
        </h1>
        <p className="text-center text-emerald-600 mb-8 text-sm">
          Jelajahi framework seperti merawat taman pengetahuan 🌱
        </p>

        {/* Search & Filter */}
        <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-md mb-6 space-y-4 border border-green-100">
          <input
            type="text"
            name="searchTerm"
            placeholder="🔍 Cari framework..."
            value={dataForm.searchTerm}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-green-50"
          />

          <select
            name="selectedTag"
            value={dataForm.selectedTag}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-green-50"
          >
            <option value="">🌱 Semua Kategori</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* List */}
        {filteredFrameworks.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFrameworks.map((item) => (
              <article
                key={item.id}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-green-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                {/* Title */}
                <h2 className="text-xl font-semibold text-emerald-800">
                  {item.name}
                </h2>

                {/* Description */}
                <p className="text-emerald-700 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Details */}
                <div className="mt-4 text-sm text-emerald-700 space-y-1">
                  <p>
                    🌳 <strong>Developer:</strong> {item.details.developer}
                  </p>
                  <p>
                    🌼 <strong>Release:</strong> {item.details.releaseYear}
                  </p>
                  <p>
                    🌐{" "}
                    <a
                      href={item.details.officialWebsite}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      Kunjungi Website
                    </a>
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full"
                    >
                      🌱 {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center text-emerald-600 mt-10">
            🍂 Tidak ditemukan, coba kata kunci lain...
          </div>
        )}
      </div>
    </div>
  );
}
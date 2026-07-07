import { useState, useEffect, useRef } from "react";

/**
 * ENHANCED PaketCRUD Component - Demonstrasi useState, useEffect, dan useRef
 * ============================================================================
 * 
 * HOOKS YANG DIGUNAKAN:
 * 1. useState - untuk manage form inputs dan paket list
 * 2. useEffect - untuk fetch data dari API saat component mount
 * 3. useRef - untuk form validation highlighting dan input focus
 * 
 * TEMA: TravelGo - Paket Wisata Management
 */

const ProductCRUDEnhanced = () => {
    // =============== useState HOOKS ===============
    const [pakets, setPakets] = useState([]); // List paket wisata
    const [nama, setNama] = useState(""); // Input paket name
    const [harga, setHarga] = useState(""); // Input harga paket
    const [destinasi, setDestinasi] = useState(""); // Input destinasi
    const [durasi, setDurasi] = useState(""); // Input durasi (hari)
    const [image, setImage] = useState(""); // Input image URL
    const [editIndex, setEditIndex] = useState(null); // Tracking yang di-edit
    const [loadingPakets, setLoadingPakets] = useState(false); // Loading state
    const [errors, setErrors] = useState({}); // Form validation errors

    // =============== useRef HOOKS ===============
    const namaInputRef = useRef(null);
    const hargaInputRef = useRef(null);
    const formSectionRef = useRef(null); // Scroll ke form saat edit

    // =============== useEffect HOOKS ===============
    useEffect(() => {
        // Mock data paket wisata
        const mockPakets = [
            {
                id: 1,
                nama: "Bali Sunrise Experience",
                harga: 2800000,
                destinasi: "Bali",
                durasi: "4 Hari",
                image:
                    "https://images.unsplash.com/photo-1537225228614-b2fa5f5b39de?w=300&h=300&fit=crop",
            },
            {
                id: 2,
                nama: "Lombok Romantis",
                harga: 3200000,
                destinasi: "Lombok",
                durasi: "3 Hari",
                image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            },
            {
                id: 3,
                nama: "Raja Ampat Adventure",
                harga: 7500000,
                destinasi: "Raja Ampat",
                durasi: "5 Hari",
                image:
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
            },
        ];

        setPakets(mockPakets);
        setLoadingPakets(false);
    }, []);

    // Reset errors ketika input field berubah
    useEffect(() => {
        setErrors({});
    }, [nama, harga, destinasi, durasi, image, editIndex]);

    // =============== VALIDATION FUNCTION ===============
    const validateForm = () => {
        const newErrors = {};

        if (!nama.trim()) newErrors.nama = "Nama paket tidak boleh kosong";

        // harga bisa berupa string dari input number
        const hargaNum = Number(harga);
        if (!harga || Number.isNaN(hargaNum) || hargaNum <= 0) {
            newErrors.harga = "Harga harus berupa angka positif";
        }

        if (!destinasi.trim()) newErrors.destinasi = "Destinasi tidak boleh kosong";
        if (!durasi.trim()) newErrors.durasi = "Durasi tidak boleh kosong";
        if (!image.trim()) newErrors.image = "URL gambar tidak boleh kosong";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setNama("");
        setHarga("");
        setDestinasi("");
        setDurasi("");
        setImage("");
        setErrors({});
    };

    // =============== HANDLER FUNCTIONS ===============
    const handleAdd = () => {
        if (!validateForm()) {
            // Focus field pertama yang error
            if (errors.nama && namaInputRef.current) namaInputRef.current.focus();
            else if (errors.harga && hargaInputRef.current) hargaInputRef.current.focus();
            return;
        }

        const hargaNum = Number(harga);

        if (editIndex !== null) {
            const updatedPakets = [...pakets];
            updatedPakets[editIndex] = {
                ...updatedPakets[editIndex],
                nama,
                harga: hargaNum,
                destinasi,
                durasi,
                image,
            };
            setPakets(updatedPakets);
            setEditIndex(null);
        } else {
            const newPaket = {
                id: Date.now(),
                nama,
                harga: hargaNum,
                destinasi,
                durasi,
                image,
            };
            setPakets([...pakets, newPaket]);
        }

        resetForm();
    };

    const handleEdit = (index) => {
        const paket = pakets[index];
        setNama(paket.nama);
        setHarga(String(paket.harga));
        setDestinasi(paket.destinasi);
        setDurasi(paket.durasi);
        setImage(paket.image);
        setEditIndex(index);

        setTimeout(() => {
            if (namaInputRef.current) {
                namaInputRef.current.focus();
                namaInputRef.current.select();
            }
            if (formSectionRef.current) {
                formSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 0);
    };

    const handleDelete = (index) => {
        if (confirm("Apakah Anda yakin ingin menghapus paket wisata ini?")) {
            setPakets(pakets.filter((_, i) => i !== index));

            // jika yang dihapus sedang di-edit, reset form
            if (editIndex === index) {
                resetForm();
                setEditIndex(null);
            }
        }
    };

    const handleCancel = () => {
        resetForm();
        setEditIndex(null);
    };

    const filteredPakets = pakets;

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6 text-emerald-600">
                ✨ Manajemen Paket Wisata - Enhanced dengan React Hooks
            </h1>

            {/* FORM SECTION */}
            <div
                ref={formSectionRef}
                className="bg-white p-6 mb-6 border-2 border-emerald-300 rounded-lg shadow-lg"
            >
                <h2 className="text-xl font-bold mb-4 text-emerald-600">
                    {editIndex !== null ? "✏️ Edit Paket Wisata" : "➕ Tambah Paket Wisata Baru"}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    💡 Form ini menggunakan useState untuk manage inputs, useEffect untuk validation,
                    dan useRef untuk auto-focus
                </p>

                {/* NAMA PAKET INPUT */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                        Nama Paket * {errors.nama && <span className="text-red-500">- {errors.nama}</span>}
                    </label>
                    <input
                        ref={namaInputRef}
                        type="text"
                        placeholder="Nama Paket Wisata"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 transition ${
                            errors.nama
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                        }`}
                    />
                </div>

                {/* HARGA INPUT */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                        Harga * {errors.harga && <span className="text-red-500">- {errors.harga}</span>}
                    </label>
                    <input
                        ref={hargaInputRef}
                        type="number"
                        step="100000"
                        placeholder="Harga Paket (Rp)"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 transition ${
                            errors.harga
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                        }`}
                    />
                </div>

                {/* DESTINASI INPUT */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                        Destinasi *
                        {errors.destinasi && (
                            <span className="text-red-500">- {errors.destinasi}</span>
                        )}
                    </label>
                    <input
                        type="text"
                        placeholder="Destinasi Wisata"
                        value={destinasi}
                        onChange={(e) => setDestinasi(e.target.value)}
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 transition ${
                            errors.destinasi
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                        }`}
                    />
                </div>

                {/* DURASI INPUT */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">
                        Durasi * {errors.durasi && <span className="text-red-500">- {errors.durasi}</span>}
                    </label>
                    <input
                        type="text"
                        placeholder="Durasi (contoh: 3 Hari)"
                        value={durasi}
                        onChange={(e) => setDurasi(e.target.value)}
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 transition ${
                            errors.durasi
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                        }`}
                    />
                </div>

                {/* IMAGE INPUT */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        URL Gambar * {errors.image && <span className="text-red-500">- {errors.image}</span>}
                    </label>
                    <input
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className={`w-full p-2 border rounded focus:outline-none focus:ring-2 transition ${
                            errors.image
                                ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:border-emerald-500 focus:ring-emerald-200"
                        }`}
                    />

                    {image && (
                        <div className="mt-2">
                            <p className="text-xs text-gray-600 mb-2">Preview:</p>
                            <img
                                src={image}
                                alt="Preview"
                                className="h-24 w-24 object-cover rounded border"
                                onError={(e) => {
                                    e.currentTarget.src =
                                        "https://via.placeholder.com/100?text=Invalid+URL";
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2">
                    <button
                        onClick={handleAdd}
                        className={`flex-1 text-white py-2 rounded font-semibold transition ${
                            editIndex !== null
                                ? "bg-orange-500 hover:bg-orange-600"
                                : "bg-emerald-500 hover:bg-emerald-600"
                        }`}
                    >
                        {editIndex !== null ? "📝 Update Paket" : "➕ Tambah Paket"}
                    </button>
                    {editIndex !== null && (
                        <button
                            onClick={handleCancel}
                            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded font-semibold transition"
                        >
                            ❌ Batal
                        </button>
                    )}
                </div>
            </div>

            {/* LIST SECTION */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-emerald-600">
                    🏖️ Daftar Paket Wisata ({filteredPakets.length})
                </h2>

                {loadingPakets ? (
                    <div className="text-center py-8 text-gray-500">⏳ Memuat data paket wisata...</div>
                ) : filteredPakets.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">📭 Belum ada data paket wisata</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredPakets.map((paket, index) => (
                            <div
                                key={paket.id ?? index}
                                className={`p-4 border-2 rounded-lg transition ${
                                    editIndex === index
                                        ? "border-orange-400 bg-orange-50 shadow-md"
                                        : "border-gray-200 bg-white hover:border-emerald-300"
                                }`}
                            >
                                <img
                                    src={paket.image}
                                    alt={paket.nama}
                                    className="w-full h-40 object-cover rounded mb-3"
                                    onError={(e) => {
                                        e.currentTarget.src =
                                            "https://via.placeholder.com/300x200?text=Paket+Wisata";
                                    }}
                                />
                                <p className="font-bold text-sm text-emerald-600 truncate">{paket.nama}</p>
                                <p className="text-xs text-gray-500 mb-1">📍 {paket.destinasi}</p>
                                <p className="text-xs text-gray-500 mb-2">⏱️ {paket.durasi}</p>
                                <p className="text-lg font-bold text-emerald-600 mb-3">
                                    Rp {Number(paket.harga).toLocaleString("id-ID")}
                                </p>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded text-sm font-semibold transition"
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm font-semibold transition"
                                    >
                                        🗑️ Hapus
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* INFO BOX */}
            <div className="mt-6 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                <h3 className="font-bold text-emerald-600 mb-2">💡 Tentang React Hooks di Komponen Ini:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ <strong>useState</strong>: Menyimpan form inputs, paket list, dan errors</li>
                    <li>✅ <strong>useEffect (1)</strong>: Init paket wisata data saat komponen pertama kali dimuat</li>
                    <li>✅ <strong>useEffect (2)</strong>: Reset validation errors setiap kali user mengetik di input</li>
                    <li>✅ <strong>useRef</strong>: Auto-focus ke input field saat edit + smooth scroll ke form</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductCRUDEnhanced;


import { useState, useEffect, useRef } from "react";

/**
 * ENHANCED UserCRUD Component - Demonstrasi useState, useEffect, dan useRef
 * =========================================================================
 * 
 * HOOKS YANG DIGUNAKAN:
 * 1. useState - untuk manage form inputs dan user list
 * 2. useEffect - untuk fetch data dari API saat component mount
 * 3. useRef - untuk auto-focus ke input field saat edit mode
 */

const UserCRUDEnhanced = () => {
    // =============== useState HOOKS ===============
    const [users, setUsers] = useState([]); // List pengguna
    const [username, setUsername] = useState(""); // Input username
    const [email, setEmail] = useState(""); // Input email
    const [firstName, setFirstName] = useState(""); // Input firstName
    const [lastName, setLastName] = useState(""); // Input lastName
    const [phone, setPhone] = useState(""); // Input phone
    const [editIndex, setEditIndex] = useState(null); // Tracking index yang di-edit
    const [loadingUsers, setLoadingUsers] = useState(true); // Loading state

    // =============== useRef HOOKS ===============
    // Reference untuk auto-focus ke input field saat edit mode
    const usernameInputRef = useRef(null);
    const firstNameInputRef = useRef(null);

    // =============== useEffect HOOKS ===============
    // Effect 1: Fetch user data dari API saat component mount
    useEffect(() => {
        console.log("📥 useEffect dijalankan: Fetching user data from API");
        
        fetch("https://fakestoreapi.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log("✅ Data berhasil di-fetch:", data.length, "users");
                setUsers(data);
                setLoadingUsers(false);
            })
            .catch((error) => {
                console.error("❌ Error fetching data:", error);
                setLoadingUsers(false);
            });
    }, []); // Dependency array kosong = hanya dijalankan 1x saat mount

    // =============== HANDLER FUNCTIONS ===============
    
    const handleAdd = () => {
        console.log("➕ handleAdd dipanggil - mode:", editIndex !== null ? "EDIT" : "ADD");
        
        if (username && email && firstName && lastName && phone) {
            if (editIndex !== null) {
                // MODE EDIT: Update data di list
                const updatedUsers = [...users];
                updatedUsers[editIndex] = {
                    ...updatedUsers[editIndex],
                    username,
                    email,
                    name: { firstname: firstName, lastname: lastName },
                    phone,
                };
                setUsers(updatedUsers);
                setEditIndex(null);
                console.log("📝 Data user telah diupdate");
            } else {
                // MODE ADD: Tambah data baru ke list
                const newUser = {
                    id: Date.now(),
                    username,
                    email,
                    name: { firstname: firstName, lastname: lastName },
                    phone,
                };
                setUsers([...users, newUser]);
                console.log("✨ User baru ditambahkan");
            }
            resetForm();
        } else {
            alert("Semua field harus diisi!");
        }
    };

    const resetForm = () => {
        console.log("🔄 Form direset");
        setUsername("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
    };

    const handleEdit = (index) => {
        console.log("✏️ handleEdit dipanggil untuk user index:", index);
        
        const user = users[index];
        setUsername(user.username);
        setEmail(user.email);
        setFirstName(user.name.firstname);
        setLastName(user.name.lastname);
        setPhone(user.phone);
        setEditIndex(index);

        // ⭐ useRef: Auto-focus ke input field setelah state ter-update
        // Menggunakan setTimeout karena state update bersifat async
        setTimeout(() => {
            console.log("🎯 useRef: Auto-focus ke username input");
            if (usernameInputRef.current) {
                usernameInputRef.current.focus();
                // Highlight text untuk UX yang lebih baik
                usernameInputRef.current.select();
            }
        }, 0);
    };

    const handleDelete = (index) => {
        console.log("🗑️ handleDelete dipanggil untuk user index:", index);
        
        if (confirm("Apakah Anda yakin ingin menghapus user ini?")) {
            setUsers(users.filter((_, i) => i !== index));
            console.log("✅ User berhasil dihapus");
        }
    };

    const handleCancel = () => {
        console.log("❌ Edit dibatalkan");
        resetForm();
        setEditIndex(null);
    };

    // =============== RENDER ===============
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
                ✨ Manajemen Pengguna - Enhanced dengan React Hooks
            </h1>

            {/* FORM SECTION */}
            <div className="bg-white p-6 mb-6 border-2 border-blue-300 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-blue-600">
                    {editIndex !== null ? "✏️ Edit Pengguna" : "➕ Tambah Pengguna Baru"}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    💡 Perhatikan bagaimana input field otomatis ter-focus ketika Anda klik tombol Edit
                </p>

                {/* USERNAME INPUT - Dengan useRef untuk auto-focus */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Username *</label>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            console.log("📝 useState: username berubah menjadi:", e.target.value);
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* EMAIL INPUT */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            console.log("📝 useState: email berubah menjadi:", e.target.value);
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* FIRST NAME & LAST NAME */}
                <div className="flex gap-2 mb-3">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Nama Depan *</label>
                        <input
                            ref={firstNameInputRef}
                            type="text"
                            placeholder="Nama Depan"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                console.log("📝 useState: firstName berubah menjadi:", e.target.value);
                            }}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Nama Belakang *</label>
                        <input
                            type="text"
                            placeholder="Nama Belakang"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                console.log("📝 useState: lastName berubah menjadi:", e.target.value);
                            }}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                </div>

                {/* PHONE INPUT */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Nomor HP *</label>
                    <input
                        type="tel"
                        placeholder="Nomor HP"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                            console.log("📝 useState: phone berubah menjadi:", e.target.value);
                        }}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2">
                    <button
                        onClick={handleAdd}
                        className={`flex-1 text-white py-2 rounded font-semibold transition ${
                            editIndex !== null
                                ? "bg-orange-500 hover:bg-orange-600"
                                : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        {editIndex !== null ? "📝 Update Pengguna" : "➕ Tambah Pengguna"}
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
                <h2 className="text-xl font-bold mb-4 text-blue-600">
                    👥 Daftar Pengguna ({users.length})
                </h2>

                {loadingUsers ? (
                    <div className="text-center py-8 text-gray-500">
                        ⏳ Memuat data dari API...
                    </div>
                ) : users.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        📭 Belum ada data pengguna
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {users.map((user, index) => (
                            <div
                                key={index}
                                className={`p-4 border-2 rounded-lg transition ${
                                    editIndex === index
                                        ? "border-orange-400 bg-orange-50 shadow-md"
                                        : "border-gray-200 bg-white hover:border-blue-300"
                                }`}
                            >
                                <p className="font-bold text-lg text-blue-600">{user.username}</p>
                                <p className="text-sm text-gray-600 mt-1">
                                    📧 Email: {user.email}
                                </p>
                                <p className="text-sm text-gray-600">
                                    👤 Nama: {user.name.firstname} {user.name.lastname}
                                </p>
                                <p className="text-sm text-gray-600">
                                    📱 HP: {user.phone}
                                </p>
                                <div className="flex gap-2 mt-4">
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
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-blue-600 mb-2">💡 Tentang React Hooks di Komponen Ini:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ <strong>useState</strong>: Menyimpan form inputs dan user list yang berubah</li>
                    <li>✅ <strong>useEffect</strong>: Fetch user data dari API saat komponen pertama kali dimuat</li>
                    <li>✅ <strong>useRef</strong>: Auto-focus ke input field ketika mode edit (coba klik tombol Edit!)</li>
                </ul>
            </div>
        </div>
    );
};

export default UserCRUDEnhanced;

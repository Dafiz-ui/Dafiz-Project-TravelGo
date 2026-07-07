# 📚 React Hooks Documentation - CRM Project
## Penjelasan 5W + 1H untuk useState, useEffect, dan useRef

---

## A. useState Hook

### **What (Apa fungsi useState yang diterapkan?)**
`useState` digunakan untuk **mengelola state (data yang dapat berubah)** dalam komponen functional React. Dalam project CRM, `useState` mengelola:
- Data input pengguna (username, email, firstName, lastName, phone)
- Data produk (title, price, category, image)
- Index untuk mode edit (`editIndex`)
- List pengguna dan produk yang dinamis

### **Why (Mengapa useState diperlukan?)**
`useState` diperlukan karena:
1. **Perubahan Data Dinamis**: Ketika user mengetik di input form, data harus tersimpan dan ter-update secara real-time
2. **Rerender Komponen**: Ketika state berubah, React otomatis merender ulang komponen dengan data terbaru
3. **Mode Edit**: Untuk mengetahui apakah user sedang menambah atau mengedit data
4. **Manajemen List**: Untuk menyimpan dan memodifikasi list pengguna/produk (add, edit, delete)

### **Who (Siapa yang menggunakan fitur tersebut?)**
- **Admin/User Application**: Mengakses formulir untuk menambah/edit data pengguna
- **Product Manager**: Mengakses formulir untuk mengelola produk
- **End Users**: Melihat list pengguna dan produk yang ter-update

### **When (Kapan state berubah?)**
State berubah pada saat:
1. User mengetik di input field → `onChange` handler memanggil setter function
2. User klik tombol "Tambah/Update Pengguna" → `handleAdd()` mengubah state users
3. User klik tombol "Edit" → `handleEdit()` mengubah state input fields
4. User klik tombol "Hapus" → `handleDelete()` mengubah state users dengan filter

### **Where (Di bagian mana useState digunakan?)**
Digunakan di komponen-komponen berikut:
- **UserCRUD.jsx**: 7 state untuk manage user form dan list
- **ProductCRUD.jsx**: 6 state untuk manage product form dan list
- **CustomerForm.js**: 1 state untuk manage customer data
- **FunctionalCustomerList.jsx**: 1 state untuk customer list

### **How (Bagaimana useState mempengaruhi tampilan aplikasi?)**
1. **Form Input**: Setiap ketikan user ditampilkan real-time di input field karena `value={username}` terikat ke state
2. **Dynamic List Rendering**: List pengguna/produk ter-update otomatis menggunakan `.map()` ketika state berubah
3. **Button Toggle**: Tombol berubah teks dari "Tambah" → "Update" berdasarkan state `editIndex`
4. **Input Prefill**: Saat edit, form otomatis terisi dengan data dari state
5. **Empty List Handling**: List kosong saat pertama kali load, kemudian terisi dari API atau user input

---

## B. useEffect Hook

### **What (Apa fungsi useEffect yang diterapkan?)**
`useEffect` digunakan untuk **menjalankan side effects (efek samping)** seperti:
1. **Fetch API Data**: Mengambil data dari API eksternal saat komponen mount
2. **Form Synchronization**: Sinkronisasi form dengan data yang sedang di-edit
3. **Lifecycle Management**: Menjalankan kode pada tahap specific komponen (mount, update)

### **Why (Mengapa proses tersebut menggunakan useEffect?)**
`useEffect` diperlukan karena:
1. **API Fetching**: Data dari API tidak boleh diambil di render function (infinite loop), harus di `useEffect`
2. **Side Effects Isolation**: Memisahkan logika side effects dari render logic
3. **Controlled Updates**: Dengan dependency array, kita kontrol kapan effect dijalankan
4. **Form Sync**: Perubahan prop `editingCustomer` perlu ditangkap untuk update form input

### **Who (Siapa yang merasakan dampaknya?)**
- **User Application**: Melihat data yang ter-load dari API/database
- **Admin Manager**: Dapat mengedit data karena form ter-prefill dengan benar
- **System**: Database/API mendapat request untuk fetch data

### **When (Kapan useEffect dijalankan?)**
1. **Initial Load (Component Mount)**: `useEffect` dengan dependency `[]`
   - Fetch data pengguna/produk dari API ketika halaman pertama kali dibuka
   
2. **On Dependency Change**: `useEffect` dengan dependency `[editingCustomer]`
   - Form ter-update ketika prop `editingCustomer` berubah (user klik edit)

### **Where (Pada halaman atau fitur apa useEffect digunakan?)**
- **UserCRUD.jsx**: Fetch user list dari `https://fakestoreapi.com/users` saat mount
- **ProductCRUD.jsx**: Fetch product list dari `https://fakestoreapi.com/products` saat mount
- **FunctionalCustomerList.jsx**: Setup customer data dengan mock data saat mount
- **CustomerForm.js**: Sync form dengan data customer yang sedang di-edit

### **How (Bagaimana dependency array mempengaruhi proses tersebut?)**
1. **Empty Array `[]`**: Effect hanya dijalankan sekali saat komponen pertama kali di-render
   - Cocok untuk API fetch yang hanya perlu dilakukan 1x
   
2. **Dependency `[editingCustomer]`**: Effect dijalankan setiap kali `editingCustomer` props berubah
   - Ketika user pilih customer untuk edit, form otomatis terisi data yang benar
   
3. **No Dependency (jarang digunakan)**: Effect dijalankan setiap kali komponen re-render
   - Bisa menyebabkan infinite loop jika fetch di dalamnya

---

## C. useRef Hook

### **What (Apa fungsi useRef yang diterapkan?)**
`useRef` digunakan untuk **mengakses DOM element secara langsung** atau **menyimpan nilai mutable yang tidak menyebabkan re-render**.

**Implementasi yang dapat diterapkan di CRM:**
1. **Input Focus Management**: Auto-focus ke field pertama form saat mode edit
2. **Form Validation**: Highlight input field yang error tanpa re-render komponen
3. **Modal/Dialog Control**: Control open/close modal tanpa state
4. **Previous Value Tracking**: Menyimpan nilai sebelumnya untuk perbandingan
5. **File Upload Input**: Control file input element

### **Why (Mengapa tidak menggunakan useState?)**
Tidak menggunakan `useState` karena:
1. **Tidak Perlu Re-render**: `useRef` tidak trigger re-render, lebih efficient
2. **Direct DOM Access**: `useState` tidak bisa akses DOM element secara langsung
3. **Mutable Value**: Untuk nilai yang bisa berubah tapi tidak perlu di-render ulang
4. **Performance**: Menghindari re-render yang tidak perlu, terutama untuk form handling

### **Who (Siapa yang terbantu dengan fitur tersebut?)**
- **User**: Pengalaman yang lebih smooth karena tidak ada re-render yang tidak perlu
- **Admin/Form User**: Input field otomatis ter-focus saat edit mode, meningkatkan UX
- **Developer**: Kode lebih efisien dan lebih mudah di-maintain

### **When (Kapan useRef digunakan?)**
- Ketika user klik tombol "Edit" → Input field auto-focus tanpa re-render
- Saat form validation → Highlight error field tanpa trigger state change
- Saat form submit → Access nilai input secara langsung untuk validation
- Control modal/dialog show/hide tanpa state management

### **Where (Di bagian mana useRef diterapkan?)**
Dapat diterapkan di:
- **UserCRUD.jsx**: Focus ke input `username` saat mode edit
- **ProductCRUD.jsx**: Focus ke input `title` saat mode edit
- **CustomerForm.js**: Validate dan focus ke field error saat form submit

### **How (Bagaimana useRef bekerja pada implementasi tersebut?)**

```jsx
// Contoh implementasi useRef di UserCRUD
import { useState, useEffect, useRef } from "react";

const UserCRUD = () => {
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const usernameInputRef = useRef(null); // Buat reference ke input

    const handleEdit = (index) => {
        setEditIndex(index);
        // Focus ke input tanpa re-render
        setTimeout(() => {
            usernameInputRef.current.focus();
        }, 0);
    };

    return (
        <input
            ref={usernameInputRef}  // Attach reference ke DOM element
            type="text"
            placeholder="Username"
            className="mb-2 w-full p-2 border rounded"
        />
    );
};
```

**Cara Kerja:**
1. `useRef(null)` membuat reference object yang persistent di seluruh re-render
2. `ref={usernameInputRef}` menghubungkan reference dengan DOM element input
3. `usernameInputRef.current.focus()` mengakses DOM element dan menjalankan method `focus()`
4. Tidak ada state change, jadi tidak ada re-render

---

## Kesimpulan

| Hook | Fungsi | Kapan Pakai | Dampak |
|------|--------|-----------|--------|
| **useState** | Manage data yang berubah | Input form, list data | Re-render komponen |
| **useEffect** | Side effects (API, lifecycle) | Fetch data, sync props | Jalankan kode di lifecycle tertentu |
| **useRef** | Akses DOM / Mutable value | Focus input, control DOM | Tidak re-render |

Ketiga hooks ini bekerja bersama di CRM project untuk menciptakan aplikasi yang interaktif dan efisien!

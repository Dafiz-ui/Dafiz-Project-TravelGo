# 📊 Panduan Membuat Diagram Excalidraw untuk React Hooks

## Instruksi Membuat 3 Diagram PNG

---

## 1️⃣ DIAGRAM useState Hook

### Cara Membuat di Excalidraw:

1. Buka [excalidraw.com](https://excalidraw.com)
2. Buat diagram dengan elemen berikut:

### Struktur Diagram:

```
┌─────────────────────────────────────────────────────────┐
│                    useState Hook Flow                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  User Interface                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Input Field: <input value={username} />         │  │
│  │  [___________________________]                    │  │
│  └──────────────────────────────────────────────────┘  │
│            ↑                          ↓                 │
│            │  onChange(value)    setUsername(value)   │
│            │                                           │
│  ┌─────────┴───────────────────────────────────────┐  │
│  │     State Management (useState)                 │  │
│  │  const [username, setUsername] = useState("")  │  │
│  │                                                │  │
│  │  State Value: username = "Adi Pratama"        │  │
│  │  Setter Function: setUsername()               │  │
│  └────────────────────────────────────────────────┘  │
│                     ↓                                  │
│  ┌──────────────────────────────────────────────────┐  │
│  │    Component Re-renders with New Data           │  │
│  │    Display: "Adi Pratama" di input field        │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘

Case Study: User Input Management di UserCRUD.jsx
─────────────────────────────────────────────────
1. User mengetik "Adi" di input username
2. onChange event trigger → onChange(e) dijalankan
3. setUsername("Adi") dipanggil
4. State berubah → username = "Adi"
5. Komponen re-render → input field menampilkan "Adi"
6. Proses berulang untuk setiap ketikan
```

### Elemen yang harus ada di Excalidraw:
- [ ] Judul: "useState Hook Flow"
- [ ] Box: User Interface / Input Field
- [ ] Box: State Management / useState
- [ ] Box: Component Re-render
- [ ] Arrows: Menunjukkan aliran data (onChange → setState → Re-render)
- [ ] Text: Penjelasan untuk setiap tahap
- [ ] Color: Gunakan warna berbeda untuk setiap tahap
  - Biru: Input/User Action
  - Ungu: State Management
  - Hijau: Re-render/Output

### Tips:
- Gunakan rectangle untuk box utama
- Gunakan arrow untuk aliran data
- Tambahkan label di setiap arrow
- Gunakan warna yang berbeda untuk membedakan tahapan
- Tambahkan subtitle dengan case study dari UserCRUD.jsx

---

## 2️⃣ DIAGRAM useEffect Hook

### Struktur Diagram:

```
┌─────────────────────────────────────────────────────────┐
│                   useEffect Hook Lifecycle              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Timeline Component Lifecycle:                          │
│                                                         │
│  1. Component Mount                                     │
│     ↓                                                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │  useEffect(() => {                              │  │
│  │    fetch("https://fakestoreapi.com/users")      │  │
│  │      .then(res => res.json())                   │  │
│  │      .then(data => setUsers(data))              │  │
│  │  }, [])  ← Dependency Array: KOSONG             │  │
│  │                                                 │  │
│  │  ✅ Dijalankan SEKALI saat komponen mount      │  │
│  └──────────────────────────────────────────────────┘  │
│     ↓                                                   │
│  2. Fetch API                                           │
│     ↓                                                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │  https://fakestoreapi.com/users                │  │
│  │                                                 │  │
│  │  Response: [User1, User2, User3, ...]          │  │
│  └──────────────────────────────────────────────────┘  │
│     ↓                                                   │
│  3. Update State                                        │
│     ↓                                                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │  setUsers(data)                                 │  │
│  │  users = [User1, User2, User3, ...]            │  │
│  └──────────────────────────────────────────────────┘  │
│     ↓                                                   │
│  4. Component Re-render                                 │
│     ↓                                                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Display: User list di layar                    │  │
│  │  👥 Adi Pratama                                  │  │
│  │  👥 Sinta Maharani                              │  │
│  │  👥 Rudi Santoso                                │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  5. User Interaction (UPDATE MODE)                      │
│     Dependency [editingCustomer] berubah               │
│     ↓                                                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │  useEffect(() => {                              │  │
│  │    if (editingCustomer) {                       │  │
│  │      setCustomer(editingCustomer)               │  │
│  │    }                                             │  │
│  │  }, [editingCustomer])  ← DEPENDENCY ARRAY      │  │
│  │                                                 │  │
│  │  ✅ Dijalankan setiap [editingCustomer] berubah│  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘

Perbandingan Dependency Array:
─────────────────────────────
[]:              Hanya dijalankan 1x saat mount
[editingCustomer]: Dijalankan setiap kali editingCustomer berubah
(none):          Dijalankan setiap kali komponen re-render (jarang digunakan)
```

### Elemen yang harus ada di Excalidraw:
- [ ] Judul: "useEffect Hook Lifecycle"
- [ ] Timeline vertikal menunjukkan tahapan
- [ ] Box: Component Mount
- [ ] Box: useEffect dengan dependency array
- [ ] Box: Fetch API
- [ ] Box: Update State
- [ ] Box: Re-render
- [ ] Box: User Interaction (optional)
- [ ] Table/Comparison: Dependency array options
- [ ] Colors:
  - Biru: Lifecycle stages
  - Merah: useEffect code
  - Hijau: API/Data
  - Orange: State update

### Tips:
- Buatkan timeline dari atas ke bawah
- Highlight dependency array dengan warna berbeda
- Tambahkan code snippet untuk clarity
- Buat comparison table untuk dependency array

---

## 3️⃣ DIAGRAM useRef Hook

### Struktur Diagram:

```
┌─────────────────────────────────────────────────────────┐
│              useRef Hook vs useState Hook               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  SKENARIO: Auto-focus Input Field saat Edit Mode       │
│                                                         │
│  ┌─────────────────────────┬─────────────────────────┐ │
│  │     useState (SALAH)     │     useRef (BENAR)      │ │
│  ├─────────────────────────┼─────────────────────────┤ │
│  │ const [focused, set     │ const inputRef =        │ │
│  │  Focused] = useState()   │  useRef(null)           │ │
│  │                          │                         │ │
│  │ setFocused(true)         │ inputRef.current.      │ │
│  │ ↓                        │  focus()                │ │
│  │ Component RE-RENDER      │ ↓                       │ │
│  │ (Tidak efisien)          │ Hanya akses DOM         │ │
│  │                          │ (Tidak re-render)       │ │
│  │ ❌ Performance issue     │ ✅ Optimal performance  │ │
│  └─────────────────────────┴─────────────────────────┘ │
│                                                         │
│  Flow Diagram useRef:                                   │
│                                                         │
│  User klik "Edit" button                               │
│         ↓                                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │  const usernameInputRef = useRef(null)           │  │
│  │                                                 │  │
│  │  Membuat reference yang persistent              │  │
│  │  (tidak berubah saat re-render)                 │  │
│  └──────────────────────────────────────────────────┘  │
│         ↓                                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │  <input ref={usernameInputRef} />               │  │
│  │                                                 │  │
│  │  Connect reference dengan DOM element           │  │
│  └──────────────────────────────────────────────────┘  │
│         ↓                                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │  handleEdit = (index) => {                       │  │
│  │    // Set form data...                           │  │
│  │    usernameInputRef.current.focus()              │  │
│  │  }                                               │  │
│  │                                                 │  │
│  │  Access DOM element langsung & call focus()     │  │
│  └──────────────────────────────────────────────────┘  │
│         ↓                                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │  ✅ Input field otomatis ter-focus              │  │
│  │  ✅ Tidak ada re-render yang tidak perlu        │  │
│  │  ✅ UX lebih smooth                             │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Use Cases untuk useRef:                               │
│  ─────────────────────────                             │
│  1. Auto-focus input fields                            │
│  2. Trigger animations                                 │
│  3. Validate and highlight error fields               │
│  4. Control media playback (audio, video)             │
│  5. Integrate with third-party DOM libraries          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Elemen yang harus ada di Excalidraw:
- [ ] Judul: "useRef Hook vs useState Hook"
- [ ] Comparison table: useState vs useRef
- [ ] Flow diagram dari top to bottom
- [ ] Box: Create useRef reference
- [ ] Box: Connect ref to DOM
- [ ] Box: Access DOM element
- [ ] Box: Result (auto-focus)
- [ ] List: Use cases untuk useRef
- [ ] Colors:
  - Merah: useState (tidak optimal)
  - Hijau: useRef (optimal)
  - Biru: Flow steps

### Tips:
- Buat comparison table yang jelas
- Gunakan warna berbeda untuk highlight perbedaan
- Tambahkan use cases di bawah diagram
- Highlight performance benefit

---

## 📸 CARA SCREENSHOT IMPLEMENTASI

### Screenshot 1: useState Implementation (UserCRUD.jsx)
```
1. Buka browser dan jalankan aplikasi
2. Buka halaman UserCRUD
3. Screenshot menunjukkan:
   - Form input fields (untuk menunjukkan state management)
   - Tombol "Tambah Pengguna"
   - List pengguna yang ter-render dari state
4. Save sebagai: useState_implementation.png
```

### Screenshot 2: useEffect Implementation (Data Loading)
```
1. Buka halaman UserCRUD atau ProductCRUD
2. Buka DevTools Console (F12)
3. Screenshot menunjukkan:
   - Console logs yang menunjukkan "useEffect dijalankan"
   - Fetch request di Network tab
   - Data yang ter-load dari API
4. Save sebagai: useEffect_implementation.png
```

### Screenshot 3: useRef Implementation (Auto-focus)
```
1. Buka halaman UserCRUDEnhanced
2. Klik tombol "Edit" pada salah satu user
3. Perhatikan input field username otomatis ter-focus
4. Screenshot menunjukkan:
   - Form dalam edit mode
   - Input field username yang ter-highlight (focused)
   - Console log: "useRef: Auto-focus ke username input"
5. Save sebagai: useRef_implementation.png
```

---

## 📝 CHECKLIST DELIVERABLES

### ✅ Dokumentasi (DONE)
- [x] REACT_HOOKS_DOCUMENTATION.md - 5W+1H explanations
- [x] UserCRUDEnhanced.jsx - Implementation dengan semua hooks

### ⏳ Diagram Excalidraw (HARUS DIBUAT)
- [ ] useState_diagram.png - Flow diagram useState
- [ ] useEffect_diagram.png - Lifecycle diagram useEffect
- [ ] useRef_diagram.png - Comparison & flow diagram useRef

### ⏳ Screenshots (HARUS DIAMBIL)
- [ ] useState_screenshot.png - Form & list dalam UserCRUD
- [ ] useEffect_screenshot.png - API loading & console logs
- [ ] useRef_screenshot.png - Auto-focus functionality

### ✅ 5W+1H Answers (DONE)
- [x] Included di REACT_HOOKS_DOCUMENTATION.md

---

## 🎨 TIPS DESAIN EXCALIDRAW

1. **Warna Recommended:**
   - useState: Blue (#3498db)
   - useEffect: Purple (#9b59b6)
   - useRef: Green (#27ae60)
   - Arrows: Black/Gray (#34495e)
   - Background: White (#ffffff)

2. **Typography:**
   - Judul: Bold, 20px
   - Subtitle: Bold, 14px
   - Body: Regular, 12px
   - Code: Monospace, 11px

3. **Layout:**
   - Gunakan grid untuk alignment
   - Jarak antar elemen: 20-30px
   - Borders rounded: 5-10px
   - Shadow: ada untuk depth

4. **Clarity:**
   - Minimal text (gunakan visual)
   - Clear labeling di arrows
   - Consistent styling
   - Readable fonts

---

## 📌 NEXT STEPS

1. Buat 3 diagram PNG di excalidraw.com (1-2 jam)
2. Ambil 3 screenshots implementasi (15 menit)
3. Export semua file dengan nama yang jelas
4. Simpan di folder: `/documentation/diagrams/`
5. Buat summary document yang merangkum semua findings

---

**Good luck! 🚀**

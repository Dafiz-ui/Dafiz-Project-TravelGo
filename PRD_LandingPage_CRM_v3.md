# PRD v3 — Landing Page CRM (Final / Komplit)

## 1) Tujuan
Menyelesaikan landing page CRM dengan:
- Struktur Top/Middle/Bottom yang konsisten.
- Visual hierarchy yang jelas.
- Friction minimization (form + CTA anchor).
- QA checklist & spesifikasi bukti implementasi.

## 2) Perbaikan Utama dari v2
- CTA dan anchor dibuat jelas dengan id section:
  - `#top`
  - `#features`
  - `#faq`
  - `#cta-form`
- Tambah “sticky feel” secara UX (tanpa mengganggu layout): tombol “Mulai Gratis” selalu terlihat di navbar.
- Form email: timeout/disable saat loading untuk mencegah double submit.
- FAQ: accordion behavior jelas dan accessible (aria-expanded/controls jika memungkinkan).

## 3) Requirements UI/UX (berdasarkan arsitektur)

### TOP
- Navbar: max 3 link + 1 CTA utama.
- Hero:
  - Headline 1 kalimat benefit utama.
  - Subheadline 1-2 kalimat proof.
  - Primary CTA dominan (warna kontras) dan scroll ke form.

### MIDDLE
- Problem/Solution: 2 kolom responsif.
- Feature cards:
  - grid 3 kolom desktop, 1-2 kolom mobile
  - 1 ide tunggal per card
- Testimoni:
  - 3 card, masing-masing 1 kalimat kuat + 1 kalimat pendukung.
- FAQ:
  - 6 pertanyaan, ringkas.

### BOTTOM
- Form:
  - input minimal email
  - tombol submit jelas
  - feedback setelah submit
- Footer:
  - grouping link (Fitur, FAQ)

## 4) Event Tracking / Bukti Perilaku (rekomendasi)
- Jika implementasi memungkinkan tanpa backend:
  - Log `console.log('cta_submit', { email })` (tanpa menyimpan data email di log final jika sensitif).
  - Log `console.log('cta_click')` saat tombol ditekan.

## 5) QA Checklist sebelum submit
- [ ] Halaman tampil sesuai desain Top/Middle/Bottom.
- [ ] CTA “Mulai Gratis” scroll ke `#cta-form`.
- [ ] Form validasi email bekerja.
- [ ] Success message muncul setelah submit.
- [ ] FAQ accordion bisa dibuka/tutup.
- [ ] Responsive di mobile (tidak overflow).

## 6) Evaluasi PRD v3 (Checklist)
- [x] Struktur dan anchor map jelas
- [x] AIDA lengkap sampai Action
- [x] Accessibility/UX friction plan

## 7) Hasil yang Akan Dibuat
- Implementasi landing page CRM versi final pada `src/pertemuan-5/pages/Home.jsx`.
- Dokumen PRD ini menjadi acuan final copy & struktur.
- Bukti perubahan akan dicatat di deliverables/README dan (jika ada git) commit mapping.


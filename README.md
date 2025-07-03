# 🛡️ Cyber Security MBC – Technical Test 2025

Ini adalah proyek technical test untuk seleksi divisi **Cyber Security** di **MBC Laboratory 2025**, terdiri dari frontend dengan Tailwind CSS dan backend dengan Node.js + Express + Nodemailer.

---

## 🔧 Fitur Utama

- ✅ Landing Page responsif & mobile-friendly
- ✅ 4 halaman: Home, Divisi & Layanan, Kontak, Developer
- ✅ Form kontak terhubung ke backend
- ✅ Email dikirim otomatis ke admin MBC
- ✅ Aksesibilitas dan desain adaptif

---

## 📁 Struktur Proyek

```
cyber-security-mbc-/
├── frontend/         # Halaman HTML dengan Tailwind
│   └── index.html
├── backend/          # Server Express + Nodemailer
│   ├── index.js
│   ├── .env          # ← Disembunyikan (ignored)
├── README.md
└── .gitignore
```

---

## 🚀 Cara Menjalankan Lokal

### Frontend:
```bash
cd frontend
npx serve .
```
Atau buka langsung di browser dengan Live Server (VS Code)

### Backend:
```bash
cd backend
npm install
node index.js
```

Jalankan backend di port `3001` dan akses frontend di browser.

---

## 📬 Environment Variables

Buat file `.env` di dalam folder `backend/`:

```
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_app_password
```

> App Password bisa dibuat di [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

---

## 🌍 Deployment

- Frontend (Vercel): [https://your-vercel-url.vercel.app](#)
- Backend (Render): [https://your-backend-api.onrender.com](#)

> Jangan lupa update URL `fetch()` di frontend setelah backend dideploy!

---

## 👨‍💻 Developer

- **Nama:** Dafa Aulia Putera
- **GitHub:** [github.com/dafaaputera](https://github.com/dafaaputera)
- **Divisi Tujuan:** Cybersecurity – MBC Laboratory 2025

---

## 📸 (Opsional) Dokumentasi

- Screenshot tampilan mobile & desktop
- Diagram alur form → backend → email

---

## 📜 Lisensi

Proyek ini dibuat untuk keperluan rekrutmen MBC Laboratory dan tidak diperuntukkan untuk distribusi komersial.
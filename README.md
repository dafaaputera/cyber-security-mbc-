# 🌐 MBC Laboratory Website

Website resmi untuk MBC Laboratory — menampilkan informasi mengenai divisi Cybersecurity, Big Data, Game Technology, dan GIS. Dibangun dengan HTML + TailwindCSS untuk frontend dan Node.js (Express + Nodemailer) untuk backend.

---

## 📁 Struktur Direktori

```
.
├── backend          # Backend Node.js (Express + Nodemailer)
│   ├── index.js
│   ├── package.json
│   ├── .env         # Variabel lingkungan (EMAIL_USER, EMAIL_PASS)
│   └── .gitignore
├── frontend         # Frontend statis (HTML + TailwindCSS)
│   ├── index.html
│   └── mbc final.png
└── README.md
```

---

## 🚀 Deployment

### 🔹 Frontend
- **Platform**: [Vercel](https://vercel.com/)
- **URL**: [https://cyber-security-mbc.vercel.app](https://cyber-security-mbc.vercel.app)

### 🔹 Backend
- **Platform**: [Railway](https://railway.app/)
- **URL**: [https://cyber-security-mbc-production.up.railway.app](https://cyber-security-mbc-production.up.railway.app)

---

## 📬 Formulir Kontak

Formulir pada halaman frontend mengirimkan data ke endpoint `/contact` di backend. Backend menggunakan `nodemailer` untuk mengirim email secara langsung ke admin MBC.

```js
POST /contact
Content-Type: application/json

{
  "name": "Nama Pengirim",
  "email": "email@pengirim.com",
  "message": "Isi pesan"
}
```

---

## 🔐 Environment Variables (.env)

```env
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=yourapppassword
```

> ⚠️ File `.env` sudah di-ignore menggunakan `.gitignore` agar tidak ter-push ke repo publik.

---

## 🧑‍💻 Developer

- **Nama**: Dafa Aulia Putera
- **GitHub**: [@dafaaputera](https://github.com/dafaaputera)
- **LinkedIn**: [linkedin.com/in/dafaaputera](https://linkedin.com/in/dafaaputera)

---

## 📌 Catatan

- Pastikan Anda telah mengaktifkan **App Password** di Gmail untuk dapat mengirim email via nodemailer.
- Formulir telah disesuaikan agar **mobile-friendly**, **dark-mode**, dan menggunakan **TailwindCSS** secara modern.

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
console.log('Email user:', process.env.EMAIL_USER);
console.log('Email pass:', process.env.EMAIL_PASS);

const app = express();

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
  from: `"${name}" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  replyTo: email, 
  subject: `Pesan dari ${name}`,
  text: message
});


    res.status(200).send('Pesan berhasil dikirim!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Terjadi kesalahan saat mengirim email.');
  }
});

app.listen(3001, () => {
  console.log('Server berjalan di http://localhost:3001');
});


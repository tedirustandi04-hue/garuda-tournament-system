# Garuda Tournament System (GTS)

Starter repository untuk aplikasi manajemen kompetisi sepak bola usia dini KU-8 sampai KU-15.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Supabase (database, auth, storage)
- Lucide React

## Menjalankan secara lokal
1. Install Node.js versi LTS.
2. Ekstrak repository.
3. Jalankan `npm install`.
4. Salin `.env.example` menjadi `.env.local`.
5. Isi kredensial Supabase.
6. Jalankan `npm run dev`.
7. Buka http://localhost:3000.

## Catatan
Ini adalah kerangka awal (starter scaffold), belum merupakan aplikasi produksi. Modul autentikasi, database, verifikasi, drawing, pertandingan, klasemen, knockout, dan cetak ID Card perlu diimplementasikan dan diuji bertahap.

## Deploy
Hubungkan repository GitHub ke Vercel. Tambahkan environment variables dari `.env.local` pada pengaturan proyek Vercel. Jangan pernah mengunggah `.env.local` atau secret key ke GitHub.

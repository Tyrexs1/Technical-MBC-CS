# Website Company Profile - MBC Laboratory

Dokumentasi teknis ini menjelaskan arsitektur, alur kerja, dan implementasi dari proyek website Company Profile untuk Laboratorium MBC.

**✨ Live Demo:** [https://mbc-cs.vercel.app/](https://mbc-cs.vercel.app/)

---

## Daftar Isi
1. [Pendahuluan dan Tujuan Proyek](#1-pendahuluan-dan-tujuan-proyek)
2. [Penjelasan Struktur Proyek](#2-penjelasan-struktur-proyek)
3. [Alur Kerja Frontend](#3-alur-kerja-frontend)
4. [Alur Kerja Backend](#4-alur-kerja-backend)
5. [Deployment dan Konfigurasi SSL](#5-deployment-dan-konfigurasi-ssl)
6. [Profil Developer](#6-profil-developer)

---

### **1. Pendahuluan dan Tujuan Proyek**
Proyek ini adalah implementasi website company profile untuk **Laboratorium MBC (Multimedia, Big Data, and Cyber Security)**. Tujuannya adalah untuk membangun sebuah landing page yang dinamis, profesional, dan modern, yang secara efektif merepresentasikan citra Laboratorium MBC di ranah digital.

Website ini dikembangkan sebagai **Dynamic Single-Page Website** menggunakan teknologi web standar (HTML, CSS, dan Vanilla JavaScript) untuk membangun antarmuka pengguna yang responsif dan interaktif. Untuk fungsionalitas backend, proyek ini memanfaatkan **Node.js** yang di-deploy sebagai **Serverless Function** di platform cloud Vercel untuk menyajikan seluruh konten website secara dinamis.

---

### **2. Penjelasan Struktur Proyek**
Arsitektur proyek ini dirancang dengan pendekatan **decoupled (terpisah)**, memisahkan tugas antara frontend (tampilan), backend (data), dan aset statis untuk kemudahan pengelolaan dan skalabilitas.

* **Folder `/api`**: Ini adalah direktori khusus untuk backend. Vercel secara otomatis mendeteksi folder ini dan memperlakukan file `index.js` di dalamnya sebagai Serverless Function. Fungsinya adalah sebagai endpoint tunggal yang menyediakan semua data yang dibutuhkan oleh frontend.

* **Folder `/public` (atau Root Direktori)**: Folder ini berisi semua aset statis untuk frontend.
    * **`index.html`**: Kerangka HTML utama tempat semua konten akan ditampilkan.
    * **`style.css`**: Berisi semua styling untuk website, termasuk layout, animasi, dan desain responsif.
    * **`script.js`**: Jantung dari logika frontend, bertanggung jawab untuk mengambil data, memanipulasi DOM, dan mengelola interaktivitas.
    * **`/Asset`**: Sub-folder yang menyimpan semua aset gambar seperti logo, foto, dan gambar latar belakang.

* **File `package.json`**: File konfigurasi Node.js yang mendefinisikan properti proyek, termasuk `"type": "module"` yang mengaktifkan penggunaan sintaks ES Module (import/export) di backend.

---

### **3. Alur Kerja Frontend**
Aplikasi frontend dirancang untuk memberikan pengalaman pengguna yang mulus dan interaktif tanpa perlu me-reload halaman.

* **Inisialisasi**: Saat pengguna pertama kali mengunjungi website, Vercel menyajikan file `index.html`. Setelah kerangka HTML dimuat, browser akan menjalankan `script.js`.

* **Pengambilan Data Dinamis**: Begitu script berjalan (`DOMContentLoaded`), fungsi `loadContent()` akan terpicu. Fungsi ini menggunakan `fetch()` API untuk membuat request `GET` ke endpoint backend di `/api`.

* **Render Konten (DOM Manipulation)**: Setelah data JSON berhasil diterima dari backend, fungsi `populatePage()` akan berjalan. Fungsi ini secara dinamis mengisi atau membuat elemen-elemen HTML dengan data yang diterima. Misalnya, mengisi teks "Tentang Kami", membuat kartu-kartu untuk setiap divisi, dan menampilkan detail kontak serta profil developer.

* **Interaktivitas Berbasis Scroll (IntersectionObserver)**: Fitur ini adalah kunci dari pengalaman dinamis website:
    * **Animasi Masuk**: `IntersectionObserver` memantau setiap `.page-section`. Saat sebuah section masuk ke layar, elemen-elemen di dalamnya (seperti kartu atau teks) diberi class `.visible` atau `.in-view` untuk memicu animasi *fade-in* dan *slide-up* dari CSS.
    * **Navigasi Aktif**: Observer yang sama digunakan untuk mendeteksi section mana yang sedang aktif, lalu menambahkan class `.active` pada link menu navigasi yang sesuai.
    * **Pergantian Latar Belakang**: Observer ketiga memantau section yang aktif dan membaca atribut `data-bg` untuk mengganti gambar latar belakang pada `#background-overlay` dengan transisi yang halus.

---

### **4. Alur Kerja Backend**
Fungsionalitas backend proyek ini sangat efisien, terfokus hanya pada penyajian data.

* **Pemicu**: Backend hanya akan aktif ketika ada request HTTP yang masuk ke endpoint `/api`. Dalam kasus ini, request dipicu oleh `fetch()` dari frontend saat halaman dimuat.

* **Eksekusi Serverless Function**: Vercel menerima request ke `/api` dan secara otomatis menjalankan kode di dalam file `api/index.js`.

* **Proses di Backend**: Kode di `api/index.js` memiliki tugas yang sangat sederhana:
    * Mengimpor sebuah objek JavaScript (`siteData`) yang berisi semua informasi teks dan URL gambar untuk seluruh website.
    * Menggunakan metode `res.status(200).json(siteData)` untuk mengirimkan seluruh objek tersebut sebagai respons JSON dengan status "OK".

* **Tidak Ada Database**: Untuk proyek ini, database tidak digunakan. Data disimpan langsung dalam sebuah objek JavaScript di backend, yang ideal untuk konten yang tidak sering berubah dan menyederhanakan arsitektur.

---

### **5. Deployment dan Konfigurasi SSL**
Proses deployment proyek ini sepenuhnya otomatis, memanfaatkan alur kerja **Git-Ops** modern.

* **Alur Integrasi Berkelanjutan (CI/CD)**: Setiap kali ada perubahan baru yang di-*push* ke *branch* `main` di repository GitHub, Vercel secara otomatis mendeteksi perubahan tersebut dan memulai proses deployment baru.

* **Build Process**: Vercel akan menganalisis proyek, mengidentifikasi file statis (HTML, CSS, JS, gambar) dan folder `/api` yang berisi Serverless Function. Tidak ada proses kompilasi yang rumit karena ini bukan proyek berbasis framework besar seperti React.

* **SSL Otomatis**: Keamanan koneksi dijamin melalui HTTPS. Vercel secara otomatis menyediakan, mengonfigurasi, dan memperbarui sertifikat SSL untuk setiap domain yang di-deploy. Proses ini tidak memerlukan konfigurasi manual sama sekali, memastikan semua komunikasi antara pengguna dan website terenkripsi dengan aman.

---

### **6. Profil Developer**
Proyek ini didesain dan dikembangkan oleh:

* **Nama**: Roby Ariga Siagian
* **NIM**: 103032400074
* **Email**: [robyariga336@gmail.com](robyariga336@gmail.com)
* **GitHub**: [https://github.com/Tyrexs1](https://github.com/Tyrexs1)
  

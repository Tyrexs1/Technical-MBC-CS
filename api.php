<?php
// FILE: api.php

// 1. Atur header untuk memberitahu klien bahwa ini adalah respons JSON, bukan HTML.
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Izinkan akses dari domain manapun (opsional, baik untuk development)

// 2. Definisikan semua data Anda dalam sebuah array PHP.
$siteData = [
    'about_text' => 'MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia. Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat penelitian yang berdedikasi untuk memahami, mengatasi, dan mengembangkan solusi terkini dalam tiga bidang utamanya.',
    
    'divisions' => [
        [
            'title' => 'Cyber Security',
            'description' => 'Menganalisis dan mengembangkan teknik pertahanan untuk melindungi sistem, jaringan, dan data dari serangan siber.',
            'image_url' => 'cyber.jpg' // <-- Tambahkan ini
        ],
        [
            'title' => 'Game Tech',
            'description' => 'Merancang dan mengembangkan teknologi interaktif, termasuk game, simulasi, dan aplikasi Virtual/Augmented Reality.',
            'image_url' => 'gt.jpg' // <-- Tambahkan ini
        ],
        [
            'title' => 'Big Data',
            'description' => 'Mengolah dan menganalisis set data bervolume besar untuk menemukan pola, tren, dan wawasan yang berharga.',
            'image_url' => 'data.jpg' // <-- Tambahkan ini
        ],
        [
            'title' => 'Geographic Information System',
            'description' => 'Mengintegrasikan data spasial untuk visualisasi dan analisis geografis, mendukung pengambilan keputusan berbasis lokasi.',
            'image_url' => 'gis.jpg' // <-- Tambahkan ini
        ]
    ],
    
    // ==========================================================
    // BAGIAN INI YANG PERLU DIUBAH DARI VERSI LAMA ANDA
    // ==========================================================
    'contact' => [
        'instagram_url'    => 'https://www.instagram.com/mbclab/',
        'instagram_handle' => '@mbclab',
        'linkedin_url'     => 'https://www.linkedin.com/company/mbclaboratory/',
        'linkedin_handle'  => 'MBC Laboratory',
        'address'          => 'Telkom University, TULT 13.04, TULT 11.12, Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257',
        'map_iframe'       => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.307222475133!2d107.62949677499707!3d-6.97300309302484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f0a513a!2sTelkom%20University!5e0!3m2!1sen!2sid!4v167282283 Telkom University" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    ],
    // ==========================================================
    
    'developer' => [
        'name'        => 'Roby Ariga Siagian',
        'nim'         => '103032400074',
        'email'       => 'robyariga336@gmail.com',
        'github_url'  => 'https://github.com/Tyrexs1',
        'github_text' => 'github.com/Tyrexs1',
        'skills'      => 'HTML5, CSS3, JS/PHP'
    ]
];

// 3. Konversi array PHP ke format string JSON dan kirimkan sebagai respons.
echo json_encode($siteData);

// Pastikan tidak ada kode HTML atau spasi kosong di luar tag <?php ... ?>
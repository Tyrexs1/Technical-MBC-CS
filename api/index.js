const siteData = {
  about_text: "MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia. Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat penelitian yang berdedikasi untuk memahami, mengatasi, dan mengembangkan solusi terkini dalam tiga bidang utamanya.",
  divisions: [
    {
      title: "Cyber Security",
      description: "Cyber security atau keamanan siber adalah tindakan perlindungan perangkat, jaringan, program, dan data dari ancaman serangan siber serta akses ilegal.",
      image_url: "/Asset/cyber.jpg"
    },
    {
      title: "Game Tech",
      description: "Game tech atau teknologi game adalah teknologi yang digunakan untuk mengembangkan dan memproduksi game.",
      image_url: "/Asset/gt.jpg"
    },
    {
      title: "Big Data",
      description: "Big data adalah kumpulan data yang sangat besar dan kompleks yang terdiri dari data terstruktur, semi-terstruktur, dan tidak terstruktur. Big data memiliki beberapa karakteristik, yaitu volume, kecepatan, dan variasi.",
      image_url: "/Asset/data.jpg"
    },
    {
      title: "Geographic Information System",
      description: "Sistem Informasi Geografis (Geographic Information System atau GIS) adalah sebuah teknologi yang digunakan untuk mengumpulkan, mengelola, menganalisis, dan memvisualisasikan data berbasis lokasi atau geografis.",
      image_url: "/Asset/gis.jpg"
    }
  ],
  contact: {
    instagram_url: "https://www.instagram.com/mbclab/",
    instagram_handle: "@mbclab",
    linkedin_url: "https://www.linkedin.com/company/mbclaboratory/",
    linkedin_handle: "MBC Laboratory",
    address: "Telkom University, TULT 13.04, TULT 11.12, Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
    map_iframe: `<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  },
  developer: {
    name: "Roby Ariga Siagian",
    nim: "103032400074",
    email: "robyariga336@gmail.com",
    github_url: "https://github.com/Tyrexs1",
    github_text: "github.com/Tyrexs1",
    skills: "HTML, CSS, JS, Kali Linux"
  }
};

export default function handler(req, res) {
  res.status(200).json(siteData); 
}

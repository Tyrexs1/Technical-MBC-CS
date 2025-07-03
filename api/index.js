const siteData = {
  about_text: "MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan ...",
  divisions: [
    {
      title: "Cyber Security",
      description: "Menganalisis dan mengembangkan teknik pertahanan untuk ...",
      image_url: "/Asset/cyber.jpg"
    },
    {
      title: "Game Tech",
      description: "Merancang dan mengembangkan teknologi interaktif ...",
      image_url: "/Asset/gt.jpg"
    },
    {
      title: "Big Data",
      description: "Mengolah dan menganalisis set data bervolume besar ...",
      image_url: "/Asset/data.jpg"
    },
    {
      title: "Geographic Information System",
      description: "Mengintegrasikan data spasial untuk visualisasi ...",
      image_url: "/Asset/gis.jpg"
    }
  ],
  contact: {
    instagram_url: "https://www.instagram.com/mbclab/",
    instagram_handle: "@mbclab",
    linkedin_url: "https://www.linkedin.com/company/mbclaboratory/",
    linkedin_handle: "MBC Laboratory",
    address: "Telkom University, TULT 13.04, ...",
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

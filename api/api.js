const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use('/Asset', express.static(path.join(__dirname, '..', 'public', 'Asset')));
app.use(express.static(path.join(__dirname, '..', 'public')));

const siteData = {
  about_text: "MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory...",
  divisions: [
    {
      title: "Cyber Security",
      description: "Menganalisis dan mengembangkan teknik pertahanan...",
      image_url: "/Asset/cyber.jpg"
    },
    {
      title: "Game Tech",
      description: "Merancang dan mengembangkan teknologi interaktif...",
      image_url: "/Asset/gt.jpg"
    },
    {
      title: "Big Data",
      description: "Mengolah dan menganalisis set data bervolume besar...",
      image_url: "/Asset/data.jpg"
    },
    {
      title: "Geographic Information System",
      description: "Mengintegrasikan data spasial untuk visualisasi...",
      image_url: "/Asset/gis.jpg"
    }
  ],
  contact: {
    instagram_url: "https://www.instagram.com/mbclab/",
    instagram_handle: "@mbclab",
    linkedin_url: "https://www.linkedin.com/company/mbclaboratory/",
    linkedin_handle: "MBC Laboratory",
    address: "Telkom University, ...",
    map_iframe: `<iframe src="..." width="100%" height="100%" style="border:0;"></iframe>`
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

app.get('/api', (req, res) => {
  res.json(siteData);
});

module.exports = app;

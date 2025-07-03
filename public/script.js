document.addEventListener('DOMContentLoaded', function () {

    function preloadImages(imageUrls) {
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    preloadImages([
        '/Asset/aboutbg.jpg',
        '/Asset/divisibg.jpg',
        '/Asset/kontakbg.jpg',
        '/Asset/developerbg.jpg',
    ]);

    function loadContent() {
        fetch('/api')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                return response.json();
            })
            .then(data => {
                populatePage(data);
                setupObservers();
            })
            .catch(error => {
                document.body.innerHTML = `<div style="text-align: center; padding: 50px; font-family: 'Poppins', sans-serif;">
                    <h2 style="color: #d93025;">Gagal Memuat Data</h2>
                    <p>Pastikan server lokal aktif dan file <strong>api.js</strong> berjalan.</p>
                    <p><em>Error: ${error.message}</em></p>
                </div>`;
            });
    }

    function populatePage(data) {
        document.getElementById('about-text-content').textContent = data.about_text;

        const grid = document.getElementById('division-grid');
        grid.innerHTML = '';
        data.divisions.forEach(div => {
            grid.innerHTML += `
            <div class="division-card" style="background-image: url('${div.image_url}'); background-size: cover;">
                <div class="card-content">
                    <h3>${div.title}</h3>
                    <p class="card-description">${div.description}</p>
                </div>
            </div>`;
        });

        document.getElementById('map-container').innerHTML = data.contact.map_iframe;
        document.getElementById('contact-instagram').href = data.contact.instagram_url;
        document.getElementById('contact-linkedin').href = data.contact.linkedin_url;
        document.getElementById('contact-address').textContent = data.contact.address;

        document.getElementById('dev-name').textContent = data.developer.name;
        document.getElementById('dev-nim').textContent = data.developer.nim;
        document.getElementById('dev-email').textContent = data.developer.email;
        document.getElementById('dev-email').href = `mailto:${data.developer.email}`;
        document.getElementById('dev-github').href = data.developer.github_url;
        document.getElementById('dev-github').textContent = data.developer.github_text;
        document.getElementById('dev-skills').textContent = data.developer.skills;
    }

    function setupObservers() {
        const sections = document.querySelectorAll('.page-section');
        const navLinks = document.querySelectorAll('nav a');
        const backgroundOverlay = document.getElementById('background-overlay');
        let currentBg = '';

        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target.querySelector('.container');
                    if (container) container.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });

        const bgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const newBg = entry.target.getAttribute('data-bg');
                    if (newBg && newBg !== currentBg) {
                        const img = new Image();
                        img.src = newBg;
                        img.onload = () => {
                            currentBg = newBg;
                            backgroundOverlay.style.opacity = 0;
                            backgroundOverlay.addEventListener('transitionend', () => {
                                backgroundOverlay.style.backgroundImage = `url('${newBg}')`;
                                backgroundOverlay.style.opacity = 1;
                            }, { once: true });
                        };
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            fadeObserver.observe(section);
            navObserver.observe(section);
            bgObserver.observe(section);
        });
    }

    loadContent();
});

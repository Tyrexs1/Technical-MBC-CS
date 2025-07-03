document.addEventListener('DOMContentLoaded', function () {

    function loadContent() {
        fetch('/api')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Data loaded:", data);
                populatePage(data);
                setupObservers(); 
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                document.body.innerHTML = `<div style="text-align: center; padding: 50px; font-family: 'Poppins', sans-serif;">
                                                <h2 style="color: #d93025;">Gagal Memuat Data</h2>
                                                <p>Pastikan server lokal (misalnya Node.js) berjalan dan file <strong>api.js</strong> aktif.</p>
                                                <p><em>Error: ${error.message}</em></p>
                                               </div>`;
            });
    }

    function populatePage(data) {
        const aboutText = document.getElementById('about-text-content');
        if (aboutText) aboutText.textContent = data.about_text;

        const divisionGrid = document.getElementById('division-grid');
        if (divisionGrid) {
            divisionGrid.innerHTML = '';
            data.divisions.forEach(division => {
                const cardHTML = `
                    <div class="division-card" style="background-image: url('${division.image_url}'); background-size: cover; background-position: center;">
                        <div class="card-content">
                            <h3>${division.title}</h3>
                            <p class="card-description">${division.description}</p>
                        </div>
                    </div>
                `;
                divisionGrid.insertAdjacentHTML('beforeend', cardHTML);
            });
        }

        const mapContainer = document.getElementById('map-container');
        if (mapContainer) mapContainer.innerHTML = data.contact.map_iframe;

        const contactInstagram = document.getElementById('contact-instagram');
        if (contactInstagram) contactInstagram.href = data.contact.instagram_url;

        const contactLinkedIn = document.getElementById('contact-linkedin');
        if (contactLinkedIn) contactLinkedIn.href = data.contact.linkedin_url;

        const contactAddress = document.getElementById('contact-address');
        if (contactAddress) contactAddress.textContent = data.contact.address;

        const devName = document.getElementById('dev-name');
        if (devName) devName.textContent = data.developer.name;

        const devNim = document.getElementById('dev-nim');
        if (devNim) devNim.textContent = data.developer.nim;

        const devEmail = document.getElementById('dev-email');
        if (devEmail) {
            devEmail.textContent = data.developer.email;
            devEmail.href = `mailto:${data.developer.email}`;
        }

        const devGithub = document.getElementById('dev-github');
        if (devGithub) {
            devGithub.href = data.developer.github_url;
            devGithub.textContent = data.developer.github_text;
        }

        const devSkills = document.getElementById('dev-skills');
        if (devSkills) devSkills.textContent = data.developer.skills;

        console.log("UI populated.");
    }

    function setupObservers() {
        const sections = document.querySelectorAll('.page-section');
        const navLinks = document.querySelectorAll('nav a');
        const backgroundOverlay = document.getElementById('background-overlay');
        let currentBg = ''; 

        if (!backgroundOverlay) return;

        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target.querySelector('.container');
                    if (container) {
                        container.classList.add('visible');
                    }
                }
            });
        }, { threshold: 0.1 });

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });

        const bgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const newBgUrl = entry.target.getAttribute('data-bg');

                    if (newBgUrl && newBgUrl !== currentBg) {
                        const img = new Image();
                        img.src = newBgUrl;

                        img.onload = function() {
                            currentBg = newBgUrl;
                            backgroundOverlay.style.opacity = 0;

                            backgroundOverlay.addEventListener('transitionend', function() {
                                backgroundOverlay.style.backgroundImage = `url('${newBgUrl}')`;
                                backgroundOverlay.style.opacity = 1;
                             }, { once: true });
                        };
                     }
                }
         });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            animationObserver.observe(section);
            navObserver.observe(section);
            bgObserver.observe(section);
        });
    }

    loadContent();
});
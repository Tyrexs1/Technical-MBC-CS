document.addEventListener('DOMContentLoaded', function() {

    function loadContent() {
        fetch('api.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                populatePage(data);
            })
            .catch(error => {
                console.error('Fetch Error:', error);
                document.body.innerHTML = `<div style="text-align: center; padding: 50px; font-family: 'Poppins', sans-serif;">
                                            <h2 style="color: #d93025;">Gagal Memuat Data</h2>
                                            <p>Pastikan server lokal (misalnya XAMPP) berjalan dan file <strong>api.php</strong> berada di folder yang sama.</p>
                                            <p><em>Error: ${error.message}</em></p>
                                           </div>`;
            });
    }

    function populatePage(data) {
        document.getElementById('about-text-content').textContent = data.about_text;
        
       // Divisi
    const divisionGrid = document.getElementById('division-grid');
    divisionGrid.innerHTML = ''; // Mengosongkan grid sebelum diisi
    data.divisions.forEach(division => {
        // Mengubah template untuk kartu gambar
        const cardHTML = `
            <div class="division-card" style="background-image: url('${division.image_url}');">
                <div class="card-content">
                    <h3>${division.title}</h3>
                    <p class="card-description">${division.description}</p>
                </div>
            </div>
        `;
        divisionGrid.innerHTML += cardHTML;
    });

        document.getElementById('map-container').innerHTML = data.contact.map_iframe;
        
        document.getElementById('contact-instagram').href = data.contact.instagram_url;
        document.getElementById('contact-linkedin').href = data.contact.linkedin_url;
        document.getElementById('contact-address').textContent = data.contact.address;

        document.getElementById('dev-name').textContent = data.developer.name;
        document.getElementById('dev-nim').textContent = data.developer.nim;
        
        const devEmail = document.getElementById('dev-email');
        devEmail.textContent = data.developer.email;
        devEmail.href = `mailto:${data.developer.email}`;

        const devGithub = document.getElementById('dev-github');
        devGithub.href = data.developer.github_url;
        devGithub.textContent = data.developer.github_text;

        document.getElementById('dev-skills').textContent = data.developer.skills;
    }

    function setupObservers() {
        const sections = document.querySelectorAll('.page-section');
        const navLinks = document.querySelectorAll('nav a');
        
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.container').classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // === PERUBAHAN KUNCI DI SINI ===
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
        // Opsi "root" dihapus agar observer menggunakan viewport, sesuai dengan struktur CSS baru
        }, { rootMargin: '-50% 0px -50% 0px' }); 

        sections.forEach(section => {
            animationObserver.observe(section);
            navObserver.observe(section);
        });
    }

    loadContent();
    setupObservers();
});
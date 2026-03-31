document.addEventListener("DOMContentLoaded", function () {

    // 1. СТРУКТУРА ГАЛЕРЕИ И LIGHTBOX (STRUCTURE DE LA GALERIE)
    const galleryContainer = document.getElementById('gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (galleryContainer) {
        for (let i = 1; i <= 15; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item animate-on-scroll';

            item.innerHTML = `
                <img src="img/${i}.jpg" alt="Entraînement ADF ${i}" loading="lazy">
                <div class="gallery-overlay"></div>
            `;

            // Événement pour ouvrir la photo en grand
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                lightboxImg.src = imgSrc;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Bloque le scroll
            });

            galleryContainer.appendChild(item);
        }
    }

    // Fermer la lightbox au clic sur le bouton "X"
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Réactive le scroll
        });
    }

    // Fermer la lightbox au clic sur le fond noir
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 2. АНИМАЦИЯ ГЕРОЯ (ANIMATION HERO)
    const heroElements = document.querySelectorAll('.animate-pop-in');
    heroElements.forEach(el => {
        setTimeout(() => {
            el.classList.add('is-visible');
        }, 150);
    });

    // 3. АНИМАЦИЯ ПРИ СКРОЛЛЕ (INTERSECTION OBSERVER)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // On observe les éléments classiques + les nouveaux items de la galerie
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(el => observer.observe(el));
});


// 4. ПОДВАЛ (FOOTER)
// On s'assure que le footer existe avant d'injecter le HTML
const footer = document.querySelector('footer');
if (footer) {
    footer.innerHTML = `
        <div class="container">
            <img src="img/logo-abeille.svg" alt="Logo" class="logo-img" style="filter: brightness(0) invert(1);">
            <div class="social-links">
                <a href="https://www.instagram.com/adfautodefensefeminine" target="_blank" class="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/p/Self-d%C3%A9fense-au-f%C3%A9minin-Mulhouse-100067050672660" target="_blank" class="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
            </div>
            <p>© 2026 Auto Défense Féminine. UHA/IUT Projet.</p>
        </div>`;
}
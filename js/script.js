document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Анимация при загрузке страницы (Hero секция)
    const heroElements = document.querySelectorAll('.animate-pop-in');
    heroElements.forEach(el => {
        setTimeout(() => {
             el.classList.add('is-visible');
        }, 300);
    });


    // 2. Intersection Observer для анимации при прокрутке
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(el => observer.observe(el));


    // 3. Плавный скролл для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
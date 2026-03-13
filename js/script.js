document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Анимация при загрузке страницы
    const heroElements = document.querySelectorAll('.animate-pop-in');
    heroElements.forEach(el => {
        setTimeout(() => {
             el.classList.add('is-visible');
        }, 150);
    });

    // 2. Intersection Observer для анимации при прокрутке
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

    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(el => observer.observe(el));
});
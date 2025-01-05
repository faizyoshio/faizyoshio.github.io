document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.nav');

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');
    
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const dots = slider.querySelectorAll('.slider-dot');
        let currentIndex = 0;

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        function updateSlider() {
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    });
});

    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    const skillsGrid = document.querySelector('.skills-grid');
    const skillItems = document.querySelectorAll('.skill-item');
    const skillCount = skillItems.length;
    
    document.documentElement.style.setProperty('--skill-count', skillCount);

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav--visible');
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('nav--visible');
        }
    });
}); 

let lastScroll = 0;
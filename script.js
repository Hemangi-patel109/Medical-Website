function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('mobile-visible');
}

document.addEventListener('click', function (event) {
    const nav = document.querySelector('.nav-links');
    const menuIcon = document.getElementById('menu-icon');

    const isClickInsideNav = nav.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideNav && !isClickOnMenuIcon) {
        nav.classList.remove('mobile-visible');
    }
});

document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const parent = question.parentElement;
        parent.classList.toggle('active');
    });
});


const topCarousel = new bootstrap.Carousel('#carouselTop', {
    interval: 4000,
    ride: 'carousel'
});

const bottomCarousel = new bootstrap.Carousel('#carouselBottom', {
    interval: 7000,
    ride: 'carousel'
});


new Swiper('.swiper-container', {
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});


// cart

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
const notModalClose = document.querySelector('.overlay');

buttonCart.addEventListener('click', function () {
    modalCart.classList.add('show');
});


modalCart.addEventListener('click', (e) => {
    if (e.target === modalClose || e.target === notModalClose) {
        modalCart.classList.remove('show');
    }
});


// scroll smooth

const scrollLinks = document.querySelectorAll('a.scroll-link');

for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        const id = scrollLinks[i].getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}






















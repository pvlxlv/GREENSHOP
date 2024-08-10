$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        768: {
            items: 3
        },
        540: {
          items: 2
        },
        1100:{
            items:4
        }
    }

})

const burger = document.querySelector('.burger-menu-icon');
const navLinks = document.querySelector('.nav_main-container');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    body.classList.toggle('fixed-position');
});

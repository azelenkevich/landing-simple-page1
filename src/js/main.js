
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import AOS from 'aos';


const mySwiper = new Swiper('.services__slider', {

    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true
  });


const Swiper2 = new Swiper('.offers__slider', {

    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
      nextEl: '.offers__next',
      prevEl: '.offers__prev',
    },
  
});

AOS.init({
  once: true
});

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();  
    const blockID = item.getAttribute('href').substr(1); 
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const body = document.querySelector('body'),
      burger = body.querySelector('#burger'),
      menuMobile = body.querySelector('#menu-mobile'),
      menuClose = body.querySelector('#menu-mobile__close'),
      menuLink = body.querySelectorAll('.menu-mobile__link');


burger.addEventListener('click', () => {
    menuMobile.classList.add('menu-active');
    body.style.overflow = 'hidden';
});

function closeMenu(){
  menuMobile.classList.remove('menu-active');
  body.style.overflow = 'initial';
}

menuClose.addEventListener('click', () => {
  closeMenu();
});

menuLink.forEach(item => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});


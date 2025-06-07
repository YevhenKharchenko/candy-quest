import Swiper from 'swiper';
import 'swiper/css/bundle';

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: false,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 0,
  allowTouchMove: false,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
      grabCursor: true,
      allowTouchMove: true,
    },
  },
  on: {
    init: () => {
      document.querySelector('.reviews-swiper-container').classList.add('show');
    },
  },
});

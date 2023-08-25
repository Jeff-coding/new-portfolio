const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    spaceBetween: 8,
    autoplay: {
        delay: 1000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
        },
        767: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5
        }

      }
  });
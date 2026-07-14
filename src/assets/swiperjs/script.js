window.addEventListener("load", () => {
  window.projectSwiper = null;

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        // Native CSS scroll on mobile — hardware-accelerated, eliminates JS-driven swipe jank
        cssMode: true,
      },
      750: {
        slidesPerView: 2,
        // Keep native scroll on tablet as well
        cssMode: true,
      },
      1500: {
        slidesPerView: 3,
        // Desktop: JS mode keeps grab cursor and smooth easing
        cssMode: false,
      },
    },
  });

  window.projectSwiper = swiper;
});

window.addEventListener("load", () => {
  window.projectSwiper = null;
  window.swiperModalOpen = false;
  window.swiperSectionVisible = false;

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    grabCursor: 'true',
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
      },
      750: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 3,
      },
    },
  });

  window.projectSwiper = swiper;

  // Hover: always stop on enter; only resume on leave if modal is closed and section is visible
  var slideEl = document.querySelector('.slide-content');
  if (slideEl) {
    slideEl.addEventListener('mouseenter', function () {
      swiper.autoplay.stop();
    });
    slideEl.addEventListener('mouseleave', function () {
      if (!window.swiperModalOpen && window.swiperSectionVisible) {
        swiper.autoplay.start();
      }
    });
  }

  // Only run autoplay while the projects section is visible
  var projectsSection = document.getElementById('projects');
  if (projectsSection) {
    swiper.autoplay.stop();

    var observer = new IntersectionObserver(
      function (entries) {
        window.swiperSectionVisible = entries[0].isIntersecting;
        if (window.swiperSectionVisible && !window.swiperModalOpen) {
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(projectsSection);
  }
});

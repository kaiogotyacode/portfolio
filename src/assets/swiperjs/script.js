window.addEventListener("load", () => {
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

  // Only run autoplay while the projects section is visible
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    swiper.autoplay.stop();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

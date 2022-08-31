function swiperConfig() {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    // slidesPerColumn: 4,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   1440: {
    //     slidesPerView: 3,
    //     slidesPerColumn: 2,
    //   },
    //   1024: {
    //     slidesPerView: 3,
    //     slidesPerColumn: 2,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //     slidesPerColumn: 2,
    //   },
    //   320: {
    //     slidesPerView: 1,
    //     slidesPerColumn: 2,
    //   },
    // },
  });
  const swiper1 = new Swiper(".swiper-container1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

module.exports = swiperConfig;

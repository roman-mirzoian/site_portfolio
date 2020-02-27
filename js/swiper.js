var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerColumn: 2
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      320: {
        slidesPerView: 1,
        slidesPerColumn: 2,
      }
    },
  });
  var swiper1 = new Swiper('.swiper-container1', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
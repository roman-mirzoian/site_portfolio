"use strict";

const aosApp = require("./parts/aosApp");
const slowScrollToItem = require("./parts/slowScroll");
const swiperConfig = require("./swiper/swiper-config");
const initSplide = require("./splide-grid/splide-grid-init");

window.addEventListener("DOMContentLoaded", function () {
  initSplide();
  aosApp();
  slowScrollToItem();
  swiperConfig();
});

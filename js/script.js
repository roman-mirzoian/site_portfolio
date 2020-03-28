window.addEventListener('DOMContentLoaded', function () {

    "use strict";

    let aosApp = require('./parts/aosApp'),
        slowScrollToItem = require('./parts/slowScroll'),
        swiper = require('./parts/swiper'),
        swiperItem = require('./parts/projectSwiperSite');
    
    swiperItem();
    aosApp();
    slowScrollToItem();
    swiper();
});


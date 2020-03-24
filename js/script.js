window.addEventListener('DOMContentLoaded', function () {

    "use strict";

    let aosApp = require('./parts/aosApp'),
        slowScroll = require('./parts/slowScroll'),
        swiper = require('./parts/swiper');

    aosApp();
    slowScroll();
    swiper();
});


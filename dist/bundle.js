/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/aosApp.js":
/*!****************************!*\
  !*** ./js/parts/aosApp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function aosApp() {
  AOS.init({
    // Global settings:
    disable: false,
    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded',
    // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init',
    // class applied after initialization
    animatedClassName: 'aos-animate',
    // class applied on animation
    useClassNames: false,
    // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false,
    // disables automatic mutations' detections (advanced)
    debounceDelay: 50,
    // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,
    // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 1000,
    // values from 0 to 3000, with step 50ms
    easing: 'ease',
    // default easing for AOS animations
    once: false,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  });
}

module.exports = aosApp;

/***/ }),

/***/ "./js/parts/projectSwiperSite.js":
/*!***************************************!*\
  !*** ./js/parts/projectSwiperSite.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function SwiperItem() {
  "use strict";

  var marketika = {
    href: "https://romamirzo.github.io/layout_marketika/",
    src: "img/dribble_shot_marketika.PNG"
  },
      myCompany = {
    href: "https://romamirzo.github.io/layout_myCompany/",
    src: "img/dribble_shot_someproject.PNG"
  },
      siteKino = {
    href: "https://romamirzo.github.io/site_kino/",
    src: "img/dribble_shot_films.PNG"
  },
      medicineSite = {
    href: "https://romamirzo.github.io/medicine_site/",
    src: "img/dribble_shot_pills.PNG"
  },
      portfolio = {
    href: "https://romamirzo.github.io/site_portfolio/",
    src: "img/dribble_shot_portfolio.PNG"
  },
      passwordGenerator = {
    href: "https://romamirzo.github.io/jsLoginPasswordGenerator/",
    src: "img/dribble_shot_generator.PNG"
  },
      snakeGame = {
    href: "https://romamirzo.github.io/snake_game/",
    src: "img/dribble_shot_snake.PNG"
  },
      converter = {
    href: "https://romamirzo.github.io/currencyConverterAjax/",
    src: "img/dribble_shot_converter.PNG"
  },
      stubbsTest = {
    href: "https://romamirzo.github.io/StubbsTest/",
    src: "img/dribble_shot_idMetal.PNG"
  },
      reactMovieApp = {
    href: "https://romamirzo.github.io/reactMovieApp/",
    src: "img/dribble_shot_reactMovieApp.PNG"
  };
  var siteInfo = [marketika, myCompany, siteKino, medicineSite, portfolio, passwordGenerator, snakeGame, converter, stubbsTest, reactMovieApp];
  var reverseSiteInfo = siteInfo.reverse();
  var swiperDiv = document.getElementsByClassName("swiper-wrapper")[0];

  function insertSwiperItem(siteInfo) {
    for (var i = 0; i < siteInfo.length; i++) {
      swiperDiv.insertAdjacentHTML('afterbegin', "<div class=\"swiper-slide\"><a href=\"".concat(siteInfo[i].href, "\" target=\"_blank\" class=\"potrfol_img\"><img src=\"").concat(siteInfo[i].src, "\" alt=\"myDribble-shot\"></a></div>")); // console.log(i);
    }
  }

  ;
  insertSwiperItem(reverseSiteInfo);
}

module.exports = SwiperItem;

/***/ }),

/***/ "./js/parts/slowScroll.js":
/*!********************************!*\
  !*** ./js/parts/slowScroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slowScrollToItem() {
  var portfolioBtn = document.getElementById('portfolioBtn'),
      skillsBtn = document.getElementById('skillsBtn'),
      aboutBtn = document.getElementById('aboutBtn'),
      contactBtn = document.getElementById('contactBtn');

  function slowScroll(id) {
    var offset = 70;
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
  }

  portfolioBtn.addEventListener('click', function () {
    slowScroll("#project");
  });
  skillsBtn.addEventListener('click', function () {
    slowScroll("#skills");
  });
  aboutBtn.addEventListener('click', function () {
    slowScroll("#about");
  });
  contactBtn.addEventListener('click', function () {
    slowScroll("#contact");
  });
}

module.exports = slowScrollToItem;

/***/ }),

/***/ "./js/parts/swiper.js":
/*!****************************!*\
  !*** ./js/parts/swiper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function swiper() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerColumn: 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerColumn: 2
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2
      },
      320: {
        slidesPerView: 1,
        slidesPerColumn: 2
      }
    }
  });
  var swiper1 = new Swiper('.swiper-container1', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}

module.exports = swiper;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var aosApp = __webpack_require__(/*! ./parts/aosApp */ "./js/parts/aosApp.js"),
      slowScrollToItem = __webpack_require__(/*! ./parts/slowScroll */ "./js/parts/slowScroll.js"),
      swiper = __webpack_require__(/*! ./parts/swiper */ "./js/parts/swiper.js"),
      swiperItem = __webpack_require__(/*! ./parts/projectSwiperSite */ "./js/parts/projectSwiperSite.js");

  swiperItem();
  aosApp();
  slowScrollToItem();
  swiper();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
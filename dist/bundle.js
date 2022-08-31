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
    once: true,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  });
}

module.exports = aosApp;

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

/***/ "./js/potrfolio-tile-data.js":
/*!***********************************!*\
  !*** ./js/potrfolio-tile-data.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var marketika = {
  href: "https://roman-mirzoian.github.io/layout_marketika/",
  src: "img/dribble_shot_marketika.jpg"
},
    myCompany = {
  href: "https://roman-mirzoian.github.io/layout_myCompany/",
  src: "img/dribble_shot_someproject.jpg"
},
    siteKino = {
  href: "https://roman-mirzoian.github.io/site_kino/",
  src: "img/dribble_shot_films.jpg"
},
    medicineSite = {
  href: "https://roman-mirzoian.github.io/medicine_site/",
  src: "img/dribble_shot_pills.jpg"
},
    portfolio = {
  href: "https://roman-mirzoian.github.io/site_portfolio/",
  src: "img/dribble_shot_portfolio.jpg"
},
    passwordGenerator = {
  href: "https://roman-mirzoian.github.io/jsLoginPasswordGenerator/",
  src: "img/dribble_shot_generator.jpg"
},
    snakeGame = {
  href: "https://roman-mirzoian.github.io/snake_game/",
  src: "img/dribble_shot_snake.jpg"
},
    converter = {
  href: "https://roman-mirzoian.github.io/currencyConverterAjax/",
  src: "img/dribble_shot_converter.jpg"
},
    stubbsTest = {
  href: "https://roman-mirzoian.github.io/StubbsTest/",
  src: "img/dribble_shot_idMetal.jpg"
},
    reactMovieApp = {
  href: "https://roman-mirzoian.github.io/reactMovieApp/",
  src: "img/dribble_shot_reactMovieApp.jpg"
};
var tilesData = [marketika, myCompany, siteKino, medicineSite, portfolio, passwordGenerator, snakeGame, converter, stubbsTest, reactMovieApp];
module.exports = tilesData;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aosApp = __webpack_require__(/*! ./parts/aosApp */ "./js/parts/aosApp.js");

var slowScrollToItem = __webpack_require__(/*! ./parts/slowScroll */ "./js/parts/slowScroll.js");

var swiperConfig = __webpack_require__(/*! ./swiper/swiper-config */ "./js/swiper/swiper-config.js");

var initSplide = __webpack_require__(/*! ./splide-grid/splide-grid-init */ "./js/splide-grid/splide-grid-init.js");

window.addEventListener("DOMContentLoaded", function () {
  initSplide();
  aosApp();
  slowScrollToItem();
  swiperConfig();
});

/***/ }),

/***/ "./js/splide-grid/splide-grid-init.js":
/*!********************************************!*\
  !*** ./js/splide-grid/splide-grid-init.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tilesData = __webpack_require__(/*! ../potrfolio-tile-data */ "./js/potrfolio-tile-data.js");

var tiles = getTilesElements();

function initSplide() {
  new Splide("#splide", {
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: "1rem",
        col: "1rem"
      }
    },
    breakpoints: {
      800: {
        grid: {
          rows: 2,
          cols: 1
        }
      },
      600: {
        grid: false
      }
    }
  }).mount({
    Grid: window.splide.Extensions.Grid
  });

  for (var i = 0; i < tiles.length; i++) {
    var tile = tiles[i][0];
    tile.insertAdjacentHTML("afterbegin", "\n        <a href=\"".concat(tilesData[i].href, "\" target=\"_blank\" class=\"potrfol_img\">\n          <img src=\"").concat(tilesData[i].src, "\" alt=\"myDribble-shot\">\n        </a>\n      "));
  }
}

function getTilesElements() {
  var number = 1;
  var tiles = [];

  function getTile() {
    var id = "#tile".concat(number > 9 ? number : "0".concat(number));
    var tile = document.querySelectorAll(id);

    if (tile.length) {
      tiles.push(tile);
      number++;
      getTile();
    }
  }

  getTile();
  return tiles;
}

module.exports = initSplide;

/***/ }),

/***/ "./js/swiper/swiper-config.js":
/*!************************************!*\
  !*** ./js/swiper/swiper-config.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function swiperConfig() {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    // slidesPerColumn: 4,
    grid: {
      rows: 2
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    } // breakpoints: {
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
  var swiper1 = new Swiper(".swiper-container1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

module.exports = swiperConfig;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
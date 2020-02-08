"use strict";


// header
let header = $("header");
header.hide();
header.slideDown(1000);

// preview
// preview image
let prevImg = $("#prevImgFile");
let positionPrevImg = prevImg.offset().left;
let startPrevImg = positionPrevImg - 200;
prevImg.hide();

let movePrevImg = function() {
    prevImg.fadeIn(1000);
    prevImg.offset({left: startPrevImg});
    startPrevImg++;
  if(startPrevImg >= positionPrevImg) {
    clearInterval(intervalIdPrevImg);
  };
};

let intervalIdPrevImg = setInterval(movePrevImg, 5);

// preview text
let prevText = $("#prevText");
let positionPrevText = prevText.offset().left;
let startPrevText = positionPrevText + 200;

prevText.hide();

let movePrevText = function() {
    prevText.fadeIn(1000);
    prevText.offset({left: startPrevText});
    startPrevText--;
  if(startPrevText <= positionPrevText) {
    clearInterval(intervalIdPrevText);
  };
};

let intervalIdPrevText = setInterval(movePrevText, 5);


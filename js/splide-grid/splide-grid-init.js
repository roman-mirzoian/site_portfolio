const tilesData = require("../potrfolio-tile-data");

const tiles = getTilesElements();

function initSplide() {
  new Splide("#splide", {
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: "1rem",
        col: "1rem",
      },
    },
    breakpoints: {
      800: {
        grid: {
          rows: 2,
          cols: 1,
        },
      },
      600: {
        grid: false,
      },
    },
  }).mount({ Grid: window.splide.Extensions.Grid });

  for (let i = 0; i < tiles.length; i++) {
    const tile = tiles[i][0];
    tile.insertAdjacentHTML(
      "afterbegin",
      `
        <a href="${tilesData[i].href}" target="_blank" class="potrfol_img">
          <img src="${tilesData[i].src}" alt="myDribble-shot">
        </a>
      `
    );
  }
}

function getTilesElements() {
  let number = 1;
  const tiles = [];

  function getTile() {
    const id = `#tile${number > 9 ? number : `0${number}`}`;
    const tile = document.querySelectorAll(id);
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

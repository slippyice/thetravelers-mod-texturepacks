

//////////////////////////////////
/*
texture pack mod for thetravelers.online
created by slippy/hentai
version: 0.2.0
THIS IS AN EARLY TEST VERSION,
MISSING MOST FEATURES,
DO NOT USE
*/
///////////////////////////////////
var textCompat = function (char) {
  for (var tile in TEXTUREPACK.default.TILES) {
    if (char === TEXTUREPACK.default.TILES[tile]) {return WORLD.TILES[tile];}
  }
  return char;
  /*switch (char) {
    case "\u258B": //monument
      return WORLD.TILES.monument;
      break;
  }*/
}
var selectedPack = "slippy_dark";

var defaultColor = function() {
  if (SETTINGS.darkmode) {
    //console.log('white');
    return 'white';
  } else {
    //console.log('black');
    return 'black';
  }
}

//usage: color = colorPicker(char);
//returns css style "color:aColor;"
var colorPicker = function (char) {
  for (var tile in TEXTUREPACK[selectedPack].TILES) {
    if (char === TEXTUREPACK[selectedPack].TILES[tile]) {
      if (TEXTUREPACK[selectedPack].COLORS[tile]) {
        return TEXTUREPACK[selectedPack].COLORS[tile];
      }
    }
  }
  return defaultColor();
}

var TEXTUREPACK = {
  default: {
    TILES: {
      traveler: '&amp;',
      sand: '&nbsp;',
      grass: ',',
      tree: 't',
      water: 'w',
      swamp: '~',
      mountain: 'M',
      forest: 'T',
      house: 'H',
      city: 'C',
      startbox: 'u',
      monument: "\u258B",
      island: '.',
      worldedge: '\u2591',

      // building materials
      sign_block: "¶",
      wood_block: "+",
      wood_door: "D",
      scrap_block: "#",
      scrap_door: "<b>D</b>",
      steel_block: "<b>#</b>",
      steel_door: "$",
      small_chest: "◻",
      large_chest: "▭",
      anchor: "┬",
    }
  },
  slippy_light: {

  },
  slippy_dark: {
    TILES: {
      traveler: '&amp;',
      sand: '&nbsp;',
      grass: ',',
      tree: 't',
      water: 'w',
      swamp: '~',
      mountain: 'M',
      forest: 'T',
      house: 'H',
      city: 'C',
      startbox: 'u',
      monument: "\u258B",
      island: '.',
      worldedge: '\u2591',

      // building materials
      sign_block: "¶",
      wood_block: "+",
      wood_door: "D",
      scrap_block: "#",
      scrap_door: "<b>D</b>",
      steel_block: "<b>#</b>",
      steel_door: "$",
      small_chest: "◻",
      large_chest: "▭",
      anchor: "┬"
    },
    COLORS: {
      //traveler: 'white',
      //sand: 'white',
      grass: '#2f8735',
      tree: '#3dbf06',
      water: '#446e73',
      swamp: '#97c971',
      mountain: '#919191',
      forest: '#408211',
      house: '#f79f4d',
      city: '#f77a4d',
      //startbox: 'white',
      monument: '#b24ced',
      island: '#dbd195',
      //worldedge: 'white',

      // building materials
      sign_block: 'yellow',
      wood_block: 'yellow',
      wood_door: 'yellow',
      scrap_block: 'yellow',
      scrap_door: 'yellow',
      steel_block: 'yellow',
      steel_door: 'yellow',
      small_chest: 'yellow',
      large_chest: 'yellow',
      anchor: 'yellow'
    }
    //font support when?
  }
}

////////////////NOT MY CODE BELOW HERE/ AKA GAME CODE, THIS IS REALLY BAD PRACTICE//////////REMINDER TO SELF, WRITE PROPER INJECTOR
WORLD.checkPlayersAndObjs = function () {
        for (let i = 0; i < this.otherStumps.length; i++) {
            let x = this.otherStumps[i].x,
                y = this.otherStumps[i].y;

            if (YOU.x === x && YOU.y === y) {
                YOU.currentTile = WORLD.TILES.grass;
            } else {
                WORLD.changeTile(x, y, WORLD.TILES.grass);
            }
        }

        for (let i = 0; i < this.otherPlayers.length; i++) {
            let x = this.otherPlayers[i].x,
                y = this.otherPlayers[i].y;

            // in case you forget, this will not need to include future building types, only ones that are generated in the clientside worldgen
            WORLD.changeTile(x, y, WORLD.TILES.traveler, true);
        }

        let atop = false;
        //HANDS.doorBtn.style.display = "none";
        HANDS.breakBtnEl.style.display = "none";
        for (let i = 0; i < this.otherObjs.length; i++) {
            let x = this.otherObjs[i].x,
                y = this.otherObjs[i].y,
                char = this.otherObjs[i].char,
                canWalkOver = this.otherObjs[i].walk_over;

            if (char === "H") { // texturepack compatibility
                char = WORLD.TILES.house;
            }
            if (char === "C") {
                char = WORLD.TILES.city;
            }
            char = textCompat(char);

            // if it's a door and next to you, show "open door" button // DEPRECATED, OPEN DOOR BUTTON IS REMOVED, NOW YOU WALK INTO DOORS TO OPEN THEM
            //if (Math.abs(x - YOU.x) <= 1 && Math.abs(y - YOU.y) <= 1 && this.otherObjs[i].is_door) {
            //    HANDS.doorBtn.style.display = "";
            //    HANDS.breakBtnEl.style.display = "";
            //}

            // if it's breakable and next to you, show "dismantle" button
            if (Math.abs(x - YOU.x) <= 1 && Math.abs(y - YOU.y) <= 1 && (this.otherObjs[i].is_breakable || this.otherObjs[i].is_door)) {
                HANDS.breakBtnEl.style.display = "";
            }

            if (canWalkOver) {
                if ((YOU.x !== x || YOU.y !== y)) {
                    if (document.getElementById(x + "|" + y).innerHTML !== WORLD.TILES.traveler) {
                        WORLD.changeTile(x, y, char);
                    }
                }
            } else {
                WORLD.changeTile(x, y, char);

                if (YOU.x === x && YOU.y === y) {
                    atop = true;
                }
            }
        }
        
        ENGINE.atop_another = atop;
    }

WORLD.build = function () {
        let count = 0;
        for (let i = -1 * this.gridRadius; i <= this.gridRadius; i++) {
            for (let j = -1 * this.gridRadius; j <= this.gridRadius; j++) {
                let newX = YOU.x + j,
                    newY = YOU.y - i,
                    tile = this.deriveTile(newX, newY);

                WORLD.tilemap[count].id = newX + "|" + newY;
                WORLD.tilemap[count].innerHTML = tile;
                WORLD.tilemap[count].style.fontWeight = "";
                WORLD.tilemap[count].style.color = colorPicker(tile);

                if (newX === YOU.x && newY === YOU.y) {
                    YOU.currentTile = tile;
                    WORLD.tilemap[count].innerHTML = YOU.char;
                }

                count++;
            }
        }

        this.coordsElem.innerHTML = YOU.getCoordString();
        this.biomeElem.innerHTML = YOU.biome;

        YOU.checkMoveLog();
    }

WORLD.changeTile = function (x, y, c, checkStructs) {
        if (checkStructs === undefined) checkStructs = false; 

        let item = WORLD.deriveTile(x, y);
        if (checkStructs && (item === WORLD.TILES.house || item === WORLD.TILES.city || item === WORLD.TILES.monument)) {
            return;
        }

        if (document.getElementById(x + "|" + y) !== null) document.getElementById(x + "|" + y).innerHTML = c;
          document.getElementById(x + "|" + y).style.color = colorPicker(c);
    }

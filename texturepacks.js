
//////////////////////////////////
/*
texture pack mod for thetravelers.online
created by slippy/hentai
version: 0.5.1
THIS IS AN EARLY TEST VERSION,
MISSING MOST FEATURES
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
  if (SETTINGS.darkmode === "true") {
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
  if (!TEXTUREPACK[selectedPack].COLORS) {return defaultColor();}
  for (var tile in TEXTUREPACK[selectedPack].TILES) {
    if (char === TEXTUREPACK[selectedPack].TILES[tile]) {
      if (TEXTUREPACK[selectedPack].COLORS[tile]) {
        //console.log("i picked a pack color");
        return TEXTUREPACK[selectedPack].COLORS[tile];
      }
    }
  }
  //console.log("i didn't find a pack color");
  return defaultColor();
}

var defaultFont = "'Courier New', Courier, monospace";
var fontPicker = function () {
  if (TEXTUREPACK[selectedPack].FONTS) {
    return TEXTUREPACK[selectedPack].FONTS
  } else {
    return defaultFont;
  }
}

var packSwitcher = function (pack) {
  if (!TEXTUREPACK.hasOwnProperty(pack)) {return false;}
  selectedPack = pack;
  WORLD.TILES = {...TEXTUREPACK.default.TILES, ...TEXTUREPACK[pack].TILES};//should i always reset to default or should i let the previous pack bleed over?
  return true;
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

      // special locations
      body: "@",
      drop: "n",
      hole: "o",
      sepulchre: "<b>S</b>",
      bunker: "_",
      base: "B",
      pyramid: "<b>\u25B3</b>",
      water_cube: "\u2B13",
      fort_wall: "\u25EB",
      fort_door: "\u25A5",
      fortress: "\u2B1F"
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
      anchor: "┬",

      // special locations
      body: "@",
      drop: "n",
      hole: "o",
      sepulchre: "<b>S</b>",
      bunker: "_",
      base: "B",
      pyramid: "<b>\u25B3</b>",
      water_cube: "\u2B13",
      fort_wall: "\u25EB",
      fort_door: "\u25A5",
      fortress: "\u2B1F"
    },
    COLORS: {
      //traveler: 'white',
      sand: '#dbd195',
      grass: '#2f8735',
      tree: '#3dbf06',
      water: '#446e73',
      swamp: '#63731f',//'#97c971',
      mountain: '#919191',
      forest: '#408211',
      house: '#f79f4d',
      city: '#f77a4d',
      startbox: '#ed809d',
      monument: '#8552a3',//'#301440',//'#b24ced',
      island: '#dbd195',
      worldedge: '#d1c3d9',

      // building materials
      sign_block: '#ffbf00',
      wood_block: '#cc9745',//'#915f13',
      wood_door: '#c9782c',
      scrap_block: '#59706f',
      scrap_door: '#a3c7bd',
      steel_block: '#677f8a',
      steel_door: '#9badcc',
      small_chest: '#a84f6d',
      large_chest: '#d15858',
      anchor: '#92809e',

      // special locations
      body: '#ed809d',
      drop: '#ed809d',
      hole: '#ed809d',
      sepulchre: '#8552a3',
      bunker: '#f20f0f',
      base: '#fa431e',
      pyramid: '#8552a3',
      water_cube: '#8552a3',
      fort_wall: '#8552a3',
      fort_door: '#8552a3',
      fortress: '#8552a3'
    },
    //FONTS: "Comic Sans MS"
    //font support when? NOW!
  },
  switch_test: {
    TILES: {
      traveler: '%',
      sand: 'S',
      grass: 'g',
      tree: 't',
      water: 'W',
      swamp: '~',
      mountain: 'm',
      forest: 'T',
      house: '>',
      city: '<',
      startbox: 'u',
      monument: "\u258B",
      island: '.',
      worldedge: '\u2591',
    },
    FONTS: "Comic Sans MS"
  }
}
TEXTUREPACK.slippy_dark_font = {
  //this is an example where you can make minor modifications to an existing pack
  ...TEXTUREPACK.slippy_dark,
  //after adding an existing pack you can start overwriting things
  FONTS: "Comic Sans MS"
}

//dont init multiple times, why? idk.
var init = function() {
  //world build
  var build_rem = 'WORLD.tilemap[count].style.fontWeight = "";';
  var build_add = 'WORLD.tilemap[count].style.fontWeight = "";WORLD.tilemap[count].style.color = colorPicker(tile);WORLD.tilemap[count].style.fontFamily = fontPicker(tile);';
  var build_str = WORLD.build.toString();
  build_str = build_str.replace(build_rem, build_add);
  WORLD.build = eval('('+build_str+')');//thank you LightningWB
  //texture compat
  var compat_rem = 'if (char === "H") {char = WORLD.TILES.house; } if (char === "C") { char = WORLD.TILES.city; }';
  var compat_add = 'char=textCompat(char);';
  var compat_str = WORLD.checkPlayersAndObjs.toString();
  compat_str = compat_str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'');//remove comments
  //wtf is that regex?! https://stackoverflow.com/questions/37051797/remove-comments-from-string-with-javascript-using-javascript
  compat_str = compat_str.replace(/\n/g, '');//remove line breaks
  compat_str = compat_str.replace(/\s\s/g,'');//remove unnessesary whitespace
  compat_str = compat_str.replace(compat_rem, compat_add);
  WORLD.checkPlayersAndObjs = eval('('+compat_str+')');//thank you LightningWB
  //change tile
  WORLD.changeTile = (function() {
    var cached_function = WORLD.changeTile
    return function() {
      var result = cached_function.apply(this, arguments);
      document.getElementById(arguments[0] + "|" + arguments[1]).style.color = colorPicker(arguments[2]);
      document.getElementById(arguments[0] + "|" + arguments[1]).style.fontFamily = fontPicker(arguments[2]);
      return result;
    };
  })();
  packSwitcher("default");
}
init();

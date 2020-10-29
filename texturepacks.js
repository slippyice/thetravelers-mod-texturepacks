
//////////////////////////////////
/*
texture pack mod for thetravelers.online
created by slippy/hentai
version: 0.8.2
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
  if (!COMPILEDPACK.COLORS) {return "";}//defaultColor()
  for (var tile in COMPILEDPACK.TILES) {
    if (char === COMPILEDPACK.TILES[tile]) {
      if (COMPILEDPACK.COLORS[tile]) {
        //console.log("i picked a pack color");
        return COMPILEDPACK.COLORS[tile];
      }
    }
  }
  //console.log("i didn't find a pack color");
  return "";//defaultColor()
}

var defaultFont = "'Courier New', Courier, monospace";
var fontPicker = function (char) {
  if (!COMPILEDPACK.FONTS) {return "";}//defaultFont
  for (var tile in COMPILEDPACK.TILES) {
    if (char === COMPILEDPACK.TILES[tile]) {
      if (COMPILEDPACK.FONTS[tile]) {
        return COMPILEDPACK.FONTS[tile];
      }
    }
  }
  return "";//defaultFont
}

var worldColor = function () {
  if (!COMPILEDPACK.WORLD) {return "";}
  if (COMPILEDPACK.WORLD.color) {
    return COMPILEDPACK.WORLD.color;
  } else {
    return "";
  }
}
var worldBackgroundColor = function () {
  if (!COMPILEDPACK.WORLD) {return "";}
  if (COMPILEDPACK.WORLD.background) {
    return COMPILEDPACK.WORLD.background;
  } else {
    return "";
  }
}
var worldFont = function () {
  if (!COMPILEDPACK.WORLD) {return "";}
  if (COMPILEDPACK.WORLD.font) {
    return COMPILEDPACK.WORLD.font;
  } else {
    return "";
  }
}

var selectedPacks = [];//for the list of packs that are currently selected, to be compiled
var COMPILEDPACK = {};//for the compilation of the texturepacks

var packSwitcher = function (packs) {//layers like minecraft texturepacks, index 0 being base with everything else ontop of it
  if (typeof packs !== "object") {return false;}
  if (!Array.isArray(packs)) {return false;}
  //if (packs.length === 0) {return false;} //i dont  actually care if you give it an empty array/table, it doesn't break anything
  for (var i=0; i < packs.length; i++) {//yes this check needs to be run first
    //console.log(packs[i]);
    if (!TEXTUREPACK.hasOwnProperty(packs[i])) {return false;}
  }
  var compiling = {...TEXTUREPACK[ packs[0] ]}
  for (var i=1; i < packs.length; i++) {
    compiling = {...compiling, ...TEXTUREPACK[ packs[i] ]}
  }
  selectedPacks = packs;//selectedPack = pack;
  COMPILEDPACK = compiling;
  WORLD.TILES = {...TEXTUREPACK.default.TILES, ...COMPILEDPACK.TILES};//should i always reset to default or should i let the previous pack bleed over? reset to default.
  document.getElementById("world-box").style.color = worldColor();
  document.getElementById("world-box").style.backgroundColor = worldBackgroundColor();
  document.getElementById("world-box").style.fontFamily = worldFont();
  WORLD.build();
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
  structure: {
    TILES: {
      tree: 't'
    },
    //any individual settings beyond this point not defined will default to ""
    //leaving out an entire section will //////////////////////////HAVENT DECIDED YET//////////////////////////////////////////
    COLORS: {
      tree: 'white'
    },
    FONTS: {
      tree: "'Courier New', Courier, monospace"
    },
    WORLD: {
      color: 'white',
      background: 'black',
      font: "'Courier New', Courier, monospace"
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
      sign_block: '#ffe203',//'#ffbf00',
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
    FONTS: {
      tree: "Comic Sans MS"
    },
    WORLD: {
      color: 'blue',
      background: 'grey',
      font: "Helvetica"
    }
  },
  comic_sans: {
    WORLD: {
      font: "Comic Sans MS"
    }
  },
  wind_waker: {
    WORLD: {//this doesn't work, i will try to figure it out though
      font: '<source src="http://www.zeldauniverse.net/media-files/typography/SherwoodRegular.ttf">'
    }
  },
  twilight_princess: {
    WORLD: {//this doesn't work, i will try to figure it out though
      font: '<source src="http://www.zeldauniverse.net/media-files/typography/Ravenna.ttf">'
    }
  },
  clear_test: {
    WORLD: {
      color: '',
      background: '',
      font: ''
    }
  }
}
TEXTUREPACK.slippy_dark_font = {
  //this is an example where you can make minor modifications to an existing pack
  ...TEXTUREPACK.slippy_dark,
  //after adding an existing pack you can start overwriting things
  WORLD: {
      font: "Comic Sans MS" //huh, apparently setting fonts from the world box rather than individually preservers the spacing
  }
}

/////////UI for pack switcher/////////////////////
var revAdder = function (packName) {
  revisedList.push(packName);
  POPUP.hide();
  UIpackSwitcher(revisedList);
}
var revRemover = function (index) {
  if ( (index === 0)&&(revisedList[index] === "default") ) {return;}
  revisedList.splice(index,1);
  POPUP.hide();
  UIpackSwitcher(revisedList);
}
var revMover = function (index, dif) {
  if ( (index === 0)&&(revisedList[index] === "default") ) {return;}
  if ( (index + dif) <= 0 ) {return;} //prevent overiding default being 0
  let changeItem = revisedList.splice(index,1);
  revisedList.splice(index+dif, 0, changeItem);
  POPUP.hide();
  UIpackSwitcher(revisedList);
}
var revClear = function () {
  revisedList = ["default"];
  POPUP.hide();
  UIpackSwitcher(revisedList);
}
var listel = function (packName, type, v) {
  let mainBtn = "<span class='hotbar-btn unselectable' onclick='"+( type ? 'revRemover(this.parentElement.parentElement.value);' : 'revAdder(this.parentElement.parentElement.id);' )+"'>"+( type ? 'rem' : 'add' )+"</span>";
  let moveBtn_up = "<span class='hotbar-btn unselectable' onclick='revMover(this.parentElement.parentElement.value, -1);'>\u2191</span>";
  let moveBtn_down = "<span class='hotbar-btn unselectable' onclick='revMover(this.parentElement.parentElement.value, 1);'>\u2193</span>";
  return "<li class='unselectable' style='margin-right:0;' value='"+v+"' id='"+packName+"'><div class='loot-item-left' style='width:calc(100% - 117px);padding: 2px 4px 2px 0px;display: inline-block;'>"+packName+"</div><div class='loot-item-right' style='width:auto;padding: 2px 2px;'>"+mainBtn+( type ? moveBtn_up+moveBtn_down : '' )+"</div></li>";
}

var packList = function (reviseList, type) {//type=true => ol, type=false => ul
  if (!reviseList) {console.log("false 1");return false;}
  if (type === undefined) {console.log("false 2");return false;}
  var list = (type ? "<ol>" : "<ul>");
  for (pack in reviseList) {
    list = list + listel( (isNaN(pack) ? pack : reviseList[pack]), type, pack);//im just gonna be lazy and not care about adding a value to every <li>
  }
  list = list + (type ? "</ol>" : "</ul>");
  //console.log(list);
  return list;
}

var revisedList = [];
var UIpackSwitcher = function (reviseList) {
  revisedList = [...reviseList];
  POPUP.new(
    "TexturePack Switching Menue",
    "<div><span style='float:left;'>texturepack list</span><span style='float:right;'><span class='spanlink' style='margin-right:20px;' onclick='revClear();'>clear</span>selected packs</span><div style='display:inline-block;'><!-- this works to stabalize the floating spans lol --></div></div><div class='loot-contain scrollbar' style='height:320px;font-size: 14px;'>"+packList(TEXTUREPACK,false)+"</div><div class='loot-contain scrollbar' style='height:320px;font-size: 14px;'>"+packList(reviseList,true)+"</div>",
    [
      {
        disp: "save",
        func: function () {
          //console.log("TexturePack Save Btn Pressed");
          packSwitcher(reviseList);
          YOU.state === "travel";
          POPUP.hide();
        },
        disable: false
      },
      {
        disp: "cancel",
        func: function () {
          //console.log("TexturePack Cancel Btn Pressed");
          revisedList = [];
          YOU.state === "travel";
          POPUP.hide();
        },
        disable: false
      }
    ]
  );
}
/////////////////////////////////

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
      try {
        document.getElementById(arguments[0] + "|" + arguments[1]).style.color = colorPicker(arguments[2]);
      } catch(e){}//compat with freecam
      try {
        document.getElementById(arguments[0] + "|" + arguments[1]).style.fontFamily = fontPicker(arguments[2]);
      } catch(e){}//compat with freecam
      return result;
    };
  })();
  //add a button to the hotbar
  var packSwitchbtn = document.createElement("span");
  packSwitchbtn.id = "pack-switch";
  packSwitchbtn.className = "hotbar-btn unselectable";
  packSwitchbtn.innerHTML = "pack switch";
  packSwitchbtn.onclick = () => {UIpackSwitcher(selectedPacks)};//thankyou LightningWB
  var hotbarbtnTarget = document.getElementById("hotbar-box");
  hotbarbtnTarget.appendChild(packSwitchbtn);
  //set to default
  packSwitcher(["default"]);
}
init();

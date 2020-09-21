//////////////////////
/*
texture pack tester for texture pack mod for thetravelers.online
pack tester will change some tiles on screen to all the tiles in the texture pack to make testing texture packs a little bit easier
created by slippy/hentai
lastupdate to this v0.5.0
*/
//////////////////////

//WORLD.changeTile(YOU.x-15, YOU.y+15, WORLD.TILES.wood_block, true);
//WORLD.tilemap[0].innerHTML = WORLD.TILES.wood_block;////this one doesn't work with the texturepacks mod

var PACKTEST = {
  changeSet: function () {
    var spot = 0;
    for (var tile in WORLD.TILES) {
      WORLD.changeTile( (YOU.x-15+(spot%31)), (YOU.y+15-(Math.floor(spot/31))), WORLD.TILES[tile], true);
      //console.log(spot);
      spot++;
    }
  },
  timerStartVal: 120, //seconds
  timer: 0,
  execute: function () {
    setTimeout(() => {
      if (PACKTEST.timer <= 0) {return;}
      PACKTEST.changeSet();
      ENGINE.addCycleTrigger(PACKTEST.execute);
      PACKTEST.timer--;
    }, 0);
  },
  init: function () {
    PACKTEST.timer = PACKTEST.timerStartVal;
    ENGINE.addCycleTrigger(PACKTEST.execute);
  }
}

PACKTEST.init();
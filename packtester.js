//////////////////////
/*
texture pack tester for texture pack mod for thetravelers.online
pack tester will change some tiles on screen to all the tiles in the texture pack to make testing texture packs a little bit easier
warning: it flashes/blinks a little bit
created by slippy/hentai
lastupdate to this v0.5.2
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
  timerStartVal: 120, //cycles/seconds
  timer: 0,
  execute: function () {
    setTimeout(() => {
      if (this.timer <= 0) {this.activity(false); return;}
      this.changeSet();
      ENGINE.addCycleTrigger(() => {PACKTEST.execute();});
      this.timer--;
      this.activity(true);
    }, 0);
  },
  activity: function (lever) {
    if (lever) {
      document.getElementById("pack-test").className = "hotbar-btn unselectable active";
    } else {
      document.getElementById("pack-test").className ="hotbar-btn unselectable";
    }
  },
  init: function () {
    if (this.timer > 0) {this.timer = 0; this.activity(false); return;}
    this.timer = this.timerStartVal;
    ENGINE.addCycleTrigger(() => {PACKTEST.execute();});
    this.activity(true);
  }
}

//PACKTEST.init();

///adds a button to the hotbar to make it possible to access this without being in the console constantly
var packTestbtn = document.createElement("span");
packTestbtn.id = "pack-test";
packTestbtn.className = "hotbar-btn unselectable";
packTestbtn.innerHTML = "Pack Test";
packTestbtn.onclick = () => {PACKTEST.init();};//thankyou LightningWB
var hotbarbtnTarget = document.getElementById("hotbar-box");
hotbarbtnTarget.appendChild(packTestbtn);
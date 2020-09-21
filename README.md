# thetravelers-mod-texturepacks
A texturepack mod for https://thetravelers.online/

> NOTE: This texturepack mod currently only effects the world-box/map.  
> WARNING: This is a very early development version, may break and is missing most features.

# Installation
Copy and paste the code from texturepacks.js into the browser console after logging in.

To change texture packs, enter this into console `packSwitcher(packname);`, example `packSwitcher("default");`.

Hope you enjoy a world of color :D

# Testing Texturepacks

Copy and paste the code from packtester.js into the browser console after you have selected your texturepack.

# Found a new location?
`console.log(WORLD.otherObjs);`
Paste this into the console and it will output an array with info about that particular location.
If you'd like it to be added pls message me in discord (find me in thetravelers discord) the object `{x: 10, y: -10, char: "o", is_door: false, is_breakable: false}` and a simple name that represents it such as "hole".

# To-Do:
* Differentiation of the player traveler from other travelers
* Font handling
* Image handling
* Modifying WORLD.TILES
* The ability to change/add/remove/apply texturepacks
* Proper injection code so this doesn't break every time the game updates
* Compatibility with other travelers mods
* User Interface
* Easy installation method such as Bookmarklets or Browser Extensions

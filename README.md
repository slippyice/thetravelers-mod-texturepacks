# thetravelers-mod-texturepacks
A texturepack mod for https://thetravelers.online/

> NOTE: This texturepack mod currently only effects the world-box/map.  
> WARNING: This is a very early development version, may break and is missing most features.

# Installation
## Console
Copy and paste the code from texturepacks.js into the browser console after logging in.
## Bookmarklet
Copy and paste the code from /bookmarklets/[name].txt into a the url of a new bookmark in your browser. When you click on it, it will run the code on the current page.
## Usage
To change texture packs, press the button in the hotbar called "pack switch", or enter this into console `packSwitcher(table of pack names);`, example `packSwitcher(["default","slippy_dark"]);`.

Hope you enjoy a world of color :D

# Testing Texturepacks

Copy and paste the code from packtester.js into the browser console after you have selected your texturepack.
It creates a button in the hotbar area, click on it to run for 120 (by default) cycles/seconds.
Click on it while it's running to turn it off.

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
* Add descriptions for texturepacks, probably viewed by hovering mouse curser.
* Clean the code.
* Make init only run once and check if it's on thetravelers.online
* Update the To-Do list

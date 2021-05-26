# Changelog
## 0.9.0
* added the ability to change individual background colors in texturepacks, `pack_name{ BACKGROUNDCOLORS: {TILE_NAME: color} }`
* fixed bug were modifying functions would not work if tile in the compiled pack was undefined by having them now check `WORLD.TILES` as that will always contain at least the default tiles
* will compile packs together each item of every category individual, will now only make a change if a pack specifies a change, this significantly improved layering packs
* bookmarklets are still broken, will fix soonTM
## 0.8.4
* added texturepack descriptions
* descriptions can be viewed when clicking on the texturepack name in the pack switching menu
* updated some colors in slippy_light
* in the pack switching ui, it says the version number of this mod, if pressed it takes you to the github repository, sorry for this shameless piece of advert
* bookmarklets still broken, will fix in a future version
* updated the to-do list
## 0.8.3
* commented out some "junk" texture packs, for now
* starting to work on slippy_light pack
* added a box around the "clear" button in the ui to make it more visible
* made it so everything in the ui is now `class='unselectable'`
* made it so some of the ui text changes sizes
* made some changes so the texturepack names don't linewrap as severely on thinner/mobile screens
* will change the un/ordered lists to divs when the screen is thinner/mobile to give more space for texturepack names
* the bookmarklet for the main texturepacks mod does not work, will fix in future version
## 0.8.2
* ability to clear selected packs in the menu, click the "clear" button at the top of the selected packs box
* ability to reorder the selected packs, `revMover()` takes an index, and will accept any difference in position, unless it interferes with default on index 0. when a move button is pressed it will tell `revMover()` to move the pack by 1.
* the pack lists are now in divs that are side by side, like the loot screen
* the add and remove functionallity of clicking on a pack is now set to buttons rather than clicking on the pack names
* the pack name and add/rem and mover buttons should be decently aligned with css for the time being
## 0.8.1
* added a try statement to the style changes in `WORLD.changeTile`, this is to prevent it error spamming console when the tile to be changed isn't on screen. this is for compatibility with a freecam mod.
* prevent removing "default" from first in the selected texturepacks list in the ui, (im not going to stop you if you `packSwitcher()` from console)
* made it so if no array is given to `packSwitcher()` it wont do anything (im not going to be checking if the array is empty because nothing breaks if it is)
## 0.8.0
* created a ui for switching texturepacks, the ui uses the POPUP functionallity from the game. clicking a pack will change a thing and will open a new POPUP with the changes. pressing cancel will close the menue and discard changes. pressing save will run `packSwitcher()`.
* added a button to the hotbar that will open the texturepack switching ui, it will specifically show the currently selected texturepacks when pressing this button.
## 0.7.0
* now calls `WORLD.build()` when switching texturepack
* now layers texturepacks like minecraft, `packSwitcher(table of pack names)` index 0 being on the bottom
* functions now reference COMPILEDPACK rather than TEXTUREPACK[selectedPack]
* changed a colors
## 0.6.0
* added WORLD to the texturepack structure
* FONTS now have individual settings for tiles
* can now change world-box styles
* leaving individual settings undefined will make them be set to the world-box's sytles
## 0.5.3
* special locations and some colors
## 0.5.2
* made it so packtester.js after running will create a button on screen in the hotbar area to control it
## 0.5.1
* fixed `defaultColor()` not working becaue SETTINGS.darkmode is equal to a string rathar than a boolean
## 0.5.0
* fixed a bug with `colorPicker()` breaking if a pack didn't have a COLORS property
* ability to switch texturepacks
* switching the char set used when switching texturepack
* created a texturepack testing thing in packtester.js
## 0.4.1
* updated some colors for slippy_dark
* added a couple special locations to the default
## 0.4.0
* added font support
## 0.3.0
* remove game code redefining
* added proper injection code, ty LightningWB
* does init in init :D
## 0.2.0
* change colors of natural terrain generation
* change colors of server side hidden locations
* some test code so it can be run on https://thetravelers.online/

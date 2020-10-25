# Changelog
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

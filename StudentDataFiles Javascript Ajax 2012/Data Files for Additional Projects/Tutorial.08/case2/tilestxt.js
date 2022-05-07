/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 8
   Case Problem 2

   Author:  
   Date:    

   Filename: tiles.js


   Global Variables
   flipCount
      Used to track the number of tiles currently being turned over

   firstFlip
      Used to reference the first tile turned over

   secondFlip
      Used to reference the second tile turned over


   Functions
  
   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   randomSort(arr)
      Randomly sorts the contents of the arr array.

   setOpacity(object, value)
      Sets the opacity level of object to value

   setupTiles()
      Sets up the tiles for use in the Concentration game

   flipTile()
      Flips a tile showing the image associated with the tile

   checkTiles(tile1, tile2)
      Checks whether the tile1 image source is the same as the
      tile2 image source

   flipBack()
      Flips back flipped over tiles and resets the flipCount
      variable to 0.

   



*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function randomSort(arr) {

   arr.sort(function () {
      return 0.5 - Math.random();
   })

}

function setOpacity(object, value) {


   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;

}




/* Add new code below */



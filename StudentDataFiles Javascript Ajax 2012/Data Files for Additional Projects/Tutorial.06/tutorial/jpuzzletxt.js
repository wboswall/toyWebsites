/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Tutorial Case

   Author:   
   Date:     

   Filename: jpuzzle.js


   Global Variables List;

   grids
      An array of elements belonging to the grid class

   pieces
      An array of elements belonging to the pieces class

   mousePiece
      The puzzle piece currently selected by the user's mouse
   
   keyPiece
      The puzzle piece currently selected by the user's keyboard

   keyIndex
      The index number of keyPiece

   selectMode
      A Boolean value where true = keyboard use is in Select Piece mode,
      false = keyboard use is in Move Piece mode

   diffX
      The horizontal distance in pixels between the left edge of
      mousePiece and the mouse pointer

   diffX
      The vertical distance in pixels between the top edge of
      mousePiece and the mouse pointer

   maxZ
      An integer representing the highest z-index value on the Web page

   hoverGrid
      The grid square that the moving puzzle piece is currently hovered over


   
   Functions List:

   jumbleIt()
      Reloads the current Web page, thus re-arranging the puzzle

   solveIt()
      Places the puzzle images in the current order as background images
      for the grid squares

   init()
      Sets up and initializes the Web page, defining the grid and pieces array,
      and appying event handlers to mouse and keyboard actions

   keyGrab(e)
      "Grabs" a puzzle piece using the keyboard. Sets the value of the keyPiece
      variable and creates an event object to handle keyboard events.
      Pressing a spacebar toggles the operating mode between Select Piece and 
      Move Piece. Pressing the four arrow keys either selects a new piece or moves 
      the current piece

   keyMove(moveX, moveY)
      Moves the keyPiece moveX pixels to the right and moveY pixels down.

   selectPiece(diffIndex)
      Changes the index of the selected keyPiece by a value of diffIndex sets the
      format of the new keyPiece

   toggleMode()
      Switches the Web page between Select Piece mode and Move Piece mode. Drops the
      currently moving keyPiece onto the Web page, aligning it with the grid

   dropValid(object)
      Returns a Boolean value indicating whether it valid to drop the object. The function
      is false if dropping object will cover a puzzle piece and true if otherwise

   alignPiece(object)
      If object is over a grid square, aligns object with the top-left corner of the square

   highlightGrid(object)
      If object is over a grid square, sets the background color of the square to light green

   mouseGrab(e)
      "Grabs" a puzzle piece using the mousedown action. Sets the value of mousePiece. Calculates
      the value of diffX and diffY. Applies event handlers for mousemove and mouseup events

   mouseMove(e)
      Move mousePiece across the Web page, keeping a constant distance from the mouse pointer

   mouseDrop(e)
      Drops mousePiece on the Web page (if it is not over another puzzle piece). Aligns the
      piece with the grid. Turns off event handlers for the mousemove and mouseup events.



*/

var grids = new Array();
var pieces = new Array();

window.onload = init;

function jumbleIt() {
   window.location.reload();
}

function solveIt() {
   for (var i = 0; i < grids.length; i++) {
      pieces[i].style.backgroundImage = "";
      grids[i].style.backgroundImage = "url(piece"+i+".jpg)";
   }
}


function init() {

   var allElem = document.getElementsByTagName("*");

   for (var i = 0; i < allElem.length; i++) {
      if (allElem[i].className == "grid") grids.push(allElem[i]);
      if (allElem[i].className == "pieces") pieces.push(allElem[i]);
   }

}



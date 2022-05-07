/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Review Assignment

   Author:   
   Date:     

   Filename: slideblocks.js


   Global Variables List;

   blocks
      An array of elements belonging to the block class

   blankBlock
      The puzzle representing a blank space in the sliding block puzzle
   
   keyBlock
      The puzzle block currently selected by the user's keyboard

   
   Functions List:
   init()
      Sets up and initializes the Web page, defining the blocks array,
      and appying event handlers to mouse and keyboard actions

   swapWithBlank(e)
      Responds to the mousedown event to swap the current block with an adjacent
      blank space (if one exists)

   highlightBlank(e)
      Highlights a block on the mouseover event by changing the mouse cursor if the block
      is adjacent to a blank space 

   removeHighlightBlank(e)
      Removes highlighting from a puzzle block by changing the cursor style to "default".

   keySwapWithBlank()
      Swaps keyBlock with an adjacent blank space (if one exists)

   selectBlock(diffX, diffY)
      Moves the keyBlock diffX to the right and diffY down.

   keyEvent(e)
      Responds to the spacebar event to swap keyBlock with an adjacent blank
      space or to arrow keys to move the position of keyBlock up, down, to
      the left, or to the right

*/

var blocks = new Array();


window.onload = init;

function init() {
   var allElem = document.getElementsByTagName("*");

   for (var i = 0; i < allElem.length; i++) {
      if (allElem[i].className == "block") blocks.push(allElem[i]);
   }

   for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.top = getStyle(blocks[i], "top");
      blocks[i].style.left = getStyle(blocks[i], "left");
      blocks[i].style.width = getStyle(blocks[i], "width");
      blocks[i].style.height = getStyle(blocks[i], "height");
   }

}

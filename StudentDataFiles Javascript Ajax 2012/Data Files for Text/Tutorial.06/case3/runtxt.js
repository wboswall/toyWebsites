
/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Case Problem 3

   Author:   
   Date:     
   Filename: runpuzzle.js

   Global Variables:

   currentX
      Contains the row number of the current puzzle cell

   currentY
      Contains the column number of the current puzzle cell

   currentCell
      References the current puzzle cell

   currentColor
      Contains of the background color of the current puzzle cell

   across
      A Boolean value indicating whether keyboard entry is done
      across the puzzle (true) or down the puzzle (false)

   keyNum
      The keyCode number of the pressed key


   Functions List:

   init()
      Initializes the crossword puzzle and sets up the event handlers

   getKey(e)
      Retrieves the keyCode number of the pressed key and moves the
      current puzzle cell

   writeText(object, text)
      Writes text into the object

   toggleDirection()
      Toggles the direction of keyboard entry

   moveCell(diffX, diffY)
      Moves the current cell diffX columns in the x direction
      and diffY rows in the y direction

   moveCursor()
      Moves the current cell in response to the arrow key pressed
      by the user

   writeGuess()
      Write the keyboard key pressed by the user into the current cell
      and evaluate whether it represents the correct letter or not.

*/



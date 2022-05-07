/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Case Problem 3

   Filename: makepuzzle.js

   Global Variables:
   clues_across
      Array of the clues in the puzzle rows
   clues_down
      Array of the clues in the puzzle columns
   words
      Array containing the puzzle solution


   Functions List:
   writeClues()
      Write the clues into the puzzle

   showAns()
      Display the puzzle solution

   writeText(object, text)
      Writes the text string contained in text
      into the specified object

*/

var clues_across = new Array();
clues_across[0]="Personal servant";
clues_across[1]="Home";
clues_across[2]="Measure";
clues_across[3]="Quaking tree";
clues_across[4]="City in Northern England";

var clues_down = new Array();
clues_down[0]="Of the visceral nerve";
clues_down[1]="To lower in rank";
clues_down[2]="Diamond magnifier";
clues_down[3]="Sharpened";
clues_down[4]="Children older than 12";

var words = new Array(
  "V","A","L","E","T",
  "A","B","O","D","E",
  "G","A","U","G","E",
  "A","S","P","E","N",
  "L","E","E","D","S");

function writeClues() {
   for (var i = 0; i < clues_across.length; i++) {
      across=document.getElementById("across" + i);
      down=document.getElementById("down" + i);

      writeText(across,clues_across[i]);
      writeText(down,clues_down[i]);
   }
}

function showAns() {
  for(var i = 0; i < clues_down.length; i++) {
    for(var j = 0; j < clues_across.length; j++) {
      cell = document.getElementById("grid" + j + i);
      writeText(cell, words[(i*5)+(j)]);
      cell.style.backgroundColor="lightgreen";
    }
  }
}

function writeText(object, text) {
   var newCell = document.createTextNode(text); 
   object.replaceChild(newCell, object.childNodes[0]);
}
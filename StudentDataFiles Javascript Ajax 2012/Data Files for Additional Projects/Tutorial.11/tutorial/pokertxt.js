/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Tutorial Case

   Author: 
   Date:   

   Filename: poker.js

   
   Functions and Nested Functions

   playDrawPoker()
      Initializes and plays the video poker game

   disableButton(button)
      Disables and fades-out the form button

   enableButton(button)
      Enables and fades-in the form button

   evaluateHand()
      Evaluates the current poker hand and updates
      the pot value
	
*/

addEvent(window, "load", playDrawPoker, false);

function playDrawPoker() {

   var dealButton = document.getElementById("dealB");
   var drawButton = document.getElementById("drawB");
   var standButton = document.getElementById("standB");
   var resetButton = document.getElementById("resetB");
   var handValueText = document.getElementById("handValue");
   var betSelection = document.getElementById("bet");
   var potValue = document.getElementById("pot");

}


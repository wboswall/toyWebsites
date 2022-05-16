/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Review Assignment

   Author: 
   Date:   

   Filename: pickem.js

   
   Functions and Nested Functions

   playPickemPoker()
      Initializes and plays the video poker game

   disableButton(button)
      Disables and fades-out the form button

   enableButton(button)
      Enables and fades-in the form button

   deleteChildren(object)
      Deletes all of the child nodes within object

   evaluateHand()
      Evaluates the current poker hand, updates
      the pot value, and resets part of the poker table.
	
*/

addEvent(window, "load", playPickemPoker, false);

function playPickemPoker() {

   var pokerTable = document.getElementById("pokerTable");
   var dealButton = document.getElementById("dealB");
   var resetButton = document.getElementById("resetB");
   var handValueText = document.getElementById("handValue");
   var betSelection = document.getElementById("bet");
   var potValue = document.getElementById("pot");
   var set1 = document.getElementById("set1");
   var set2 = document.getElementById("set2");
   var player = document.getElementById("player");

   // Change the bet value from the selection list
   betSelection.onchange = function() {
      pickemGame.bet = parseInt(this.options[this.selectedIndex].value);
   }

   // Reload the Web page when the Reset button is clicked
   resetButton.onclick = function() {
      window.location.reload(true);
   }  

   // Function to disable and gray out a form button
   function disableButton(button) {
      button.disabled = true;
      setOpacity(button, 25);
   }

   // Function to enable and display a form button
   function enableButton(button) {
      button.disabled = false;
      setOpacity(button, 100);
   }

   // Function to delete all of the child nodes of an object
   function deleteChildren(object) {
      while (object.hasChildNodes()) {
         object.removeChild(object.lastChild);
      }
   }

   // Function to evaluate the player's hand and update the pot
   // and reset parts of the table.

   function evaluateHand() {

      handValueText.innerHTML = myHand.handValue();

      // Change the pot value based on the results of the hand
      var payoutValue = myHand.handOdds();
      pickemGame.payout(payoutValue);
      potValue.value = pickemGame.account;

      // Quit the game if the pot is empty
      if (pickemGame.account == 0) {
         alert("Game Over");
         disableButton(dealButton);
      } else {
         enableButton(dealButton);
         betSelection.disabled = false;
         myHand = new pokerHand(2);
         set1.onclick = null;
         set2.onclick = null;
      }
   
   }


   /* Add new code below   */



}


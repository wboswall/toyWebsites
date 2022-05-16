/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Review Assignment

   Author: 
   Date:   

   Filename: games.js


   Custom Object Classes
   
   pickemGame
      The pokerGame object contains properties and methods for the game
      of draw poker

   pokerDeck
      The pokerDeck object contains an array of poker cards and methods
      for shuffling and drawing cards from the deck.

   pokerHand
      The pokerHand object contains an array of poker cards drawn from a
      poker deck. The methods associated with the object include the ability 
      to calculate the value of the hand and to mark cards to be discarded,
      replaced with new cards from a poker deck.

   pokerCard
      The pokerCard object contains properties and methods associated with
      individual poker cards including the card rank, suit, and value.
   
	
*/




/*    The pokerDeck Object constructor  */


function pokerDeck() {

   this.cards = new Array(52);
   var suits = new Array("Club", "Diamond", "Heart", "Spade");
   var ranks = new Array("2", "3", "4", "5", "6", "7",
                         "8", "9", "10", "Jack", "Queen",
                         "King", "Ace");

   // Generate the array of pokerCard objects
   var counter = 0;
   for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 13; j++) {
         this.cards[counter] = new pokerCard(ranks[j], suits[i]);
         counter++;
      }
   }

   // dealTo method to deal cards from the deck into a hand
   this.dealTo = function(pokerHand) {
      for (var i = 0; i < pokerHand.cards.length; i++) {
         pokerHand.cards[i] = this.cards.shift();
      }
   }

}




/*    The pokerHand Object constructor   */

function pokerHand(handLength) {

   // Verify that only one parameter value is sent
   if (arguments.length != 1) {
      throw new Error("Enter a single parameter value");
   }

   // Verify that the parameter value is a number
   if (arguments[0].constructor != Number) {
      throw new Error("handLength value must be a number");
   }

   this.cards = new Array(handLength);

}


   /* Return the maximum value (highest card) from
      the poker hand */

   pokerHand.prototype.maxValue = function() {
      var values = new Array();
      for (var i = 0; i < this.cards.length; i++) {
         values[i] = this.cards[i].value();
      }
      return values.max();
   }


   /* Return true if the hand contains a flush */

   pokerHand.prototype.hasFlush = function() {
      for (var i = 1; i < this.cards.length; i++) {
         if (this.cards[i].suit != this.cards[i-1].suit) return false;
      }
      return true;
   }


   /* Return true if the hand contains a straight */

   pokerHand.prototype.hasStraight = function() {   
      var values = new Array();
      for (var i = 0; i < this.cards.length; i++) {
         values[i] = this.cards[i].value();
      }
      values.numericSort(true);
      for (var i = 1; i < values.length; i++) {
         if (values[i] != values[i - 1] + 1) return false;
      }
      return true;
   }


   /* Return true if the hand contains a royal flush */

   pokerHand.prototype.hasRoyalFlush = function() {
      return this.hasFlush() && this.hasStraight() && this.maxValue() == 14;
   }

   /* Return true if the hand contains a straight flush */

   pokerHand.prototype.hasStraightFlush = function() {
      return this.hasFlush() && this.hasStraight() && this.maxValue() != 14;
   }

   /* Return the duplicate types in the hand (if any) */

   pokerHand.prototype.matches = function() {
      var values = new Array();
      for (var i = 0; i < this.cards.length; i++) {
         values[i] = this.cards[i].value();
      }
      values.numericSort(true);

      var matched = new Array();
      for (var i = 1; i < this.cards.length; i++) {
         if (values[i] == values[i - 1]) matched.push(values[i]);
      }

      var mType = "";

      // Check for Four of a Kind vs. Full House
      if (matched.length == 3) {
         for (var i = 1; i < 3; i++) {
            if (matched[i] != matched[i - 1]) mType = "Full House"; 
         }
         if (mType != "Full House") mType = "Four of a Kind";
      }

      // Check for 3 of a Kind vs. Two Pair
      if (matched.length == 2) {
         if (matched[0] == matched[1]) mType = "Three of a Kind"
         else mType = "Two Pair"
      }
  
      // Check for Jacks or Better
      if (matched.length == 1 && matched[0] >= 9) mType = "9s or Better";

      return mType;
   }


   /* Return the value of the poker hand */

   pokerHand.prototype.handValue = function() {
      if (this.hasRoyalFlush()) return "Royal Flush"
      else if (this.hasStraightFlush()) return "Straight Flush"
      else if (this.hasFlush()) return "Flush";
      else if (this.hasStraight()) return "Straight";
      else return this.matches();
   }

   /* Return the odds multiplier of the poker hand */
   pokerHand.prototype.handOdds = function() {
 
      switch (this.handValue()) {
         case "Royal Flush": return 1000;
         case "Straight Flush": return 200;
         case "Four of a Kind": return 100;
         case "Full House": return 18;
         case "Flush" : return 15;
         case "Straight" : return 11;
         case "Three of a Kind" : return 5;
         case "Two Pair" : return 3;
         case "9's or Better" : return 2;
         default: return 0;
      }
   }


/*    The pokerCard Object constructor   */

function pokerCard(rank, suit) {

   // Verify that two parameter values have been sent
   if (arguments.length != 2) {
      throw new Error("Enter two string values");
   }

   // Verify that each parameter is a text string
   for (var i = 0; i < arguments.length; i++) {
      if (arguments[i].constructor != String) {
         throw new Error(arguments[i] + " must be entered as a text string");
      }
   }

   this.suit = suit; // Club, Diamond, Heart, or Spade
   this.rank = rank; // 2 through 10, Jack, Queen, King, or Ace

}

   /* The imageSrc() method stores the image filename
      images in the form "sr.png" where "s" is the
      first letter of the card suit and "r" is the
      first letter of the card rank */

   pokerCard.prototype.imageSrc = function() {
      var fileName = this.suit.substring(0,1);

      if (this.rank == "10") fileName += "10"
      else fileName += this.rank.substring(0,1);

      fileName += ".png";
      return fileName.toLowerCase();
   }


   /* The value() method returns the numeric rank of the 
      card. Aces are assumed only to be 14 */

   pokerCard.prototype.value = function() {
      switch (this.rank) {
         case "Jack": return 11;
         case "Queen": return 12;
         case "King": return 13;
         case "Ace": return 14;
         default: return parseInt(this.rank);
      }
   }




/* Insert new code below */



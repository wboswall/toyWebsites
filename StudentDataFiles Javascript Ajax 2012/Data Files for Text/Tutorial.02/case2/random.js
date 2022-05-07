/*
   New Perspectives on JavaScript
   Tutorial 2
   Case Problem 2

   Author: Tom Vogel
   Date:   8/1/2007

   Function List:
   randInt(lower, upper)
      Used to generate a random integer in the range (lower, upper)

*/


function randInt(lower, upper) {
   var size = upper-lower+1;
   return Math.floor(lower + size*Math.random());
}

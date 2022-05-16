/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 1
   Case Problem 2

   Function List:
   randInt
      Used to return a random integer from 1 to 'n'

*/


function randInt(n) {
   randNum = Math.ceil(Math.random()*n);
   return randNum;
}
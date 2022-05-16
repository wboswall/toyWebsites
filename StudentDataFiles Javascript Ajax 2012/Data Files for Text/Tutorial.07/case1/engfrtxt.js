/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Case Problem 1

   Author:   
   Date:     

   Filename: engfr.js


   Function List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   setUp()
      Insert the current week's french phrases into document and set up
      event handlers for the phrases.

   swapFE(phrase, pnum)
      Changes a French phrase to the English version of that phrase.

   swapEF(phrase, pnum)
      Changes an English phrase ot the Frech version of that phrase.

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


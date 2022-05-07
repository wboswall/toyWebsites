/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 10
   Case Problem 2

   Author:   
   Date:     

   Filename: iframe.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   setupFrame()
      Sets up the inline frame by adding the custom index property
      and onmouseover and onmouseout event handlers

   writeFrame()
      Writes the title and summary text to the document in the inline
      frame

   clearFrame()
      Clears the title and summary text from the document in the inline
      frame

*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


/* Add new code below */



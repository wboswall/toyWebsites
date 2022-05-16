/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 10
   Case Problem 2

   Author:   
   Date:     

   Filename: script.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   setupButtons()
      Create event handlers for the form buttons

   sendCode()
      Retrieves the CSS and HTML code found in the documents in the inputcss
      and inputhtml frames and then writes the HTML document based on
      those text strings.

   showPreview()
      Changes the frame layout to show the Web page preview


   showCode()
      Changes the frame layout to show only the code frames

   showBoth()
      Changes the frame layout to show both the Web page preview
      and the code frames

*/



function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


/* Add new code below */



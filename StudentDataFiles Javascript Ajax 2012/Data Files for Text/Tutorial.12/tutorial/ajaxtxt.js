/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 12
   Tutorial Case

   Author:   
   Date:     

   Filename: ajax.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   XMLHttpRequest()
      Creates a custom XMLHttpRequest object for IE browsers that
      do not support the native XMLHttpRequest object (chiefly
      IE5 and IE6)

   function RSSFeed(xmlDoc)
      Constructor function to retrieve title, description, and link
      information from a RSS document


*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

/* Add new code below */

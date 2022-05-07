/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Tutorial Case

   Author:   
   Date:     

   Filename: switchStyle.js

   Global Variables:
   allStyles
      An array containing the link elements whose rel attribute equals "stylesheet"
      or "alternate stylesheet" and whose title attribute is not empty

   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   makeStyleButtons()
      Generate input buttons for each preferred and alternate style sheet linked
      to the current Web document

   changeStyle()
      Changes style sheet from the currently active sheet to whatever style sheet
      is clicked by the user from the selection of input buttons

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Review Assignment

   Author:   
   Date:     

   Filename: styles.js

   Global Variables:
   styleList
      An array containing the link elements whose rel attribute equals "stylesheet"
      or "alternate stylesheet" and whose title attribute is not empty

   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   makeStyleListBox()
      Generate selection list for each preferred and alternate style sheet linked
      to the current Web document

   changeStyle()
      Changes style sheet from the currently active sheet to whatever the
      user changes the selected style from the selection list

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


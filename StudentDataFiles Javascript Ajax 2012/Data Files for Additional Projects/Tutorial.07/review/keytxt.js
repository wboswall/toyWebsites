/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Review Assignment

   Author:   
   Date:     

   Filename: keywords.js


   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   makeElemList(elem)
      Returns an array containing the content of all elements with the tag name
      "elem" with the content changed to lowercase letters and sorted.

   setElemId(elem, elemText)
      Sets and returns the id for an element with the tag name "elem" and containing
      the content "elemeText".

   makeKeyWordBox()
      Creates a keyword box containing a sorted list of hyperlinks pointing to
      all of the dfn elements in the main document.


*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


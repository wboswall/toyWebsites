/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Tutorial Case

   Author: 
   Date:   

   Filename: toc.js

   Global Variables:
   sections
      An array contain the HTML elements used as section headings in the historic document

   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   makeTOC()
      Generate a table of contents as a nested list for the contents of the "doc" 
      element within the current Web page. Store the nested list in the "toc"
      element.

   levelNum(node)
      Returns the level number of the object node. If the object node does not
      represent a section heading, the function returns the value -1.

   createList()
      Goes through the child nodes of the "doc" element searching for section headings.
      When it finds a section heading, a new entry is added to the table of contents

   expandCollapse()
      Expands and collapse the content of the table of contents and the historic
      document

   expandCollapseDoc()
      Goes through the child nodes of the "doc" element determining which elements to
      hide and which elements to display

   isHidden(object)
      Returns a Boolean value indicating whether object is hidden (true) or
      not hidden (false) on the Web page by examining the display style for object
      and all its parent nodes up to the body element

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}



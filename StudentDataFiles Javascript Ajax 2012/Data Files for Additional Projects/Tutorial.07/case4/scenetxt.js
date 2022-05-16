/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Case Problem 4

   Author:   
   Date:     

   Filename: scene.js


   Function List:
   uniqueElemText(elemName)
      Returns the unique content from HTML tags with the
      tag name elemName. The list is sorted in alphabetical
      ordered and returned as an array.

*/



function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function uniqueElemText(elemName) {
   elems = document.getElementsByTagName(elemName);
   elemsArray = new Array();

   for (var i=0; i<elems.length; i++) elemsArray[i]=elems[i].innerHTML;  
   elemsArray.sort();
   for (i=0; i<elemsArray.length-1; i++) {
      if (elemsArray[i]==elemsArray[i+1]) {
         elemsArray.splice(i+1,1);
         i--;
      }
   }
   return elemsArray;
}

/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Tutorial Case

   Author: 
   Date:   

   Filename: bdlibrary.js

   
   Functions and Custom Methods

   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   setOpacity(objID, value)  
      Set the opacity of the document object with the id, objID to value.

   Array.prototype.numericSort(ascending)
      Custom method to sort arrays in numeric order. The ascending
      parameter is a Boolean variable where true sorts the array
      is ascending numeric order and false sorts it in descending order.

   Array.prototype.max()
      Custom method to return the maximum value from an array of
      numeric values.
	
*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function setOpacity(object, value) {
  
   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;

}


/* Add new code below */



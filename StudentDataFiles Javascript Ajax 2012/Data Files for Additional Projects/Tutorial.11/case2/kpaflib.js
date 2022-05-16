/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 2


   Filename: kpaflib.js

   
   Functions and Custom Methods

   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   setOpacity(objID, value)  
      Set the opacity of the document object with the id, objID to value.

   getStyle(object, styleName)
      Returns the computed style value for a specified styleName applied to
      an object.

	
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


function getStyle(object, styleName) {
   if (window.getComputedStyle) {
      return document.defaultView.getComputedStyle(object, null)[styleName];
   } else if (object.currentStyle) {
      return object.currentStyle[styleName]
   }
}
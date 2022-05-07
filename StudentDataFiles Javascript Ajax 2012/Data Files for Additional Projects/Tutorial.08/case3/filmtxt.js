/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 8
   Case Problem 3

   Author:   
   Date:     

   Filename: filmstrip.js


   Functions
  
   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   setOpacity(object, value)
      Sets the opacity of object to value (0 - 100)

   makeFilmStrip()
      Makes the filmstrip includes the strip of thumbnail images,
      the large-scale photo box, and the resizing buttons.


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


/* Insert new code below */




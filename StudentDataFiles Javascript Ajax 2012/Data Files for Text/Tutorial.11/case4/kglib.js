/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 4

   Filename: kglib.js



   Functions List:

   getStyle(object, styleName)
      Returns the computed style value for a specified styleName applied to
      an object.

   addEvent(object, evName, fnName, cap)
      Assigns an event handers to object where evName is the name of the event,
      fnName is the name of the function, and cap is the capture phase.
      This function works for both the IE and W3C event models.
   
   removeEvent(object, evName, fnName, cap)  
      Removes an event handers from object where evName is the name of the event,
      fnName is the name of the function, and cap is the capture phase.
      This function works for both the IE and W3C event models.

   withinIt(object1, object2)
      Returns a Boolean value indicating whether the top-left corner of object1
      lies within the boundaries of object2. Note that object1 must have a 
      defined top and left style and object2 must be have style values for
      top, left, width, and height.

   setOpacity(object, value)
      Set the opacity of an object

*/


function getStyle(object, styleName) {
   if (window.getComputedStyle) {
      return document.defaultView.getComputedStyle(object, null)[styleName];
   } else if (object.currentStyle) {
      return object.currentStyle[styleName]
   }
}


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function removeEvent(object, evName, fnName, cap) {
   if (object.detachEvent)
       object.detachEvent("on" + evName, fnName);
   else if (object.removeEventListener)
       object.removeEventListener(evName, fnName, cap);
}


function withinIt(object1, object2) {
   var within = false;
   var x1 = parseInt(object1.style.left);
   var y1 = parseInt(object1.style.top);

   var left = parseInt(object2.style.left);
   var top = parseInt(object2.style.top);
   var width = parseInt(object2.style.width);
   var height = parseInt(object2.style.height);

   var bottom = top + height;
   var right = left + width;

   if ((x1 > left && x1 < right) && (y1 > top && y1 < bottom)) within = true;

   return within;
}


function setOpacity(object, value) {
  
   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;

}


 
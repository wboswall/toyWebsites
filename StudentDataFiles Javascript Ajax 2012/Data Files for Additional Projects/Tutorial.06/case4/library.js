/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Case Problem 4

   Author:   
   Date:     
   Filename: library.js



   Functions List:

   getStyle(object, styleName)
      Returns the computed style value for a specified styleName applied to
      an object.

   withinIt(object1, object2)
      Returns a Boolean value indicating whether the top-left corner of object1
      lies within the boundaries of object2. Note that object1 must have a 
      defined top and left style and object2 must be have style values for
      top, left, width, and height.

*/


function getStyle(object, styleName) {
   if (window.getComputedStyle) {
      return document.defaultView.getComputedStyle(object, null).getPropertyValue(styleName);
   } else if (object.currentStyle) {
      return object.currentStyle[styleName]
   }
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

 
/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 3


   Filename:    wmlibrary.js
   Description: Library of functions used with the widget.htm page

   
   Functions 

   addEvent(object, evName, fnName, cap)
      Attaches an event handler to an object under both event models.

   stopBubbling(e)
      Stop an event from bubbling up the object hierarchy

   positionInObject(e)
      Cross browser function to return the position of an event
      occuring within an object.

   insertAfter(node, newSibling)
      Inserts the newSibling object directly after node as the
      next sibling

   getStyle(object, styleName)
      Returns the computed style value for a specified styleName applied to
      an object.

   setOpacity(object, value)
      Set the opacity of an object
	
*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}



function stopBubbling(e) {
   if (e.stopPropagation) e.stopPropagation()
   else e.cancelBubble = true;
}



function positionInObject(e) {
   if (e.layerX) return e.layerX
   else return e.x;
}


function insertAfter(node, newSibling) {
   node.parentNode.insertBefore(newSibling, node.nextSibling);
}


function getStyle(object, styleName) {
   if (window.getComputedStyle) {
      return document.defaultView.getComputedStyle(object, null)[styleName];
   } else if (object.currentStyle) {
      return object.currentStyle[styleName]
   }
}


function setOpacity(object, value) {
  
   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;

}

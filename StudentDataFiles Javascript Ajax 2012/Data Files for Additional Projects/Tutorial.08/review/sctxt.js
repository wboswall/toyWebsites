/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 8
   Review Assignment

   Author: 
   Date:   
   Filename: slidecontrols.js
   
   Functions

   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   closeObject(objID)
      Sets the display style of the object with id, objID, to "none"
      hiding it from the user.

   showObject(objID)
      Sets the display style of the object with id, objID, to "block"

   createHighRes(thumb, index)
      Creates image objects containing high resolution versions of the
      thumbnail images by attaching the high res versions as a custom
      property.

   createRollover(thumb)
      Creates image objects to act as rollover images for the thumbnail
      images in the document.

   getCurrentSlideIndex() 
      Returns the index number of the current slideshow image ranging
      from 0 up the 1 less than the length of the thumbs array.

   setOpacity(objID, value)  
      Set the opacity of the document object with the id, objID to value.

   fadeIn(objID, maxOpacity, fadeTime)
      Fades in an object with the id, objID up to a maximum opacity of 
      maxOpacity over an interval of fadeTime seconds.

   fadeOut(objID, maxOpacity, fadeTime)
      Fades out an object with the id, objID from a maximum opacity of 
      maxOpacity down to 0 over an interval of fadeTime seconds.
 
   makeSlides()
      Sets up the slideshow by locating all slide images in the document
      and then runs function to create the slide gallery and page
      overlay.

   createSlideBox(thumbs)
      Creates slide gallery containing all of slide images and captions
      stacked on each other.

   createSlideControls(thumbs)
      Create slide controls box containing a close button,
      navigation buttons, and a slide number counter.

   createOverlay()
      Creates a page overlay obscuring the page content when the slide gallery
      is visible.

   showSlideShow()
      Shows the slide gallery using a fade-in effect.


	
*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function closeObject(objID) {
   document.getElementById(objID).style.display = "none";
}


function showObject(objID) {
   document.getElementById(objID).style.display = "block";
}


function createHighRes(thumb) {

   thumb.big = new Image();
   thumb.big.src = thumb.src.replace(/_thumb/, "");

}


function createRollover(thumb) {
   
   thumb.out = new Image();
   thumb.over = new Image();  

   thumb.out.src = thumb.src;
   thumb.over.src = thumb.src.replace(/_thumb/, "_over");

   thumb.onmouseout = function() {
      thumb.src = thumb.out.src;
   }

   thumb.onmouseover = function() {
      thumb.src = thumb.over.src;
   }
   
}

function getCurrentSlideIndex() {

   var currentSlide = document.getElementById("slideNumber").innerHTML;
   currentIndex = parseInt(currentSlide) - 1;
   return currentIndex;

}


function setOpacity(objID, value) {
  
   var object = document.getElementById(objID);

   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;

}

function fadeIn(objID, maxOpacity, fadeTime) {

   // Calculate the interval between opacity changes
   var fadeInt = Math.round(fadeTime*1000)/maxOpacity;

   var delay = 0;
   
   // Loop up the range of opacity values
   for (var i = 0; i <= maxOpacity; i++) {
      setTimeout("setOpacity('" + objID + "', " + i + ")", delay);
      delay += fadeInt;
   }

}

function fadeOut(objID, maxOpacity, fadeTime) {

   // Calculate the interval between opacity changes
   var fadeInt = Math.round(fadeTime*1000)/maxOpacity;

   var delay = 0;

   // Loop up the range of opacity values
   for (var i = maxOpacity; i >= 0; i--) {
      setTimeout("setOpacity('" + objID + "', " + i + ")", delay);
      delay += fadeInt;
   }

}




/* Add new code below */






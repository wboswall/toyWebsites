/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 8
   Tutorial Case

   Author: 
   Date:   

   
   Functions

   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   setupSlideshow()
      Sets up the slideshow by locating all slide images in the document
      and then runs function to create the slide gallery and page
      overlay.

   createHighRes(thumb, index)
      Creates image objects containing high resolution versions of the
      thumbnail images by attaching the high res versions as a custom
      property.

   createRollover(thumb)
      Creates image objects to act as rollover images for the thumbnail
      images in the document.

   createGallery(slides)
      Creates an HTML fragment for a slide gallery containing a close button,
      a slide image, navigation buttons, and a slide caption.

   showGallery()
      Shows the slide gallery using a fade-in effect.

   changeSlide(slide)
      Changes the current slide in the gallery to the slide parameter.

   createOverlay()
      Creates a page overlay obscuring the page content when the slide gallery
      is visible.

   setOpacity(objID, value)  
      Set the opacity of the document object with the id, objID to value.

   fadeIn(objID, maxOpacity, fadeTime, delay)
      Fades in an object with the id, objID up to a maximum opacity of 
      maxOpacity over an interval of fadeTime seconds with a delay of
      delay seconds.

   fadeOut(objID, maxOpacity, fadeTime, delay)
      Fades out an object with the id, objID from a maximum opacity of 
      maxOpacity down to 0 over an interval of fadeTime seconds with a 
      delay of delay seconds.
	
*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}



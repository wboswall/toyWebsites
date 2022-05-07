/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 3

   Author: 
   Date:   

   Filename: slider.js

   
   Custom Objects and Methods
   
   sliderBox(input, first, last, inc, style)
      Constructor function for the slider widget where input
      is the input box that will receive values from the slider,
      first is the first or left-most value of the slider, last
      is the last or right-most value of the slider, inc is the
      increment applied to the slider values when moving the bar,
      and style is a number representing the style class applied
      to the slider bar. Constructs the host object for the slider
      box

   sliderLine()
      Constructs a host object representing the slider line

   sliderBar(style)
      Constructs a host object representing the slider bar where
      style is the number of the style class used in formatting
      the bar's appearance

   sliderBox.constructDOM()
      Assembles the pieces of the slider (box, line, and container)

   sliderBar.position()
      Returns the position of the slider bar div element within the
      slider line

   sliderBar.setPosition(pos)
      Sets the position of the slider bar div element within the
      slider ilne

   sliderBox.getSizes()
      Calculates the lengths and widths of the div elements within
      the slider

   sliderBox.updateValue()
      Updates the value of the slider input box based on the position
      of the slider bar.

   sliderBox.setupEvents()
      Defines event handlers for the different slider div elements.

	
*/


/* Add new code here */









/* End of new code */



/* The setupEvents method */

sliderBox.prototype.setupEvents = function() {

   var box = this;  // sliderBox object

   // Select the slider bar in response to the mousedown event
   box.bar.divElem.onmousedown = function(e) {
      var evt = e || window.event;
      stopBubbling(evt);

      // Record the initial position of the mouse and the slider bar
      var initX = evt.clientX;
      var initPos = box.bar.position();

      // As the mouse moves, move the slider bar from its initial position
      box.bar.divElem.onmousemove = function(e) {
         var evt = e || window.event;
         var newX = evt.clientX;
         var distanceX = newX - initX;
   
         var linePos = initPos + distanceX;

         if (linePos >= 0 && linePos <= box.barMaxTravel) {
            box.bar.setPosition(linePos); // set the position of the slider bar
            box.updateValue(); // update the value in the input box
         }
      }

   }

   // In response to the mouseup event, stop moving the slider bar
   box.bar.divElem.onmouseup = function(e) {
      box.bar.divElem.onmousemove = null;
   }  

   // In response to the mouseout event, stop moving the slider bar
   box.bar.divElem.onmouseout = function(e) {
      box.bar.divElem.onmousemove = null;
   } 
   

   // When the user click the slider line, move the bar to that position
   box.line.divElem.onmousedown = function(e) {

      var evt = e || window.event;
      var linePos = positionInObject(evt);

      // Place either the left or right edge of the bar at the clicked position
      // Depending on which would keep the slider bar within the slider box

      if (linePos < box.bar.position()) box.bar.setPosition(linePos)
      else box.bar.setPosition(linePos - box.barWidth);

      box.updateValue(); // update the value in the input box

   }

}



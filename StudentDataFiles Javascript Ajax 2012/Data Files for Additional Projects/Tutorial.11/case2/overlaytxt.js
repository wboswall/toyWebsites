/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 2

   Author:    
   Date:      

   Functions List:

   addOverlay()
      Adds a detail overlay to table cells in the KPAF
      schedule table

*/

addEvent(window, "load", addOverlay, false);


function addOverlay() {

   var allOverlayTargets = document.getElementsByTagName("td");

   for (var i = 0; i < allOverlayTargets.length; i++) {


      var overlayID = allOverlayTargets[i].id + "Overlay";
      var overlay = document.getElementById(overlayID);

      allOverlayTargets[i].onmouseover = function(e) {
         this.style.backgroundColor = "rgb(255, 225, 255)";
      }
      allOverlayTargets[i].onmouseout = function(e) {
         this.style.backgroundColor = "rgb(255, 255, 255)";
      }

      allOverlayTargets[i].onmousedown = function(e) {
         var evt = e || window.event;
         var overlay = document.getElementById(this.id + "Overlay");
         overlay.style.display = "block";
         
         if (evt.pageX) {
            overlay.style.left = evt.pageX + 5 + "px";
            overlay.style.top = evt.pageY + 5 + "px";
         } else {
            var offX = document.documentElement.scrollLeft + document.body.scrollLeft;
            var offY = document.documentElement.scrollTop + document.body.scrollTop;
            overlay.style.left = evt.clientX + offX + 5 + "px";
            overlay.style.top = evt.clientY + offY + 5 + "px";
         }

      }

      allOverlayTargets[i].onmouseup = function(e) {
         var evt = e || window.event;
         var overlay = document.getElementById(this.id+"Overlay");
         overlay.style.display = "none";

      }

   }
}


/* this function attachs the event handler under both event models */
function addEvent(object, evName, fnName, cap) {
	if (object.attachEvent)
		object.attachEvent("on" + evName, fnName);
	else if (object.addEventListener)
		object.addEventListener(evName, fnName, cap);
}


function fadeIn(objID, maxOpacity, fadeTime, delay) {
   var fadeInt = Math.round(fadeTime*1000)/maxOpacity;
   for (var i = 0; i <= maxOpacity; i++) {
      setTimeout("setOpacity('" + objID + "', " + i + ")", delay);
      delay += fadeInt;
   }
}
function setOpacity(objID, value) {
   var object = document.getElementById(objID);
   // Apply the opacity value for IE and non-IE browsers
   object.style.filter = "alpha(opacity = " + value + ")";
   object.style.opacity = value/100;
}

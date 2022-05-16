


/* this function attachs the event handler under both event models */
function addEvent(object, evName, fnName, cap) {
	if (object.attachEvent)
		object.attachEvent("on" + evName, fnName);
	else if (object.addEventListener)
		object.addEventListener(evName, fnName, cap);
}



function writeCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {
  if (cName && cValue != "") {
     var cString = cName + "=" + escape(cValue);
     if (expDate) 
        cString += ";expires=" + expDate.toGMTString();

     if (cPath) cString += ";path=" + cPath;
     if (cDomain) cString += ";domain=" + cDomain;
     if (cSecure) cString += ";secure";


     document.cookie = cString;
  }
}


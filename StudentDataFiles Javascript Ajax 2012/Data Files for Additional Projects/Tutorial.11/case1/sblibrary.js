/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 1


   Filename: sblibrary.js

   
   Functions and Custom Methods

   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   storeCookieField(cName, fName, fValue, expDate, cPath, cDomain, cSecure)
      Writes a multi-valued cookie where cName is the name of the cookie,
      fName is a field name in the cookie, fValue is the field's value,
      and expDate, cPath, cDomain, and cSecure are optional parameters that
      specify the cookie's expiration date, path, domain, and secure flag.

   getField(cName, fName)
      Retrieves the field value for the fName field from the multi-valued
      cookie, cName.

   removeCookie(cName)
      Removes the cName cookie.
	
*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function storeCookieField(cName, fName, fValue, expDate, cPath, cDomain, cSecure) {

   if (cName  && fName  && fValue != "") {

      var subkey = fName + "=" + escape(fValue);

      var cValue = null;
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
         if (cookies[i].split("=")[0] ==  cName) {
            cValue = cookies[i].slice(cookies[i].indexOf("=") + 1);
            break;
         }
      }
     if (cValue) {
         var foundField = false;
         var subkeys = cValue.split("&");
         for (var i = 0; i < subkeys.length; i++) {
            if (subkeys[i].split("=")[0] == fName) {
               foundField = true;
               subkeys[i] = subkey;
               break;
            }
         }
         if (foundField) cValue = subkeys.join("&")
         else cValue += "&" + subkey;
     } else {
         cValue = subkey;
     }
      var cString = cName + "=" + cValue;
      cString += (expDate ? ";expires=" + expDate.toGMTString(): "");
      cString += (cPath ? ";path=" + cPath : "");
      cString += (cDomain ? ";domain=" + cDomain : "");
      cString += (cSecure ? ";secure" : "");
      document.cookie = cString;
   } 
}


function getField(cName, fName) {
   if (document.cookie) {
      var cValue = null;
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
         if (cookies[i].split("=")[0] == cName) {
            cValue = cookies[i].slice(cookies[i].indexOf("=") + 1 );
            break;
         }
      }
      if (cValue) {
         var subkeys = cValue.split("&");
         for (var i = 0; i < subkeys.length; i++) {
            if (subkeys[i].split("=")[0] == fName)
               return unescape(subkeys[i].split("=")[1]);
         }
      }
   }
}

function removeCookie(cName) {
   if (document.cookie) {
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
         if (cookies[i].split("=")[0] == cName) {
            document.cookie = cName + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT";
         }
      }
   }
}




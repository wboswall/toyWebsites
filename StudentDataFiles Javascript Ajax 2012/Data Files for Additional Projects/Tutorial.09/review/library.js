/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Review Assignment


   Filename: library.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   storeCookie(cName, cValue, expDate, cPath, cDomain, cSecure)
      Write a cookie named cName with a value, cValue. The expDate parameter
      contains a date object specifying the expiration date. The cPath and
      cDomain parameters specify the path and domain for the cookie. The
      cSecure parameter is a Boolean that specifies whether or not to include
      the secure flag. The expDate, cPath, cDomain, and cSecure parameters
      are all optional.

   getCookie(cName)
      Retrieves the value of the cookie, cName.

   removeCookie(cName)
      Deletes the cName cookie.

   storeCookieField(cName, fName, fValue, expDate, cPath, cDomain, cSecure)
      Writes a multi-valued cookie where cName is the name of the cookie,
      fName is a field name in the cookie, fValue is the field's value,
      and expDate, cPath, cDomain, and cSecure are optional parameters that
      specify the cookie's expiration date, path, domain, and secure flag.

   getCookieField(cName, fName)
      Retrieves the field value for the fName field from the multi-valued
      cookie, cName.  

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function storeCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {
   if (cName && cValue != null) {
      var cString = cName + "=" + escape(cValue);
      cString += (expDate ? ";expires=" + expDate.toGMTString(): "");
      cString += (cPath ? ";path=" + cPath : "");
      cString += (cDomain ? ";domain=" + cDomain : "");
      cString += (cSecure ? ";secure" : "");
      document.cookie = cString;
   }
}


function getCookie(cName) {
   if (document.cookie) {
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
         if (cookies[i].split("=")[0] == cName) {
            return unescape(cookies[i].split("=")[1]);
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

function storeCookieField(cName, fName, fValue, expDate, cPath, cDomain, cSecure) {

   if (cName && fName  && fValue != null) {

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

function getCookieField(cName, fName) {
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







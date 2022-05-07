/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Case Problem 2

   Author:   
   Date:     

   Filename: newitems.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   writeDateString(dateObj)
      Returns the date and time contained in the dateObj date object as
      a text string in the format mmm. dd, yyyy hh:mm:ss

   storeCookie(cName, cValue, expDate, cPath, cDomain, cSecure)
      Stores a cookie named cName with value cValue. Optional parameters
      expDate, cPath, cDomain, and cSecure set the expiry date,
      path, doman, and secure flag

   getCookie(cName)
      Returns the value of cookie, cName.

   highlightNew()
      Displays the date of the last visit and the new items added to the
      page since the last visit.

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function writeDateTime(dateObj) {

   var monthName = new Array("January", "February", "March",
  "April", "May", "June", "July", "August", "September",
  "October", "November", "December");
	
   var thisMonth = dateObj.getMonth();
   var thisYear = dateObj.getFullYear();
   var thisDay = dateObj.getDate();
   var thisHour = dateObj.getHours();
   var thisMinute = dateObj.getMinutes();   
   var thisSecond = dateObj.getSeconds();

   // add leading zeros to minutes and seconds less than 10
   thisMinute = thisMinute < 10 ? "0"+thisMinute : thisMinute;
   thisSecond = thisSecond < 10 ? "0"+thisSecond : thisSecond;

   return monthName[thisMonth] + " " + dateObj.getDate() + ", " + thisYear + " " + thisHour + ":" + thisMinute + ":" + thisSecond;
}


function setCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {
   if (cName && cValue != "") {
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



/* Add new code below */



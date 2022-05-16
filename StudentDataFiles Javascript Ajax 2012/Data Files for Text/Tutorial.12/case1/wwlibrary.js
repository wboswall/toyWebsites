/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 12
   Case Problem 1

   Filename: wwlibrary.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   XMLHttpRequest()
      Creates a custom XMLHttpRequest object for IE browsers that
      do not support the native XMLHttpRequest object (chiefly
      IE5 and IE6)


*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

if (typeof XMLHttpRequest === "undefined") {
   XMLHttpRequest = function() {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } 
      catch(e) { 
         try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } 
         catch(e) {
            try { return new ActiveXObject("Msxml2.XMLHTTP"); }
            catch(e) {
               try { return new ActiveXObject("Microsoft.XMLHTTP"); } 
               catch(e) {
                  throw new Error("Unable to create your request object"); 
               }
            }
         }
      }
   }
}

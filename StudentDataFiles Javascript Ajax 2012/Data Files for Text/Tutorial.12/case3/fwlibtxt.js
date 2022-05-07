/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 12
   Case Problem 3

   Author:   
   Date:     

   Filename: fwlibrary.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   insertAfter(node, newSibling)
      Inserts the newSibling object directly after node as the
      next sibling

   XMLHttpRequest()
      Creates a custom XMLHttpRequest object for IE browsers that
      do not support the native XMLHttpRequest object (chiefly
      IE5 and IE6)

   grabXHTMLAsXML()
      A method added to the XMLHttpRequest object prototype that
      allows for the retrieval of an XHTML document as XML under both
      document object models.

   linkDocument(xmlDoc)
      Constructor function that creates an object from a linked file
      with the title, paragraph, and image properties containing
      the text of the page heading, the intro paragraph, and the
      source of the main image respectively.

   makeOverlay()
      Method added to the linkDocument prototype to create an HTML
      fragment for a link overlay.


*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function insertAfter(node, newSibling) {
   node.parentNode.insertBefore(newSibling, node.nextSibling);
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

XMLHttpRequest.prototype.grabXHTMLAsXML = function() {

   if (this.overrideMimeType) {
      return this.responseXML;
   } else {

      // Convert text contents to an XML document under Internet Explorer
      

      // Array of MSXML PIDs for IE XML document objects
      var dompids = ["Msxml2.DOMDocument.6.0",
                     "Msxml2.DOMDocument.3.0",
                     "Msxml2.DOMDocument",
                     "Microsoft.XmlDom"];

      // Test each DOM PID
      for (var i = 0; i < dompids.length; i++) {
         try {
            var xmldoc = new ActiveXObject(dompids[i]);
            break;
         } catch (e) {}
      }

      var docString = this.responseText;
      var bodyStart = docString.indexOf("<body>");
      var bodyStop = docString.indexOf("</body>");
      var bodyString = docString.substring(bodyStart, bodyStop + 7);
      xmldoc.loadXML(bodyString);    
      return xmldoc;
   } 

}


/* Add new code below */



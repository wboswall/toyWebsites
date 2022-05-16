/*


*/
var numAdd;
var olElem;
var favDiv; 

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

        window.onload = init;

function init() {

   var cdbutton = document.getElementById("btnCD");
   addEvent(cdbutton, "click", addCDs, false);
   olElem = document.createElement("ol");
   favDiv = document.getElementById("myFav"); 
   favDiv.appendChild(olElem);  
   
}
  
function addCDs() {

   /* get the divCD element */
   /* get the text input box for
      number of CD input's to add */
   /* get the value and store it in numAdd */
   /* for the number of CD input's to add:

      create new paragraph element, text
      node that tells user what box is for
      and an input node for getting the
      name of a cd
      then add the text and input node to the
      new paragraph node, and finally the
      paragraph node to the divCD element */

    /* create a button element with appropriate
       id, value, and onclick event to call 
       add list */

}

function addList() {


   /* for each cd input text box (indicated
      by numAdd):
      
      create a list element for the cd
      setting the innerHTML to the text
      for the corresponding cd text input
      box and add it to the olElem 
      object */
   /* append the list item to olElem */

   /* clear the innerHTML of the formDiv
      div container and reset the value
      of the numCD input element to 0 */
    

}
  
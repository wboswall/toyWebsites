

window.onload = init;


var activeMenu = null;
var timeID;


function init() {
   var menus = new Array();
   var allElems = document.getElementsByTagName("*");


   for (var i = 0; i < allElems.length; i++) {
      if (allElems[i].className == "navG")  menus.push(allElems[i]);
   }

   /* assign the openMenu function to the onclick event for each
      Menus item */

}

function openMenu() {
   
     /* get the current menu id */
     /* determine active menu */
     /* run the moveItemRight function by setting a time interval */

}




function closeMenu() {

     /* get the current menu id */
     /* determine active menu */
     /* run the moveItemLeft function by setting a time interval */

}




function moveItemRight() {
 
   /* get the current position of the active menus left style
      If the current position + 5 is <= 0 then 
         Add five to the active menu’s position
      Else
         Clear the time interval
   Set the active menu to close when clicked by assigning
         the closeMenu function to the appropriate event */
}

function moveItemLeft() {
   
   /* get the current position of the active menus left style
      If the current position  is >= -145 then 
         Add five to the active menu’s position
      Else
         Clear the time interval
   Set the active menu to close when clicked by assigning
         the openMenu function to the appropriate event */

}

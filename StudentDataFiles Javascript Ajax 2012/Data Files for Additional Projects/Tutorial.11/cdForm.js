
window.onload = init;

function init() {

   var favTable; 
   var myCDs = new CDlist();

   var cdbutton = document.getElementById("btnCD");

   favTable = document.getElementById("myFavTable"); 
   cdbutton.onclick = addList;

 }  //end of init
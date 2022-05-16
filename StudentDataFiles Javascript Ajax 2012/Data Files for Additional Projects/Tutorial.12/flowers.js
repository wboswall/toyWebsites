/*
   New Perspectives on JavaScript
   Tutorial 12


   Author: Raymond Enger
   Date:   3/1/2011


*/
/* this function attachs the event handler under both event models */
function addEvent(object, evName, fnName, cap) {
	if (object.attachEvent)
		object.attachEvent("on" + evName, fnName);
	else if (object.addEventListener)
		object.addEventListener(evName, fnName, cap);
}

function displayBanner(currentDate) {

   // get current month
   thisMonth = parseInt(currentDate.getMonth() + 1);
   
   // set the logo
   imgSrc = "defaultLogo.gif"
   imgSrc = ((thisMonth == 12) || (thisMonth == 1) || (thisMonth == 2)) ? "winterLogo.gif" : "defaultLogo.gif"; 
   imgSrc = ((thisMonth == 3) || (thisMonth == 4) || (thisMonth == 5)) ? "springLogo.gif" : imgSrc; 
   imgSrc = ((thisMonth == 6) || (thisMonth == 7) || (thisMonth == 8)) ? "summerLogo.gif" : imgSrc; 
   imgSrc = ((thisMonth == 9) || (thisMonth == 10) || (thisMonth == 11)) ? "fallLogo.gif" : imgSrc; 
   document.getElementById("myBanner").src = imgSrc;


}


function calcDaysToSale(currentDate) {
   // calculate 15th date         
   midDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 15);

   // calculate days until
   daysDiff = parseInt((midDate - currentDate)/(1000*60*60*24));
   

   // set sale message
   newMessage = (daysDiff > 0) ? daysDiff : "Sale over for this month";
   
   return newMessage;



}
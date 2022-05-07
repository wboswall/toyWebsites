/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 8
   Case Problem 1

   Author:   
   Date:     

   Filename: banners.js


   Global Variables
   nextAd
      Used to track the next ad to be displayed in the banner box


   Functions
  
   addEvent(object, evName, fnName, cap)
      Run the function fnName when the event evName occurs in object.

   makeBannerAds()
      Create the banner box and stacked collection of banner ads

   changeBannerAd()
      Change the ad displayed in the banner box by changing the stacking
      order of the ads

   moveNextAd(top)
      Move the nextAd object down top pixels from its current location.

*/


function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}




/* Add new code below */


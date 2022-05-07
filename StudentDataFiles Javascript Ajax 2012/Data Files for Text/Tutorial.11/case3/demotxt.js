/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 3

   Author: 
   Date:   

   Filename: demo.js

   
   Functions:
   runDemo() 
      Runs the code that updates the appearance of the two
      sample boxes whenever a blur event occurs win any of
      10 input boxes on the Web form.

   loadSliders()
      Creates an instance of a slider object and attaches it
      to the Web form directly after the input boxes it is
      associated with.
	
*/

addEvent(window, "load", runDemo, false);

function runDemo() {

   var r1 = document.getElementById("red1");
   var r2 = document.getElementById("red2"); 
   var g1 = document.getElementById("green1");
   var g2 = document.getElementById("green2");
   var b1 = document.getElementById("blue1");
   var b2 = document.getElementById("blue2"); 
   var o1 = document.getElementById("opacity1");
   var o2 = document.getElementById("opacity2"); 
   var z1 = document.getElementById("zIndex1");
   var z2 = document.getElementById("zIndex2");
   var db1 = document.getElementById("box1");
   var db2 = document.getElementById("box2");

   var allInputs = document.getElementsByTagName("input");

   for (var i = 0; i < allInputs.length; i++) {
      allInputs[i].onblur = function() {     
         db1.style.backgroundColor = "rgb(" + r1.value + "," + g1.value + "," + b1.value + ")";
         setOpacity(db1, parseInt(o1.value)); 
         db1.style.zIndex = z1.value; 

         db2.style.backgroundColor = "rgb(" + r2.value + "," + g2.value + "," + b2.value + ")";
         setOpacity(db2, parseInt(o2.value)); 
         db2.style.zIndex = z2.value;      
      }
   }

   document.getElementById("resetB").onclick = function() {
      window.location.reload(true);
   }  
     
}


/*   Add new code below */



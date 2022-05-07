/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Tutorial Case

   Author:   
   Date:     
   Filename: library.js



   Functions List:

   scrambleIt()
      Reloads the current Web page, thus re-arranging the puzzle blocks

   solveIt()
      Places the puzzle blocks in the correct order in the puzzle

   getStyle(object, styleName)
      Returns the computed style value for a specified styleName applied to
      an object.

   nextTo(object1, object)
      Returns a Boolean value indicating whether the coordinate (x, y) lies
      within the boundaries of object

   withinIt(x, y, object2)
      Returns a Boolean value indicating whether object2 is next to object1
      (either above, below, to the left, or to the right of object1)

   swapObjects(object1, object2)
      Swaps the page positions of object1 and object2

   scrambleIntegers(size)
      Returns an array of integers from 0 up to size-1 sorted in random order
      with even parity observed in the sorting of the integers (to ensure
      a solveable solution of the sliding blocks puzzle.)

   randOrder()
      Returns a random value between -0.5 and 0.5

   addEvent(object, evName, fnName, cap)
      Assigns an event handers to object where evName is the name of the event,
      fnName is the name of the function, and cap is the capture phase.
      This function works for both the IE and W3C event models.
   
   removeEvent(object, evName, fnName, cap)  
      Removes an event handers from object where evName is the name of the event,
      fnName is the name of the function, and cap is the capture phase.
      This function works for both the IE and W3C event models.

*/

function scrambleIt() {
   window.location.reload();
}

function solveIt() {
   for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.backgroundImage = "url(block"+i+".jpg)";
   }
}

function getStyle(object, styleName) {
   if (window.getComputedStyle) {
      return document.defaultView.getComputedStyle(object, null).getPropertyValue(styleName);
   } else if (object.currentStyle) {
      return object.currentStyle[styleName]
   }
}

function nextTo(object1, object2) {

   var x = parseInt(object1.style.left) + 5;
   var y = parseInt(object1.style.top) + 5;

   width = parseInt(object2.style.width);
   height = parseInt(object2.style.height);

   // check if object is located above object1
   if (withinIt(x,y-height,object2)) {return true};

   // check if object is located to the left of object1
   if (withinIt(x-width,y,object2)) {return true};

   // check if object is located below object1
   if (withinIt(x,y+height,object2)) {return true};

   // check if object is located to the right of object1
   if (withinIt(x+width,y,object2)) {return true};
      
   return false;   
}

function withinIt(x, y, object) {
   var within = false;

   var left = parseInt(object.style.left);
   var top = parseInt(object.style.top);
   var width = parseInt(object.style.width);
   var height = parseInt(object.style.height);

   var bottom = top + height;
   var right = left + width;

   if ((x >= left && x <= right) && (y >= top && y <= bottom)) within = true;

   return within;
}

function swapObjects(object1, object2) {
   var tempTop = object2.style.top;
   var tempLeft = object2.style.left;

   object2.style.top = object1.style.top;
   object2.style.left = object1.style.left;
   object1.style.top = tempTop;
   object1.style.left = tempLeft;
}

function scrambleIntegers(size) {
  var x = new Array(size);
  for (var i = 0;i < x.length;i++) {x[i] = i;}
  x.sort(randOrder);
 
  var nSum = 0;

  for (var i = 0; i < x.length;i++) {
     for (var j = i; j < x.length; j++) {if (x[j] < x[i]) nSum++;}
  }
   
  if (Math.floor(nSum/2) != nSum/2) { 
     // puzzle is not solveable make one more swap of values
     needSwap = true;
     for (var i = 0; (i < x.length) && needSwap; i++) {
        for (var j = i; j < x.length && needSwap; j++) {
           if (x[j] > x[i]) {temp=x[j];x[j]=x[i];x[i]=temp;needSwap=false;}
        }
     }
  }
  return x;
}

function randOrder(){
   return 0.5 - Math.random();
}
 
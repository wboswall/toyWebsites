/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Case Problem 3

   Author:   
   Date:     

   Filename: tablesort.js


   Function List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   addProps(object, text, tableRow)
      Adds the value and row custom object properties to the object specified
      by the object parameter. The value property is set to the value of
      the text parameter. The row property points to the table row
      specified by the tableRow parameter

   numCompare(a, b)
      A comparison function used for numeric array sorting which returns the value of
      b.value - a.value, where .value is a custom property created in the
      addProps() function.

   alphaCompare(a, b)
      A comparison function used for alphabetical array sorting which compares
      the alphabetical order of b.value and a.value, where .value is a 
      custom property created in the addProps() function.

   sortCol() 
      Sets the sorting column and runs the sorting function

   setupTable()()
      Sets up the data table, preparing it to become a sortable table

   addSortDirection
      Creates a table row containing a selection box containing the two 
      sorting directions (ascending and descending)

   toggleSort()
      Toggles the direction of the sorting order

   runSort()
      Runs the table sorting, swapping the position of rows in
      the table body

   colorColumns(index)
      Highlights the column in which the sorting occurs
*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function addProps(object, text, tableRow) {

   object = {
      value: text,
      row: tableRow
   }

   return object;
}

function numCompare(a, b) {
   return b.value - a.value;
}

function alphaCompare(a, b) {
   var astring = a.value.toLowerCase();
   var bstring = b.value.toLowerCase();

   if (bstring > astring) return 1;
   if (bstring < astring) return -1;
   return 0;
}

function sortCol() {

}


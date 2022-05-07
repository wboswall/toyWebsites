/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Case Problem 2

   Author:   
   Date:     

   Filename: filter.js

   Global Variables:
   filterTable
      References the the table containing the filter data

   filterCols
      References the col elements within the filter table

   filterHead
      References the head section of the filter table

   filterBody
      References the body section of the filter table


   Function List:
   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   isUnique(matchValue, arrList)
      Returns a value true if matchValue is found in the array, arrList, otherwise
      it returns the value, false.

   init()
      Initiates the filter table, generating the selectin lists, and creating event 
      handlers for each select element and counting the number of records in the 
      data table

   countRecords()
      Counts the number of visible rows in the data table

   addTotalsRow()
      Adds a new row to the top of the header section displaying the total
      number of records in the table

   createSelectionList(colIndex)
      Creates a selection list populated with option text matching the
      unique values in the table column indicated by colIndex

   addUniqueOptions(selectionList, colIndex)
      Adds option elements to the selectionList with the text of each 
      option reflecting a unique value from the data column. The index
      parameter specifies the index of the column from which the 
      option values are drawn.

   resetTable()
      Resets the data table, displaying all table rows

   doFilter()
      Filters the data table based on the values selected in the drop-down 
      selection lists. Also updates the record count.

   filterColumn(colIndex, fText)
      If the cell value from the current column does not equal the value
      of fText, this function hides the table row of which the table cell is part.


*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

function isUnique(matchValue, arrList) {
   var joinArray = "^"+arrList.join("^")+"^";
   var index = joinArray.indexOf("^"+matchValue+"^");
   if (index == -1) return true
   else return false;
}


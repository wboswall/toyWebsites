/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Review Assignment

   Author:   
   Date:     

   Filename: profile.js

   Functions List:

   getSelection(selectionList)
      Retrieves the index  number of the selected option from the selection
      list, selectionList.

   getOption(optionGroup) 
      Retrieves index number of the selected radio button from the
      group of radio buttons with the name, optionGroup

   initPage()
      Adds an event handler to the profile form submit button
      when the page is opened.

   saveProfile()
      Saves the values in the profile form to fields in
      the memberInfo multi-valued cookie

*/


function getSelection(selectionList) {
   return parseInt(selectionList.selectedIndex);
}

function getOption(optionGroup) {
   for (var i = 0; i < optionGroup.length; i++) {
      if (optionGroup[i].checked) return parseInt(i);
   }
}



/* Add new code below */



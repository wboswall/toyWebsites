/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 5
   Tutorial Case

   Author:    
   Date:     

   Filename: order.js



   Functions List:
   todayTxt()
      Displays the current date in the format mm/dd/yyyy.

   startForm()
      Sets up and initializes the form1 Web form.

   resetForm1()
      Reloads the current Web page, resetting the form.

   calcPrice()
      Calculates the price of the customer order by 
      multiplying the product price by the quantity ordered.

   calcShipping()
      Calculates the shipping cost of the item

   calcTotal()
      Calculates the total cost of the order including the sales price,
      shipping cost, and sales tax.

   checkForm1()
      Checks the form to ensure that all required fields have been
      entered by the user.

*/

function todayTxt() {
   var Today = new Date();
   return Today.getMonth() + 1 + "-" + Today.getDate() + "-" + Today.getFullYear();
}



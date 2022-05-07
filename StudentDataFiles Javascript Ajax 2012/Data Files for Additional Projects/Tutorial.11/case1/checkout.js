/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 11
   Case Problem 1



   Functions List:

   retrieveOrder()
      Retrieves the multi-valued cookies with names starting
      with cartItem[n] where [n] is an integer that indicates
      the number of the cart item and displays the subkey
      values in a table on the page.

*/

addEvent(window, "load", retrieveOrders, false);


function retrieveOrders() {
   if (document.cookie) {

      var itemsInCart = new Array();
      var cookies = document.cookie.split("; ");

      // Create the itemsInCart array listing the names of the cart items
      for (var i = 0; i < cookies.length; i++) {
         itemsInCart.push(cookies[i].split("=")[0]);
      }

      if (itemsInCart.length > 0) {
         // Create the shopping cart table
         cartTable = document.createElement("table");
         cartTable.id = "cartTable";
         shoppingCart = document.getElementById("cartStatus");
         shoppingCart.replaceChild(cartTable, shoppingCart.firstChild);

         // Create the table caption
         var tcaption = document.createElement("caption");
         tcaption.innerHTML = "Item(s) currently in your cart";
         cartTable.appendChild(tcaption);

         // Create the thead element
         var thead = document.createElement("thead");
         cartTable.appendChild(thead);

         // Create the heading row
         var headRow = document.createElement("tr");
         var pidHead = document.createElement("th");
         pidHead.innerHTML = "PID";
         var productHead = document.createElement("th");
         productHead.innerHTML = "Product";
         var descriptionHead = document.createElement("th");
         descriptionHead.innerHTML = "Description";
         var quantityHead = document.createElement("th");
         quantityHead.innerHTML = "Qty";
         var priceHead = document.createElement("th");
         priceHead.innerHTML = "Price (ea.)";

         headRow.appendChild(pidHead);        
         headRow.appendChild(productHead);
         headRow.appendChild(descriptionHead);
         headRow.appendChild(quantityHead);
         headRow.appendChild(priceHead);

         thead.appendChild(headRow);

         // Create the tbody element
         var tbody = document.createElement("tbody");
         cartTable.appendChild(tbody);

         // Add a table row for each shopping cart item
         for (var i = 0; i < itemsInCart.length; i++) {
            var newRow = document.createElement("tr");

            // Insert the pid cell
            var pidCell = document.createElement("td");
            pidCell.innerHTML = itemsInCart[i];
            newRow.appendChild(pidCell);

            // Insert the product cell
            var productCell = document.createElement("td");
            productCell.innerHTML = getField(itemsInCart[i], "prod");
            newRow.appendChild(productCell);

            // Insert the description cell
            var descCell = document.createElement("td");
            descCell.innerHTML = getField(itemsInCart[i], "desc");
            newRow.appendChild(descCell);

            // Insert the quantity cell
            var qtyCell = document.createElement("td");
            qtyCell.style.textAlign = "right";
            qtyCell.innerHTML = getField(itemsInCart[i], "qty");
            newRow.appendChild(qtyCell);

            // Insert the price cell
            var priceCell = document.createElement("td");
            priceCell.style.textAlign = "right";
            priceCell.innerHTML = getField(itemsInCart[i], "price");
            newRow.appendChild(priceCell);

            tbody.appendChild(newRow);
         }
      }
   }
}
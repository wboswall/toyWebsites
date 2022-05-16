/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 1
   Tutorial Case


   Function List:
   stringReverse
      Used to reverse the order of characters in a text string

*/
            function showEM(userName,emServer)
            {
               var emLink= userName + "@" + emServer;
               document.write("<a href='mailto:" + emLink + "''>");
               document.write(emLink);
               document.write("</a>");
            }
            function stringReverse(textString) {
               if (!textString) return '';
               var revString='';
               for (i = textString.length-1; i>=0; i--)
                  revString+=textString.charAt(i)
               return revString;
         }
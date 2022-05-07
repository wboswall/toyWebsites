


// XMLHttpRequest Constructor
if (typeof XMLHttpRequest == "undefined") {
      XMLHttpRequest = function() {
               // Array of MSXML PIDs
              var pids = ["Msxml2.XMLHTTP.6.0",
                                "Msxml2.XMLHTTP.3.0",
                                "Msxml2.XMLHTTP",
                                 "Microsoft.XMLHTTP"];
              // Test each PID
            for (var i = 0; i < pids.length; i++) {
                 try {
                            return new ActiveXObject(pids[i]);
                } catch (e) {}
            }
          // Halt if unable to create request object
          throw new Error("Unable to create request object");
      }
 }




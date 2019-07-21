var xhrNode; // define the global variable to process the AJAX request
var httpPortNumber;


function callDivNodeJSChange(){

	
	alert(httpPortNumber);

	xhrNode = new XMLHttpRequest();

	var url = "http://developer.cege.ucl.ac.uk:"+httpPortNumber;

	xhrNode.open("GET", url, true);

	xhrNode.onreadystatechange=processDivNodeJSChange; 

	  try { 

		 xhrNode.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

	  } 

	   xhrNode.send(); 

	 

	}   

	

	

	function processDivNodeJSChange() { 

	if (xhrNode.readyState < 4)                         // while waiting response from server 

			document.getElementById('ajax1').innerHTML = "Loading..."; 

	 

		else if (xhrNode.readyState === 4) { // 4 = Response from server has been completely loaded. 

			if (xhrNode.status == 200 && xhrNode.status < 300)    // http status between 200 to 299 are all successful 

				document.getElementById('ajax1').innerHTML = xhrNode.responseText; 

		} 

	} 
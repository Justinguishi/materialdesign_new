
	
	function trackAndCircle() {
		trackLocation();
	    addPointLinePoly();
		getEarthquakes();
		}

		
	function loadW3HTML() { 
	w3.includeHTML();
	} 


	function startup(){
	document.addEventListener('DOMContentLoaded',function(){
		//trackAndCircle();
		getPort();
		loadW3HTML();
	},false);
}	     
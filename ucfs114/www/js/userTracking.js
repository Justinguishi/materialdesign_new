var userMarker;
 
	function trackLocation() {
 
		if (navigator.geolocation) {
 
		navigator.geolocation.watchPosition(showPosition);
 
		} else {
 
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
 
		}

		}

 
	function showPosition(position){
 
		if (userMarker){
 
			mymap.removeLayer(userMarker);
 
		}
 
		userMarker=L.marker([position.coords.latitude,position.coords.longitude])

		.addTo(mymap).bindPopup("<b>You were here</b>");
		
		
		mymap.setView([position.coords.latitude,position.coords.longitude],13);

		getDistance1();
		}
		
 
 
 function getDistance()

{

	navigator.geolocation.getCurrentPosition(getDistanceFromPoint);

	alert("Calculating Distance...");

}

function getDistanceFromPoint(position) {

		// find the coordinates of a point using this website:

		// these are the coordinates for Warren Street

		var lat = 30.717907388913197;

		var lng =  104.09583621076891;

		// return the distance in kilometers

		var distance = calculateDistance(position.coords.latitude, position.coords.longitude, lat,lng, 'K');

		if (distance<10) {alert('UCL is arriving!');}
		

		}


function getDistance1()

{

	navigator.geolocation.getCurrentPosition(getDistanceFromMultiplePoints);

	//alert("Calculating Distance...");

}
		
		
		
function getDistanceFromMultiplePoints(position)

{

	var minDist = 100000000000;

	var closetQuake="";

	for (var i = 0; i < earthquakes.features.length; i++) {

		var obj = earthquakes.features[i];

		var distance = calculateDistance(position.coords.latitude,position.coords.longitude,

			obj.geometry.coordinates[0], obj.geometry.coordinates[1], 'K');

		if (distance < minDist) {

			minDist = distance;

			closetQuake=obj.properties.place;

		}

	}

	alert("Earthquake: " + closetQuake + " is distance " + minDist + "away");

}		
function calculateDistance(lat1, lon1, lat2, lon2, unit) {

		var radlat1 = Math.PI * lat1/180;

		var radlat2 = Math.PI * lat2/180;

		var radlon1 = Math.PI * lon1/180;

		var radlon2 = Math.PI * lon2/180;

		var theta = lon1-lon2;

		var radtheta = Math.PI * theta/180;

		var subAngle = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

		subAngle = Math.acos(subAngle);

		subAngle = subAngle * 180/Math.PI; 				// convert the degree value returned by acos back to degrees from radians

		dist = (subAngle/360) * 2 * Math.PI * 3956; 	// ((subtended angle in degrees)/360) * 2 * pi * radius ),where radius of the earth is 3956 miles	

		if (unit=="K") { dist = dist * 1.609344 ;} 		// convert miles to km

		if (unit=="N") { dist = dist * 0.8684 ;} 		// convert miles to nautical miles

		return dist;

		}


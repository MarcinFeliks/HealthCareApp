function getMyLocation{
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation);
	}else{
		alert("Brak wsparcia dla geolokalizacji.");
	}
	
}
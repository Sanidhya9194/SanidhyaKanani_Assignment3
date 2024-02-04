"use strict";

$(document).ready( () => {
	// Retrieve data from session storage
	const profile = JSON.parse(sessionStorage.getItem("profile"))

	// Below condition will set profile data to related fields
	if(profile){
		$("#email").text(profile.email)
		$("#phone").text(profile.phone)
		$("#postal").text(profile.postal)
		$("#dob").text(profile.dob)
	}
	// If profile data is not found from session storage it will show alert.
	else{
		alert('Error! Please try again.');
	}
	
	// To go back to prevoius page using history method of JS
	$("#back").click( () => {
		history.back();
	}); // end of click()
	
}); // end of ready()
function openGoJo() {
	window.open("https://www.gojo.com/en");
};

function openFifthThird (){

	window.open("https://play.google.com/store/apps/details?id=com.clairmail.fth&hl=en", "_blank")
}



function initMap() {
	var myLatLng = {lat: 35.2271648, lng: -80.84634170000004};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatLng
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Cardinal Solutions'
	});
}
ymaps.ready(init);

var image = document.querySelector(".map-img");
var map = document.querySelector(".map");   
var myMap,
	mayPlacemark;

function init() {  
	image.classList.add("map-close");

    myMap = new ymaps.Map("map", {
	center: [45.04, 38.96], 
    zoom: 15
	});

	myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		content: "nёrd\'s", 
		balloonContent: 'Nerds'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/bullet.png',
		iconImageSize: [230, 190],
	});

	myMap.geoObjects.add(myPlacemark);
}
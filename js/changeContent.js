var about = document.querySelector("#about");
var portfolio = document.querySelector("#portfolio");
var contact = document.querySelector("#contact");

var aboutSect = document.querySelector(".page-content__about");
var portfolioSect = document.querySelector(".page-content__portfolio");
var contactSect = document.querySelector(".page-content__contact_me");

about.onclick = function() {
	$('.page-content__about').fadeIn('slow', 0);
	$('.page-content__portfolio').fadeTo('slow', 0);
	$('.page-content__contact_me').fadeTo('slow', 0);
};


portfolio.onclick = function() {
	$('.page-content__about').fadeTo('slow', 0);
	$('.page-content__portfolio').fadeIn('slow', 0);
	$('.page-content__contact_me').fadeTo('slow', 0);
};


contact.onclick = function() {
	$('.page-content__about').fadeTo('slow', 0);
	$('.page-content__portfolio').fadeTo('slow', 0);
	$('.page-content__contact_me').fadeIn('slow', 0);
};
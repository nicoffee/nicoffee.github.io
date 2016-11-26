window.scrollTo(0, 0);

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

};

var langSwitcher = document.getElementById('langSwitcher');
var enBlocs = document.querySelectorAll('.en');
var ruBlocs = document.querySelectorAll('.ru');

var about = document.querySelectorAll('.about');
var portfolio = document.querySelectorAll('.portfolio');
var contact = document.querySelectorAll('.contact');
var section2 = document.querySelectorAll('.section')[1];
var header = document.querySelector('header');

var portfolioTop = section2.getBoundingClientRect().top;

about[0].onclick = about[1].onclick = function() {
  window.scrollTo(0, 0);
};

portfolio[0].onclick = portfolio[1].onclick = function() {
  var top = getCoords(section2).top;
  window.scrollTo(0, top - header.offsetHeight);
};

contact[0].onclick = contact[1].onclick = function() {
  window.scrollTo(0, 10500);
};

document.onclick = function(event) {
  var target = event.target;

  document.body.scrollY += 150;

  if (target.className != 'unactive-lang-toggle') {
    return;
  };

  target.classList.remove('unactive-lang-toggle');
  target.classList.add('active-lang-toggle');
  document.body.setAttribute("class", "democlass");

  if (target.previousElementSibling) {
  	target.previousElementSibling.classList.remove('active-lang-toggle');
   	target.previousElementSibling.classList.add('unactive-lang-toggle');
  } else {
   	target.nextElementSibling.classList.remove('active-lang-toggle');
   	target.nextElementSibling.classList.add('unactive-lang-toggle');
  };

  for (var i = 0; i < enBlocs.length; i++) {
  	if (!enBlocs[i].style.display || (enBlocs[i].style.display == 'block')) {
   		enBlocs[i].style.display = 'none';
   		ruBlocs[i].style.display = 'block';
   		if (enBlocs[i].parentNode.className == 'navigation') {
   			ruBlocs[i].style.display = 'inline-block';
   		}
   	} else {
   		enBlocs[i].style.display = 'block';
   		ruBlocs[i].style.display = 'none';
   		if (enBlocs[i].parentNode.className == 'navigation') {
   		en[i].style.display = 'inline-block';
    	}
    };
  };
};


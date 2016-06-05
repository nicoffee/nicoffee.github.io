var langSwitcher = document.getElementById('langSwitcher');
var enBlocs = document.querySelectorAll('.en');
var ruBlocs = document.querySelectorAll('.ru');

console.log(enBlocs.length);
console.log(ruBlocs.length);

document.onclick = function(event) {
    var target = event.target;

    if (target.className != 'unactive-lang-toggle') {
        return;
    };

    target.classList.remove('unactive-lang-toggle');
    target.classList.add('active-lang-toggle');

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
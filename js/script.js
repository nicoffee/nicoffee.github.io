(function() {

    window.onscroll = function() {
        let header = document.querySelector('.main-header');
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled && scrolled > 100) {
            header.classList.add('main-header_scrolled')
        } else {
            header.classList.remove('main-header_scrolled')
        }
    }

})();


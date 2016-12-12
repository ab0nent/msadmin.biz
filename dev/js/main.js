;(function(){
    "use strict";

    var header = document.querySelector('.header');
    var btnUp = document.querySelector('.btn_up');
    var sections = [
        document.getElementById('top'),
        document.getElementById('workflow'),
        document.getElementById('services'),
        document.getElementById('price')
    ];
    var navLinks = document.getElementsByClassName('nav__link');

    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if(scrolled){
            header.classList.add('header_scrolled');
            btnUp.classList.add('btn_visible');
        }else{
            header.classList.remove('header_scrolled');
            btnUp.classList.remove('btn_visible');
        }

        for(var i = 0; i < sections.length; i++){
            var coords = sections[i].getBoundingClientRect();
            if((Math.round(coords.top) <=0) && (Math.round(coords.bottom) > 0)){
                setActiveMenuItem(sections[i].id);
                break;
            }
        }
    };

    function setActiveMenuItem(id) {

        for(var i = 0; i < navLinks.length; i++){
            if(id == navLinks[i].hash.substring(1)){
                var activeNav = document.querySelector('.active');
                activeNav.classList.remove('active');
                navLinks[i].classList.add('active');
            }
        }
    }

}());
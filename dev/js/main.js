;(function(){
    "use strict";

    var header = document.querySelector('.header');
    var btnUp = document.querySelector('.btn_up');

    window.onscroll = function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if(scrolled){
            header.classList.add('header_scrolled');
            btnUp.classList.add('btn_visible');
        }else{
            header.classList.remove('header_scrolled');
            btnUp.classList.remove('btn_visible');
        }
    };

}());
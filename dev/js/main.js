/**
 * Created by kameron on 30.11.2016.
 */

var header = document.querySelector('.header');
var btnUp = document.querySelector('.btn-up');

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled){
        header.classList.add('header_scrolled');
        btnUp.classList.add('visible');
    }else{
        header.classList.remove('header_scrolled');
        btnUp.classList.remove('visible');
    }
};
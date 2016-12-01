/**
 * Created by kameron on 30.11.2016.
 */

var header = document.querySelector('.header');

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled){
        header.classList.add('header_scrolled');
    }else{
        header.classList.remove('header_scrolled');
    }
};
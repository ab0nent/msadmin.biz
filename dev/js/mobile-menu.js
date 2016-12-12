;(function(){
    "use strict";

    var btnMenu = document.querySelector('.btn_menu');
    var menuList = document.querySelector('.mobile-menu__list');
    var menuLinks = document.getElementsByClassName('mobile-menu__link');

    for(var i = 0; i < menuLinks.length; i++){
        menuLinks[i].addEventListener('click', menuLinkClick);
    }

    btnMenu.onclick = function () {
        btnMenu.classList.add('btn_hidden');
        menuList.classList.add('display_block');
    };

    function menuLinkClick() {
        btnMenu.classList.remove('btn_hidden');
        menuList.classList.remove('display_block');
    };

}());
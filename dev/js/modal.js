;(function () {
    'use strict';
    var contactButtons = document.getElementsByClassName('js-contact');
    var modal = document.querySelector('.modal');
    var btnClose = document.querySelector(".modal__close");

    btnClose.onclick = function () {
        modal.classList.remove('display_block');
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('display_block');
        }
    };

    for (var i = 0; i < contactButtons.length; i++) {
        contactButtons[i].addEventListener('click', function (event) {
            event.preventDefault();
            modal.classList.add('display_block');
        }, false);
    }
}());

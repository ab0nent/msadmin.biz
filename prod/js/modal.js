;(function () {
    'use strict';
    var contactButtons = document.getElementsByClassName('js-contact');
    var modal = document.querySelector('.modal');
    var btnClose = document.querySelector(".modal__close");

    btnClose.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    for (var i = 0; i < contactButtons.length; i++) {
        contactButtons[i].addEventListener('click', function (event) {
            event.preventDefault();
            showContactDialog();
        }, false);
    }

    function showContactDialog() {
        modal.style.display = "block";
    }
}());

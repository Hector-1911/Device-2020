'use strict'

// Окно входа
var logInButton = document.querySelector('.header__user-login');
var logInCloseButton = document.querySelector('.modal-message__close-btn');
var popupMessage = document.querySelector('.modal-message__wrap');

var logInClick = function () {
   if (popupMessage.classList.contains('block-hidden')) {
      popupMessage.classList.remove('block-hidden');
      popupMessage.classList.add('block-show');
   };
};

var logInClose = function () {
   if (popupMessage.classList.contains('block-show')) {
      popupMessage.classList.remove('block-show');
      popupMessage.classList.add('block-hidden');
   };
};

logInButton.addEventListener('click', logInClick);
logInCloseButton.addEventListener('click', logInClose);
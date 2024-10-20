'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////

const header = document.querySelector('.header');

const allSelections = document.querySelectorAll('.section');

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

// Creating and inserting elements

const message = document.createElement('div');

message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for improved functionality and analytics <button class = "btn btn--close-cookie">Got it!</button>';

header.prepend(message);

// Delete element

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// 188 Styles attribues and CLasses

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav_logo');
console.log(logo.alt);

console.log(logo.getAttribute('designer'));

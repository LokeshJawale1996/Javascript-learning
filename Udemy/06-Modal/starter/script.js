'use strict';
//select the required classes for manipulation

const modal = document.querySelector('.modal');
// console.log(modal);
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//this function is stored in vaiable openModal
//which remove the classs hiddeen from modal and overlay
//use to open the modal
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//this function is stored in vaiable closeModal
//which add the classs hidden from modal and overlay
//use to close the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//for loop is used to execute all classes having class show-modal
//which is selected by variable btnsOpenModal one by one

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

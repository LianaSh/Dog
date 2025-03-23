'use strict';

const modal = document.querySelector('#modal');
const btnOpen = document.querySelector('#menu');
const btnClose = modal.querySelector('.modal__close');

function openModal() {
   modal.classList.add('open');
};

function closeModal() {
    modal.classList.remove('open');
};

btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);


const orderBtn = document.querySelector('#orderBtn');
const orderModal = document.querySelector('#orderModal');
const orderClose = document.querySelector('#orderClose');

function openOrderModal() {
    orderModal.classList.add('open');
};

function closeOrderModal() {
    orderModal.classList.remove('open');
};

orderBtn.addEventListener('click', openOrderModal);
orderClose.addEventListener('click', closeOrderModal);

console.log(orderModal);
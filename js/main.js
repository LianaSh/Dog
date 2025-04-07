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

const detailsBtn = document.querySelector('#detailsBtn');
const detailsModal = document.querySelector('#detailsModal');
const detailsClose = document.querySelector('#detailsClose');

function openDetailsModal() {
    detailsModal.classList.add('open');
};

function closeDetailsModal() {
    detailsModal.classList.remove('open');
};

detailsBtn.addEventListener('click', openDetailsModal);
detailsClose.addEventListener('click', closeDetailsModal);

const appointmentBtn = document.querySelector('#appointmentBtn');
const appointmentModal = document.querySelector('#appointmentModal');
const appointmentClose = document.querySelector('#appointmentClose');

function openAppointmentModal() {
    appointmentModal.classList.add('open');
}

function closeAppointmentModal() {
    appointmentModal.classList.remove('open');
};

appointmentBtn.addEventListener('click', openAppointmentModal);
appointmentClose.addEventListener('click', closeAppointmentModal);


const informationBtn = document.querySelector('#informationBtn');
const informationModal = document.querySelector('#informationModal');
const informationClose = document.querySelector('#informationClose');

function openInformationModal() {
    informationModal.classList.add('open');
}

function closeInformationModal() {
    informationModal.classList.remove('open');
}

informationBtn.addEventListener('click', openInformationModal);
informationClose.addEventListener('click', closeInformationModal);

const infoBtn = document.querySelector('#infoBtn');
const infoModal = document.querySelector('#infoModal');
const infoClose = document.querySelector('#infoClose');

function openInfoBtn() {
    infoModal.classList.add('open');
}

function closeInfoModal() {
    infoModal.classList.remove('open');
}

infoBtn.addEventListener('click', openInfoBtn);
infoClose.addEventListener('click', closeInfoModal);
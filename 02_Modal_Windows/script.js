'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Functions to be called in EvenListeners

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};


btnsOpenModal.forEach(function (element) {
    element.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);


// Close the modal when clicked outside of it
overlay.addEventListener("click", closeModal);

// Close the modal when clicked Escape button on the keyboard
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && (!modal.classList.contains("hidden"))) {
        closeModal();
    }
})
"use strict";
const button = document.querySelectorAll(".show-modal");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const body = document.querySelector("body");
let selected = 0;

button.forEach((el, i) => {
  el.addEventListener("click", function () {
    open(i + 1);
    selected = i;
  });
});

closeModal.addEventListener("click", function () {
  close(selected);
});

overlay.addEventListener("click", function () {
  close(selected);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") close(selected);
});

function close(i) {
  modal[i].classList.add("hidden");
  overlay.classList.add("hidden");
}

function open(i) {
  modal.forEach((el) => {
    if (el.classList[1] == i) {
      el.classList.remove("hidden");
      overlay.classList.remove("hidden");
    }
  });
}

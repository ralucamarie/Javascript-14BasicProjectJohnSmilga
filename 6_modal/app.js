const overlay = document.querySelector(".modal-overlay");
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
  overlay.classList.add("open-modal");
}

function closeModal() {
  overlay.classList.remove("open-modal");
}

// (() => {
//   const refs = {
//     // Додати атрибут data-menu-open на кнопку відкриття
//   openModalBtn: document.querySelector("[data-menu-open]"),
//     // Додати атрибут data-menu-close на кнопку закриття
//   closeModalBtn: document.querySelector("[data-menu-close]"),
//     // Додати атрибут data-menu на бекдроп модалки
//   modal: document.querySelector("[data-menu]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//   refs.modal.classList.toggle("is-open");
//   }
// })();
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    menuLinks: document.querySelectorAll("[data-menu-link]"), 
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      refs.modal.classList.remove("is-open");
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
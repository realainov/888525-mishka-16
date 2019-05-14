if (document.querySelector(".ware") !== null) {
  let buttonOrder = document.querySelector(".ware__order-button");
  let modalWrapper = document.querySelector(".modal-wrapper");
  let modalCart = document.querySelector(".modal-cart");

  buttonOrder.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWrapper.classList.add("modal-wrapper--show");
    modalCart.classList.add("modal-cart--show");
  });

  document.addEventListener("keydown", function (evt) {

    if (evt.keyCode === 27) {

      evt.preventDefault();

      if (modalCart.classList.contains("modal-cart--show")) {
        modalWrapper.classList.remove("modal-wrapper--show");
        modalCart.classList.remove("modal-cart--show");
      }

    }
  });

  modalWrapper.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWrapper.classList.remove("modal-wrapper--show");
    modalCart.classList.remove("modal-cart--show");
  });
}

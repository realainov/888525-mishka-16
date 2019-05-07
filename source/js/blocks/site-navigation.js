if (document.querySelector(".site-navigation") !== null) {

  var toggleMenu = document.querySelector(".site-navigation__menu-toggle");
  var menuCatalog = document.querySelector(".site-navigation__catalog");
  var menuOrder = document.querySelector(".site-navigation__order");
  var menuSearch = document.querySelector(".site-navigation__search");
  var menuCart = document.querySelector(".site-navigation__cart");

  toggleMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    toggleMenu.classList.toggle("site-navigation__menu-toggle--close");
    menuCatalog.classList.toggle("site-navigation__item--show");
    menuOrder.classList.toggle("site-navigation__item--show");
    menuSearch.classList.toggle("site-navigation__item--show");
    menuCart.classList.toggle("site-navigation__item--show");
  });
}

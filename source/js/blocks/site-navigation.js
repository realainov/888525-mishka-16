if (document.querySelector(".site-navigation") !== null) {

  let toggleMenu = document.querySelector(".site-navigation__menu-toggle");
  let menuItems = document.querySelectorAll(".site-navigation__item");

  toggleMenu.classList.add("site-navigation__menu-toggle--block");

  [].forEach.call(menuItems, function(menuItem) {
    menuItem.classList.remove("site-navigation__item--show");
  });

  toggleMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    toggleMenu.classList.toggle("site-navigation__menu-toggle--close");
    [].forEach.call(menuItems, function(menuItem) {
      menuItem.classList.toggle("site-navigation__item--show");
    });
  });
}

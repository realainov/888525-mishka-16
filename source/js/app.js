if (document.querySelector(".contacts__map") !== null) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.938886, 30.323159],
        zoom: 16
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/icon-map-pin.svg',
        // Размеры метки.
        iconImageSize: [67, 100],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-45, -85]
      });

      myMap.geoObjects
        .add(myPlacemark);
  });
}

if (document.querySelector(".response") !== null) {
  var comments = document.querySelectorAll(".response__comment-item");
  var buttonPrev = document.querySelector(".response__control-button--prev");
  var buttonNext = document.querySelector(".response__control-button--next");

  var l = comments.length - 2;

  buttonNext.addEventListener("click", function (evt) {

    for (var j = 0; j < comments.length; j++) {
      comments[j].classList.remove("response__comment-item--show");
    }

    if (l === 0) {
      comments[comments.length - 1].classList.add("response__comment-item--show");
    } else {
      comments[l - 1].classList.add("response__comment-item--show");
    }

    l++;

    if (l === comments.length) {
      l = 0;
    }
  });

  buttonPrev.addEventListener("click", function (evt) {

    for (var j = 0; j < comments.length; j++) {
      comments[j].classList.remove("response__comment-item--show");
    }

    comments[l].classList.add("response__comment-item--show");

    l--;

    if (l === -1) {
      l = comments.length - 1;
    }
  });
}

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

//# sourceMappingURL=app.js.map

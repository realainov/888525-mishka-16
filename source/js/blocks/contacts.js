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

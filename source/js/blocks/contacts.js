if (document.querySelector(".contacts__map") !== null) {
  ymaps.ready(function () {
    let myMap = new ymaps.Map("map", {
        center: [59.938886, 30.323159],
        zoom: 16
      }, {
        searchControlProvider: "yandex#search"
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        "<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка"
      }, {

        iconLayout: "default#image",
        iconImageHref: "img/icon-map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-45, -85]
      });

      myMap.geoObjects
        .add(myPlacemark);
  });
}

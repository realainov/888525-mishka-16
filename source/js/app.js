@import "common/fonts";
@import "common/variables";
@import "common/mixins";
@import "common/normalize";
@import "blocks/visually-hidden";
@import "blocks/layout";
@import "blocks/center-wrapper";
@import "blocks/button";
@import "blocks/title-wrapper";
@import "blocks/title";
@import "blocks/briefly";
@import "blocks/caption";
@import "blocks/catalog";
@import "blocks/contacts";
@import "blocks/goods";
@import "blocks/order";
@import "blocks/order-form";
@import "blocks/production";
@import "blocks/response";
@import "blocks/site-header";
@import "blocks/site-navigation";
@import "blocks/site-main";
@import "blocks/site-footer";
@import "blocks/ware";

doctype
html(lang="ru")
  include common/variables
  head
    meta(charset="utf-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    link(rel="stylesheet" href="css/style.css")
    title="Каталог товаров / Интернет-магазин «MISHKA»"
  body
    header.site-header
      nav.site-header__site-navigation.site-navigation.site-navigation--footer-color
        button.site-navigation__menu-toggle(type="button" title="Открыть меню")
        div.center-wrapper.site-navigation__center-wrapper
          ul.site-navigation__list
            li.site-navigation__item.site-navigation__logo
              a.site-navigation__logo-link(href="index.html")
                picture.site-navigation__logo-image
                  source(media=desktop srcset="img/logo-desktop.svg")
                  source(media=tablet srcset="img/logo-tablet.svg")
                  img(src="img/logo-mobile.svg" alt="Логотип компании «MISHKA»")
            li.site-navigation__item.site-navigation__catalog
              a.site-navigation__link(href="catalog.html") Каталог товаров
            li.site-navigation__item.site-navigation__order
              a.site-navigation__link(href="form.html") Вязание на заказ
            li.site-navigation__item.site-navigation__search
              a.site-navigation__link(href="#")
                span.site-navigation__text Поиск по сайту
                include ../img/icon-search.svg
            li.site-navigation__item.site-navigation__cart
              a.site-navigation__link(href="#") Корзина: пока пуста
                include ../img/icon-cart.svg
            li.site-navigation__item.site-navigation__new
              a.site-navigation__link(href="#") Новые поступления
            li.site-navigation__item.site-navigation__sale
              a.site-navigation__link(href="#") Распродажа
            li.site-navigation__item.site-navigation__delivery
              span.site-navigation__text Бесплатная доставка по России
    main.site-main
      h1.visually-hidden Каталог товаров / Интернет-магазин «MISHKA»
      section.goods.site-main__goods
        div.title-wrapper.goods__title-wrapper
          h2.title.goods__title Каталог товаров
        div.center-wrapper.goods__center-wrapper
          ul.goods__list
            li.goods__item
              a.goods__image-link(href="#")
                picture.goods__image
                  source(media=desktop srcset="img/photo-hare-desktop@1x.jpg")
                  source(media=tablet srcset="img/photo-hare-tablet@1x.jpg")
                  img(src="img/photo-hare-mobile@1x.jpg" alt="Изображение зайчика-попрыгайчика")
              div.goods__item-container
                a.goods__item-link(href="#") Зайчик-попрыгайчик
                span.goods__description Рост 30 см, вес 200 г
                span.goods__price 1 200 руб.
                a.goods__cart(href="#" title="Добавить в корзину")
                  include ../img/icon-cart.svg
            li.goods__item
              a.goods__image-link(href="#")
                picture.goods__image
                  source(media=desktop srcset="img/photo-bowl-desktop@1x.jpg")
                  source(media=tablet srcset="img/photo-bowl-tablet@1x.jpg")
                  img(src="img/photo-bowl-mobile@1x.jpg" alt="Изображение корзинки для белья")
              div.goods__item-container
                a.goods__item-link(href="#") Корзинка для белья
                span.goods__description Диаметр 15 см, высота 10 см
                span.goods__price 690 руб.
                a.goods__cart(href="#" title="Добавить в корзину")
                  include ../img/icon-cart.svg
            li.goods__item
              a.goods__image-link(href="#")
                picture.goods__image
                  source(media=desktop srcset="img/photo-toys-desktop@1x.jpg")
                  source(media=tablet srcset="img/photo-toys-tablet@1x.jpg")
                  img(src="img/photo-toys-mobile@1x.jpg" alt="Изображение большой корзинки для игрушек")
              div.goods__item-container
                a.goods__item-link(href="#") Большая корзинка для&nbsp;игрушек
                span.goods__description Диаметр 30 см, высота 30 см
                span.goods__price 1 500 руб.
                a.goods__cart(href="#" title="Добавить в корзину")
                  include ../img/icon-cart.svg
      section.production.site-main__production
        div.center-wrapper.production__center-wrapper
          div.production__wrapper
            h2.title.production__title Процесс производства
            div.production__video
              picture.production__image
                source(media=desktop srcset="img/video-desktop@1x.jpg")
                source(media=tablet srcset="img/video-tablet@1x.jpg")
                img(src="img/video-mobile@1x.jpg" alt="Видео производства")
            p.production__text По просьбам наших любимых фолловеров мы сняли для вас подробное видео о том, как появляются наши товары.
            a.button.production__order-button(href="#") Сделать заказ
    include blocks/site-footer
    script(src="js/app.js")

//# sourceMappingURL=app.js.map

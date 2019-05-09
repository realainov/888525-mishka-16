if (document.querySelector(".response") !== null) {
  let comments = document.querySelectorAll(".response__comment-item");
  let buttonPrev = document.querySelector(".response__control-button--prev");
  let buttonNext = document.querySelector(".response__control-button--next");

  let l = comments.length - 2;

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

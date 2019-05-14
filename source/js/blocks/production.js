if (document.querySelector(".production") !== null) {
  let button = document.querySelector(".production__video-button");
  let image = document.querySelector(".production__video-image");

  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "100%",
      width: "100%",
      videoId: "dEqSD3MFWCQ",
      playerVars: {
        rel: 0,
        autoplay: 0,
        controls: 1,
        showinfo: 0,
        modestbranding: 0,
        loop: 0,
        fs: 0,
        disablekb: 0,
        cc_load_policty: 0,
        iv_load_policy: 3,
        autohide: 0
      }
    });
  }

  image.addEventListener("click", function (evt) {
    evt.preventDefault();
    image.style.display = "none";
    button.style.display = "none";
    player.playVideo();
  });

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    image.style.display = "none";
    button.style.display = "none";
    player.playVideo();
  });
}

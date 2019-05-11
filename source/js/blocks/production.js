if (document.querySelector(".production") !== null) {
  let button = document.querySelector(".production__video-button");
  let image = document.querySelector(".production__video-image");

  // 2. This code loads the IFrame Player API code asynchronously.
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
        controls: "2"
      },
      controls: "2"
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

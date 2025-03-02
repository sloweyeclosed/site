function go() {
  let video = document.getElementById("scr");
  let google = document.getElementById("google");
  // if (document.documentElement.requestFullscreen) {
  //   document.documentElement.requestFullscreen();
  // } else if (document.documentElement.mozRequestFullScreen) {
  //   document.documentElement.mozRequestFullScreen();
  // } else if (document.documentElement.webkitRequestFullscreen) {
  //   document.documentElement.webkitRequestFullscreen();
  // } else if (document.documentElement.msRequestFullscreen) {
  //   document.documentElement.msRequestFullscreen();
  // }

  // if (video.requestFullscreen) {
  //   video.requestFullscreen();
  // } else if (video.mozRequestFullScreen) {
  //   video.mozRequestFullScreen();
  // } else if (video.webkitRequestFullscreen) {
  //   video.webkitRequestFullscreen();
  // } else if (video.msRequestFullscreen) {
  //   video.msRequestFullscreen();
  // }
  video.style.display = "block";
  video.requestFullscreen?.() ||
    video.mozRequestFullScreen?.() ||
    video.webkitRequestFullscreen?.() ||
    video.msRequestFullscreen?.();
  video.muted = false;
  video.play();
  google.style.display = "none";
}

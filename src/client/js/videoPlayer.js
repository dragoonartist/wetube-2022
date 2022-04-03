const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volumeRange = document.getElementById("volume");

let volumeSize = 0.5;
video.volume = volumeSize;

const onClickPlayBtn = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
const handelPauseVideo = (e) => {
  playBtn.innerText = "Play";
};
const handlePlayVideo = (e) => {
  playBtn.innerText = "Pause";
};
const onClickMuteBtn = (e) => {
  if (video.muted) {
    video.muted = false;
    volumeSize = volumeSize === 0 ? 0.2 : volumeSize;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeSize;
  video.volume = volumeSize;
};

playBtn.addEventListener("click", onClickPlayBtn);
video.addEventListener("pause", handelPauseVideo);
video.addEventListener("play", handlePlayVideo);

muteBtn.addEventListener("click", onClickMuteBtn);

const onInputVolume = (event) => {
  volumeSize = parseFloat(event.target.value);
  if (volumeSize === 0) {
    video.muted = true;
  } else if (video.muted) {
    video.muted = false;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  video.volume = volumeSize;
};

volumeRange.addEventListener("input", onInputVolume);

const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");
const fullscreenBtn = document.getElementById("fullscreen");
const videoContainer = document.getElementById("video-container");
const videoControls = document.getElementById("videoControls");

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

const formatTime = (seconds) => {
  const start = seconds >= 3600 ? 11 : 14;
  const end = 19;
  return new Date(seconds * 1000).toISOString().substring(start, end);
};

const handleLoadedMetaData = () => {
  const dur = Math.floor(video.duration);
  totalTime.innerText = formatTime(dur);
  timeline.max = dur;
};

if (video.readyState === 4) {
  handleLoadedMetaData();
} else {
  video.addEventListener("loadedmetadata", handleLoadedMetaData);
}

const handleTimeUpdate = () => {
  const curr = Math.floor(video.currentTime);
  currentTime.innerText = formatTime(curr);
  timeline.value = curr;
};
video.addEventListener("timeupdate", handleTimeUpdate);

const onInputTimeLine = (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
};
timeline.addEventListener("input", onInputTimeLine);

const onClickFullscreenBtn = () => {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fullscreenBtn.innerText = "Enter Full Screen";
    }
  } else {
    videoContainer.requestFullscreen();
    fullscreenBtn.innerText = "Exit Full Screen";
  }
};
fullscreenBtn.addEventListener("click", onClickFullscreenBtn);

let controlTimeout = null;
// let controlMovement = null;
const hideControl = () => videoControls.classList.remove("showing");

const handleMouseMove = () => {
  if (controlTimeout) {
    clearTimeout(controlTimeout);
    controlTimeout = null;
  }
  // if (controlMovement) {
  //   clearTimeout(controlMovement);
  //   controlMovement = null;
  // }
  videoControls.classList.add("showing");
  controlTimeout = setTimeout(hideControl, 3000);
  // controlMovement = setTimeout(hideControl, 3000);
};

const handleMouseLeave = () => {
  controlTimeout = setTimeout(hideControl, 3000);
};

video.addEventListener("mousemove", handleMouseMove);
video.addEventListener("mouseleave", handleMouseLeave);

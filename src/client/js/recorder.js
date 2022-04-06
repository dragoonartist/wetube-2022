const startBtn = document.getElementById("startBtn");
const previewVideo = document.getElementById("preview");

let stream;

const stopRecording = () => {
  startBtn.innerText = "Start Recording";
  startBtn.removeEventListener("click", stopRecording);
  startBtn.addEventListener("click", startRecording);
};
const startRecording = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", startRecording);
  startBtn.addEventListener("click", stopRecording);

  const recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    console.log("after recording");
    console.log(e);
    console.log(e.data);
  };
  console.log(recorder);
  recorder.start();
  console.log(recorder);
  setTimeout(() => {
    console.log(Date());
    console.log(recorder);
    recorder.stop();
  }, 10000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { width: 500, heigh: 300 },
  });
  previewVideo.srcObject = stream;
  previewVideo.play();
};

init();

startBtn.addEventListener("click", startRecording);

let text = document.getElementById("txt");
let submitBtn = document.getElementById("submit");
let resumeBtn = document.getElementById("resume");
let pauseBtn = document.getElementById("pause");
let audioMessage = new SpeechSynthesisUtterance();

submitBtn.addEventListener("click", () => {
  // Stop any current speech
  speechSynthesis.cancel();

  // Set the text
  audioMessage.text = text.value;
  // Speak the text
  window.speechSynthesis.speak(audioMessage);

  // Show pause, hide resume
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
});

resumeBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
  }
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
  if (speechSynthesis.speaking && !speechSynthesis.paused) {
    speechSynthesis.pause();
  }
});

window.onload = () => {
  // Hide resume button initially
  resumeBtn.style.display = "none";

  if (!("speechSynthesis" in window)) {
    alert("Speech Synthesis is not supported in this browser.");
  }
};

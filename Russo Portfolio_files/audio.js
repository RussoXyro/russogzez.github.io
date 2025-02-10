AOS.init({ offset: 0 });

function toggleMute() {
  const audio = document.getElementById("background-music");
  const muteIcon = document.getElementById("mute-icon");
  if (audio.muted) {
    audio.muted = false;
    muteIcon.classList.remove("fa-volume-xmark");
    muteIcon.classList.add("fa-volume-high");
  } else {
    audio.muted = true;
    muteIcon.classList.remove("fa-volume-high");
    muteIcon.classList.add("fa-volume-xmark");
  }
}

function showMore() {
  document.getElementById("more").classList.remove("hidden");
  document.getElementById("proposal").classList.remove("hidden");
}

function showLove() {
  document.getElementById("loveReply").classList.remove("hidden");
}

function moveNoButton() {
  const noBtn = document.getElementById("noBtn");
  const randomX = Math.floor(Math.random() * 200) - 100;
  const randomY = Math.floor(Math.random() * 200) - 100;
  noBtn.style.position = "relative";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Play Music Function
function playMusic() {
  const music = document.getElementById("backgroundMusic");
  music.play();
  document.getElementById("playMusic").style.display = "none"; // Hide the button after playing
}

// Add Event Listener for Play Music Button
document.getElementById("playMusic").addEventListener("click", playMusic);

const karaokeToggle = document.getElementById("karaoke-toggle");
const karaokePanel = document.querySelector(".karaoke-panel");
const lyricsLines = document.querySelectorAll(".lyrics-line");

const updateKaraokeState = () => {
  const isEnabled = karaokeToggle.checked;
  karaokePanel.classList.toggle("hidden", !isEnabled);
  lyricsLines.forEach((line) => {
    line.style.opacity = isEnabled ? "1" : "0.4";
  });
};

karaokeToggle.addEventListener("change", updateKaraokeState);
updateKaraokeState();

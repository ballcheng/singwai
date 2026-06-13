(function () {
  const audio = document.querySelector("[data-bg-music]");
  const button = document.querySelector("[data-music-toggle]");
  const status = document.querySelector("[data-music-status]");

  if (!audio || !button) return;

  audio.volume = 0.35;
  audio.loop = true;

  function setPlayingUI(isPlaying) {
    button.classList.toggle("is-playing", isPlaying);
    button.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    button.textContent = isPlaying ? "暫停背景音樂 Pause music" : "播放背景音樂 Play music";
    if (status) {
      status.textContent = isPlaying
        ? "背景音樂播放中"
        : "背景音樂已暫停";
    }
  }

  button.addEventListener("click", async function () {
    try {
      if (audio.paused) {
        await audio.play();
        setPlayingUI(true);
      } else {
        audio.pause();
        setPlayingUI(false);
      }
    } catch (error) {
      if (status) {
        status.textContent = "播放失敗；請確認 audio 檔案已上載完整。";
      }
      button.textContent = "MIDI 播放失敗 MIDI not supported";
      button.disabled = true;
      console.warn("MIDI playback failed:", error);
    }
  });

  audio.addEventListener("ended", function () {
    setPlayingUI(false);
  });

  audio.addEventListener("error", function () {
    if (status) {
      status.textContent = "呢個瀏覽器未能播放背景音樂檔。";
    }
  });
})();
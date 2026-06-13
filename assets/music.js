(function () {
  const audio = document.querySelector("[data-bg-music]");
  const button = document.querySelector("[data-music-toggle]");
  const status = document.querySelector("[data-music-status]");

  if (!audio || !button) return;

  audio.volume = 0.35;
  audio.loop = true;
  audio.autoplay = true;

  function setPlayingUI(isPlaying, message) {
    button.classList.toggle("is-playing", isPlaying);
    button.setAttribute("aria-pressed", isPlaying ? "true" : "false");
    button.textContent = isPlaying ? "暫停音樂 Pause" : "播放音樂 Play";
    if (status) {
      status.textContent = message || (isPlaying ? "背景音樂播放中" : "背景音樂已暫停");
    }
  }

  async function tryAutoplay() {
    try {
      await audio.play();
      setPlayingUI(true, "背景音樂已自動播放");
    } catch (error) {
      setPlayingUI(false, "自動播放被瀏覽器封鎖，請按播放");
      console.info("Autoplay blocked:", error);
    }
  }

  // Try immediately, then again when the page is fully ready.
  tryAutoplay();
  window.addEventListener("load", tryAutoplay, { once: true });

  // Any first user interaction can unlock audio on many browsers.
  const unlockEvents = ["pointerdown", "touchstart", "keydown"];
  function unlockOnce() {
    if (audio.paused) {
      tryAutoplay();
    }
    unlockEvents.forEach((eventName) => {
      window.removeEventListener(eventName, unlockOnce);
    });
  }
  unlockEvents.forEach((eventName) => {
    window.addEventListener(eventName, unlockOnce, { once: true, passive: true });
  });

  button.addEventListener("click", async function () {
    try {
      if (audio.paused) {
        await audio.play();
        setPlayingUI(true, "背景音樂播放中");
      } else {
        audio.pause();
        setPlayingUI(false, "背景音樂已暫停");
      }
    } catch (error) {
      if (status) {
        status.textContent = "播放失敗；請確認 audio 檔案已上載完整。";
      }
      button.textContent = "播放失敗 Playback failed";
      button.disabled = true;
      console.warn("Playback failed:", error);
    }
  });

  audio.addEventListener("play", function () {
    setPlayingUI(true, "背景音樂播放中");
  });

  audio.addEventListener("pause", function () {
    setPlayingUI(false, "背景音樂已暫停");
  });

  audio.addEventListener("error", function () {
    if (status) {
      status.textContent = "呢個瀏覽器未能播放背景音樂檔。";
    }
  });
})();
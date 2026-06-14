(function () {
  const audio = document.querySelector('[data-bg-music]');
  const toggle = document.querySelector('[data-music-toggle]');
  const status = document.querySelector('[data-music-status]');
  const versionSelect = document.querySelector('[data-music-version-select]');
  if (!audio || !toggle) return;

  const PLAY_KEY = 'swfc-music-preference';
  const VERSION_KEY = 'swfc-music-version';
  const TARGET_VOLUME = 0.22;
  const FADE_STEP_MS = 60;
  const FADE_SECONDS = 1.25;

  const tracks = {
    v17: {
      label: '新版 V17',
      mp3: 'assets/audio/singwai-v17.mp3',
      ogg: 'assets/audio/singwai-v17.ogg'
    },
    original: {
      label: '原版',
      mp3: 'assets/audio/singwai-original.mp3',
      ogg: 'assets/audio/singwai-original.ogg'
    }
  };

  let fadeTimer = null;
  let currentVersion = getSavedVersion();

  function getSavedVersion() {
    try {
      const saved = localStorage.getItem(VERSION_KEY);
      return tracks[saved] ? saved : 'v17';
    } catch (e) {
      return 'v17';
    }
  }

  function setStatus(text) {
    if (status) status.textContent = text;
  }

  function saveVersion(version) {
    try { localStorage.setItem(VERSION_KEY, version); } catch (e) {}
  }

  function setButtonState(isPlaying) {
    toggle.setAttribute('aria-pressed', String(isPlaying));
    toggle.classList.toggle('is-playing', isPlaying);
    toggle.title = isPlaying ? '暫停背景音樂' : '播放背景音樂';
    toggle.textContent = isPlaying ? '暫停音樂 Pause' : '播放音樂 Play';
  }

  function stopFade() {
    if (fadeTimer) {
      window.clearInterval(fadeTimer);
      fadeTimer = null;
    }
  }

  function fadeTo(targetVolume, seconds, done) {
    stopFade();
    const start = audio.volume || 0;
    const steps = Math.max(1, Math.round((seconds * 1000) / FADE_STEP_MS));
    let currentStep = 0;

    fadeTimer = window.setInterval(() => {
      currentStep += 1;
      const ratio = Math.min(1, currentStep / steps);
      audio.volume = start + (targetVolume - start) * ratio;
      if (ratio >= 1) {
        stopFade();
        audio.volume = targetVolume;
        if (done) done();
      }
    }, FADE_STEP_MS);
  }

  function setAudioSource(version, keepPlaying) {
    const track = tracks[version] || tracks.v17;
    const wasPlaying = keepPlaying && !audio.paused;

    audio.innerHTML = '';
    const mp3 = document.createElement('source');
    mp3.src = track.mp3;
    mp3.type = 'audio/mpeg';
    const ogg = document.createElement('source');
    ogg.src = track.ogg;
    ogg.type = 'audio/ogg';
    audio.appendChild(mp3);
    audio.appendChild(ogg);
    audio.load();

    currentVersion = version;
    saveVersion(version);
    if (versionSelect) versionSelect.value = version;

    if (wasPlaying) {
      playMusic(false);
    } else {
      setStatus('已選擇：' + track.label);
      setButtonState(false);
    }
  }

  async function playMusic(savePreference = true) {
    try {
      audio.loop = true;
      audio.muted = false;
      audio.volume = audio.volume || 0;
      await audio.play();
      setButtonState(true);
      setStatus('背景音樂播放中：' + tracks[currentVersion].label);
      fadeTo(TARGET_VOLUME, FADE_SECONDS);
      if (savePreference) {
        localStorage.setItem(PLAY_KEY, 'play');
      }
    } catch (error) {
      setButtonState(false);
      setStatus('按右下角按鈕播放音樂');
    }
  }

  function pauseMusic(savePreference = true) {
    fadeTo(0, 0.65, () => {
      audio.pause();
      setButtonState(false);
      setStatus('背景音樂已暫停：' + tracks[currentVersion].label);
    });
    if (savePreference) {
      localStorage.setItem(PLAY_KEY, 'pause');
    }
  }

  toggle.addEventListener('click', () => {
    if (audio.paused) playMusic(true);
    else pauseMusic(true);
  });

  if (versionSelect) {
    versionSelect.value = currentVersion;
    versionSelect.addEventListener('change', () => {
      const next = versionSelect.value;
      if (!tracks[next] || next === currentVersion) return;
      const shouldResume = !audio.paused;
      setAudioSource(next, shouldResume);
      if (shouldResume) setStatus('背景音樂播放中：' + tracks[next].label);
    });
  }

  audio.preload = 'auto';
  audio.loop = true;
  audio.volume = 0;
  setButtonState(false);
  setAudioSource(currentVersion, false);

  let savedPlay = null;
  try { savedPlay = localStorage.getItem(PLAY_KEY); } catch (e) {}

  if (savedPlay === 'play') {
    playMusic(false);
  } else if (savedPlay === 'pause') {
    setStatus('背景音樂已暫停：' + tracks[currentVersion].label);
  } else {
    setStatus('已選擇：' + tracks[currentVersion].label);
  }
})();

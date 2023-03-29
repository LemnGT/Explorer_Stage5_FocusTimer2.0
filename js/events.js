export default function Events({
  buttonPlay,
  buttonStop,
  forestWrapper,
  rainWrapper,
  cafeteriaWrapper,
  fireplaceWrapper,
  buttonMoreTime,
  buttonLessTime,
  timer,
  minutesDisplay,
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFireplace,
  sound,
  darkModeOn,
  page,
  lightModeOn,
  forestVolumeControl,
  rainVolumeControl,
  cafeteriaVolumeControl,
  fireplaceVolumeControl,
  backgroundSoundsForm,
}) {
  buttonPlay.addEventListener("click", () => {
    sound.buttonClickSound();

    if (buttonPlay.classList.contains("pressed")) {
      timer.stopTimer();
    } else {
      timer.countdown();
    }

    buttonPlay.classList.toggle("pressed");
  });

  buttonStop.addEventListener("click", () => {
    sound.buttonClickSound();

    buttonPlay.classList.remove("pressed");

    timer.resetTimer();
    timer.stopTimer();
  });

  buttonMoreTime.addEventListener("click", () => {
    sound.buttonClickSound();

    timer.fiveMoreMinutes(minutesDisplay);
  });
  buttonLessTime.addEventListener("click", () => {
    sound.buttonClickSound();

    timer.minusFiveMinutes(minutesDisplay);
  });

  function resetBackgroundSounds() {
    sound.stopForestSound();
    sound.stopRainSound();
    sound.stopCafeteriaSound();
    sound.stopFireplaceSound();
  }
  function resetCard() {
    if (
      !forestWrapper.classList.contains("pressed") ||
      !rainWrapper.classList.contains("pressed") ||
      !cafeteriaWrapper.classList.contains("pressed") ||
      !fireplaceWrapper.classList.contains("pressed")
    ) {
      backgroundSoundsForm.reset();
    }
  }

  buttonForest.addEventListener("click", () => {
    resetBackgroundSounds();

    forestWrapper.classList.toggle("pressed");
    if (forestWrapper.classList.contains("pressed")) {
      rainWrapper.classList.remove("pressed");
      cafeteriaWrapper.classList.remove("pressed");
      fireplaceWrapper.classList.remove("pressed");
      sound.startForestSound();
    } else {
      backgroundSoundsForm.reset();
    }
    resetCard();
  });
  buttonRain.addEventListener("click", () => {
    resetBackgroundSounds();

    rainWrapper.classList.toggle("pressed");
    if (rainWrapper.classList.contains("pressed")) {
      forestWrapper.classList.remove("pressed");
      cafeteriaWrapper.classList.remove("pressed");
      fireplaceWrapper.classList.remove("pressed");
      sound.startRainSound();
    } else {
      backgroundSoundsForm.reset();
    }
    resetCard();
  });
  buttonCafeteria.addEventListener("click", () => {
    resetBackgroundSounds();

    cafeteriaWrapper.classList.toggle("pressed");
    if (cafeteriaWrapper.classList.contains("pressed")) {
      forestWrapper.classList.remove("pressed");
      rainWrapper.classList.remove("pressed");
      fireplaceWrapper.classList.remove("pressed");
      sound.startCafeteriaSound();
    } else {
      backgroundSoundsForm.reset();
    }
    resetCard();
  });
  buttonFireplace.addEventListener("click", () => {
    resetBackgroundSounds();

    fireplaceWrapper.classList.toggle("pressed");
    if (fireplaceWrapper.classList.contains("pressed")) {
      forestWrapper.classList.remove("pressed");
      rainWrapper.classList.remove("pressed");
      cafeteriaWrapper.classList.remove("pressed");
      sound.startFireplaceSound();
    } else {
      backgroundSoundsForm.reset();
    }
    resetCard();
  });

  darkModeOn.addEventListener("click", () => {
    darkModeOn.classList.add("hide");
    page.classList.replace("light", "dark");
    lightModeOn.classList.remove("hide");
  });

  lightModeOn.addEventListener("click", () => {
    lightModeOn.classList.add("hide");
    page.classList.replace("dark", "light");
    darkModeOn.classList.remove("hide");
  });

  forestVolumeControl.addEventListener("change", (e) => {
    sound.forestSound.volume = e.currentTarget.value / 100;
  });
  rainVolumeControl.addEventListener("change", (e) => {
    sound.rainSound.volume = e.currentTarget.value / 100;
  });
  cafeteriaVolumeControl.addEventListener("change", (e) => {
    sound.cafeteriaSound.volume = e.currentTarget.value / 100;
  });
  fireplaceVolumeControl.addEventListener("change", (e) => {
    sound.fireplaceSound.volume = e.currentTarget.value / 100;
  });
}

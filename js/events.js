export default function Events({
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  timer,
  minutesDisplay,
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFireplace,
  sound,
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

  buttonForest.addEventListener("click", () => {
    buttonForest.classList.toggle("pressed");
    if (buttonForest.classList.contains("pressed")) {
      sound.startForestSound();
    } else {
      sound.stopForestSound();
    }
  });
  buttonRain.addEventListener("click", () => {
    buttonRain.classList.toggle("pressed");
    if (buttonRain.classList.contains("pressed")) {
      sound.startRainSound();
    } else {
      sound.stopRainSound();
    }
  });
  buttonCafeteria.addEventListener("click", () => {
    buttonCafeteria.classList.toggle("pressed");
    if (buttonCafeteria.classList.contains("pressed")) {
      sound.startCafeteriaSound();
    } else {
      sound.stopCafeteriaSound();
    }
  });
  buttonFireplace.addEventListener("click", () => {
    buttonFireplace.classList.toggle("pressed");
    if (buttonFireplace.classList.contains("pressed")) {
      sound.startFireplaceSound();
    } else {
      sound.stopFireplaceSound();
    }
  });
}

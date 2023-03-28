export default function Sounds() {
  const forestSound = new Audio("./assets/Floresta.wav");
  forestSound.loop = true;

  const rainSound = new Audio("./assets/Chuva.wav");
  rainSound.loop = true;

  const cafeteriaSound = new Audio("./assets/Cafeteria.wav");
  cafeteriaSound.loop = true;

  const fireplaceSound = new Audio("./assets/Lareira.wav");
  fireplaceSound.loop = true;

  const kitchenTimer = new Audio("./assets/timerEnd.wav");

  const clickSound = new Audio("./assets/clickSound.wav");

  function startForestSound() {
    forestSound.play();
  }
  function stopForestSound() {
    forestSound.pause();
  }
  function startRainSound() {
    rainSound.play();
  }
  function stopRainSound() {
    rainSound.pause();
  }
  function startCafeteriaSound() {
    cafeteriaSound.play();
  }
  function stopCafeteriaSound() {
    cafeteriaSound.pause();
  }
  function startFireplaceSound() {
    fireplaceSound.play();
  }
  function stopFireplaceSound() {
    fireplaceSound.pause();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function buttonClickSound() {
    clickSound.play();
  }

  return {
    startForestSound,
    startRainSound,
    startCafeteriaSound,
    startFireplaceSound,
    stopForestSound,
    stopRainSound,
    stopCafeteriaSound,
    stopFireplaceSound,
    timeEnd,
    buttonClickSound,
  };
}

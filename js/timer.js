import { buttonPlay } from "./elements.js";

export default function Timer({ minutesDisplay, secondsDisplay, sound }) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);

  function updateTimer(newMinutes, newSeconds) {
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(newSeconds).padStart(2, "0");
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let newMinutes = minutesDisplay.textContent;
      let newSeconds = secondsDisplay.textContent;

      if (newSeconds <= 0 && newMinutes <= 0) {
        sound.timeEnd();
        updateTimer(minutes, seconds);
        buttonPlay.classList.remove("pressed");
        return;
      }

      if (newSeconds <= 0) {
        newMinutes--;
        newSeconds = 60;
      }
      newSeconds--;

      updateTimer(newMinutes, newSeconds);
      countdown();
    }, 1000);
  }

  function resetTimer() {
    updateTimer(minutes, seconds);
  }

  function stopTimer() {
    clearTimeout(timerTimeOut);
  }

  function fiveMoreMinutes() {
    minutes = minutes + 5;
    updateTimer(minutes, secondsDisplay.textContent);
  }

  function minusFiveMinutes() {
    minutes = minutes - 5;
    if (minutes < 0) {
      minutes = 0;
    }
    updateTimer(minutes, secondsDisplay.textContent);
  }
  return {
    updateTimer,
    countdown,
    resetTimer,
    stopTimer,
    fiveMoreMinutes,
    minusFiveMinutes,
  };
}

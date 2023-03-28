import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  buttonForest,
  buttonRain,
  buttonFireplace,
  buttonCafeteria,
} from "./elements.js";
import Events from "./events.js";
import Timer from "./timer.js";
import Sound from "./sounds.js";

const sound = Sound();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  sound,
});

Events({
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  timer,
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFireplace,
  sound,
});

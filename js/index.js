import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  forestWrapper,
  rainWrapper,
  cafeteriaWrapper,
  fireplaceWrapper,
  buttonMoreTime,
  buttonLessTime,
  buttonForest,
  buttonRain,
  buttonFireplace,
  buttonCafeteria,
  darkModeOn,
  lightModeOn,
  page,
  forestVolumeControl,
  rainVolumeControl,
  cafeteriaVolumeControl,
  fireplaceVolumeControl,
  backgroundSoundsForm,
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
  forestWrapper,
  rainWrapper,
  cafeteriaWrapper,
  fireplaceWrapper,
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
});

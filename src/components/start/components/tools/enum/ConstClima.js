import nubladoSVG from "../../../../../static/svg/nublado.svg";
import solSVG from "../../../../../static/svg/sol.svg";
import moonSVG from "../../../../../static/svg/moon.svg";
import lloviendoSVG from "../../../../../static/svg/lloviendo.svg";
import lloviendoNocheSVG from "../../../../../static/svg/lloviendo-noche.svg";
import truenoSVG from "../../../../../static/svg/truenos.svg";
import alertSVG from "../../../../../static/svg/warning.svg";

export const ConstClima = {
  Clear: solSVG,
  Clouds: nubladoSVG,
  Rain: lloviendoSVG,
  Drizzle: lloviendoSVG,
  Thunderstorm: truenoSVG,
  Moon: moonSVG,
  MoonRain: lloviendoNocheSVG,
  Snow: nubladoSVG,
  Mist: nubladoSVG,
  Smoke: nubladoSVG,
  Haze: nubladoSVG,
  Dust: nubladoSVG,
  Fog: nubladoSVG,
  Sand: alertSVG,
  Ash: alertSVG,
  Squall: alertSVG,
  Tornado: alertSVG,
  Unknown: solSVG,
};

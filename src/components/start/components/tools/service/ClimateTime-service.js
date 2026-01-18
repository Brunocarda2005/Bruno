"use strict";
import { ConstClima } from "../enum/ConstClima";
import { WEATHER_API_CONFIG } from "../../../../../utils/constants";
import { kelvinToCelsius } from "../../../../../utils/helpers";
import { getTimeDay } from "./CalendarTime-service";

/**
 * Realiza la llamada a la API del clima
 * @param {string} city - Nombre de la ciudad
 * @returns {Promise<Object>} Datos del clima
 * @throws {Error} Si la petición falla
 */
const fetchWeatherData = async (city) => {
  const cityParam = encodeURIComponent(city);
  const url = `${WEATHER_API_CONFIG.BASE_URL}?q=${cityParam}&appid=${WEATHER_API_CONFIG.KEY}&lang=es`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `Error al obtener datos del clima: ${response.status} ${response.statusText}`;
    console.error(message);
  }

  const data = await response.json();

  return data;
};

/**
 * Transforma el estado del clima de la API al formato interno
 * @param {Array} weatherArray - Array de datos del clima de la API
 * @returns {string} URL del icono del clima o null
 */
const transformClimateState = (weatherArray) => {
  const [{ main }] = weatherArray || [{}];

  const state = auxStateDay(main);

  return auxReturnSvg(state);
};

const auxStateDay = (main) => {
  if (!main) return ConstClima.Unknown;

  const isNight = getTimeDay();

  if (!isNight) return main;

  if (main === "Clear") return "Moon";

  if (main === "Rain" || main === "Drizzle") return "MoonRain";

  return main;
};

const auxReturnSvg = (main) => ConstClima[main] || ConstClima.Unknown;

/**
 * Obtiene los datos del clima para una ciudad
 * @param {string} city - Nombre de la ciudad (opcional, usa DEFAULT_CITY si no se proporciona)
 * @returns {Promise<Object>} Objeto con stateClimate y climaString
 */
export const SendDataClima = async (city = WEATHER_API_CONFIG.DEFAULT_CITY) => {
  try {
    const data = await fetchWeatherData(city);
    const { weather, main } = data;

    // Obtener temperatura en Celsius
    const temperature = kelvinToCelsius(main.temp);

    // Obtener estado del clima
    const stateClimate = transformClimateState(weather);

    const climaString = `${temperature}°`;

    return {
      stateClimate,
      climaString,
      success: true,
    };
  } catch (error) {
    console.error("Error al obtener datos del clima:", error);
    return {
      stateClimate: ConstClima.unknown,
      climaString: "--°",
      success: false,
      error: error.message,
    };
  }
};

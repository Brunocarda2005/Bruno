"use strict";
import { ConstClima } from "../enum/ConstClima";

// const
const API_KEY = "d8df9f49ba2bc4a6feef2f66b760e725";
const URL_API = "https://api.openweathermap.org/data/2.5/weather?q=";

const CallDataClima = async (city) => {
  try {
    const response = await fetch(`${URL_API}${city}&&appid=${API_KEY}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    const { weather, main } = data;

    return { weather, main };
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const transforStateClimate = (clima) => {
  const { main } = clima[0];

  const data = Object.keys(ConstClima).find((key) => key === main);
  return data ? ConstClima[data] : null;
};

export const SendDataClima = async (city) => {
  const { weather, main } = await CallDataClima(city);
  // temperature constructor
  const { temp } = main;
  const temperature = Math.round(temp - 273.5);
  // state climate
  const stateClimate = transforStateClimate(weather);

  return { stateClimate, temperature };
};

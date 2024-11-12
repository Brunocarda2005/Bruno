"use strict";

// Meses expresados en su nombre de forma constante
const MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
  "Enero",
];

// Dias expresados en su nombre de forma constante
const DIA_SEMANAL = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

/**
 * Provides constants for the current date and time, as well as a formatted date phrase.
 */

// Current date and time
const FECHA_ACTUAl = new Date(); // fecha actual

/**
 * The current month (1-12).
 * @type {number}
 */
export const MES_ACTUAL = FECHA_ACTUAl.getMonth() + 1; // mes actual

/**
 * The current day of the month (1-31).
 * @type {number}
 */
export const DIA_ACTUAL = FECHA_ACTUAl.getDate(); // dia actual

/**
 * The current hour (0-23).
 * @type {number}
 */
export const HORA_ACTUAL = FECHA_ACTUAl.getHours(); // hora actual

/**
 * The current minute (0-59).
 * @type {number}
 */
export const MINUTO_ACTUAL = FECHA_ACTUAl.getMinutes(); // minuto actual

/**
 * The current day of the week (0-6, where 0 is Sunday).
 * @type {number}
 */
export const DIA_SEMANAL_ACTUAL = FECHA_ACTUAl.getDay(); // dia semanal expresado en numero


/**
 * A formatted date phrase in the form "DayOfWeek DayOfMonth de MonthName".
 * @type {string}
 */
export const FRASE_FECHA = `${
  DIA_SEMANAL[DIA_SEMANAL_ACTUAL]
} ${DIA_ACTUAL} de ${MESES[MES_ACTUAL - 1]}`;

/**
 * Determines if a given year is a leap year.
 *
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 *                   A leap year is divisible by 4, but not by 100 unless it is also divisible by 400.
 */
const Viciesto = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
/**
 * Determines the number of days in February for a given year.
 *
 * @param {number} year - The year to check.
 * @returns {number} The number of days in February for the given year (28 or 29).
 */
const diasFebrero = (year) => {
  return Viciesto(year) ? 29 : 28;
};

/**
 * Adjusts the day of the week to ensure Sunday is represented as 7 instead of 0.
 *
 * @param {number} primerDiaSemanal - The day of the week (0-6, where 0 is Sunday).
 * @returns {number} The adjusted day of the week (1-7, where 7 is Sunday).
 */
const IsDomingo = (primerDiaSemanal) => {
  const diaSemanaActual = primerDiaSemanal === 0 ? 7 : primerDiaSemanal;
  return diaSemanaActual;
};

/**
 * Generates a calendar for a given year and month.
 *
 * @param {number} year - The year for which to generate the calendar.
 * @param {number} mes - The month for which to generate the calendar (1-12).
 * @returns {Array} An array representing the days of the month, including days from the previous and next months.
 *                  The array length is always 42, and the days are numbered from 1 to the number of days in the month.
 *                  Days from the previous and next months are represented with numbers from those months.
 */
export const generadorCalendario = (year, mes) => {
  const ANCHO_CALENDAR = 42;
  const diasMes = [
    31,
    diasFebrero(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const primerDia = new Date(year, mes - 1, 1);
  const primerDiaSemanal = primerDia.getDay();
  const diaSemanaActual = IsDomingo(primerDiaSemanal);

  const numberUltimoDia = diasMes[mes - 1];
  const DiasMesActual = [];

  for (let i = 0; i <= ANCHO_CALENDAR; i++) {
    const dia = i - diaSemanaActual;

    if (i < diaSemanaActual - 1) {
      const RestoMesAnterior = diaSemanaActual - i - 2;
      const CantDiaMesAnt = diasMes[mes - 2];

      DiasMesActual.push(CantDiaMesAnt - RestoMesAnterior);
    } else if (i >= diaSemanaActual && dia < diasMes[mes - 1]) {
      DiasMesActual.push(dia + 1);
    } else if (i > numberUltimoDia) {
      const RestoMesSiguiente = i - numberUltimoDia;
      const RellenoDia = RestoMesSiguiente - diaSemanaActual + 1;

      DiasMesActual.push(RellenoDia);
    }
  }

  return DiasMesActual;
};

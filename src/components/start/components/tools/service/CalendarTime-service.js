import { translations } from "../../../../../utils/translations";

/**
 * Obtiene los nombres de meses y días según el idioma
 * @param {string} language - Idioma actual ('es' o 'en')
 * @returns {Object} Objeto con arrays MESES y DIA_SEMANAL
 */
export const getCalendarTranslations = (language = "es") => {
  return {
    MESES: translations[language].calendar.months,
    DIA_SEMANAL: translations[language].calendar.days,
  };
};

// Constantes con los nombres de meses y días de la semana en español (por defecto)
export const MESES = translations.es.calendar.months;
export const DIA_SEMANAL = translations.es.calendar.days;

// Array para almacenar los observadores de cambio de fecha y hora
let dateObservers = [];

/**
 * Notifica a todos los observadores cuando hay un cambio en la fecha y hora.
 * Genera la nueva fecha y hora usando getDateTimeConstants y ejecuta cada callback en dateObservers.
 */
const notifyObservers = () => {
  const dateTime = getDateTimeConstants();
  dateObservers.forEach((callback) => callback(dateTime));
};

// Intervalo que actualiza la fecha y hora cada 60 segundos (1 minuto)
setInterval(notifyObservers, 60000);

/**
 * Agrega un observador para recibir actualizaciones de fecha y hora.
 *
 * @param {function} callback - Función a ejecutar cuando haya un cambio en la fecha y hora.
 * @returns {function} Una función para cancelar la suscripción al observador.
 */
export const observeDateTime = (callback) => {
  dateObservers.push(callback);
  // Devuelve una función para eliminar el observador cuando ya no se necesite
  return () => {
    dateObservers = dateObservers.filter((cb) => cb !== callback);
  };
};

/**
Formats the given hour and minute into a 24-hour time string.
@function TimeFormatter
@param {number} Hora - The hour to be formatted.
@param {number} Minutos - The minute to be formatted.
@returns {string} A string representing the formatted time in the format HH:mm.
@example
TimeFormatter(9, 30) // returns "09:30"
TimeFormatter(15, 10) // returns "15:10"
TimeFormatter(0, 0) // returns "00:00"
 */
const TimeFormatter = (Hora, Minutos) => {
  let hora = Hora;
  let minutos = Minutos;
  if (Hora < 10) {
    hora = `0${Hora}`;
  }
  if (Minutos < 10) {
    minutos = `0${Minutos}`;
  }

  return `${hora}:${minutos}`;
};

/**
 * Genera y retorna un objeto con constantes de la fecha y hora actual.
 *
 * @param {string} language - Idioma para los nombres de días y meses ('es' o 'en')
 * @returns {Object} Contiene el año, mes, día del mes, hora, minuto, día de la semana,
 *                   una frase formateada de la fecha y la hora formateada.
 */
export const getDateTimeConstants = (language = "es") => {
  const { MESES, DIA_SEMANAL } = getCalendarTranslations(language);

  const FECHA_ACTUAl = new Date();
  const YEAR_ACTUAL = FECHA_ACTUAl.getFullYear();
  const MES_ACTUAL = FECHA_ACTUAl.getMonth() + 1;
  const DIA_ACTUAL = FECHA_ACTUAl.getDate();
  const HORA_ACTUAL = FECHA_ACTUAl.getHours();
  const MINUTO_ACTUAL = FECHA_ACTUAl.getMinutes();
  const DIA_SEMANAL_ACTUAL = FECHA_ACTUAl.getDay();

  const diaActualFormatted = IsDomingo(DIA_SEMANAL_ACTUAL) - 1;
  const FRASE_FECHA = `${DIA_SEMANAL[diaActualFormatted]} ${DIA_ACTUAL} ${language === "es" ? "de" : ""} ${
    MESES[MES_ACTUAL - 1]
  }`;
  const TIME_ACTUAL = `${TimeFormatter(HORA_ACTUAL, MINUTO_ACTUAL)}`;

  return {
    YEAR_ACTUAL,
    MES_ACTUAL,
    DIA_ACTUAL,
    HORA_ACTUAL,
    MINUTO_ACTUAL,
    DIA_SEMANAL_ACTUAL,
    FRASE_FECHA,
    TIME_ACTUAL,
  };
};

export const getTimeDay = () => {
  const FECHA_ACTUAl = new Date();
  const HORA_ACTUAL = FECHA_ACTUAl.getHours();

  return HORA_ACTUAL > 19 || HORA_ACTUAL < 6;
};

/**
 * Función para ajustar el valor de domingo en formato de días de la semana (de 1 a 7).
 *
 * @param {number} primerDiaSemanal - Día de la semana (0-6, donde 0 representa domingo).
 * @returns {number} Ajuste del día de la semana (1-7, donde 7 representa domingo).
 */
const IsDomingo = (primerDiaSemanal) => {
  return primerDiaSemanal === 0 ? 7 : primerDiaSemanal;
};

/**
 * Genera un calendario para el mes y año proporcionados.
 *
 * @param {number} year - Año del calendario.
 * @param {number} mes - Mes del calendario (1-12).
 * @returns {Object} Contiene los días del mes, el último día y el primer día de la semana del mes.
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

  const primerDia = new Date(year, mes, 1);
  const primerDiaSemanal = primerDia.getDay();
  const primerDiaSemanalFormat = IsDomingo(primerDiaSemanal);
  const numberUltimoDia = diasMes[mes - 1];
  const DiasMesActual = [];

  for (let i = 0; i <= ANCHO_CALENDAR; i++) {
    const dia = i - primerDiaSemanalFormat;

    if (i < primerDiaSemanalFormat - 1) {
      const RestoMesAnterior = primerDiaSemanalFormat - i - 2;
      const CantDiaMesAnt = mes === 1 ? diasMes[11] : diasMes[mes - 2];
      DiasMesActual.push(CantDiaMesAnt - RestoMesAnterior);
    } else if (i >= primerDiaSemanalFormat && dia < diasMes[mes - 1]) {
      DiasMesActual.push(dia + 1);
    } else if (i > numberUltimoDia) {
      const RestoMesSiguiente = i - numberUltimoDia;
      const RellenoDia = RestoMesSiguiente - primerDiaSemanalFormat + 1;
      DiasMesActual.push(RellenoDia);
    }
  }

  return { DiasMesActual, numberUltimoDia, primerDiaSemanalFormat };
};

/**
 * Determina si un año dado es bisiesto.
 *
 * @param {number} year - Año a verificar.
 * @returns {boolean} True si el año es bisiesto, False en caso contrario.
 */
const Bisiesto = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

/**
 * Determina el número de días de febrero para un año dado.
 *
 * @param {number} year - Año a verificar.
 * @returns {number} Días de febrero (28 o 29).
 */
const diasFebrero = (year) => {
  return Bisiesto(year) ? 29 : 28;
};

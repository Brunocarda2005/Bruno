import { useState, useEffect } from "react";
import "./Calendar.css";
import {
  generadorCalendario,
  getDateTimeConstants,
  DIA_SEMANAL,
} from "../../service/CalendarTime-service";

export default function Calendar() {
  const [DiaSelectNumber, setDiaSelectNumber] = useState(-1);

  const [currentTime, setCurrentTime] = useState(getDateTimeConstants());

  // Sincroniza el tiempo actual, ejecutándose en cada minuto exacto
  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(getDateTimeConstants());

    // Calcula el tiempo hasta el siguiente minuto exacto
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;

    // Ejecuta la función de actualización en el siguiente minuto exacto
    const timeoutId = setTimeout(() => {
      updateCurrentTime();
      setInterval(updateCurrentTime, 60000); // Actualiza cada minuto
    }, delay);

    // Limpia el intervalo al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []);

  const { YEAR_ACTUAL, MES_ACTUAL, DIA_ACTUAL, FRASE_FECHA, TIME_ACTUAL } =
    currentTime;
  const { DiasMesActual, numberUltimoDia, primerDiaSemanalFormat } =
    generadorCalendario(YEAR_ACTUAL, MES_ACTUAL);

  const SetGray = (index) => {
    const primerosNumeros = index >= primerDiaSemanalFormat - 1;
    const ultimosNumeros = index < numberUltimoDia + primerDiaSemanalFormat - 1;
    return primerosNumeros && ultimosNumeros;
  };

  const mesActual = (index) => `mes_actual_${SetGray(index)}`;
  const diaActual = (day) => `dia_actual_${DIA_ACTUAL === day}`;
  const diaSelect = (day) => `dia_select_${DiaSelectNumber === day}`;

  return (
    <main className="container__StartTools">
      <section className="time__content">
        <span className="time__content__reloj">{TIME_ACTUAL}</span>
        <span className="time__content__frase">{FRASE_FECHA}</span>
      </section>
      <section className="calendar__content">
        <aside className="calendar__content__days">
          {DIA_SEMANAL.map((day, index) => (
            <span className="calendar__content__days__day" key={index}>
              {day.substring(0, 3)}
            </span>
          ))}
        </aside>
        <aside className="calendar__content__calendar">
          {DiasMesActual.map((day, index) => (
            <span
              className={`calendar__content__calendar__day ${mesActual(
                index
              )} ${diaActual(day)} ${diaSelect(index)}`}
              key={index}
              onClick={() => setDiaSelectNumber(index)}
            >
              {day}
            </span>
          ))}
        </aside>
      </section>
    </main>
  );
}

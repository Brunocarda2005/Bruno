import generadorCalendario from "./service/CalendarTime-service";

export default function Calendar() {
  generadorCalendario(2024, 3);

  return (
    <section className="">
      <span></span>
    </section>
  );
}

import { useState } from "react";
import "./StartTools.css";
import Calendar from "./components/calendar/Calendar";
import Clima from "./components/climate/Climate";

export function StartTools() {
  const [changeContent, setChangeContent] = useState(0);
  const CALENDARIO = 0;
  const CLIMA = 1;

  return (
    <aside className="main__content-grid__container tools box-shadow">
      <Calendar />
      <Clima />
      <article className="main__content-grid__container__change-content">
        <div
          className={`main__content-grid__container__change-content__content calendario show_${changeContent}`}
          onClick={() => setChangeContent(CALENDARIO)}
        >
          <span>Calendario</span>
        </div>
        <div
          className={`main__content-grid__container__change-content__content clima show_${changeContent}`}
          onClick={() => setChangeContent(CLIMA)}
        >
          <span>Clima</span>
        </div>
      </article>
    </aside>
  );
}

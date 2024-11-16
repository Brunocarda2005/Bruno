import { useEffect, useState } from "react";
import "./StartTools.css";
import Calendar from "./components/calendar/Calendar";
import Clima from "./components/climate/Climate";

export function StartTools() {
  const CALENDARIO = 0;
  const CLIMA = 1;
  const [changeContent, setChangeContent] = useState(CALENDARIO);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside className="main__content-grid__container tools box-shadow">
      {isMobile ? (
        changeContent === CALENDARIO ? (
          <Calendar />
        ) : (
          <Clima />
        )
      ) : (
        <div className="tools__content">
          <Calendar />
          <Clima />
        </div>
      )}
      <article className="main__content-grid__container__change-content">
        <div
          className={`main__content-grid__container__change-content__content calendario show-${
            changeContent === CALENDARIO
          }`}
          onClick={() => setChangeContent(CALENDARIO)}
        >
          <span>Calendario</span>
        </div>
        <div
          className={`main__content-grid__container__change-content__content clima show-${
            changeContent === CLIMA
          }`}
          onClick={() => setChangeContent(CLIMA)}
        >
          <span>Clima</span>
        </div>
      </article>
    </aside>
  );
}

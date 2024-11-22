import { useRef, useState, useEffect } from "react";
import "./Seeker.css";
import lupaIMG from "../../../../../../static/svg/lupa.svg";
import UseSuggestions from "../../../../hooks/UseSuggestions";
import { FaPlus } from "react-icons/fa";

export function Seeker(params) {
  const { handleTagClickAc } = params;
  const { contextTags } = UseSuggestions();
  const [activeInput, setActiveInput] = useState(false);
  const seekerRef = useRef(null); // Referencia al contenedor principal

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (seekerRef.current && !seekerRef.current.contains(event.target)) {
        setActiveInput(false); // Cerrar el buscador si se hace clic afuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="buscador__seeker" ref={seekerRef}>
      <section className="buscador__seeker__content">
        <div className="buscador__seeker__content__lupa">
          <img
            src={lupaIMG}
            alt=""
            className="buscador__seeker__content__lupa__img"
          />
        </div>
        <input
          type="text"
          placeholder="Busca una etiqueta"
          className={`buscador__seeker__content__input box-shadow ${
            activeInput ? "input_active" : "input_desactive"
          }`}
          onFocus={() => setActiveInput(true)}
        />
      </section>
      <section
        className={`buscador__seeker__skills ${
          activeInput ? "active" : "desactive"
        }`}
      >
        {contextTags.map((skill) => {
          const { nombre, id, color } = skill;

          const style = {
            borderLeftColor: color,
          };

          return (
            <aside key={id} className="buscador__seeker__skills__skill">
              <div className="buscador__seeker__skills__skill__text">
                <span
                  style={style}
                  className="buscador__seeker__skills__skill__span"
                ></span>
                <span>{nombre}</span>
              </div>
              <span
                onClick={() => handleTagClickAc(id)}
                className="buscador__seeker__skills__skill__close"
              >
                <FaPlus />
              </span>
            </aside>
          );
        })}
      </section>
    </main>
  );
}

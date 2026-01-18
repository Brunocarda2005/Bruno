import { useRef, useState, useEffect } from "react";
import "./Seeker.css";
import lupaIMG from "../../../../../../static/svg/lupa.svg";
import { FaPlus } from "react-icons/fa";
import { normalizeText } from "../../../../../../utils/helpers";
import { useTranslation } from "../../../../../../utils/useTranslation";

export function Seeker({ handleTagClickAc, tags }) {
  const { t } = useTranslation();
  const [activeInput, setActiveInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const seekerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (seekerRef.current && !seekerRef.current.contains(event.target)) {
        setActiveInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filtrar tags inactivos basados en el término de búsqueda (con normalización)
  const filteredTags = tags.filter((tag) => {
    if (tag.active) return false;
    if (!searchTerm.trim()) return true;

    return normalizeText(tag.nombre).includes(normalizeText(searchTerm));
  });

  return (
    <main className="buscador__seeker" ref={seekerRef}>
      <section className="buscador__seeker__content">
        <div className="buscador__seeker__content__lupa">
          <img
            src={lupaIMG}
            alt="Buscar"
            className="buscador__seeker__content__lupa__img"
          />
        </div>
        <input
          type="text"
          placeholder={t("projects.search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
        {filteredTags.length > 0 ? (
          filteredTags.map((skill) => {
            const { nombre, id, color } = skill;
            const style = { borderLeftColor: color };

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
                  onClick={() => {
                    handleTagClickAc(id);
                    setSearchTerm("");
                  }}
                  className="buscador__seeker__skills__skill__close"
                >
                  <FaPlus />
                </span>
              </aside>
            );
          })
        ) : (
          <div className="buscador__seeker__skills__empty">
            <p>
              {searchTerm ? t("projects.noTagsFound") : t("projects.noTags")}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

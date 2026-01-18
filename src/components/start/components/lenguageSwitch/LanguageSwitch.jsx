import "./LanguageSwitch.css";
import { useTranslation } from "../../../../utils/useTranslation";

export default function LanguageSwitch() {
  const { language, toggleLanguage, isSpanish } = useTranslation();

  return (
    <div className="language-switch">
      <div className="language-switch__container">
        <span className={`language-switch__label ${isSpanish ? "active" : ""}`}>
          ES
        </span>
        <button
          className="language-switch__toggle"
          onClick={toggleLanguage}
          aria-label="Cambiar idioma / Change language"
        >
          <span
            className={`language-switch__toggle__slider ${language}`}
          ></span>
        </button>
        <span
          className={`language-switch__label ${!isSpanish ? "active" : ""}`}
        >
          EN
        </span>
      </div>
    </div>
  );
}

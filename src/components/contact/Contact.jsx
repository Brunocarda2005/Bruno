"use strict";
import "./contact.css";
import { useState } from "react";
import imgFooter from "../../static/svg/wave.svg";
import CardContact from "./components/card/CardContact";
import HeaderContact from "./components/header/Header";
import { Content } from "./enum/content";
import { Experiencia } from "./components/experiencia/Experiencia";

export default function Contact() {
  const [showContent, setShowContent] = useState(Content.EXPERIENCE);

  return (
    <main className="app__contact" id="contact">
      <div className="blob position-center">
        <span className="blob-span"></span>
      </div>
      <div className="app__contact__conten">
        <HeaderContact change={setShowContent} content={showContent} />
        <aside className="app__contact__conten__cards">
          {showContent === Content.CONTACT ? (
            <section className="app__contact__conten__cards__content">
              <CardContact name={"Linkedin"} />
              <CardContact name={"GitHub"} />
            </section>
          ) : showContent === Content.EXPERIENCE ? (
            <section className="app__contact__conten__cards__content">
              <Experiencia />
            </section>
          ) : (
            ""
          )}
          <footer className="app__contact__conten__cards__footer">
            <img
              className="app__contact__conten__cards__footer__img"
              src={imgFooter}
              alt=""
            />
          </footer>
        </aside>
      </div>
    </main>
  );
}

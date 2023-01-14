import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import "../components/static/css/app.css";
import Skills from "../components/skilss/Skills";
import Card_p_w from "../components/Card_p_w/CardPW";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import logo from "../components/static/fotos/logo.png";
import wave from "../components/static/svg/wave.svg";
import Services from "../components/services/Services";
import Start from "../components/start/Start";
import Form from "../components/form/form";

export default function Main() {
  const [info, setInfo] = useState("");

  const openInfo = () => {
    if (info == "openInfo") {
      setInfo("");
    } else {
      setInfo("openInfo");
    }
  };

  return (
    <div className="appPrueva">
      <Start />

      <section id="about">
        <div className="about">
          <h2>About me :</h2>
          <div className="about-content">
            <aside className="about-content-me">
              <div className="about-content-me-ilustraciones"></div>
              <p>
                Hola, soy bruno cardamone , a mi corta edad eh podido realizar
                trabajos y poder desarrollar mis habilidades en el hambito
                front-end , soy Argentino y pese a no tener experiencia en
                ninguna empresa puedo aprender rapido y me puedo amoldar facil a
                casi cualquier area
              </p>
            </aside>
            <aside className={`about-content-info  ${info}`}>
              <div className="about-content-info-h" onClick={openInfo}>
                <h4>Information : </h4>
                <FaAngleDown className="about-content-info-h-svg" />
              </div>
              <div className="about-content-info-h-list">
                <div className="about-content-info-h-list-1">
                  <p>
                    I'm <b>Bruno Cardamone</b>
                  </p>
                  <p>
                    I'm from <b>Argentina</b>
                  </p>
                </div>
                <div className="about-content-info-h-list-linea"></div>
                <div className="about-content-info-h-list-2">
                  <p>
                    I'm <b>18</b> age old
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Skills />

      <Card_p_w
        title="Works"
        parrafo="Enter and visit my works"
        link="Lest Go"
        to="/work"
        il="works"
      />

      <Services />

      <Card_p_w
        title="PROJECTS"
        parrafo="you can enter and watch how I solved problems and developed functionalities with all the technologies I learned"
        link="Lest Go"
        to="/project"
        il="projects"
      />

      <section className="contact" id="contact">
        <div className="flex">
          <div className="contact-text">
            <h4>contact me and let's work together</h4>
            <div className="contact-text-ilustraciones"></div>
          </div>
          <div className="contact-content">
            <Form />
          </div>
        </div>
        <div className="contact-other">
          <div className="contact-other-line_1">
            <div className="contact-other-line_1-call">
              <p>+54 9 2477685189</p>
            </div>
            <div className="contact-other-line_1-email">
              <p>brunocardamone03</p>
            </div>
          </div>
          <div className="contact-other-line"></div>
          <div className="contact-other-line_2">
            <div className="contact-other-line_2-localitation">
              <p>Buenos Aires</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <img src={wave} alt="" className="footer-img" />
        <div className="footer-content">
          <div className="footer-content-img">
            <img src={logo} alt="bruno cardamone codigo logo" />
            <p>
              Te agradesco por llegar hasta el final , visita mis redes sociales
              si quieres saber mas sobre mi
            </p>
          </div>
          <div className="footer-content-social_network">
            <a href="">
              <FaInstagram />
              <p>
                @bruno_carda <FaAngleRight />
              </p>
            </a>
            <a href="+54 9 2477685189">
              <FaWhatsapp />
              <p>
                +54_2477_685189 <FaAngleRight />
              </p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

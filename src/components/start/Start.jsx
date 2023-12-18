// import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import cv from "../../assets/CV INGLES.docx.pdf";
import "./Start.css";

export default function Main() {
  return (
    <main className="main" id="home">
      <section className="main-me">
        <div className="main-me-content">
          <aside>
            <h2 className="main-me-content-h">
              Bruno <b>Cardamone</b>
            </h2>
            <p>Frontend developer</p>
          </aside>
          <section className="main-me-content-contact">
            <a href="https://www.linkedin.com/in/bruno-cardamone-470032216/">
              <FaLinkedin />
            </a>
            <a href="mailto:brunocardamone03@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://github.com/Brunocarda2005">
              <FaGithub />
            </a>
          </section>
          <a className="main-me-content-a" download={"Curriculum"} href={cv}>
            <span className="main-me-content-a-text">Dowload CV</span>
          </a>
        </div>
      </section>
    </main>
  );
}

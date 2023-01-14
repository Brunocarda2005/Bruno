import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Main() {
  return (
    <main className="main" id="start">
      <div className="main-me">
        <div className="main-me-content">
          <h2 className="main-me-content-h">
            Bruno <b>Cardamone</b>
          </h2>
          <p>Frontend developer</p>
          <div className="main-me-content-contact">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaEnvelope />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </div>
          <a href="#" className="main-me-content-a">
            Dowload CV
          </a>
        </div>
      </div>
    </main>
  );
}

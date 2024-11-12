import StartAbout from "./components/about/StartAbout";
import StartLink from "./components/links/StartLinks";
import { StartTools } from "./components/tools/StartTools";
import StartWallpaper from "./components/wallpaper/StartWallpaper";
import "./Start.css";

export default function Main() {
  return (
    <main className="main" id="home">
      {/* <section className="main-me">
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
      </section> */}
      <div className="blob position-start">
        <span className="blob-span"></span>
      </div>
      <section className="main__content-grid">
        <StartAbout />
        <StartTools />
        <StartWallpaper />
        <StartLink />
      </section>
    </main>
  );
}

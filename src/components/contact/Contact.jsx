import "./contact.css";
import imgFooter from "../../static/svg/wave.svg";
import CardContact from "./card/CardContact";
import HeaderContact from "./header/Header";

export default function Contact() {
  return (
    <main className="app__contact" id="contact">
      <div className="blob position-center">
        <span className="blob-span"></span>
      </div>
      <div className="app__contact__conten">
        <HeaderContact />
        <aside className="app__contact__conten__cards">
          <section className="app__contact__conten__cards__content">
            <CardContact name={"Linkedin"} />
            <CardContact name={"GitHub"} />
          </section>
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

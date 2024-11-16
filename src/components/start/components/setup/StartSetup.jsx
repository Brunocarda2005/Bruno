import "./StartSetup.css";
import setupIMG from "../../../../static/svg/setup.svg";
// import lightIMG from "../../../../static/svg/light.svg";
import lampIMG from "../../../../static/svg/lamp.svg";

export default function StartSetup() {
  return (
    <aside className="main__content-grid__container wallpaper box-shadow">
      <section className="main__content-grid__container__lamp">
        <picture className="main__content-grid__container__lamp__picture">
          <img src={lampIMG} alt="lamp light svg" className="light__img" />
        </picture>
      </section>
      <section className="main__content-grid__container__setup">
        <picture className="main__content-grid__container__setup__picture">
          <img src={setupIMG} alt="setup svg" className="setup__img" />
        </picture>
      </section>
    </aside>
  );
}

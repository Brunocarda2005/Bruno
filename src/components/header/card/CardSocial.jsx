import Linkedin from "../../../static/svg/linkedin.svg";
import Instagram from "../../../static/svg/insta.svg";
import Home from "../../../static/svg/home2.svg";
import "./CardSocial.css";
import Card from "./card/Card";
import { useState } from "react";

export default function CardSocial() {
  const [nav, setNav] = useState("linkedin")

  const Navigation = (e) => {
    setNav(e.target.id)
    console.log()
  }

  return (
    <section className="social__cards" id={`${nav}_madre`}>
      <div
        onClick={Navigation}
        id="linkedin"
        className={`${nav === "linkedin"}_card linkedin card content_lin`}
      >
        <Card Img={Linkedin} />
        <span className="show_lin" id="linkedin"></span>
      </div>
      <div
        onClick={Navigation}
        className={`${nav === "github"}_card github card content_github`}
        id="github"
      >
        <Card Img={Home} />
        <span className="show_github" id="github"></span>
      </div>
      <div
        onClick={Navigation}
        className={`${nav === "instagram"}_card instagram card content_insta`}
        id="instagram"
      >
        <Card Img={Instagram} />
        <span className="show_insta" id="instagram"></span>
      </div>
    </section>
  );
}

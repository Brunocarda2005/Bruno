import "../static/css/Card_p_w.css";
import { Link } from "wouter";

export default function Card_p_w({ title, parrafo, link, to, il }) {
  return (
    <>
      <section className="works" id="works">
        <div className="works-card_content">
          <div className="works-card_content-text">
            <h4>{title}</h4>
            <p>{parrafo}</p>
            <Link href={to}> {link} </Link>
          </div>
          <div className={`${il}-card-ilustration`}></div>
        </div>
      </section>
    </>
  );
}

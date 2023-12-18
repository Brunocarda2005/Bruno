import "./Main.css";
import Header from "../header/header";
import Start from "../start/Start";
import ProyectsAndWorks from "../ProyectAndWorks/ProyectsAndWorks";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";
import UseState from "../../context/useContext";

export default function Main() {
  return (
    <>
      <Header />
      <div className="blob">
        <span className="blob-span"></span>
      </div>
      <Start />
      <UseState>
        <Skills />
        <ProyectsAndWorks />
      </UseState>
      <Footer />
    </>
  );
}

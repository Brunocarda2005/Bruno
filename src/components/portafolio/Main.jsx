import "./Main.css";
import Header from "../header/header";
import Start from "../start/Start";
import ProyectsAndWorks from "../ProyectAndWorks/ProyectsAndWorks";
import Footer from "../footer/Footer";
import Skills from "../skills/Skills";
import ContextProvider from "../../context/useContext";
import Contact from "../contact/Contact";

export default function Main() {
  return (
    <>
      <Header />
      <Start />
      <ContextProvider>
        <ProyectsAndWorks />
        <Skills />
      </ContextProvider>
      <Contact />
      <Footer />
    </>
  );
}

import { useState } from "react";
import "./form.css";

export default function Form() {
  const [error, sertError] = useState();
  const [Name, setName] = useState();

  const comprobation = (e) => {
    e.preventDefault();
    let mail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let name = e.target.parentNode.childNodes[0].childNodes[0].value;
    let email = e.target.parentNode.childNodes[1].childNodes[0].value;
    let project = e.target.parentNode.childNodes[2].childNodes[0].value;
    let mensaje = e.target.parentNode.childNodes[3].childNodes[0].value;

    if (name === "" || name.length <= 3) {
      sertError(false);
    } else if (!mail.test(email)) {
      sertError(false);
    } else if (project === "" || project.length <= 3) {
      sertError(false);
    } else if (mensaje === "" || mensaje.length <= 6) {
      sertError(false);
    } else {
      sertError(true);
    }

    setName("open");
  };

  function AlertError(element) {
    if (error === true) {
      if (element === "title") {
        return "Enviado";
      } else if (element === "text") {
        return "Por Ahora no poseo lor recursos economicos para pagarme un hosting que permita este tipo de interaccion con el backend pero puedes ver un formulario mail totalmente funcional en mis trabajos";
      }
    } else if (error === false) {
      if (element === "title") {
        return "Hubo un error";
      } else if (element === "text") {
        return "Deberias revisar los datos del formulario";
      }
    } else {
      return "";
    }
  }

  const Close = () => {
    setName("close");
  };

  return (
    <form method="POST" className="contact-content-form">
      <div className="contact-content-form-content name">
        <input
          type="text"
          placeholder=" "
          name="nombre"
          id="nombre"
          className="contact-content-form-name"
        />
        <label htmlFor="nombre">Name </label>
      </div>
      <div className="contact-content-form-content email">
        <input
          type="text"
          placeholder=" "
          name="email"
          id="email"
          className="contact-content-form-mail"
        />
        <label htmlFor="email">Email </label>
      </div>
      <div className="contact-content-form-content project">
        <input
          type="text"
          name="project"
          id="project"
          placeholder=" "
          className="contact-content-form-project"
        />
        <label htmlFor="project">Project </label>
      </div>
      <div className="contact-content-form-content mensaje">
        <textarea
          name="mensaje"
          id="mensaje"
          cols="30"
          rows="10"
          placeholder=" "
          className="contact-content-form-msj"
        ></textarea>
        <label htmlFor="mensaje">Message </label>
      </div>
      <button onClick={comprobation} className="contact-content-form-send">
        Send
      </button>
      <section className={`contact-content-form-alert ${Name} `}>
        <div className="contact-content-form-alert-close" onClick={Close}>
          <span></span>
        </div>
        <div className="contact-content-form-alert-content">
          <h3 className="contact-content-form-alert-content-title">
            {AlertError("title")}
          </h3>
          <p className="contact-content-form-alert-content-text">
            {AlertError("text")}
          </p>
        </div>
      </section>
    </form>
  );
}

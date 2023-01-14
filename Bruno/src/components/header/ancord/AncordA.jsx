import React from "react";
import "../../static/css/app.css";
import { FaHome } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function AncordA(props) {
  function icon(icon) {
    switch (icon) {
      case "FaHome":
        return <FaHome />;
      case "FaPencilRuler":
        return <FaPencilRuler />;
      case "FaUserAlt":
        return <FaUserAlt />;
      case "FaDraftingCompass":
        return <FaDraftingCompass />;
      case "FaClipboardList":
        return <FaClipboardList />;
      case "FaBook":
        return <FaBook />;
      case "FaPhone":
        return <FaPhone />;
      case "FaCode":
        return <FaCode />;
    }
    if (icon === "FaCode") return <FaCode />;
  }

  return (
    <a href={props.href} id="nav-a" className="">
      {/* una vez solucione el problema de cuando se intenta dar click en un acnord debes poner el classname y el onclick*/}
      {icon(props.icon)}
      {props.children}
      <p>{props.text}</p>
    </a>
  );
}

import React from "react";
import { useState } from "react";
import logo from "../static/fotos/logo.png";
import AsideA from "./header_aside/AsideA";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import "./header.css";

export default function Header() {
  // state menu
  const [active, setActive] = useState("");

  // show menu
  const clickMenu = () => {
    setActive("openMenu");
  };
  const showMenu = () => {
    setActive("");
  };

  // days night

  const daysNight = () => {
    let body = document.querySelector("body");

    body.classList.toggle("days");
  };

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <div className="header-nav-menu_desplegable" onClick={clickMenu}>
            <span></span>
          </div>
          <img src={logo} alt="bruno cardamoe" className="header-nav-img" />
          <div
            className="header-nav-days_night"
            id="days_night"
            onClick={daysNight}
          >
            <FaMoon />
            <FaSun />
          </div>
        </nav>
        <aside className={"header-aside " + active}>
          <div className="header-aside-close" onClick={showMenu}>
            <span></span>
          </div>
          <AsideA />
        </aside>
      </header>
    </>
  );
}

"use strict";
import "./header.css";
import { useEffect, useState } from "react";
import Nav from "./ancord/NavAncord";

export default function Header() {
  const [activeHeader, setActiveHeader] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const switchActive = () => setActiveHeader(!activeHeader);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100); // Muestra el header si scrollY es mayor a 20
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header header_${activeHeader} show_${showHeader}`}>
      <nav className="header__nav" onClick={switchActive}>
        <Nav />
        <div className="social__cards__show">
          <span className="social__cards__show__span"></span>
        </div>
      </nav>
    </header>
  );
}

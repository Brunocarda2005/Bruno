import "./header.css";
import { useState } from "react";
import Nav from "./ancord/NavAncord";

export default function Header() {
  const [activeHeader, setActiveHeader] = useState(false);

  const switchActive = () => setActiveHeader(!activeHeader);

  return (
    <header className={`header header_${activeHeader}`}>
      <nav className="header__nav" onClick={switchActive}>
        <Nav />
        <div className="social__cards__show">
          <span className="social__cards__show__span"></span>
        </div>
      </nav>
    </header>
  );
}

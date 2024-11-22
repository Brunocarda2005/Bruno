import "./StartLink.css";
import { FiExternalLink } from "react-icons/fi";
import dataLink from "../../../../static/const/DataLinks";
import wave from "../../../../static/svg/wave-start.svg";
import { useEffect, useState } from "react";

export default function StartLink() {
  const [deviceInfo, setDeviceInfo] = useState({
    isPc: window.innerWidth >= 600,
    isMobile: window.innerWidth < 600 && window.innerWidth >= 320,
    isMobileSmall: window.innerWidth < 320,
  });

  useEffect(() => {
    const handleResize = () => {
      setDeviceInfo({
        isPc: window.innerWidth >= 600,
        isMobile: window.innerWidth < 600 && window.innerWidth >= 320,
        isMobileSmall: window.innerWidth < 320,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup y ejecución inicial
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderLinkContent = (link) => {
    if (deviceInfo.isPc) {
      return (
        <>
          <span>{link.text}</span>
          <FiExternalLink className="icon" />
        </>
      );
    }

    if (deviceInfo.isMobile) {
      return (
        <>
          <img
            src={link.icone}
            alt={link.text}
            className="main__content-grid__container__img"
          />
          <FiExternalLink className="icon" />
        </>
      );
    }

    if (deviceInfo.isMobileSmall) {
      return (
        <img
          src={link.icone}
          alt={link.text}
          className="main__content-grid__container__img"
        />
      );
    }

    return null;
  };

  return (
    <aside className="main__content-grid__container__hidden links">
      {dataLink.map((link) => (
        <a
          key={link.id}
          className="main__content-grid__container box-shadow"
          href={link.link}
        >
          {renderLinkContent(link)}
          <img src={wave} alt="" className="img__wave__link__start" />
        </a>
      ))}
    </aside>
  );
}

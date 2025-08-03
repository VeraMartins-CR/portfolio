import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import logoBranco from "../assets/images/logos/Vera Martins (branco).png";
import logoPreto from "../assets/images/logos/Vera Martins (preto).png";

const Headermain = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme") || "light");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const logoSrc = theme === "dark" ? logoBranco : logoPreto;

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            <img src={logoSrc} alt="Vera Martins logo" style={{ height: 40, width: "auto" }} />
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            {/* Removed menu button and navigation */}
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;

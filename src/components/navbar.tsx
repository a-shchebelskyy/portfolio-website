import React, { useState } from "react";
import LanguageSelector from "./languageSelector";
import { useTranslation } from 'react-i18next';
import github from '/icons/github.png';
import linkedin from '/icons/linkedin.png';
import avatar from '/images/avatar.png';
import menu from '/icons/menu-50.png';
import close from '/icons/close-50.png'
import './../index.css'; // Make sure to import your CSS file

const Navbar = () => {

  const { t } = useTranslation();
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleScrollById = ( target : string) => {
    setIsMenuOpened(false);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (width >= 640) {
    return (
      <div className="navbar">
          <a className='name-container' href="#header">
            <img src={avatar} height="40" width="40" className="avatar" />
            <p className="name">{t("name")}</p>
          </a>
          <div className="navbar-links">
            <a className="link" href="#about">{t("about")}</a>
            <a className="link" href="#projects">{t("projects")}</a>
            <a className="link" href="#contact">{t("contact")}</a>
          </div>
          <div className="social-links">
            <LanguageSelector/>
            <a className="button-circle" href="https://github.com/a-shchebelskyy/" target="_blank">
              <img
                src={github}
                width="20"
                height="20"
              />
            </a>
            <a className="button-circle" href="https://www.linkedin.com/in/alex-shchebelskyy/" target="_blank">
              <img
                src={linkedin}
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
    );
  } else {
    return (
      <div className="navbar-mobile">
        <div className="navbar">
          <a className='name-container' href="#header">
            <img src={avatar} height="40" width="40" className="avatar" />
            <p className="name">{t("name")}</p>
          </a>
          <button 
            className="button-x"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            <img
              src={isMenuOpened ? close : menu}
              width="40"
              height="40"
            />
          </button>
        </div>
        <div className={`mobile-menu ${isMenuOpened ? 'menu-opened' : 'menu-closed'}`}>
          <div className="navbar-links">
            <button onClick={() => handleScrollById("about")}>
              <p className="link">{t("about")}</p>
            </button>
            <button onClick={() => handleScrollById("projects")}>
              <p className="link">{t("projects")}</p>
            </button>
            <button onClick={() => handleScrollById("contact")}>
              <p className="link">{t("contact")}</p>
            </button>
            {/* <a className="link" href="#about">{t("about")}</a>
            <a className="link" href="#projects">{t("projects")}</a>
            <a className="link" href="#contact">{t("contact")}</a> */}
          </div>
          <div className="navbar-links">
            <LanguageSelector/>
          </div>
          <div className="social-links">
            <a className="button-circle" href="https://github.com/a-shchebelskyy/" target="_blank">
              <img
                src={github}
                width="20"
                height="20"
              />
            </a>
            <a className="button-circle" href="https://www.linkedin.com/in/alex-shchebelskyy/" target="_blank">
              <img
                src={linkedin}
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
import React, { useEffect, useState } from "react";
import LanguageSelector from "./languageSelector";
import { useTranslation } from 'react-i18next';
import github from '../../public/icons/github.png';
import linkedin from '../../public/icons/linkedin.png';
import avatar from '../../public/images/avatar.png';
import './../index.css'; // Make sure to import your CSS file

const Navbar = () => {

  const { t } = useTranslation();

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
          <a className="button-circle" href="https://github.com/a-shchebelskyy/" target="_blank">
            <img
              src={linkedin}
              width="20"
              height="20"
            />
          </a>
        </div>
      </div>
  );
};

export default Navbar;
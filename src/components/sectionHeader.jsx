import React from 'react';
import Typewriter from './typewriter';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';
import hero from '../../public/images/hero.png';

const Header = () => {

  const { t } = useTranslation();
  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

  return (
    <main className="main" id="header">
      <div className="hero">
        <div className='hero-text'>
          <div>
            <h1 className='title'>
              {t("hero_let")}<span className='typewriter-text'> {t("hero_me")}</span> {t("hero_build")}
            </h1>
            <h1 className={'title'}>
              <Typewriter words={[t("hero_app"), t("hero_tech"), t("hero_dream")]} />
              {/* Add a blinking cursor after the text span */}
              <span className="typewriter-cursor">|</span>
            </h1>
          </div>
          <p className='hero-body'>{t("hero_subtitle")}</p>
          <a className='button-main button-enabled' href="#projects">{t("cta_title")}</a>
        </div>
        <img
          src={hero}
          width={width >= 640 ? "512" : "360"}
          height={width >= 640 ? "512" : "360"}
        />
      </div>
    </main>
  )
}

export default Header;
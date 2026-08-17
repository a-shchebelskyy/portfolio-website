import React from 'react';
import Typewriter from './../components/typewriter';
import './../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/languageSelector';

const Home = () => {

  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   t.changeLanguage(lng);
  // };

  return (
    <div className="home">
      <div className="navbar">
        <div className='name-container'>
          <img src="/public/avatar.png" height="40" width="40" className="avatar" />
          <p className="name">{t("name")}</p>
        </div>
        <div className="navbar-links">
          <p className="link">{t("about")}</p>
          <p className="link">{t("projects")}</p>
          <p className="link">{t("contact")}</p>
        </div>
        <div className="social-links">
          <LanguageSelector/>
          {/* <div>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('ua')}>UA</button>
          </div> */}
          <button className="button-circle">
            <img
              src="/public/github.png"
              width="20"
              height="20"
            />
          </button>
          <button className="button-circle">
            <img
              src="/public/linkedin.png"
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>
      <main className="main">
        <div className="hero">
          <div className='hero-text'>
            {/* <p className="subtitle">Join me in</p> */}
            {/* <p className="title">Building</p> */}
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
            <p className='body'>{t("hero_subtitle")}</p>
            <button className='button-main'>{t("cta_title")}</button>
          </div>
          <img
            src="/public/hero.png"
            width="512"
            height="512"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
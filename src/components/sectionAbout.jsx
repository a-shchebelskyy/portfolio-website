import React from 'react';
import Slideshow from './slideshow';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';
import headshot1 from '../../public/images/headshot1.jpg';
import react from './../../public/icons/react-native-48.png';
import nextjs from './../../public/icons/nextjs-48.png';
import typescript from './../../public/icons/typescript-48.png';
import node from './../../public/icons/node-js-48.png';
import postgresql from './../../public/icons/postgresql-48.png';
import prisma from './../../public/icons/prisma-48.png';
import expo from './../../public/icons/expo-48.png';
import electron from './../../public/icons/electron.png';
import git from './../../public/icons/git-48.png';
import vercel from './../../public/icons/vercel-50.png';
import docker from './../../public/icons/docker-48.png';
import clerk from './../../public/icons/clerk.png';
import stripe from './../../public/icons/stripe-48.png';
import openai from './../../public/icons/chatgpt-48.png';

const About = () => {

  const { t } = useTranslation();

  return (
    <section className="main" id="about">
      <h1 className='subtitle'>
        {t("about")}
      </h1>
      <div className="about-row">
        <img src={headshot1} className="headshot" />
        <Slideshow>
          <div className="slide">
            <h3 className="slide-title">{t("slides.1.header")}</h3>
            <p className="about-body">{t("slides.1.body1")}</p>
            <p className="about-body">{t("slides.1.body2")}</p>
            <p className="about-body">{t("slides.1.body3")}</p>
          </div>
          <div className="slide">
            <h3 className="slide-title">{t("slides.2.header")}</h3>
            <p className="about-body"><b>{t("slides.2.fullstack_development")}:</b> {t("slides.2.fullstack_development_text")}</p>
            <p className="about-body"><b>{t("slides.2.mobile_development")}:</b> {t("slides.2.mobile_development_text")}</p>
            <p className="about-body"><b>{t("slides.2.custom_software")}:</b> {t("slides.2.custom_software_text")}</p>
            <p className="about-body"><b>{t("slides.2.mvp_development")}:</b> {t("slides.2.mvp_development_text")}</p>
          </div>
          <div className="slide">
            <h3 className="slide-title">{t("slides.3.header")}</h3>
            <p className="about-body">{t("slides.3.body1")}</p>
            <p className="about-body">{t("slides.3.body1")}</p>
          </div>
          <div className="slide">
            <h3 className="slide-title">{t("slides.4.header")}</h3>
            <div className="text-inline"><b>{t("slides.4.frontend")}:</b><img src={react} width="24" height="24"/><span>React</span><img src={nextjs} width="24" height="24"/><span>Next.js</span><img src={typescript} width="24" height="24"/><span>TypeScript</span></div>
            <div className="text-inline"><b>{t("slides.4.backend")}:</b><img src={node} width="24" height="24"/><span>Node.js · REST APIs · WebSockets</span></div>
            <div className="text-inline"><b>{t("slides.4.database")}:</b><img src={postgresql} width="24" height="24"/><span>PostgreSQL</span><img src={prisma} width="24" height="24"/><span>Prisma</span></div>
            <div className="text-inline"><b>{t("slides.4.mobile")}:</b><img src={react} width="24" height="24"/><span>React Native</span><img src={expo} width="24" height="24"/><span>Expo</span></div>
            <div className="text-inline"><b>{t("slides.4.desktop")}:</b><img src={electron} width="24" height="24"/><span>Electron</span></div>
            <div className="text-inline"><b>{t("slides.4.tools")}:</b><img src={git} width="24" height="24"/><span>Git</span><img src={vercel} width="24" height="24"/><span>Vercel</span><img src={docker} width="24" height="24"/><span>Docker</span></div>
            <div className="text-inline"><b>{t("slides.4.integrations")}:</b><img src={clerk} width="24" height="24"/><span>Clerk</span><img src={stripe} width="24" height="24"/><span>Stripe</span><img src={openai} width="24" height="24"/><span>Open AI</span></div>
          </div>
        </Slideshow>
      </div>
    </section>
  )
}

export default About;
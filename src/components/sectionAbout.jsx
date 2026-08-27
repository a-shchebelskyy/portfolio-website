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
import maps from './../../public/icons/google-maps-48.png';
import openai from './../../public/icons/chatgpt-48.png';

const About = () => {

  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   t.changeLanguage(lng);
  // };

  return (
    <section className="main" id="about">
      <h1 className='subtitle'>
        {t("about")}
      </h1>
      <div className="about-row">
        <img src={headshot1} width="448" height="448" className="headshot" />
        <Slideshow>
          <div className="slide">
            <h3 className="slide-title">I build software from idea to reality</h3>
            <p className="about-body">I'm a software developer focused on building thoughtful, reliable applications for startups, businesses, and ambitious projects.</p>
            <p className="about-body">My work spans full-stack web applications, mobile apps, SaaS products, real-time systems, and specialized software. I enjoy taking an idea that exists on paper and turning it into something people can actually use.</p>
            <p className="about-body">I care about more than making things work. I focus on clean interfaces, maintainable architecture, and solving the underlying problem rather than simply implementing a list of features.</p>
          </div>
          <div className="slide">
            <h3 className="slide-title">What I Do</h3>
            <p className="about-body"><b>Full-Stack Development:</b> Web applications, APIs, databases, authentication, dashboards, and SaaS platforms.</p>
            <p className="about-body"><b>Mobile Development:</b> Cross-platform applications for iOS and Android using React Native and Expo.</p>
            <p className="about-body"><b>Custom Software:</b> Interactive tools, visualization software, real-time applications, and software built around specialized requirements.</p>
            <p className="about-body"><b>MVP Development:</b> Helping turn an early-stage idea into a functional product that can be tested with real users.</p>
          </div>
          <div className="slide">
            <h3 className="slide-title">My Approach</h3>
            <p className="about-body">I prefer to work closely with the problem before jumping into the implementation. Once the requirements are clear, I build incrementally, communicate throughout the process, and keep the codebase structured so the product can continue evolving after the initial release.</p>
            <p className="about-body">Whether you need an MVP, a customer-facing application, or a custom internal tool, my goal is the same: build software that is useful, understandable, and built to last.</p>
          </div>
          <div className="slide">
            <h3 className="slide-title">Technologies</h3>
            <div className="text-inline"><b>Frontend:</b><img src={react} width="24" height="24"/><span>React</span><img src={nextjs} width="24" height="24"/><span>Next.js</span><img src={typescript} width="24" height="24"/><span>TypeScript</span></div>
            <div className="text-inline"><b>Backend:</b><img src={node} width="24" height="24"/><span>Node.js · REST APIs · WebSockets</span></div>
            <div className="text-inline"><b>Database:</b><img src={postgresql} width="24" height="24"/><span>PostgreSQL</span><img src={prisma} width="24" height="24"/><span>Prisma</span></div>
            <div className="text-inline"><b>Mobile:</b><img src={react} width="24" height="24"/><span>React Native</span><img src={expo} width="24" height="24"/><span>Expo</span></div>
            <div className="text-inline"><b>Desktop:</b><img src={electron} width="24" height="24"/><span>Electron</span></div>
            <div className="text-inline"><b>Tools & Infrastructure:</b><img src={git} width="24" height="24"/><span>Git</span><img src={vercel} width="24" height="24"/><span>Vercel</span><img src={docker} width="24" height="24"/><span>Docker</span></div>
            <div className="text-inline"><b>Integrations:</b><img src={clerk} width="24" height="24"/><span>Clerk</span><img src={stripe} width="24" height="24"/><span>Stripe</span><img src={openai} width="24" height="24"/><span>Open AI</span></div>
          </div>
        </Slideshow>
      </div>
    </section>
  )
}

export default About;
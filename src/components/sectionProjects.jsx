import React, { useState } from 'react';
import Modal from './modal';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';
import languaScreenshot from './../../public/images/screenshots/langua.png';
import vectorScreenshot from './../../public/images/screenshots/vector.png';
import mioScreenshot from './../../public/images/screenshots/mio.png';
import peakScreenshot from './../../public/images/screenshots/peak.png';

const projectsData = [
  {
    title: 'Langua',
    subtitle: 'Language Tutoring Platform',
    body: 'A full-stack platform designed to connect language learners with structured educational content and instructors. I designed and developed the application architecture, user experience, authentication, database layer, and dynamic course system.',
    thumbnail: languaScreenshot,
    link: 'https://lang-ua.vercel.app/',
    github: 'https://lang-ua.vercel.app/',
  },
  {
    title: 'Vector E-Lab',
    subtitle: 'Interactive Chemistry Tool',
    body: 'An interactive chemistry application for constructing and visualizing molecular structures. The project required custom graphical logic for molecular representation, atom positioning, structural formulas, and switching between different visualization modes.',
    thumbnail: vectorScreenshot,
    link: 'https://e-lab-beta.vercel.app',
    github: 'https://e-lab-beta.vercel.app',
  },
  {
    title: 'MIO Connect',
    subtitle: 'Prosthetic Configuration Software',
    body: 'A desktop application for configuring and communicating with experimental myoelectric prosthetic hardware. The project combines software development with embedded hardware, including serial communication, microcontrollers, EMG input, motor control, and a desktop configuration interface.',
    thumbnail: mioScreenshot,
    github: 'https://lang-ua.vercel.app/',
  },
  {
    title: 'Peak Fitness',
    subtitle: 'Community Fitness Application',
    body: 'A mobile application concept centered around community-driven fitness, activity tracking, and social interaction. The project explores mobile-first product design, authentication, user profiles, and community features.',
    thumbnail: peakScreenshot,
    github: 'https://github.com/a-shchebelskyy/Peak-Fitness',
  },
];

const Projects = () => {

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Store the ID of the currently open item (null means all are closed)
  const [openId, setOpenId] = useState(0);

  // Toggle open/close state based on item clicks
  const handleToggle = (id) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <main className="main" id="projects">
      <h2 className='subtitle'>
        {t("projects")}
      </h2>
      <div className="accordion-row">
        {projectsData.map((item, index) => {
        const isOpen = openId === index;
        
        return (
          <div key={index} className="accordion-item">
            {/* Accordion Header / Trigger Button */}
            <button
              onClick={() => handleToggle(index)}
              className="accordion-button"
            >
              <span className="text-sideways">{t(`project_data.${index}.title`)}</span>
            </button>

            {/* Accordion Content wrapper with smooth width transition */}
            <div
              className={`accordion-content ${
                isOpen ? 'accordion-open' : 'accordion-closed'
              }`}
            >
                <div className="accordion-text">
                  <div className="accordion-p">
                    <p className="accordion-subtitle">{t(`project_data.${index}.subtitle`)}</p>
                    <p className="accordion-body">{t(`project_data.${index}.body`)}</p>
                  </div>
                  <div className="accordion-links">
                    {item.link && (
                      <a className="link-arrow" href={item.link} target="_blank">{t(`projects_view`)} →</a>
                    )}
                    {item.github && (
                      <a className="link-arrow" href={item.github} target="_blank">{t(`projects_github`)} →</a>
                    )}
                  </div>
                </div>
                <img
                  src={item.thumbnail}
                  className="project-thumb"
                />
            </div>
          </div>
        );
      })}
      </div>
      <div className="space-y-3">
        <a className="link-arrow" href="https://github.com/a-shchebelskyy/" target="_blank">
          <p>{t("projects_more")} →</p>
        </a>
      </div>
    </main>
  )
}

export default Projects;
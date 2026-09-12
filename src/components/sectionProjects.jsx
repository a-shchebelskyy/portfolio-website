import React, { useState } from 'react';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';
import languaScreenshot from './../../public/images/screenshots/langua.png';
import vectorScreenshot from './../../public/images/screenshots/vector.png';
import mioScreenshot from './../../public/images/screenshots/mio.png';
import peakScreenshot from './../../public/images/screenshots/peak.png';

const projectsData = [
  {
    thumbnail: languaScreenshot,
    link: 'https://lang-ua.vercel.app/',
    github: 'https://github.com/a-shchebelskyy/langua-webapp',
  },
  {
    thumbnail: vectorScreenshot,
    link: 'https://e-lab-beta.vercel.app',
    github: 'https://github.com/a-shchebelskyy/e-lab',
  },
  {
    thumbnail: mioScreenshot,
    github: 'https://lang-ua.vercel.app/',
  },
  {
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
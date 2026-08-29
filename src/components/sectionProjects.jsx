import React, { useState } from 'react';
import Modal from './modal';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';
import languaScreenshot from './../../public/images/screenshots/langua.png';
import vectorScreenshot from './../../public/images/screenshots/vector.png';
import mioScreenshot from './../../public/images/screenshots/mio.jpeg';
import peakScreenshot from './../../public/images/screenshots/peak.png';

const projectsData = [
  {
    title: 'Langua',
    subtitle: 'Language Tutoring Platform',
    thumbnail: languaScreenshot,
    link: 'https://lang-ua.vercel.app/',
  },
  {
    title: 'Vector E-Lab',
    subtitle: 'Interactive Chemistry Tool',
    thumbnail: vectorScreenshot,
    link: 'https://e-lab-beta.vercel.app',
  },
  {
    title: 'MIO Connect',
    subtitle: 'Prosthetic Configuration Software',
    thumbnail: mioScreenshot,
    link: 'https://lang-ua.vercel.app/',
  },
  {
    title: 'Peak Fitness',
    subtitle: 'Community Fitness Application',
    thumbnail: peakScreenshot,
    link: 'https://github.com/a-shchebelskyy/Peak-Fitness',
  },
];

const Projects = () => {

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const changeLanguage = (lng) => {
  //   t.changeLanguage(lng);
  // };

  return (
    <main className="main" id="projects">
      <h2 className='subtitle'>
        {t("projects")}
      </h2>
      <div className="projects-row">
        {projectsData.map(( project, index ) => (
          <a className="project-card" href={project.link} target="_blank">
            <img src={project.thumbnail} className="project-thumb" />
            <p className="project-title">{t("project_data." + index + ".title")}</p>
            <p className="project-subtitle">{t("project_data." + index + ".subtitle")}</p>
          </a>
        ))}
      </div>
      <div className="space-y-3">
        <a className="link-arrow" href="https://github.com/a-shchebelskyy/" target="_blank">
          <p>{t("projects_more")} →</p>
        </a>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Langua"
        subtitle="Language Tutoring Platform"
        p1="A full-stack platform designed to connect language learners with structured educational content and instructors."
        p2="I designed and developed the application architecture, user experience, authentication, database layer, and dynamic course system."

      >
        {/* Footer Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="link-arrow"
          >
            View Project →
          </button>
        </div>
      </Modal>
    </main>
  )
}

export default Projects;
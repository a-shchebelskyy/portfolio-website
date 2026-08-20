import React from 'react';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';

const Projects = () => {

  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   t.changeLanguage(lng);
  // };

  return (
    <main className="main" id="projects">
      <h2 className='subtitle'>
        {t("projects")}
      </h2>
      <h3>Selected Work</h3>
      <p>A selection of applications and technical projects I've designed and built across web, mobile, SaaS, and specialized software.</p>
      <div className="projects-row">
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
      </div>
      <h3>More Projects</h3>
      <div className="space-y-3">
        <p>I regularly experiment with new ideas, technologies, and software concepts. My GitHub contains additional projects, prototypes, experiments, and technical explorations.</p>
        <a className="link-arrow" href="https://github.com/a-shchebelskyy/" target="_blank">
          <p>View GitHub</p><p>→</p>
        </a>
      </div>
    </main>
  )
}

export default Projects;
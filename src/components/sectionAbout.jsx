import React from 'react';
import '../index.css'; // Make sure to import your CSS file
import { useTranslation } from 'react-i18next';

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
      <p>ldskjfklsjdfksf
        sdklfjsdkljfksdf
        sdfjhsjkdhfjsdf
      </p>
      
    </section>
  )
}

export default About;
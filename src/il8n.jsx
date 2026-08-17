// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

// i18n
//   .use(Backend) // loads translations from your public/locales folder
//   .use(LanguageDetector) // detect user language
//   .use(initReactI18next) // passes i18n instance to react-i18next
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false // react already safes from xss
//     },
//     backend: {
//       loadPath: '/loc/{{lng}}.json', // path to your JSON files
//     }
//   });

// export default i18n;

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  returnObjects: true,
  fallbackLng: "en", // Language to fallback to if the selected is not configured
  debug: true, //To enable us see errors
  //   lng: "en", //Default language as english
});
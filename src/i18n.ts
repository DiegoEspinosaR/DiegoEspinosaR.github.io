import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my portfolio",
          about: "About me",
          contact: "Contact",
          selectLanguage: "Which language do you prefer?",
          spanish: "Spanish",
          english: "English",
          nav: {
            about: "About me",
            skills: "Skills",
            modeling: "3D Modeling",
            animations: "Animations",
            video: "Video Editing",
            backend: "Backend APIs",
            contact: "Contact",
          },
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido a mi portafolio",
          about: "Sobre mí",
          contact: "Contacto",
          selectLanguage: "¿Qué idioma prefieres?",
          spanish: "Español",
          english: "Inglés",
          nav: {
            about: "Sobre mí",
            skills: "Habilidades",
            modeling: "Modelado 3D",
            animations: "Animaciones",
            video: "Edición de video",
            backend: "APIs Backend",
            contact: "Contacto",
          },
        },
      },
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

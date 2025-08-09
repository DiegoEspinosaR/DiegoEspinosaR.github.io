import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // detecta idioma del navegador si no hay uno guardado
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
        },
      },
    },
    fallbackLng: 'es', // idioma por defecto
    interpolation: {
      escapeValue: false, // react ya protege de XSS
    },
    detection: {
      order: ['localStorage', 'navigator'], // primero revisa localStorage
      caches: ['localStorage'], // guarda la elección
    },
  });

export default i18n;
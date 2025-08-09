import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Detecta el idioma actual (es o en)
  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

  // Función para alternar el idioma
  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
      aria-label="Cambiar idioma"
    >
      {currentLang === 'es' ? 'Español' : 'English'}
    </button>
  );
}

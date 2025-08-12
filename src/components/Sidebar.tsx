import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { to: "sobremi", label: t("nav.about") },
    { to: "habilidades", label: t("nav.skills") },
    { to: "modelado", label: t("nav.modeling") },
    { to: "animaciones", label: t("nav.animations") },
    { to: "video", label: t("nav.video") },
    { to: "backend", label: t("nav.backend") },
    { to: "contacto", label: t("nav.contact") },
  ];

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 h-full w-56 flex flex-col shadow-lg z-50">
      {/* Avatar / Logo */}
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <a target="_blank" rel="noopener noreferrer">
          <img
            src=""
            alt="CV"
            className="w-12 h-12 rounded-full hover:ring-2 hover:ring-indigo-400 transition"
          />
        </a>
      </div>

      {/* Links (Desktop) */}
      <div className="hidden md:flex flex-col flex-1 p-4">
        <div className="flex flex-col space-y-4 justify-center flex-grow">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-50}
              containerId="main-container"
              className="cursor-pointer hover:text-indigo-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Móvil: Botón */}
      <div className="md:hidden p-4 border-t border-gray-700 flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* LanguageSwitcher visible en móvil */}
        <div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Móvil: Menú desplegable */}
      {isOpen && (
        <div className="flex flex-col p-4 space-y-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setIsOpen(false)}
              containerId="main-container"
              className="cursor-pointer hover:text-indigo-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
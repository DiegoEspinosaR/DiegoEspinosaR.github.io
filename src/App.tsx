import { useEffect, useState } from "react";

import LanguageSelectorModal from "./components/LanguageSelectorModal";
import FakeCookiesModal from "./components/FakeCookiesModal";

import Sidebar from "./components/Sidebar";
import SobreMi from "./sections/SobreMi";
import Habilidades from "./sections/Habilidades";
import Modelado3D from "./sections/Modelado3D";
import Animaciones from "./sections/Animaciones";
import EdicionVideo from "./sections/EdicionVideo";
import BackendAPIs from "./sections/BackendAPIs";
import Contacto from "./sections/Contacto";

export default function App() {
  const [bgColor, setBgColor] = useState("rgb(243, 244, 246)");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageSelect = (lang: string) => {
    console.log(`Idioma seleccionado: ${lang}`);
    setSelectedLanguage(lang);
  };

  useEffect(() => {
    const mainContainer = document.getElementById("main-container");

    if (!mainContainer) return;

    const handleScroll = () => {
      const scrollTop = mainContainer.scrollTop;
      const scrollHeight = mainContainer.scrollHeight - mainContainer.clientHeight;
      const scrollFraction = scrollTop / scrollHeight;

      const startColor = [243, 244, 246];
      const endColor = [107, 114, 128];

      const newColor = startColor.map((start, i) =>
        Math.round(start + (endColor[i] - start) * scrollFraction)
      );

      setBgColor(`rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`);
    };

    mainContainer.addEventListener("scroll", handleScroll);
    return () => mainContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main
          id="main-container"
          className="flex-1 h-screen overflow-y-auto px-4 py-8 space-y-24 scroll-smooth"
          style={{ backgroundColor: bgColor, transition: "background-color 0.1s linear" }}
        >
          <section id="sobremi"><SobreMi /></section>
          <section id="habilidades"><Habilidades /></section>
          <section id="modelado"><Modelado3D /></section>
          <section id="animaciones"><Animaciones /></section>
          <section id="video"><EdicionVideo /></section>
          <section id="backend"><BackendAPIs /></section>
          <section id="contacto"><Contacto /></section>
        </main>
      </div>

      {!selectedLanguage && (
        <LanguageSelectorModal onSelect={handleLanguageSelect} />
      )}
      <FakeCookiesModal />
    </>
  );
}

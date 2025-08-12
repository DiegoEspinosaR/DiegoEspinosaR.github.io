import { useState, useEffect } from "react";

type Props = {
  onSelect: (lang: string) => void;
};

export default function LanguageSelectorModal({ onSelect }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  // Función para cerrar con animación
  const closeModal = (lang: string) => {
    setIsVisible(false);
    setTimeout(() => {
      onSelect(lang);
    }, 300); // 300ms duración de la animación
  };

  return (
    <div
      className={`fixed inset-0 bg-black/80 flex flex-col justify-center items-center text-white z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-modal="true"
      role="dialog"
    >
      <h1 className="text-3xl mb-2">¿Qué idioma prefieres?</h1>
      <h2 className="text-xl mb-6">Which language do you prefer?</h2>

      <div className="flex gap-4">
        <button
          onClick={() => closeModal("es")}
          className="px-4 py-2 bg-indigo-800 hover:bg-indigo-900 rounded text-white font-semibold transition"
        >
          Español
        </button>
        <button
          onClick={() => closeModal("en")}
          className="px-4 py-2 bg-indigo-800 hover:bg-indigo-900 rounded text-white font-semibold transition"
        >
          English
        </button>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";

export default function FullScreenModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const yaLoVio = localStorage.getItem("dndModalVisto");
    if (!yaLoVio) {
      setVisible(true);
    }
  }, []);

  const cerrarModal = () => {
    setVisible(false);
    localStorage.setItem("dndModalVisto", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 text-white z-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-gray-800 rounded-lg p-6 shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">¡Bienvenido, aventurero!</h1>
        <p className="mb-4">
          Esta página fue hecha para los jugadores en mi mesa de D&D.  
          Les prometí un tablero de misiones, y aquí está.  
          También la estoy usando para practicar diseño en frontend y como parte de mi portafolio.
        </p>
        <button
          onClick={cerrarModal}
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded transition"
        >
          Explorar
        </button>
      </div>
    </div>
  );
}

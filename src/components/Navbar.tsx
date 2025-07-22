import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Botones: Desktop visible */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-indigo-400 transition">Inicio</Link>
          <Link to="/hero" className="hover:text-indigo-400 transition">Tablero</Link>
          <Link to="/backend" className="hover:text-indigo-400 transition">Backend</Link>
          <Link to="/3d" className="hover:text-indigo-400 transition">3D</Link>
          <Link to="/video" className="hover:text-indigo-400 transition">Video</Link>
        </div>

        {/* Icono menú en móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Avatar (CV): Siempre visible */}
        <div className="ml-4">
          <a target="_blank" rel="noopener noreferrer">
            <img
              src=""
              alt="CV"
              className="w-9 h-9 rounded-full hover:ring-2 hover:ring-indigo-400 transition"
            />
          </a>
        </div>
      </div>

      {/* Menú móvil con líneas divisorias */}
      {isOpen && (
        <div className="flex flex-col mt-4 md:hidden divide-y divide-gray-600">
          <Link to="/" className="py-2 px-1 hover:text-indigo-400 transition">Inicio</Link>
          <Link to="/hero" className="py-2 px-1 hover:text-indigo-400 transition">Tablero</Link>
          <Link to="/backend" className="py-2 px-1 hover:text-indigo-400 transition">Backend</Link>
          <Link to="/3d" className="py-2 px-1 hover:text-indigo-400 transition">3D</Link>
          <Link to="/video" className="py-2 px-1 hover:text-indigo-400 transition">Video</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

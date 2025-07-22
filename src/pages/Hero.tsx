import { useState } from "react";
import { misiones } from "../data/misiones";
import MissionCard from "../components/MissionCard";
import FullScreenModal from "../components/FullScreenModal";

export default function Hero() {
  const [misiónActiva, setMisiónActiva] = useState(misiones[0]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    const seleccionada = misiones.find((m) => m.id === selectedId);
    if (seleccionada) setMisiónActiva(seleccionada);
  };

  return (
    <>
      <FullScreenModal />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-6 min-h-screen bg-gray-100 dark:bg-gray-950">
        
        {/* Dropdown móvil */}
        <div className="block md:hidden mb-4">
          <select
            onChange={handleSelectChange}
            value={misiónActiva.id}
            className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          >
            {misiones.map((m) => (
              <option key={m.id} value={m.id}>
                {m.titulo}
              </option>
            ))}
          </select>
        </div>

        {/* Listado desktop */}
        <div className="hidden md:block md:col-span-1 space-y-4 p-2 overflow-y-auto max-h-[calc(100vh-5rem)] pr-2">
          {misiones.map((m) => (
            <MissionCard
              key={m.id}
              titulo={m.titulo}
              publicadoPor={m.publicadoPor}
              onClick={() => setMisiónActiva(m)}
            />
          ))}
        </div>

        {/* Detalle */}
        <div className="md:col-span-2 bg-[url('/paper-texture.png')] bg-cover bg-center bg-no-repeat 
          p-6 rounded-md text-gray-100 shadow-inner flex flex-col 
          h-[calc(100vh-6rem)] overflow-y-auto border-2 border-yellow-800">

          <h2 className="text-3xl font-bold mb-4">{misiónActiva.titulo}</h2>
          <p className="text-indigo-300 mb-2 text-sm">
            Publicado por: {misiónActiva.publicadoPor}
          </p>
          <p className="mb-4 leading-relaxed text-gray-100">
            {misiónActiva.contenido}
          </p>
          <p className="font-semibold text-green-400 mt-auto">
            Recompensa: {misiónActiva.recompensa}
          </p>
        </div>
      </div>
    </>
  );
}

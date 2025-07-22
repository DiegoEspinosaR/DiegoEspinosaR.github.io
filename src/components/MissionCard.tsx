type MissionCardProps = {
  titulo: string;
  publicadoPor: string;
  onClick: () => void;
};

export default function MissionCard({ titulo, publicadoPor, onClick }: MissionCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600
                 p-4 rounded-md shadow-md hover:shadow-xl transition-all duration-150
                 hover:ring-2 hover:ring-indigo-500"
    >
        <h3 className="text-white font-bold tracking-wide" style={{ fontFamily: "var(--font-title)" }}>
        {titulo}
        </h3>
        <p className="text-indigo-300 text-sm">{publicadoPor}</p>
    </div>
  );
}

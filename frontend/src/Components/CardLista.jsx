// src/components/CardLista.jsx
export default function CardLista({ titulo, itens }) {
  return (
    <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
      <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
        {titulo}
      </div>
      <ul className="p-4 flex flex-col gap-2 text-[0.95rem] text-gray-800">
        {itens.map((item, index) => ( 
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
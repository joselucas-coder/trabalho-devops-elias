export default function Tabela({ titulo, colunas, dados }) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl">
      <div className="border border-[#d7d7d7] rounded-lg overflow-hidden bg-white">
        
        {titulo && (
          <div className="bg-[#f0f0f0] px-4 py-3 text-[1.1rem] font-bold text-gray-800">
            {titulo}
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#f0f0f0] border-b border-[#d7d7d7]">
                {colunas.map((coluna, index) => (
                  <th key={index} className="p-3 text-[0.95rem] font-bold text-gray-800 pl-4">
                    {coluna}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dados.map((linha, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
                  {Object.values(linha).map((valor, colIndex) => (
                    <td key={colIndex} className="p-3 text-sm text-gray-800 pl-4">
                      {valor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
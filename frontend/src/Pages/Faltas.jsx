import Header from '../components/Header';
import TextoDescritivo from '../components/TextoDescritivo';
import Tabela from '../components/Tabela';

export default function Faltas() {
  
  const colunasFaltas = ["Disciplina", "Total de Faltas", "% de Presença"];

  const faltas2026_1 = [
    { disciplina: "BI e Data Warehousing", faltas: "0", presenca: "100%" },
    { disciplina: "Construção de Frontend", faltas: "0", presenca: "100%" },
    { disciplina: "Manutenção de Software e Devops", faltas: "0", presenca: "100%" }
  ];

  const faltas2025_2 = [
    { disciplina: "Construção de Backend", faltas: "27", presenca: "87.5%" },
    { disciplina: "Estrutura de Dados", faltas: "9", presenca: "85%" },
    { disciplina: "Gerenciamento de Projetos", faltas: "10.5", presenca: "82.5%" }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        
        <Header titulo="Minhas Faltas" />

        <main>
          <TextoDescritivo texto="Histórico de Faltas por Semestre" />
          
          <div className="flex flex-col gap-6">
            <Tabela 
              titulo="2026.1" 
              colunas={colunasFaltas} 
              dados={faltas2026_1} 
            />
            
            <Tabela 
              titulo="2025.2" 
              colunas={colunasFaltas} 
              dados={faltas2025_2} 
            />
          </div>

        </main>
        
      </div>
    </div>
  );
}
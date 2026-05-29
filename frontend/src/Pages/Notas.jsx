import Header from '../components/Header';
import TextoDescritivo from '../components/TextoDescritivo';
import Tabela from '../components/Tabela'; 

export default function Notas() {
  
  const colunasNotas = ["Disciplina", "A1", "A2", "A3", "Menção"];

  const notas2026_1 = [
    { disciplina: "BI e Data Warehousing", a1: "-", a2: "-", a3: "-", mencao: "SR" },
    { disciplina: "Construção de FrontEnd", a1: "-", a2: "-", a3: "-", mencao: "SR" },
    { disciplina: "Manutenção de Software e Devops", a1: "-", a2: "-", a3: "-", mencao: "SR" }
  ];

  const notas2025_2 = [
    { disciplina: "Construção de Backend", a1: "5.4", a2: "6.2", a3: "-", mencao: "MM" },
    { disciplina: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "-", mencao: "MM" },
    { disciplina: "Gerenciamento de Projetos", a1: "7.4", a2: "7.1", a3: "-", mencao: "MS" }
  ];

  const notas2025_1 = [
    { disciplina: "Construção de Backend", a1: "5.4", a2: "6.2", a3: "-", mencao: "MM" },
    { disciplina: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "-", mencao: "MM" },
    { disciplina: "Gerenciamento de Projetos", a1: "7.4", a2: "8.5", a3: "-", mencao: "MS" }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
            
      <div className="flex flex-col flex-1 p-6 md:p-10">
        
        <Header titulo="Minhas Notas" />

        <main>
          <TextoDescritivo texto="Boletim Acadêmico" />
          
          <div className="flex flex-col gap-6">
            <Tabela 
              titulo="2026.1" 
              colunas={colunasNotas} 
              dados={notas2026_1} 
            />
            <Tabela 
              titulo="2025.2" 
              colunas={colunasNotas} 
              dados={notas2025_2} 
            />
            <Tabela 
              titulo="2025.1" 
              colunas={colunasNotas} 
              dados={notas2025_1} 
            />
          </div>

        </main>
        
      </div>
    </div>
  );
}
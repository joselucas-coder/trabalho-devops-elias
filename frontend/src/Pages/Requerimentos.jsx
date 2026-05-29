import Header from '../components/Header';
import TextoDescritivo from '../components/TextoDescritivo';
import Tabela from '../components/Tabela'; 

export default function Requerimentos() {
  
  const colunasRequerimentos = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];

  const dadosRequerimentos = [
    { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
    { tipo: "Dispensa de Disciplina", data: "12/06/2025", situacao: "Indeferido" },
    { tipo: "Trancamento de Matrícula", data: "05/01/2024", situacao: "Deferido" },
    { tipo: "Mudança de Turno", data: "10/10/2023", situacao: "Deferido" },
    { tipo: "Renovação de Matrícula", data: "20/02/2023", situacao: "Deferido"}
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
            
      <div className="flex flex-col flex-1 p-6 md:p-10">
        
        <Header titulo="Meus Requerimentos" />

        <main>
          <TextoDescritivo texto="Faça solicitações online para a secretaria" />  
          
          <Tabela colunas={colunasRequerimentos} dados={dadosRequerimentos} />
        </main>
        
      </div>
    </div>
  );
}
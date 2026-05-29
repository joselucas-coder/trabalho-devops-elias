import Header from '../components/Header';
import TextoDescritivo from '../components/TextoDescritivo';
import Tabela from '../components/Tabela';

export default function Boletos() {
  
  const colunasBoletos = ["Vencimento", "Valor R$", "Situação"];

  const dadosBoletos = [
    { vencimento: "19/01/2026", valor: "500,00", situacao: "Pago" },
    { vencimento: "19/02/2026", valor: "500,00", situacao: "Pago" },
    { vencimento: "19/03/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/04/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/05/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/06/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/07/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/08/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/09/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/10/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/11/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/12/2026", valor: "500,00", situacao: "A Pagar" },
    { vencimento: "19/01/2027", valor: "500,00", situacao: "A Pagar" }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FFFFFF] font-sans">
      
      
      <div className="flex flex-col flex-1 p-6 md:p-10">
        <Header titulo="Meus Boletos" />
        
        <main>
          <TextoDescritivo texto="Histórico de Pagamentos" />
          
          <Tabela colunas={colunasBoletos} dados={dadosBoletos} />
        </main>
        
      </div>
    </div>
  );
}
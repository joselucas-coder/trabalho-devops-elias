import { NavLink } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

export default function Sidebar() {

  const { logout } = useAuth();

  const navLinkClass = ({ isActive }) => {
    const classesBase = "flex items-center gap-2 px-4 py-2 rounded-md transition-colors font-medium ";

    return isActive 
      ? classesBase + "bg-black text-white" 
      : classesBase + "text-gray-700 hover:bg-[#d1d1d1] hover:text-gray-900";
  };

  return (
    <aside className="hidden md:flex flex-col gap-6 w-[250px] bg-[#E9E9E9] border-r border-gray-300 p-5 h-screen sticky top-0">      
      <header className="flex flex items-center gap-2 border-b border-gray-300 pb-4">
        <img src="/learn.svg" alt="Logo Aluno Online" className="w-16 h-16 rounded" />
       <span className="text-xl font-bold text-gray-800">Aluno Online</span>
      </header>
      
      <nav className="flex-1">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/faltas" className={navLinkClass}>
              Faltas
            </NavLink>
          </li>
          <li>
            <NavLink to="/notas" className={navLinkClass}>
              Notas
            </NavLink>
          </li>
          <li>
            <NavLink to="/boletos" className={navLinkClass}>
              Boletos
            </NavLink>
          </li>
          <li>
            <NavLink to="/requerimentos" className={navLinkClass}>
              Requerimentos
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-300">
        <button 
          onClick={logout} 
          className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 transition-colors font-medium rounded-md"
        >
          Sair
        </button>
      </div>
      
    </aside>
  );
}
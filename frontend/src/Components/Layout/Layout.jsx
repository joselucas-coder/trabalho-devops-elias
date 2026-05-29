import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
          <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/user-layout/Sidebar";
import TopBar from "../../components/user-layout/TopBar";
import { hasRole } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


function UserDashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar toggleSidebar={toggleSidebar} />
        <main className="p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
export default UserDashboardLayout;

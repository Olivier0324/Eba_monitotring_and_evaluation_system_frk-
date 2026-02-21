import { NavLink } from "react-router-dom";
import {  User, Settings, ShieldCheck, X, LayoutDashboard } from "lucide-react";

function SideBar({ isOpen, toggleSidebar }) {
  const navItems = [
    { to: ".", label: "Dashboard", icon: LayoutDashboard },
    { to: "profile", label: "Profile", icon: User },
    { to: "settings", label: "Settings", icon: Settings },
    { to: "admin", label: "Admin Panel", icon: ShieldCheck },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-gray-100 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:translate-x-0 border-r border-gray-700`}
    >
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-bold tracking-tight">MYAPP</h2>
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="mt-4 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
                to={item.to}
                end={item.to === "."} // Only apply 'end' for the root dashboard link
            onClick={() => window.innerWidth < 768 && toggleSidebar()} // Close on mobile click
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                  : "text-gray-400 hover:bg-gray-800 hover:text-gray-100"
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
export default SideBar;

import { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, User, LogOut, ChevronDown } from "lucide-react";
import { logout} from "../../slices/authReducer";
import {useNavigate} from "react-router-dom";

function TopBar({ toggleSidebar }) {
  const { user } = useSelector((state) => state.auth);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

   const handleLogout = () => {
     logout(); // Clear auth state
     navigate("/login"); // Redirect to login page
   };

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-6 sticky top-0 z-40">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 text-gray-400 hover:bg-gray-800 rounded-lg"
      >
        <Menu size={24} />
      </button>

      <div className="hidden md:block">
        <h1 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          Workspace / Dashboard
        </h1>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-3 p-1.5 hover:bg-gray-800 rounded-full transition-colors"
        >
          <img
            src={user?.profilePicture || "/default-avatar.png"}
            alt="avatar"
            className="w-8 h-8 rounded-full border border-gray-600"
          />
          <span className="hidden sm:inline text-sm font-medium text-gray-200">
            {user?.name}
          </span>
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-700 mb-1">
              <p className="text-xs text-gray-500">Signed in as</p>
              <p className="text-sm font-medium text-gray-200 truncate">
                {user?.email}
              </p>
            </div>
            <button className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors" onClick={() =>{navigate("profile")}}>
              <User size={16} className="mr-3" /> Profile
            </button>
            <button className="w-full flex items-center px-4 py-2 text-sm text-red-400 hover:bg-red-900/20 transition-colors" onClick={handleLogout}>
              <LogOut size={16} className="mr-3" /> Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
export default TopBar;

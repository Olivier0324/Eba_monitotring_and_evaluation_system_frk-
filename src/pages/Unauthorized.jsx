import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authReducer";
import { ShieldAlert, Mail, LogOut, ArrowLeft } from "lucide-react";

function Unauthorized() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Professional email link with default subject and body
  const adminEmail = "cyuzuzokwizeraolivier2@gmail.com";
  const emailSubject = "Account Restriction Inquiry";
  const emailBody = `Hello Administrator,%0D%0A%0D%0AMy account is currently showing as restricted. Could you please help me restore access?%0D%0A%0D%0AAccount Email: ${user?.email || "Not logged in"}`;
  
  const mailToLink = `mailto:${adminEmail}?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg">
            <ShieldAlert size={28} />
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Account Restricted
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-2xl sm:px-10">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              We noticed your account is currently{" "}
              <span className="text-red-600 font-semibold underline decoration-red-200 underline-offset-4">
                inactive
              </span>
              . To protect our community, restricted accounts cannot access the
              dashboard.
            </p>

            <div className="space-y-4">
              {/* Updated Contact Action */}
              <a
                href={mailToLink}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Administrator
              </a>

              {/* Secondary Action: Logout */}
              <button
                onClick={handleLogout}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                <LogOut className="mr-2 h-5 w-5 text-gray-400" />
                Sign Out
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <button
                onClick={() => navigate("/")}
                className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center justify-center gap-1 mx-auto"
              >
                <ArrowLeft size={16} />
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
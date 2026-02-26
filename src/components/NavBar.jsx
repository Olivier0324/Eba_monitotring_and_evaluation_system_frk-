import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X, ShoppingCart, User, ChevronRight } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  // Assuming you have a cart slice, otherwise use a dummy number like 0
  const cartCount = useSelector((state) => state.cart?.items?.length || 0);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              MYAPP
            </span>
          </Link>

          {/* 2. DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* 3. RIGHT SIDE ACTIONS (Cart & Auth) */}
          <div className="flex items-center space-x-5">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-all"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth Logic: Show Dashboard if logged in, else Login */}
            <div className="hidden md:block">
              {user ? (
                <Link
                  to="/user-dashboard"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  <User size={16} />
                  Dashboard
                </Link>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE DRAWER */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        <div className="absolute right-0 top-0 h-full w-3/4 bg-white shadow-2xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 border-b border-gray-50 text-gray-700 font-medium"
              >
                {link.label}{" "}
                <ChevronRight size={16} className="text-gray-300" />
              </NavLink>
            ))}

            <div className="pt-6 space-y-4">
              {user ? (
                <Link
                  to="/user-dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-bold"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center text-gray-700 py-3 font-bold border border-gray-200 rounded-xl"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-100"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

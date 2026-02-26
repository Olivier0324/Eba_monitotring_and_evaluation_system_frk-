import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* 1. BRAND SECTION */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                L
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                MYAPP
              </span>
            </Link>
            <p className="text-gray-400 text-base max-w-xs">
              Making your workflow seamless with our high-end dashboard and
              professional tools. Build your future with us.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* 2. LINKS SECTION */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/analytics"
                      className="text-base hover:text-blue-500 transition-colors"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/marketing"
                      className="text-base hover:text-blue-500 transition-colors"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/commerce"
                      className="text-base hover:text-blue-500 transition-colors"
                    >
                      Commerce
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/pricing"
                      className="text-base hover:text-blue-500 transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/documentation"
                      className="text-base hover:text-blue-500 transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/guides"
                      className="text-base hover:text-blue-500 transition-colors"
                    >
                      Guides
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. CONTACT SECTION */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Contact Us
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue-500 shrink-0" />
                    <span className="text-sm text-gray-400">
                      123 Tech Street, Kigali, Rwanda
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-blue-500 shrink-0" />
                    <span className="text-sm text-gray-400">
                      +250 788 000 000
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-500 shrink-0" />
                    <span className="text-sm text-gray-400">
                      info@myapp.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} MYAPP Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-gray-900 h-[80vh] flex items-center overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-600/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            New Season Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Elevate Your Style <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
              Without Limits.
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
            Experience the fusion of high-end design and professional quality.
            Shop the latest arrivals and featured picks of the week.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20"
            >
              <ShoppingBag size={20} /> Shop Collection
            </Link>
            <Link
              to="/about"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;

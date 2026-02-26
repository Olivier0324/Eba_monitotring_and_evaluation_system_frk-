
import { Star } from "lucide-react";
function Testimonials() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-center gap-1 text-yellow-400 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 italic mb-8">
          "The quality of the products and the speed of delivery exceeded all my
          expectations. My new favorite store!"
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-white shadow-md"></div>
          <div className="text-left">
            <p className="font-bold text-gray-900">Sarah Jenkins</p>
            <p className="text-sm text-gray-500">Verified Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;

import { Laptop, Smartphone, Watch, Headphones } from "lucide-react";

function Categories() {
  const cats = [
    { name: "Laptops", icon: <Laptop />, count: "120+ Items" },
    { name: "Phones", icon: <Smartphone />, count: "85 Items" },
    { name: "Watches", icon: <Watch />, count: "40 Items" },
    { name: "Audio", icon: <Headphones />, count: "60 Items" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cats.map((cat, i) => (
            <div key={i} className="group cursor-pointer text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-900">{cat.name}</h3>
              <p className="text-xs text-gray-400">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Categories;

import { Star, Flame, ShoppingBag} from "lucide-react";

function ProductGrid({ title, products, badgeType }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
            <div className="h-1 w-12 bg-blue-600 mt-2"></div>
          </div>
          <button className="text-blue-600 font-bold text-sm hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-3xl p-4 border border-gray-100 hover:shadow-2xl transition-all group relative"
            >
              {/* Badges */}
              <div className="absolute top-6 left-6 z-10">
                {badgeType === "featured" ? (
                  <span className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> FEATURED
                  </span>
                ) : (
                  <span className="bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-lg flex items-center gap-1">
                    <Flame size={10} fill="currentColor" /> NEW
                  </span>
                )}
              </div>

              <div className="aspect-square bg-gray-50 rounded-2xl mb-4 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="font-bold text-gray-900 truncate">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{product.category}</p>

              <div className="flex justify-between items-center">
                <span className="text-xl font-black text-gray-900">
                  ${product.price}
                </span>
                <button className="bg-gray-900 text-white p-2 rounded-xl hover:bg-blue-600 transition-colors">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
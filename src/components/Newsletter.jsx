function Newsletter() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Stay in the loop
          </h2>
          <p className="text-blue-100 mb-10 max-w-md mx-auto">
            Get 10% off your first order and stay updated with new drops.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 outline-none focus:ring-4 focus:ring-blue-400/30 transition-all"
            />
            <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Newsletter;
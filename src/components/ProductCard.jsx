const ProductCard = ({ name, price, image }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
    <div className="h-48 bg-gray-100 flex items-center justify-center">
      {/* If no image, it shows a placeholder */}
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-pink-600 font-bold mt-1">₹{price}</p>
      <button className="w-full mt-4 py-2 border-2 border-pink-500 text-pink-500 font-bold rounded-lg hover:bg-pink-500 hover:text-white transition">
        ADD TO CART
      </button>
    </div>
  </div>
);
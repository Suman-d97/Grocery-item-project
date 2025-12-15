"use client";

import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cartSlice";
import { groceryItems } from "@/data/groceryItems";

export default function GroceryList() {
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Fresh Products</h2>
        <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full cursor-pointer hover:bg-emerald-100 transition-colors">View All</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 p-4 border border-gray-100/50 relative overflow-hidden flex flex-col"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Category Tag */}
            <div className="absolute top-6 left-6 z-10">
              <span className="backdrop-blur-md bg-white/70 text-gray-600 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border border-white/50 shadow-sm">
                {item.category}
              </span>
            </div>

            {/* Product Image */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-gray-50 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-emerald-700 transition-colors">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
              </div>

              <p className="text-xs text-gray-400 mb-6 line-clamp-2">Premium quality fresh produce sourced directly from local farmers.</p>

              <button
                onClick={() => dispatch(addItem(item))}
                className="mt-auto w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 active:scale-95 transition-all duration-300 shadow-lg shadow-gray-200 group-hover:shadow-emerald-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

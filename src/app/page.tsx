"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { hydrateCart } from "@/redux/slices/cartSlice";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroceryList from "@/components/GroceryList";

export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          dispatch(hydrateCart(parsed));
        }
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, [dispatch]);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">

        {/* Premium Hero Section */}
        <div className="relative bg-gray-900 text-white overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop"
              alt="Grocery Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-6">
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Freshness Guaranteed</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Quality Food <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Delivered Fresh</span>
            </h1>
            <p className="text-gray-300 max-w-2xl text-lg md:text-xl">
              Experience the finest selection of farm-fresh produce, organic dairy, and premium essentials delivered right to your doorstep.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => {
                  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/30">
                Shop Now
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                View Deals
              </button>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div id="shop" className="max-w-7xl mx-auto px-6 py-16">
          <GroceryList />
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

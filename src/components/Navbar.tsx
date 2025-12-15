"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

export default function Navbar() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-gradient-to-tr from-green-500 to-emerald-600 p-2 rounded-xl text-white shadow-lg shadow-green-200 group-hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 tracking-tight">
              Fresh<span className="text-emerald-600">Market</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">Premium Quality</p>
          </div>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-emerald-600 cursor-pointer transition-colors duration-200">Home</Link>
          <span className="hover:text-emerald-600 cursor-pointer transition-colors duration-200">Categories</span>
          <span className="hover:text-emerald-600 cursor-pointer transition-colors duration-200">Deals</span>
          <span className="hover:text-emerald-600 cursor-pointer transition-colors duration-200">Recipes</span>
        </div>

        {/* Cart Icon */}
        <Link href="/cart">
          <div className="relative group cursor-pointer">
            <div className="p-3 bg-gray-50 rounded-full group-hover:bg-emerald-50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700 group-hover:text-emerald-600 transition-colors"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-md border-2 border-white animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}

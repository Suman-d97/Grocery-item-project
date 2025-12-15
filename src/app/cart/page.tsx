"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addItem, removeItem, deleteItemCompletely } from "@/redux/slices/cartSlice";
import CartSummary from "@/components/CartSummary";
import CouponBox from "@/components/CouponBox";
import UndoButton from "@/components/UndoButton";
import Link from "next/link";

export default function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.cart);

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6 px-6">
                <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-6xl">🛒</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Your cart is empty</h2>
                <p className="text-gray-500 max-w-md text-center">
                    Looks like you haven't added anything to your cart yet.
                    Explore our fresh produce and premium items.
                </p>
                <Link
                    href="/"
                    className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-emerald-200"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Cart Items Table/List */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-gray-50/50 border-b border-gray-100 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-2 text-center">Price</div>
                                <div className="col-span-2 text-center">Quantity</div>
                                <div className="col-span-2 text-center">Total</div>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {cart.map((item) => (
                                    <div key={item.id} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-gray-50/30 transition-colors">
                                        <div className="col-span-1 md:col-span-6 flex items-center gap-6">
                                            <div className="h-24 w-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-emerald-600 font-bold uppercase mb-1">{item.category}</p>
                                                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                                                <button
                                                    onClick={() => dispatch(deleteItemCompletely(item.id))}
                                                    className="text-xs text-rose-500 hover:underline flex items-center gap-1 mt-1"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-span-1 md:col-span-2 text-center font-medium text-gray-600">
                                            ₹{item.price}
                                        </div>

                                        <div className="col-span-1 md:col-span-2 flex justify-center">
                                            <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-1.5">
                                                <button
                                                    onClick={() => dispatch(removeItem(item.id))}
                                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-600 hover:text-rose-500 transition-colors font-bold"
                                                >
                                                    -
                                                </button>
                                                <span className="font-bold text-gray-900 w-6 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => dispatch(addItem(item))}
                                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-600 hover:text-emerald-500 transition-colors font-bold"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-span-1 md:col-span-2 text-center font-bold text-gray-900 text-lg">
                                            ₹{item.price * item.quantity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                                Continue Shopping
                            </Link>
                            <UndoButton />
                        </div>
                    </div>

                    {/* Sidebar Summary */}
                    <div className="lg:col-span-4 space-y-6">
                        <CartSummary />
                        <CouponBox />
                    </div>
                </div>
            </div>
        </div>
    );
}

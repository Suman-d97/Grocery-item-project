"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItem, addItem, clearCart, deleteItemCompletely } from "@/redux/slices/cartSlice";

export default function CartSummary() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const coupon = useSelector((state: RootState) => state.cart.coupon);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = coupon === "DISCOUNT10" ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  if (cart.length === 0) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🧺</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 text-sm">Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-3xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-gray-100/50 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-lg">{cart.length} Items</span>
      </div>

      {/* Items List */}
      <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 group">
            <div className="h-16 w-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
              <p className="text-xs text-gray-500">₹{item.price} each</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-rose-500 transition-colors text-xs font-bold"
              >
                -
              </button>
              <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
              <button
                onClick={() => dispatch(addItem(item))}
                className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-emerald-500 transition-colors text-xs font-bold"
              >
                +
              </button>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => dispatch(deleteItemCompletely(item.id))}
              className="text-gray-300 hover:text-rose-500 transition-colors"
              title="Remove Item"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        ))}
      </div>

      {/* Summary Details */}
      <div className="border-t border-dashed border-gray-200 pt-4 space-y-2 mb-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm text-emerald-600">
            <span>Discount (10%)</span>
            <span>- ₹{discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-600 active:scale-95 transition-all shadow-lg hover:shadow-emerald-200">
        Checkout
      </button>

      {/* Clear Cart */}
      <button
        onClick={() => dispatch(clearCart())}
        className="w-full mt-3 text-xs text-center text-gray-400 hover:text-rose-500 transition-colors"
      >
        Clear Cart
      </button>
    </div>
  );
}

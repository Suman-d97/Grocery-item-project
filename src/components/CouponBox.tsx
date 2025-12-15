"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";

export default function CouponBox() {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const currentCoupon = useSelector((state: RootState) => state.cart.coupon);

  const handleApply = () => {
    if (code.trim() === "DISCOUNT10") {
      dispatch(applyCoupon("DISCOUNT10"));
    } else {
      alert("Invalid coupon code! Try 'DISCOUNT10'");
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-gray-100/50">
      <h3 className="text-sm font-bold text-gray-800 mb-3">Have a coupon?</h3>

      {currentCoupon ? (
        <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-3 rounded-xl flex items-center justify-between">
          <span className="text-sm font-medium">Applied: <b>{currentCoupon}</b></span>
          <button
            onClick={() => dispatch(applyCoupon(""))}
            className="text-xs font-bold hover:text-emerald-900"
          >
            REMOVE
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code"
            className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none px-4"
          />
          <button
            onClick={handleApply}
            className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-600 transition-colors"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}

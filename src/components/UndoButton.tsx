"use client";

import { useDispatch, useSelector } from "react-redux";
import { undo } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";

export default function UndoButton() {
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.cart.history);

  if (history.length === 0) return null;

  return (
    <button
      onClick={() => dispatch(undo())}
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 py-3 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium shadow-sm hover:shadow-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5" /><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" /></svg>
      Undo Last Action
    </button>
  );
}

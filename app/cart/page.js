"use client";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => window.history.back()}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div>
          <div className="sticky top-20">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

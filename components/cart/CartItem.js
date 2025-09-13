"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-20 h-20">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-medium text-gray-900 dark:text-gray-100">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="w-12 text-center font-medium text-gray-900 dark:text-gray-100">
          {item.quantity}
        </span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <p className="w-24 text-right font-medium text-gray-900 dark:text-gray-100">
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
          aria-label="Remove from cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

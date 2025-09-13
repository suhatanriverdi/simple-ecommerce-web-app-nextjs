"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const { items, total, checkout } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleCheckout = async () => {
    setIsProcessing(true);
    setError("");

    try {
      await checkout();
      router.push("/profile");
    } catch (err) {
      if (err.message === "Login required") {
        // Save current cart state and redirect to login
        localStorage.setItem("checkoutPending", "true");
        router.push("/login");
        return;
      }
      setError(err.message || "Failed to process checkout");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Order Summary
      </h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Items ({items.length})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t dark:border-gray-700 pt-3 font-semibold flex justify-between text-gray-900 dark:text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm rounded-lg">
          {error}
        </div>
      )}

      <button
        onClick={handleCheckout}
        disabled={isProcessing || items.length === 0}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {isProcessing ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
}

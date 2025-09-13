// app/products/ProductCard.js
"use client";

import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "@/components/wishlist/AddToWishlistButton";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square bg-gray-50 dark:bg-gray-900">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-4">
          <h3 className="font-medium text-gray-900 dark:text-gray-100 line-clamp-2 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </p>
            <span className="text-sm text-green-600 dark:text-green-400">
              In Stock
            </span>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4 mt-2">
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`py-2 px-4 rounded-lg font-medium transition-all duration-200 flex-1 bg-primary-500 hover:bg-primary-600 text-white transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-600 ${
              isAdding
                ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                : "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800"
            }`}
          >
            {isAdding ? "Added!" : "Add to Cart"}
          </button>
          <AddToWishlistButton product={product} />
        </div>
      </div>
    </div>
  );
}

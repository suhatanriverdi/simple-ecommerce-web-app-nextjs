"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import AddToWishlistButton from "../wishlist/AddToWishlistButton";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
  };

  if (!product) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8 p-4">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border rounded-lg overflow-hidden">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-1 hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-12 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            {addedToCart ? "Added to Cart!" : "Add to Cart"}
          </button>
        </div>

        <div className="pt-4">
          <AddToWishlistButton product={product} />
        </div>

        <div className="border-t pt-4 mt-6">
          <h2 className="font-semibold mb-2">Product Details</h2>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}

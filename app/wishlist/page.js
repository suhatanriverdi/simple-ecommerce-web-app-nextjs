"use client";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (!wishlist.length) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Your Wishlist is Empty</h1>
        <Link href="/products" className="text-blue-500 underline">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {wishlist.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 flex flex-col justify-between"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-cover mb-4 rounded"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => removeFromWishlist(product.id)}
            className="mt-4 px-3 py-2 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

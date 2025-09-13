"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function AddToWishlistButton({ product }) {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const { isAuthenticated } = useAuth(); // isAuthenticated check
  const router = useRouter();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleClick = () => {
    // Redirect to the login if not authenticated
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        p-2 rounded-full transition-all duration-200 
        ${
          isInWishlist
            ? "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-800/50"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        }
      `}
      aria-label={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isInWishlist ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
}

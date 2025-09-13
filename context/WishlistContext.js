"use client";
import { createContext, useContext, useEffect, useState } from "react";
import userService from "@/services/userService";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setWishlist([]);
        return;
      }

      try {
        const dbUser = await userService.getUserById(user.id);
        setWishlist(dbUser.wishlist || []);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
        setWishlist([]);
      }
    };

    fetchWishlist();
  }, [user]);

  const addToWishlist = async (product) => {
    if (!user) {
      router.push("/login");
      return;
    }

    try {
      const updatedWishlist = [...wishlist, product];
      await userService.updateUser(user.id, { wishlist: updatedWishlist });
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
      throw new Error("Failed to add to wishlist. Please try again.");
    }
  };

  const removeFromWishlist = async (productId) => {
    if (!user) {
      router.push("/login");
      return;
    }

    try {
      const updatedWishlist = wishlist.filter((p) => p.id !== productId);
      await userService.updateUser(user.id, { wishlist: updatedWishlist });
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error("Failed to remove from wishlist:", error);
      throw new Error("Failed to remove from wishlist. Please try again.");
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);

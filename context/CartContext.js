"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";
import { orderService } from "@/services/orderService";
export const CartContext = createContext();

const initialState = {
  items: [],
  total: 0,
};

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function reducer(state, action) {
  let newState;

  switch (action.type) {
    case "INIT": {
      const items = action.payload || [];
      return {
        items,
        total: calculateTotal(items),
      };
    }
    case "ADD": {
      const p = action.payload;
      const exists = state.items.find((i) => i.id === p.id);
      const items = exists
        ? state.items.map((i) =>
            i.id === p.id
              ? { ...i, quantity: i.quantity + (p.quantity || 1) }
              : i,
          )
        : [...state.items, { ...p, quantity: p.quantity || 1 }];

      return {
        items,
        total: calculateTotal(items),
      };
    }
    case "REMOVE": {
      const id = action.payload;
      const items = state.items.filter((i) => i.id !== id);
      return {
        items,
        total: calculateTotal(items),
      };
    }
    case "UPDATE_QTY": {
      const { id, quantity } = action.payload;
      if (quantity < 1) return state;

      const items = state.items.map((i) =>
        i.id === id ? { ...i, quantity } : i,
      );
      return {
        items,
        total: calculateTotal(items),
      };
    }
    case "CLEAR": {
      return {
        items: [],
        total: 0,
      };
    }
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth();
  const router = useRouter();

  // Init from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) {
        dispatch({ type: "INIT", payload: JSON.parse(raw) });
      }
    } catch (err) {
      console.error("Error loading cart from localStorage:", err);
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(state.items));
    } catch (err) {
      console.error("Error saving cart to localStorage:", err);
    }
  }, [state.items]);

  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: "ADD",
      payload: { ...product, quantity },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "REMOVE",
      payload: productId,
    });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: "UPDATE_QTY",
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const checkout = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    try {
      const orderData = {
        items: state.items,
        total: state.total,
      };

      await orderService.createOrder(orderData);
      clearCart();
      router.push("/profile");
    } catch (error) {
      console.error("Checkout error:", error);
      throw new Error("Failed to process checkout. Please try again.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkout,
        total: state.total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

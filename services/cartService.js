import api from "@/lib/utils";

export const updateCartItem = async (id, item) => {
  try {
    const res = await api.patch(`/cart/${id}`, item);
    await delay(Math.random() * 1500);
    return res.data;
  } catch (error) {
    throw new Error("Failed to update cart item: " + error.message);
  }
};

export const replaceCartItem = async (id, item) => {
  try {
    const res = await api.put(`/cart/${id}`, item);
    await delay(Math.random() * 1500);
    return res.data;
  } catch (error) {
    throw new Error("Failed to replace cart item: " + error.message);
  }
};

export const addCartItem = async (item) => {
  try {
    const res = await api.post("/cart", item);
    await delay(Math.random() * 1500);
    return res.data;
  } catch (error) {
    throw new Error("Failed to add cart item: " + error.message);
  }
};
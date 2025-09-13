import api, { delay } from "@/lib/utils";

export const createOrder = async (order) => {
  try {
    const res = await api.post("/orders", order);
    await delay(Math.random() * 1500); // simulate network delay
    return res.data;
  } catch (error) {
    throw new Error("Failed to create order: " + error.message);
  }
};

export const getOrders = async () => {
  try {
    const res = await api.get("/orders");
    await delay(Math.random() * 1500); // simulate network delay
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch orders: " + error.message);
  }
};
import { JSON_SERVER_BASE_URL } from "@/lib/constants";

// Add artificial delay to simulate network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts() {
  try {
    const res = await fetch(`${JSON_SERVER_BASE_URL}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    await delay(800); // Simulate network delay
    return await res.json();
  } catch (error) {
    console.error("getProducts error:", error);
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`${JSON_SERVER_BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error("Product not found");
    await delay(500); // Simulate network delay
    return await res.json();
  } catch (error) {
    console.error(`getProductById error for id ${id}:`, error);
    throw error;
  }
}

export async function searchProducts(query) {
  try {
    const res = await fetch(
      `${JSON_SERVER_BASE_URL}/products?q=${encodeURIComponent(query)}`,
    );
    if (!res.ok) throw new Error("Failed to search products");
    return await res.json();
  } catch (error) {
    console.error("searchProducts error:", error);
    throw error;
  }
}

export async function getProductsByCategory(category) {
  try {
    const res = await fetch(
      `${JSON_SERVER_BASE_URL}/products?category=${encodeURIComponent(category)}`,
    );
    if (!res.ok) throw new Error("Failed to fetch products by category");
    return await res.json();
  } catch (error) {
    console.error("getProductsByCategory error:", error);
    throw error;
  }
}

// lib/api.js
import axios from "axios";
import { JSON_SERVER_BASE_URL } from "@/lib/constants";

const api = axios.create({
  baseURL: JSON_SERVER_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default api;

export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

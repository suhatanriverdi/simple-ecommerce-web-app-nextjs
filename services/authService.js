import Cookies from "js-cookie";
import { JSON_SERVER_BASE_URL } from "@/lib/constants";

// Cookie key
const TOKEN_KEY = "authUserId";

// Login
const login = async (username, password) => {
  try {
    const res = await fetch(
      `${JSON_SERVER_BASE_URL}/users?username=${username}&password=${password}`,
    );
    const data = await res.json();

    if (data.length === 0) {
      throw new Error("Invalid user name or password");
    }

    const user = data[0];

    Cookies.set(TOKEN_KEY, user.id, { expires: 7 });

    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Logout
const logout = () => {
  Cookies.remove(TOKEN_KEY);
};

// Get current user
const getCurrentUser = async () => {
  const userId = Cookies.get(TOKEN_KEY);
  if (!userId) return null;

  try {
    const res = await fetch(`${JSON_SERVER_BASE_URL}/users/${userId}`);
    if (!res.ok) throw new Error("User not found");
    return await res.json();
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return null;
  }
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;

import Cookies from "js-cookie";

const TOKEN_KEY = "authToken";

export const getAuthToken = () => {
  return Cookies.get(TOKEN_KEY) || null;
};

export const setAuthToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: 1 }); // Available for 1 day
};

export const removeAuthToken = () => {
  Cookies.remove(TOKEN_KEY);
};

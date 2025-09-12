import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    const checkAuth = async () => {
      const token = getAuthToken();

      if (token) {
        try {
          // Token'daki user ID ile kullanıcı bilgilerini al
          const userData = await usersAPI.getById(token);
          setUser(userData);
        } catch (error) {
          // Token geçersizse temizle
          removeAuthToken();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const isAuthenticated = false; // Replace with real authentication logic

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import type { UserDetails } from "../types/types";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/AuthServices";

interface AuthContextType {
  isAuthenticated?: boolean;
  user?: UserDetails | null;
  login?: (credentials: any) => Promise<void>;
  logout?: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");
    if (token && user) {
      setIsAuthenticated(true);
      setUser(user as UserDetails);
    }
  }, []);

  const login = async (credentials: UserDetails) => {
    const res = await UserService.login(credentials);
    console.log("res", res);
    localStorage.setItem("authToken", res?.token);
    localStorage.setItem("user", JSON.stringify(res?.user));

    setIsAuthenticated(true);
    setUser(res?.user);
    if (res?.status === "success") {
     navigate("/dashboard", { replace: true })
      alert("SuccessFully Logged In...")
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserContext must be used within an AuthProvider");
  }
  return context;
};

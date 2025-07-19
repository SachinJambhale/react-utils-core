import { API, authAPI } from "../api";
import type { UserDetails } from "../types/types";

export class UserService {
  static async register(user: UserDetails) {
    try {
      const response = await API.post(authAPI.register, user);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }

  static async login(user: UserDetails) {
    try {
      const response = await API.post(authAPI.login, user);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  static logout() {
    return API.get(authAPI.logout);
  }
}

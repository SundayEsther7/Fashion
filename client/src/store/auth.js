import { create } from "zustand";

// Safe initial state
const getInitialState = () => ({
  user: null,
  token: null,
});

export const useAuthStore = create((set, get) => ({
  ...getInitialState(),

  // Login / set user and token
  setAuth: (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set({ user, token });
  },

  // Logout / clear auth
  clearAuth: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  // Load user from localStorage manually when needed
  loadAuthFromStorage: () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");
      set({ user: user || null, token: token || null });
    } catch {
      set({ user: null, token: null });
    }
  },

  // Update user info (like isVerified)
  updateUser: (updatedUser) => {
    const token = get().token;
    localStorage.setItem("user", JSON.stringify(updatedUser));
    set({ user: updatedUser, token });
  },
}));

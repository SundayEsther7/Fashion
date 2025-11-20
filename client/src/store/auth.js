import { create } from "zustand";

// Function to load auth from localStorage safely
const loadFromLocalStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    return {
      user: user || null,
      token: token || null,
    };
  } catch {
    return {
      user: null,
      token: null,
    };
  }
};

export const useAuthStore = create((set, get) => ({
  // ---------- INITIAL STATE ----------
  ...loadFromLocalStorage(),

  // ---------- LOGIN ----------
  setAuth: (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    set({ user, token });
  },

  // ---------- LOGOUT ----------
  clearAuth: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  // ---------- UPDATE USER INFO ----------
  updateUser: (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    set({ user: updatedUser, token: get().token });
  },
}));

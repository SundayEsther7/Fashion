import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,

  /**
   * Logs the user in and stores the user and token in local storage.
   * @param {Object} user - The user object to store.
   * @param {string} token - The token to store.
   */
  login: (user, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, token });
  },


  /**
   * Logs the user out and removes the user and token from local storage.
   */
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null });
  },
}));

/*localStorage persists data until the user logs out or clears it.
When deployed:

The React app runs in the user's browser (same as localhost)

localStorage still exists

The data is stored inside the user's own browser, not your server

So nothing changes in deployment — it works the exact same way.
we may switch to httpOnly cookies which are more secure
*/
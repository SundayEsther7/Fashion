import { useAuthStore } from "../store/auth";

//  Custom fetch wrapper that automatically adds the JWT token
export const apiFetch = async (url, options = {}) => {
  const { token } = useAuthStore.getState(); // Access Zustand store outside React

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    // Handle unauthorized or expired token
    if (response.status === 401) {
      console.warn("Unauthorized request — possibly expired token");
    }
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

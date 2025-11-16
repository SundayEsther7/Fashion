import { useAuthStore } from "../store/auth";

// Custom error class for unauthorized errors
class UnauthorizedError extends Error {
  constructor(message, url) {
    super(message);
    this.name = "UnauthorizedError";
    this.url = url;
  }
}

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
      throw new UnauthorizedError("Unauthorized access", url);
    }
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

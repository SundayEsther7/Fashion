import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useAuthStore } from "../store/auth.js";

export default function Login() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle unverified user
        if (data.message === "Please verify your email first") {
          localStorage.setItem("verifyEmail", formData.email);
          toast("Please verify your email before logging in.", { icon: "⚠️" });
          navigate(`/verify-email?email=${encodeURIComponent(formData.email)}`);
          return;
        }

        setError(data.message || "Login failed");
        toast.error(data.message || "Login failed");
        return;
      }

      // Login success
      setAuth(data.user, data.token);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("Network error. Please try again.");
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 sm:p-10 rounded-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-primary">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />
          

          {error && (
            <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
          )}

          {error && (
            <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-accent text-neutralDark font-semibold hover:bg-accent/80 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-primary/80 mt-4">
          Don’t have an account?{" "}
          <Link
            className="text-accent hover:underline font-medium"
            to="/register"
          >
            Register
          </Link>
        </p>
        <div className="text-right mt-1">
            <Link
              to="/forgot-password"
              className="text-sm text-accent hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          </div>
      </div>
    </section>
  );
}

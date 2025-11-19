import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const API = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await fetch(`${API}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      // Store email in localStorage only for later verification reminder
      const emailToStore = data.user?.email || formData.email;
      localStorage.setItem("verifyEmail", emailToStore);

      // Notify user to verify, but do NOT redirect
      toast.success(
        "Account created! You can log in now. Please verify your email within 24 hours.",
        { duration: 4000 }
      );

      // Optionally, redirect to login instead of verify-email
      navigate("/login");
    } else {
      setError(data.message || "Something went wrong. Try again.");
      toast.error(data.message || "Something went wrong. Try again.");
    }
  } catch (err) {
    setError("Network error. Please check your connection.");
    toast.error("Network error. Please check your connection.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 sm:p-10 rounded-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-primary">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />
          <input
            name="password"
            type="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />

          {error && <p className="text-red-500 text-sm mt-1 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-accent text-neutralDark font-semibold hover:bg-accent/80 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-60"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-primary/80 mt-4">
          Already have an account?{" "}
          <Link className="text-accent hover:underline font-medium" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}

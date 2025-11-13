import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Try safely parsing JSON
    let data = {};
    try {
      data = await response.json();
    } catch {
      throw new Error("Invalid JSON from server");
    }

 if (response.ok) {
  // Store user (unverified) in localStorage for redirect protection
  localStorage.setItem("user", JSON.stringify({ email: formData.email, isVerified: false }));
  
  // You can navigate directly to verification
  navigate(`/verify-email?email=${encodeURIComponent(formData.email)}`);
} else {
  setError(data.message || "Something went wrong. Try again.");
}
  } catch (err) {
    console.error("Register error:", err);
    setError("Network error. Please check your connection.");
    toast.error("Network error. Please check your connection.");
  }
};


  return (
    <section
      className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4"
      aria-labelledby="register-heading"
    >
      {/* Toaster must be included once in your app root (or here locally) */}
      <Toaster position="top-center" reverseOrder={false} />

      <div
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 sm:p-10 rounded-2xl max-w-md w-full"
        role="form"
      >
        {/* Heading */}
        <h1
          id="register-heading"
          className="text-3xl font-extrabold text-center text-primary mb-6"
        >
          Create Account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-primary">
          {/* Name */}
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />

          {/* Email */}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />

          {/* Password */}
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-accent text-neutralDark font-semibold hover:bg-accent/80 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-60"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
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

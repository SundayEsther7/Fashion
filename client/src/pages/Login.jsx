import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.js";

export default function Login() {
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.login);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (!data.user.isVerified) {
          // User exists but email not verified yet
          loginUser(data.user, data.token);

          return navigate(`/verify-email?email=${data.user.email}`);
        }

        // User is verified → normal login
        useAuthStore.getState().login(data.user, data.token);
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  return (
    <section
      className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4"
      aria-labelledby="login-heading"
    >
      <div
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 sm:p-10 rounded-2xl max-w-md w-full"
        role="form"
      >
        {/* Header */}
        <h1
          id="login-heading"
          className="text-3xl font-extrabold text-center text-primary mb-6"
        >
          Welcome Back
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-primary">
          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-neutralDark placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent text-neutralDark font-semibold hover:bg-accent/80 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-primary/80 mt-4">
          Don’t have an account?{" "}
          <Link
            className="text-accent hover:underline font-medium"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

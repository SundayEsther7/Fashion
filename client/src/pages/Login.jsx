import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.js";

export default function Login() {
  const navigate = useNavigate();
  
const { setUser } = useAuthStore(); 
  const login = useAuthStore((state) => state.login); // access login function
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      // login(data.user, data.token); // store user and token
      localStorage.setItem("token", data.token);// store token in local storage
       setUser(data.user, data.token);
      navigate("/"); // later we change this to dashboard
    }
  };

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-10 rounded-2xl max-w-md w-full">

        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-white">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent/80 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-primary/80 mt-4">
          Don’t have an account?{" "}
          <Link className="text-accent hover:underline" to="/register">
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate(); //For navigation
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });// update form data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // send form data to backend
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // get response
    const data = await response.json();
    console.log(data);

  // check if registration was successful
   if (response.ok) {
    alert("Account created! Please log in.");
    navigate("/login");
  } else {
    alert(data.message || "Something went wrong");
  }
};

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-10 rounded-2xl max-w-md w-full">
        
        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-primary">
          
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg  bg-white outline-none placeholder-primary/60"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent text- font-semibold hover:bg-accent/80 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-primary/80 mt-4">
          Already have an account?{" "}
          <Link className="text-accent hover:underline" to="/login">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}

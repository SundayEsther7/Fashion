import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch(`${API}/api/auth/request-reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus("error");
      console.error("Error sending reset code:", data.message);
      return;
    }

    setStatus("success");

    setTimeout(() => {
      navigate(`/reset-password?email=${encodeURIComponent(email)}`);
    }, 1200);
  };

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 sm:p-10 rounded-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Forgot Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 text-primary">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent/80 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Reset Code"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-accent font-semibold text-center mt-4">
            Reset code sent! Check your email.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mt-4">
            Error sending reset code.
          </p>
        )}
      </div>
    </section>
  );
}

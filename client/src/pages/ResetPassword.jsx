import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState(null);
  const API = import.meta.env.VITE_API_URL;

  // Extract email from URL
  useEffect(() => {
    const urlEmail = new URLSearchParams(window.location.search).get("email");
    if (!urlEmail) {
      setStatus("invalid");
      return;
    }
    setEmail(urlEmail);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) return setStatus("short");
    if (password !== confirm) return setStatus("mismatch");

    setStatus("loading");

    try {
  const res = await fetch(`${API}/api/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Reset error:", data.message);
    return setStatus("error");
  }

  setStatus("success");
  setTimeout(() => navigate("/login"), 1500);

} catch (err) {
  console.error(err);
  setStatus("error");
}
  };

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-neutralLight px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-10 rounded-2xl max-w-md w-full">

        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Reset Password
        </h1>

        {status === "invalid" ? (
          <p className="text-center text-red-500">
            Invalid or missing email.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-primary">

            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
              required
            />

            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
              required
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white outline-none placeholder-primary/60"
              required
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent/80 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}

        {/* STATUS MESSAGES */}
        {status === "short" && (
          <p className="text-red-500 text-center mt-4">
            Password must be at least 6 characters.
          </p>
        )}
        {status === "mismatch" && (
          <p className="text-red-500 text-center mt-4">
            Passwords do not match.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mt-4">
            Error resetting password. Check your code and try again.
          </p>
        )}
        {status === "success" && (
          <p className="text-accent font-semibold text-center mt-4">
            Password updated! Redirecting…
          </p>
        )}

      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract email from query (or pass via state)
  const params = new URLSearchParams(location.search);
  const userEmail = params.get("email");

  const [email, setEmail] = useState(userEmail || "");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [message, setMessage] = useState("");

  // Timer states
  const [coolDown, setCoolDown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  // Countdown effect
  useEffect(() => {
    let timer;
    if (coolDown > 0) {
      timer = setTimeout(() => setCoolDown(coolDown - 1), 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [coolDown]);

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Your account has been verified! Redirecting...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setStatus("error");
        setMessage(data.message || "Invalid code. Try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Server error. Try again later.");
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    try {
      const res = await fetch("http://localhost:5000/api/auth/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("New code sent! Check your email.");
        setCanResend(false);
        setCoolDown(60); // 60s coolDown
      } else {
        setStatus("error");
        setMessage(data.message || "Unable to resend code.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Error sending new code.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutralLight px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-10 rounded-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Verify Your Email
        </h1>

        <p className="text-center text-primary/80 mb-6">
          Enter the 6-digit code sent to <span className="font-semibold">{email}</span>
        </p>

        <form onSubmit={handleVerify} className="space-y-5 text-primary">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your verification code"
            maxLength={6}
            className="w-full px-4 py-3 text-center text-xl tracking-widest rounded-lg bg-white outline-none placeholder-primary/60"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent/80 transition"
          >
            Verify Code
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-medium ${
              status === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Resend Section */}
        <div className="text-center mt-6">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-accent font-semibold hover:underline"
            >
              Resend Code
            </button>
          ) : (
            <p className="text-sm text-primary/70">
              Resend available in <span className="font-semibold">{coolDown}s</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

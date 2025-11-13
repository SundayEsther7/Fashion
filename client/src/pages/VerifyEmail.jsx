import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useAuthStore } from "../store/auth";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuthStore((s) => s.user);
  const login = useAuthStore((s) => s.login);

  // Extract email from URL or localStorage
  const params = new URLSearchParams(location.search);
  const userEmail =
    params.get("email") || localStorage.getItem("verifyEmail") || "";

  const [email, setEmail] = useState(userEmail);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
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

  useEffect(() => {
    if (!email) {
      setMessage(
        "Your verification link is missing or expired. Please click the link we sent to your email."
      );
    }
  }, [email]);

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
        toast.success("Your account has been verified!");

        // Update Zustand
        const updatedUser = { ...user, isVerified: true };
        const token = localStorage.getItem("token");

        login(updatedUser, token);
        localStorage.setItem("user", JSON.stringify(updatedUser));

        // Redirect to dashboard
        setTimeout(() => navigate("/dashboard"), 1200);
      } else {
        toast.error(data.message || "Invalid code. Try again.");
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
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
        toast.success("New code sent! Check your email.");
        setCanResend(false);
        setCoolDown(60);
      } else {
        toast.error(data.message || "Unable to resend code.");
      }
    } catch (err) {
      toast.error("Error sending new code.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutralLight px-4">
      <Toaster position="top-center" />
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-10 rounded-2xl max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-primary mb-6">
          Verify Your Email
        </h1>

        <p className="text-center text-primary/80 mb-6">
          Enter the 6-digit code sent to{" "}
          <span className="font-semibold">{email}</span>
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
              Resend available in{" "}
              <span className="font-semibold">{coolDown}s</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

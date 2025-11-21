import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Dashboard() {
  const { user, token, clearAuth } = useAuthStore();
  const navigate = useNavigate();

  const triggerVerify = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/trigger-verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      toast.success(data.message);

      // redirect to verify page
      const email = user?.email;
      localStorage.setItem("verifyEmail", email);

      navigate(`/verify-email?email=${encodeURIComponent(email)}`);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutralLight p-6 pt-24">

      {/* ---------------- EMAIL NOT VERIFIED BANNER ---------------- */}
      {!user?.isVerified && (
        <div className="mb-6 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg shadow-sm">
          <p className="font-semibold">Your email is not verified.</p>
          <p className="text-sm">Please verify soon to unlock full features.</p>

          <button
            onClick={triggerVerify}
            className="mt-3 w-full py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
          >
            Resend Verification Email
          </button>
        </div>
      )}

      {/* ---------------- TOP BAR ---------------- */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Dashboard</h1>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => navigate("/profile")}
            className="px-4 py-2 bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
          >
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ---------------- DASHBOARD CONTENT ---------------- */}
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-xl font-semibold text-primary mb-4">
          Welcome, {user?.name}
        </h2>
        <p className="text-primary/70">You are now logged in.</p>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Dashboard() {
  const { user, token, updateUser, clearAuth } = useAuthStore();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("home"); // home | profile
  const [loadingVerify, setLoadingVerify] = useState(false);

  // ---------------- Send verification email ----------------
  const triggerVerify = async () => {
    setLoadingVerify(true);
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
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoadingVerify(false);
    }
  };

  // ---------------- Logout ----------------
  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutralLight p-8 mt-10">

      {/* ---------- TOP BAR ---------- */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Dashboard</h1>

        <div className="flex gap-3 items-center">
          <button
            onClick={() => setActiveTab("profile")}
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

      {/* ---------- TABS ---------- */}
      {activeTab === "home" && (
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Welcome, {user?.name}
          </h2>
          <p className="text-primary/70">You are now logged in.</p>
        </div>
      )}

      {activeTab === "profile" && (
        <div className="bg-white p-8 rounded-xl shadow-md max-w-lg">
          <h2 className="text-xl font-semibold text-primary mb-6">Your Profile</h2>

          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p>
            <strong>Verified:</strong>{" "}
            {user?.isVerified ? "Yes" : "No"}
          </p>

          {!user?.isVerified && (
            <button
              onClick={triggerVerify}
              disabled={loadingVerify}
              className="mt-4 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
            >
              {loadingVerify ? "Sending..." : "Resend Verification Email"}
            </button>
          )}

          <button
            onClick={() => setActiveTab("home")}
            className="mt-6 w-full py-2 bg-neutralLight text-primary rounded-lg hover:bg-neutral-300 transition"
          >
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

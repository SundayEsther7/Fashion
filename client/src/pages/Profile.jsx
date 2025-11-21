import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Profile() {
  const { user, token } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const triggerVerify = async () => {
    setLoading(true);
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

      const email = user?.email;
      localStorage.setItem("verifyEmail", email);
      navigate(`/verify-email?email=${encodeURIComponent(email)}`);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutralLight p-6 pt-24">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto">

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${user?.name}&background=013A38&color=fff&size=128`}
            alt="Profile"
            className="w-28 h-28 rounded-full shadow-md"
          />

          <h3 className="text-xl font-semibold text-primary mt-4">
            {user?.name}
          </h3>

          <p className="text-primary/60">{user?.email}</p>

          <span
            className={`mt-2 px-3 py-1 text-sm rounded-full ${
              user?.isVerified
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user?.isVerified ? "Verified Account" : "Not Verified"}
          </span>
        </div>

        {!user?.isVerified && (
          <button
            onClick={triggerVerify}
            disabled={loading}
            className="mt-4 w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
          >
            {loading ? "Sending..." : "Resend Verification Email"}
          </button>
        )}

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 w-full py-2 bg-neutralLight text-primary rounded-lg hover:bg-neutral-300 transition"
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

import { useState } from "react";
import { useAuthStore } from "../store/auth";
import { toast } from "react-hot-toast";

export default function Profile() {
  const { user, token } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const handleTriggerVerify = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/trigger-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to send verification email");

      toast.success(data.message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-neutralLight">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-primary">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Verified:</strong> {user?.isVerified ? "Yes" : "No"}</p>

        {!user?.isVerified && (
          <button
            onClick={handleTriggerVerify}
            disabled={loading}
            className="mt-4 w-full py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition"
          >
            {loading ? "Sending..." : "Resend Verification Email"}
          </button>
        )}
      </div>
    </section>
  );
}

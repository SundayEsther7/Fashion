import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function PublicRoute({ children }) {
  const { user, token } = useAuthStore();

  // If no user (new visitor), show public page
  if (!user) return children;

  // If user exists but not verified, redirect to verify page
  // if (!user.isVerified) {
  //   return <Navigate to={`/verify-email?email=${user.email}`} replace />;
  // }

  // If user exists and verified, redirect to dashboard
  if (token && user.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

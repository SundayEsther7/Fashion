import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function ProtectedRoute({ children }) {
  const { user, token } = useAuthStore();

  if (!token || !user) return <Navigate to="/login" />;

  // if (!user.isVerified)
  //   return <Navigate to={`/verify-email?email=${user.email}`} />;

  return children;
}

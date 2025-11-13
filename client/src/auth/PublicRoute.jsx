import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function PublicRoute({ children }) {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  if (user && !user.isVerified) return <Navigate to="/verify-email" replace />;
  if (user && token) return <Navigate to="/dashboard" replace />;

  return children;
}

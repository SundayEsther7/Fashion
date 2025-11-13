import { useAuthStore } from "../store/auth";

export default function Dashboard() {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutralLight">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Welcome, {user?.name}
      </h1>

      <p className="text-primary/80">You are now logged in.</p>

      <button
        onClick={logout}
        className="mt-6 px-4 py-2 bg-primary text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

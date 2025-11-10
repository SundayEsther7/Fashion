import { useAuthStore } from "../store/auth";

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-neutralLight">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-primary">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Profile</h2>

        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>

      </div>
    </section>
  );
}

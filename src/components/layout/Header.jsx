export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-primary">Brand Name</h1>
      <nav className="hidden md:flex gap-6 text-neutral-dark">
        <a href="#" className="hover:text-accent">Home</a>
        <a href="#" className="hover:text-accent">Shop</a>
        <a href="#" className="hover:text-accent">About</a>
        <a href="#" className="hover:text-accent">Contact</a>
      </nav>
      <button className="md:hidden text-primary border rounded-lg px-3 py-1 hover:bg-secondary">
        ☰
      </button>
    </header>
  );
}

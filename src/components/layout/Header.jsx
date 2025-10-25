export default function Header() {
  return (
    <header className="absolute text-white top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 bg shadow-sm">
      <h1 className="text-2xl font-bold text-primary">Brand Name</h1>
      <nav className="hidden md:flex gap-6 text-neutral-dark">
        <a href="#" className="hover:text-accent">Home</a>
        <a href="#" className="hover:text-accent">Shop</a>
        <a href="#" className="hover:text-accent">About</a>
        <a href="#" className="hover:text-accent">Contact</a>
      </nav>
      <button className="md:hidden text-white border rounded-lg px-3 py-1 hover:bg-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      </button>
    </header>
  );
}
//Nb;
// 1. Basic header structure with brand name and navigation links
// 2. Responsive design with hamburger menu for smaller screens; doesnt work yet
//Think of more things?
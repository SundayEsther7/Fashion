import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-[1240px] mx-auto">

        {/* Top: Logo + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight">UrbanGlide</h2>

          <div className="flex gap-4 mt-4 md:mt-0">
  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
    <div
      key={i}
      className="
        w-10 h-10 flex items-center justify-center rounded-full
        bg-white/10 text-white
        transition-all duration-500 ease-in-out cursor-pointer
        hover:bg-accent hover:shadow-[0_0_15px_#286F6C]
        hover:scale-125 hover:rotate-[360deg]
      "
    >
      <Icon className="text-lg" />
    </div>
  ))}
</div>

        </div>

        {/* Middle: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2 opacity-80 text-sm">
              <li><Link to="/shop">Inline Skates</Link></li>
              <li><Link to="/shop">Roller Skates</Link></li>
              <li><Link to="/shop">Protective Gear</Link></li>
              <li><Link to="/shop">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>Street Meetups</li>
              <li>Training Sessions</li>
              <li>Local Skate Parks</li>
              <li>Events & Challenges</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>Help Center</li>
              <li>Track Order</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>Our Story</li>
              <li>Skate Philosophy</li>
              <li>Careers</li>
              <li>Press & Media</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-neutralLight/30 pt-8 text-center text-sm opacity-70">
          © {new Date().getFullYear()} UrbanGlide — Ride Different.
        </div>
      </div>
    </footer>
  );
}

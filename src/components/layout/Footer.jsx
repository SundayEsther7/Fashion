import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#23262F] text-white py-16 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-2xl font-bold font-[Raleway]">Furniturepower</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="bg-white/10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition"
              >
                <Icon className="text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div>
            <h3 className="font-[Raleway] text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>The Support Suite</li>
              <li>The Sales Suite</li>
              <li>Support</li>
              <li>Guide</li>
            </ul>
          </div>
          <div>
            <h3 className="font-[Raleway] text-lg mb-4">Top Features</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Ticketing System</li>
              <li>Knowledge Base</li>
              <li>Community Forums</li>
              <li>Help Desk Software</li>
            </ul>
          </div>
          <div>
            <h3 className="font-[Raleway] text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Product Support</li>
              <li>Request Demo</li>
              <li>Library</li>
              <li>Peoplepower Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="font-[Raleway] text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Press</li>
              <li>Investors</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <h3 className="font-[Raleway] text-lg mb-4">Favourite Things</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>For Enterprise</li>
              <li>For Startups</li>
              <li>For Benchmark</li>
              <li>For Small Business</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          © Furniturepower 2020 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

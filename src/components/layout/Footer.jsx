//Responsive
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#23262F] text-white py-16 px-6">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-2xl font-bold font-[Raleway]">Furniturepower</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              {
                Icon: FaFacebookF,
                hover: "#1877F2",
                shadow: "0 0 10px #1877F2",
              },
              { Icon: FaTwitter, hover: "#1DA1F2", shadow: "0 0 10px #1DA1F2" },
              {
                Icon: FaInstagram,
                hover: "#E4405F",
                shadow: "0 0 10px #E4405F",
              },
              {
                Icon: FaLinkedinIn,
                hover: "#0077B5",
                shadow: "0 0 10px #0077B5",
              },
            ].map(({ Icon, hover, shadow }, i) => (
              <div
                key={i}
                className="
          w-10 h-10 flex items-center justify-center rounded-full
          bg-white/10 text-white
          transition-all duration-500 ease-in-out cursor-pointer
        "
                style={{
                  transition: "all 0.6s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hover;
                  e.currentTarget.style.boxShadow = shadow;
                  e.currentTarget.style.transform = "scale(1.2) rotate(360deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Icon className="text-lg" />
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

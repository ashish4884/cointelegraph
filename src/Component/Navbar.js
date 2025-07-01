import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap py-3">
          {/* Nav Links */}
          <div className="flex flex-wrap items-center">
            {[
              { to: "/news", label: "News" },
              { to: "/indices", label: "Indices" },
              { to: "/in-depth", label: "In Depth" },
              { to: "/learn", label: "Learn" },
              { to: "/crypto-bonus", label: "Crypto Bonus" },
              { to: "/research", label: "Research" },
              { to: "/podcasts", label: "Podcasts" },
              { to: "/anti-scam", label: "Anti-Scam" },
              { to: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="mx-4 text-gray-900 hover:text-gray-700 font-medium text-base transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <div className="p-2 hover:bg-yellow-600 rounded-full cursor-pointer transition-colors">
            <Search className="w-5 h-5 text-gray-900" />
          </div>
        </div>
      </div>
    </nav>
  );
}

import { ChevronDown, Twitter, Send, Facebook, Youtube, Globe } from "lucide-react";
import logo2 from "../Assests/logo2.svg";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo2}
              alt="Logo"
              className="w-[192px] h-[48px] object-contain"
            />
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-6">
            {/* Ecosystem Button */}
            <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-yellow-500 text-sm bg-transparent border border-white rounded-full cursor-pointer transition-colors">
              <span className="mr-2">🌐</span>
              Ecosystem
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <Twitter className="w-4 h-4 hover:text-yellow-500 cursor-pointer transition-colors" />
              <Send className="w-4 h-4 hover:text-yellow-500 cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 hover:text-yellow-500 cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 hover:text-yellow-500 cursor-pointer transition-colors" />
            </div>

            {/* Language Selector */}
            <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-yellow-500 text-base bg-transparent border-none cursor-pointer transition-colors">
              <Globe className="w-4 h-4 mr-2" />
              English
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

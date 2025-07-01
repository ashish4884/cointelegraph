import React from 'react';
import { Bitcoin, Twitter, Facebook, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'],
    Content: ['Bitcoin', 'Ethereum', 'DeFi', 'NFTs', 'Markets'],
    Resources: ['Price Tracker', 'Crypto Calculator', 'Education', 'API', 'Mobile App'],
    Support: ['Help Center', 'Community', 'Press Kit', 'Brand Guidelines', 'Partnerships']
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Bitcoin className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold">
                Coin<span className="text-orange-500">Telegraph</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted source for cryptocurrency news, analysis, and market insights.
              Stay informed with the latest developments in the digital asset space.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 bg-gray-800 hover:bg-orange-500 rounded-lg transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-400">Subscribe to our newsletter for daily crypto insights.</p>
            </div>
            <div className="flex space-x-3 max-w-md w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 CoinTelegraph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

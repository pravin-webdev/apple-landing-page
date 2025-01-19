import React from 'react';
import { Apple, Search, ShoppingBag } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Apple className="w-5 h-5" />
          
          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300">Mac</a>
            <a href="#" className="hover:text-gray-300">iPad</a>
            <a href="#" className="hover:text-gray-300">iPhone</a>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
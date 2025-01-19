import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>
      </div>

      {/* Hero content */}
      <div className="relative text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold">MacBook Pro</h1>
        <p className="text-xl md:text-2xl">Mind-blowing. Head-turning.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
          Buy Now
        </button>
      </div>

      {/* Scroll indicator */}
      <ChevronDown className="w-6 h-6 absolute bottom-8 animate-bounce" />
    </section>
  );
};

export default Hero;
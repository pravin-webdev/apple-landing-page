import React from 'react';
import { Cpu, Battery, Monitor } from 'lucide-react';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Nav from './components/Nav';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <Hero />
      
      {/* Features section */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <div className="space-y-32">
          <Feature 
            title="M3 Ultra"
            description="The most powerful chip ever in a personal computer."
            image="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80"
            icon={<Cpu className="w-8 h-8" />}
            reverse={false}
          />
          
          <Feature 
            title="28-hour battery life"
            description="The longest battery life ever in a MacBook."
            image="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80"
            icon={<Battery className="w-8 h-8" />}
            reverse={true}
          />
          
          <Feature 
            title="Liquid Retina XDR"
            description="The best display ever in a laptop."
            image="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80"
            icon={<Monitor className="w-8 h-8" />}
            reverse={false}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
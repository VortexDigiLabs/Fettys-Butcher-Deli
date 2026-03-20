/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, Phone, Clock, Star, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['HOME', 'ABOUT US', 'MENU', 'QUALITY', 'FEEDBACK', 'CONTACTS'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-dark/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest text-white">
          {navLinks.slice(0, 3).map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">{link}</a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-primary">
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest text-white">
          {navLinks.slice(3).map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors">{link}</a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-neutral-dark border-t border-white/10 py-4 md:hidden"
          >
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white font-semibold tracking-widest hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Infinite Animation */}
      <div 
        className="absolute inset-0 z-0 animate-hero-zoom"
        style={{
          // Note: Using a placeholder that matches your uploaded image. 
          // To use your exact file, upload it to the project and change this URL to e.g., 'url("/hero-meat.jpg")'
          backgroundImage: 'url("https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Dark Overlay (kept separate so it doesn't animate) */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-display tracking-widest uppercase text-xl md:text-2xl mb-4 font-bold">
            Under New Ownership
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-6" style={{ textShadow: '4px 4px 0px #D32F2F' }}>
            Fetty's<br/>Biltong<br/>& Deli
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about-us" className="relative z-20 -mt-32 px-4">
      <div className="max-w-4xl mx-auto bg-neutral-dark border border-white/10 p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Subtle background texture/pattern could go here */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="relative z-10">
          <h3 className="text-primary font-display tracking-widest uppercase text-sm font-bold mb-2">About</h3>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 italic">Fetty's Deli</h2>
          <p className="text-gray-300 leading-relaxed mb-8 font-sans max-w-2xl mx-auto">
            Welcome to the newly revitalized Fetty's Biltong & Deli. Under new ownership, we are committed to bringing you the finest, authentic biltong and premium deli selections. We honor traditional curing methods while introducing a fresh, high-end approach to your favorite meats. Every cut is selected with care, spiced to perfection, and cured to deliver an unforgettable taste.
          </p>
          <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 uppercase tracking-widest text-sm font-bold transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

const Quality = () => {
  return (
    <section id="quality" className="bg-neutral-light text-neutral-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 italic">The Artisan Craft</h2>
            <h3 className="text-primary font-display tracking-widest uppercase text-sm font-bold mb-6">Master Butchers</h3>
            <p className="text-gray-700 leading-relaxed mb-8 font-sans">
              Our commitment to quality starts at the source. We partner with local farms to ensure only the highest grade meats make it to our deli. Our biltong is crafted using time-honored recipes, air-dried to perfection, and sliced exactly how you like it. Experience the difference that true craftsmanship makes.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-8 mt-8 opacity-80">
              {/* Placeholder Badges */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-neutral-dark rounded-full flex items-center justify-center mb-2">
                  <span className="font-serif font-bold text-xl">100%</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Beef</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-2 border-neutral-dark rounded-full flex items-center justify-center mb-2">
                  <Star size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Premium</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-sm shadow-xl">
            <img 
              src="https://huprbedahpwszatolkce.supabase.co/storage/v1/object/sign/Butcher%20Rudi/1773935585723-019d06cc-305e-7c3a-9235-7811967b4ac9.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82ODI5Y2JlNC02MWI3LTQ2NjAtYmNiYi0wZTk3YWQ0NjY5NzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCdXRjaGVyIFJ1ZGkvMTc3MzkzNTU4NTcyMy0wMTlkMDZjYy0zMDVlLTdjM2EtOTIzNS03ODExOTY3YjRhYzkucG5nIiwiaWF0IjoxNzczOTM1OTQ4LCJleHAiOjE4MDU0NzE5NDh9.giSS-fs3pQ5-_5KgQ3_bANAoGck8b4byEAx2lVOt4Wc" 
              alt="Artisan Butcher" 
              className="w-full h-[500px] object-cover animate-hero-zoom"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const menuItems = [
    {
      name: "TRADITIONAL BEEF BILTONG",
      description: "Coriander, black pepper, sea salt, air-dried to your preference (wet, medium, or dry)",
      price: "R 450.00 / kg"
    },
    {
      name: "SPICY CHILI BITES",
      description: "Thinly sliced beef, marinated in our signature fiery chili blend, perfectly dried",
      price: "R 480.00 / kg"
    },
    {
      name: "FARMHOUSE DROËWORS",
      description: "Traditional South African dried sausage, rich in flavor with hints of cloves and nutmeg",
      price: "R 420.00 / kg"
    },
    {
      name: "THE FETTY'S SIGNATURE SANDWICH",
      description: "Artisan sourdough, premium pastrami, aged cheddar, house mustard, pickles",
      price: "R 120.00"
    }
  ];

  return (
    <section id="menu" className="bg-neutral-dark text-white py-24 relative overflow-hidden">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover animate-hero-zoom"
        >
          <source src="https://huprbedahpwszatolkce.supabase.co/storage/v1/object/sign/Butcher%20Rudi/download%20(2).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82ODI5Y2JlNC02MWI3LTQ2NjAtYmNiYi0wZTk3YWQ0NjY5NzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCdXRjaGVyIFJ1ZGkvZG93bmxvYWQgKDIpLm1wNCIsImlhdCI6MTc3NDAwNzMyMywiZXhwIjoxODA1NTQzMzIzfQ.I8u2tHFVxLfuHFamVdXCXNnGr5JHT8acSpNd2MUkc_o" type="video/mp4" />
        </video>
      </div>
      
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold italic mb-4 text-white">Menu</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-10">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-primary font-bold tracking-wide uppercase text-lg">{item.name}</h3>
                <div className="menu-leader hidden sm:block"></div>
                <span className="font-serif font-bold text-xl whitespace-nowrap text-white">{item.price}</span>
              </div>
              <p className="text-gray-300 font-sans text-sm sm:text-base pr-0 sm:pr-24">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 uppercase tracking-widest text-sm font-bold transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section id="feedback" className="bg-neutral-dark py-20 border-y border-white/10 relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
        <img 
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" 
          alt="Customer" 
          className="w-24 h-24 rounded-full object-cover border-2 border-primary"
        />
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <h4 className="font-serif font-bold text-xl italic text-white">Sarah Jenkins</h4>
            <span className="text-gray-400 text-sm">(Local Foodie)</span>
          </div>
          <p className="text-gray-300 italic font-serif text-lg max-w-2xl mb-4">
            "Since the new ownership took over, the quality has been absolutely incredible. The spicy chili bites are the best I've had outside of Cape Town. A true gem in our neighborhood!"
          </p>
          <div className="flex justify-center md:justify-start text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contacts" className="bg-[#0a0a0a] text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Image Half */}
        <div className="lg:w-1/2 h-64 lg:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2082&auto=format&fit=crop" 
            alt="Biltong and Spices" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Contact Info Half */}
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="text-4xl font-serif font-bold italic mb-8">Contact</h2>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold">123 Artisan Way,</p>
                <p className="text-gray-400">Food District</p>
                <p className="text-gray-400">Cityville, ST 12345</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Phone className="text-primary flex-shrink-0" />
              <p className="font-bold">Tel. +1 (555) 123-4567</p>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-primary">OPENING HOURS</p>
                <p className="text-gray-300 font-bold tracking-wide">MONDAY TO SATURDAY</p>
                <p className="text-gray-400">9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
          
          <button className="bg-primary hover:bg-red-700 text-white px-8 py-3 uppercase tracking-widest text-sm font-bold transition-colors w-fit mb-12">
            Call to Order
          </button>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-display font-bold text-2xl tracking-tighter uppercase mb-1">Fetty's Biltong & Deli</h3>
              <p className="text-gray-500 text-sm">© 2026 All rights reserved.</p>
            </div>
            
            <div className="flex flex-col items-center sm:items-end">
              <span className="text-sm font-bold uppercase tracking-widest mb-2">Social Networks</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-neutral-dark min-h-screen font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Quality />
      <Menu />
      <Testimonial />
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Code2, LogIn, User, MessageSquare } from 'lucide-react';
import { useFirebase } from '../context/FirebaseContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, login } = useFirebase();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Feed', path: '/posts' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 ${
        scrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glass-card py-3 px-6 shadow-xl' 
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold text-white leading-none">InsideTech</span>
              <span className="text-[10px] text-indigo-400 font-bold tracking-[0.2em] uppercase">Softwares</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                  location.pathname === link.path ? 'text-indigo-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <Link
                to="/profile"
                className="flex items-center gap-3 pl-4 border-l border-white/10 group"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-semibold text-white leading-none mb-1">{user.displayName}</p>
                  <p className="text-[10px] text-slate-500 leading-none">View Profile</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 overflow-hidden group-hover:border-indigo-500/50 transition-colors">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-full h-full p-2 text-slate-400" />
                  )}
                </div>
              </Link>
            ) : (
              <button
                onClick={login}
                className="px-5 py-2.5 bg-white hover:bg-slate-200 text-black text-sm font-bold rounded-xl transition-all flex items-center gap-2 group"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-card rounded-2xl p-6 md:hidden shadow-2xl border border-white/5"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-indigo-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {user ? (
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-full h-full p-2 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-white">{user.displayName}</p>
                    <p className="text-sm text-slate-400">View Profile</p>
                  </div>
                </Link>
              ) : (
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    login();
                  }}
                  className="mt-4 px-6 py-4 bg-white text-black text-center font-bold rounded-xl"
                >
                  Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

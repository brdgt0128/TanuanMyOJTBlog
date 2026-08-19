import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'projects', 'blog', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -65% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled || isMobileMenuOpen ? 'oklch(13% 0.010 60 / 0.97)' : 'transparent',
        backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(12px)' : 'none',
        borderBottom: isScrolled || isMobileMenuOpen ? '1px solid var(--hairline)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 transition-colors duration-300"
          >
            <span className="text-lg sm:text-xl font-bold tracking-wider" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>AT</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-300 px-4 py-2"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}
                  >
                    {item.name}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-4 right-4 h-px"
                      style={{ backgroundColor: 'var(--accent)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden transition-colors duration-300 p-2 -mr-2"
            style={{ color: 'var(--ink)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-4" style={{ borderTop: '1px solid var(--hairline)' }}>
            <ul className="flex flex-col gap-1 pt-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left text-sm font-medium tracking-widest uppercase transition-all duration-300 py-3 px-3 flex items-center gap-3"
                      style={{ color: isActive ? 'var(--accent)' : 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-300"
                        style={{ backgroundColor: isActive ? 'var(--accent)' : 'var(--ink-faint)' }}
                      />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

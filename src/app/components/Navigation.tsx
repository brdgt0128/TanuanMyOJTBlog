import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Blog Entries', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#000000]/95 backdrop-blur-sm border-b border-[#1a1a1a] shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 transition-colors duration-300 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#6366F1] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-base sm:text-lg font-semibold text-white">DevPortfolio</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm xl:text-base text-[#919191] hover:text-white hover:bg-[#1a1a1a]
                           transition-all duration-300 px-4 py-2 rounded-md whitespace-nowrap"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#CECECE] hover:text-white transition-colors duration-300 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-4 border-t border-[#1e1e1e] animate-in slide-in-from-top-2">
            <ul className="flex flex-col gap-1 pt-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-base text-[#CECECE] hover:text-white hover:bg-[#1a1a1a] transition-all duration-300 py-3 px-3 rounded-md"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
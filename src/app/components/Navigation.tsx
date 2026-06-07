import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      setIsMobileMenuOpen(false);
    }
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
        backgroundColor: isScrolled || isMobileMenuOpen ? 'rgba(10,10,10,0.97)' : 'transparent',
        backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(12px)' : 'none',
        borderBottom: isScrolled || isMobileMenuOpen ? '1px solid #1e1e1e' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 transition-colors duration-300"
          >
            <span className="text-lg sm:text-xl font-bold tracking-wider" style={{ color: '#c9a84c' }}>BT</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-300 px-4 py-2"
                  style={{ color: '#ffffff' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden transition-colors duration-300 p-2 -mr-2"
            style={{ color: '#ffffff' }}
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
          <div className="lg:hidden mt-2 pb-4" style={{ borderTop: '1px solid #1e1e1e' }}>
            <ul className="flex flex-col gap-1 pt-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-sm font-medium tracking-widest uppercase transition-all duration-300 py-3 px-3"
                    style={{ color: '#ffffff' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                    }}
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

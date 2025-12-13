import { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#000000] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#CECECE] cursor-pointer hover:text-white transition-colors duration-300">
            <Code2 className="w-6 h-6" />
            <span className="text-xl">DevPortfolio</span>
          </div>

          <ul className="flex items-center gap-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Me', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Blog Entries', id: 'blog' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#CECECE] hover:text-white transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
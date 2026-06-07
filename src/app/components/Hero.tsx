import { ChevronRight, Download } from 'lucide-react';
import profileImg from '../../assets/nobg.png';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ backgroundColor: '#c9a84c', opacity: 0.04 }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl" style={{ backgroundColor: '#c9a84c', opacity: 0.02 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[80vh]">

          {/* Left: Text Content */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border"
              style={{ borderColor: '#2a2a2a', backgroundColor: '#111111', color: '#888888' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c9a84c' }} />
              Open to Opportunities
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span style={{ color: '#c9a84c' }}>Aldrin!</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug" style={{ color: '#ffffff' }}>
                Frontend Developer with skills in<br className="hidden sm:block" />
                <span style={{ color: '#c9a84c' }}> SaaS Sales</span> &amp; Tech Support
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: '#888888' }}>
              I build responsive web applications and drive business growth through technology.
              Experienced in e-commerce product listing, client support, and SaaS sales at Activerse Incorporation.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 pt-1">
              {[
                { value: '3', label: 'UK Projects' },
                { value: '9+', label: 'Experiences' },
                { value: '2026', label: 'BSIT Graduate' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="px-4 py-2.5 flex flex-col"
                  style={{ border: '1px solid #1e1e1e', backgroundColor: '#111111' }}
                >
                  <span className="text-lg font-bold" style={{ color: '#c9a84c' }}>{value}</span>
                  <span className="text-xs" style={{ color: '#555555' }}>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo('experience')}
                className="px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all duration-300 border"
                style={{ borderColor: '#ffffff', backgroundColor: 'transparent', color: '#ffffff' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff';
                  (e.currentTarget as HTMLButtonElement).style.color = '#0a0a0a';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                }}
              >
                View My Work
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all duration-300 border"
                style={{ borderColor: '#2a2a2a', backgroundColor: 'transparent', color: '#888888' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a84c';
                  (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#2a2a2a';
                  (e.currentTarget as HTMLButtonElement).style.color = '#888888';
                }}
              >
                <Download className="w-4 h-4" />
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-80 sm:w-96 md:w-[480px]">
              <img
                src={profileImg}
                alt="Aldrin B. Tanuan"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

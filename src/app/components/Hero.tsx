import { ArrowDown, ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl" style={{ backgroundColor: '#c9a84c', opacity: 0.04 }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ backgroundColor: '#c9a84c', opacity: 0.03 }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left sm:text-left relative z-10 w-full">
        <div className="space-y-5 sm:space-y-7">
          {/* Eyebrow tag */}
          <div
            className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-1.5 rounded-full border"
            style={{ borderColor: '#2a2a2a', backgroundColor: '#111111', color: '#888888' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c9a84c' }} />
            Open to Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-white">Hello, I'm</span>
            <br />
            <span style={{ color: '#c9a84c' }}>
              Tanuan
            </span>
          </h1>

          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: '#cccccc' }}>
            A tech-driven professional with hands-on experience in e-commerce
            product listing, technical support, and SaaS sales — passionate about
            delivering seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 sm:pt-6">
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3.5 text-sm sm:text-base text-white font-medium flex items-center gap-2 transition-all duration-300 border"
              style={{ borderColor: '#ffffff', backgroundColor: 'transparent' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff';
                (e.currentTarget as HTMLButtonElement).style.color = '#0a0a0a';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
              }}
            >
              Get in touch
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="px-7 py-3.5 text-sm sm:text-base font-medium flex items-center gap-2 transition-all duration-300 border"
              style={{ color: '#ffffff', borderColor: '#ffffff', backgroundColor: 'transparent' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a84c';
                (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#ffffff';
                (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
              }}
            >
              View experience
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('blog')}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#ffffff' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#c9a84c';
                (e.currentTarget as HTMLButtonElement).style.color = '#c9a84c';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#2a2a2a';
                (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
              }}
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

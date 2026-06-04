import { ArrowDown, ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 relative overflow-hidden" style={{ backgroundColor: '#161925' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ backgroundColor: '#1F4964', opacity: 0.12 }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl" style={{ backgroundColor: '#312840', opacity: 0.08 }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="space-y-5 sm:space-y-7">
          {/* Eyebrow tag */}
          <div
            className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-1.5 rounded-full border"
            style={{ borderColor: '#1F4964', backgroundColor: 'rgba(31,73,100,0.2)', color: '#7ec8de' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#1F4964' }} />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span style={{ color: '#94afc5' }}>Hi, I'm </span>
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #7ec8de 50%, #1F4964 100%)' }}
            >
              Aldrin B. Tanuan
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-light" style={{ color: '#64849e' }}>
            Frontend Developer <span style={{ color: '#1F4964' }}>&</span> SaaS Sales Executive
          </p>

          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4" style={{ color: '#4a6a80' }}>
            Passionate about building clean and functional digital experiences.
            This portfolio documents my journey through my practicum and the continuous
            learning that comes with being a developer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-8">
            <button
              onClick={() => scrollTo('experience')}
              className="px-7 py-3.5 text-sm sm:text-base text-white font-medium flex items-center gap-2 transition-all duration-300 hover:gap-3 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1F4964, #1B3145)' }}
            >
              View Experience
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('blog')}
              className="px-7 py-3.5 text-sm sm:text-base font-medium flex items-center gap-2 transition-all duration-300 border"
              style={{ color: '#94afc5', borderColor: '#2B334C', backgroundColor: 'transparent' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#1F4964';
                (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#2B334C';
                (e.currentTarget as HTMLButtonElement).style.color = '#94afc5';
              }}
            >
              View My Blog
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

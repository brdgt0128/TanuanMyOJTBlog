import { ChevronRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import idPhoto from '../../assets/newbg.png';

const ROLES = [
  'Web Developer',
  'Frontend Developer',
  'Claude Developer',
  'SaaS Sales Executive',
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export function Hero() {
  const typedRole = useTypewriter(ROLES);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[85vh]">

          {/* Left: Text Content */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border"
              style={{ borderColor: '#2a2a2a', backgroundColor: '#111111', color: '#888888' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c9a84c' }} />
              Open to Opportunities
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span style={{ color: '#c9a84c' }}>Aldrin!</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug flex items-center gap-1" style={{ color: '#ffffff', minHeight: '2.5rem' }}>
                <span style={{ color: '#c9a84c' }}>{typedRole}</span>
                <span
                  className="inline-block w-0.5 h-7 sm:h-8 md:h-9 ml-0.5"
                  style={{ backgroundColor: '#c9a84c', animation: 'blink 1s step-end infinite' }}
                />
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: '#888888' }}>
              I build responsive web applications and drive business growth through technology.
              Experienced in web development, AI integration, and SaaS sales at Activerse Incorporation.
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

          {/* Right: Swinging ID Card */}
          <div className="flex justify-center lg:justify-end items-start order-1 lg:order-2 pt-10 lg:pt-16">
            <div style={{ animation: 'idSwing 4s ease-in-out infinite', transformOrigin: 'top center' }}>

              {/* Lanyard string + clip */}
              <div className="flex flex-col items-center">
                {/* String */}
                <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, transparent, #c9a84c 30%, #a07830)' }} />

                {/* Clip */}
                <div
                  className="w-6 h-5 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(180deg, #d4b060 0%, #a07830 100%)',
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 30%, 100% 70%, 80% 100%, 20% 100%, 0% 70%, 0% 30%)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                  }}
                />

                {/* ID Card */}
                <div
                  className="w-52 sm:w-60 overflow-hidden"
                  style={{
                    backgroundColor: '#f5f5f0',
                    border: '2px solid #d4b060',
                    borderRadius: '8px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 4px 20px rgba(201,168,76,0.2)',
                  }}
                >
                  {/* Card header */}
                  <div
                    className="px-3 py-2 flex items-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #3d1f00 100%)' }}
                  >
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#c9a84c' }}>
                      <span className="text-xs font-black text-black">SCC</span>
                    </div>
                    <div>
                      <p className="text-white font-bold leading-tight" style={{ fontSize: '8px', letterSpacing: '0.5px' }}>SAINT COLUMBAN COLLEGE</p>
                      <p style={{ fontSize: '7px', color: '#c9a84c', letterSpacing: '0.3px' }}>Pagadian City, Philippines</p>
                    </div>
                  </div>

                  {/* ID label */}
                  <div className="text-center py-1" style={{ backgroundColor: '#c9a84c' }}>
                    <span className="font-black tracking-widest text-black" style={{ fontSize: '8px' }}>STUDENT ID</span>
                  </div>

                  {/* Photo */}
                  <div className="flex justify-center pt-3 pb-2 px-3" style={{ backgroundColor: '#f5f5f0' }}>
                    <div
                      className="overflow-hidden"
                      style={{
                        width: '120px',
                        height: '145px',
                        border: '2px solid #c9a84c',
                      }}
                    >
                      <img
                        src={idPhoto}
                        alt="Aldrin B. Tanuan"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-3 pb-3 text-center" style={{ backgroundColor: '#f5f5f0' }}>
                    <p className="font-black tracking-wide text-black" style={{ fontSize: '11px' }}>TANUAN, ALDRIN B.</p>
                    <p className="font-medium mt-0.5" style={{ fontSize: '8px', color: '#555555' }}>Bachelor of Science in</p>
                    <p className="font-bold" style={{ fontSize: '8px', color: '#333333' }}>Information Technology</p>
                    <div className="mt-2 pt-2" style={{ borderTop: '1px solid #ddd' }}>
                      <p className="font-medium" style={{ fontSize: '7px', color: '#888888' }}>S.Y. 2025 – 2026</p>
                    </div>
                  </div>

                  {/* Card footer bar */}
                  <div className="h-2" style={{ background: 'linear-gradient(90deg, #1a0a00, #c9a84c, #1a0a00)' }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes idSwing {
          0%   { transform: rotate(-8deg); }
          50%  { transform: rotate(8deg); }
          100% { transform: rotate(-8deg); }
        }
      `}</style>
    </section>
  );
}

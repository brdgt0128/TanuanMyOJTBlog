import { ChevronRight, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
    } else {
      setIsDeleting(false);
      setWordIndex(i => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

function SwingingID() {
  const pivotRef = useRef<HTMLDivElement>(null);
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const angularVelRef = useRef(0);
  const isDraggingRef = useRef(false);
  const rafRef = useRef(0);
  const lastAngleRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const dragOffsetRef = useRef(0);

  const getPivotCenter = () => {
    if (!pivotRef.current) return { x: 0, y: 0 };
    const r = pivotRef.current.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };

  const angleFromPivot = (mx: number, my: number) => {
    const p = getPivotCenter();
    return Math.atan2(mx - p.x, my - p.y);
  };

  useEffect(() => {
    let lastTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!isDraggingRef.current) {
        // Pendulum physics: α = -(g/L)·sin(θ), scaled for feel
        const alpha = -18 * Math.sin(angleRef.current);
        angularVelRef.current += alpha * dt;
        angularVelRef.current *= 0.991; // damping
        angleRef.current += angularVelRef.current * dt;
        // stop jitter when nearly still
        if (Math.abs(angularVelRef.current) < 0.0005 && Math.abs(angleRef.current) < 0.0005) {
          angularVelRef.current = 0;
          angleRef.current = 0;
        }
      }

      if (cardWrapRef.current) {
        cardWrapRef.current.style.transform = `rotate(${angleRef.current * (180 / Math.PI)}deg)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const startDrag = (mx: number, my: number) => {
    isDraggingRef.current = true;
    angularVelRef.current = 0;
    const mouseAngle = angleFromPivot(mx, my);
    // preserve where on the card the user grabbed — no snap
    dragOffsetRef.current = angleRef.current - mouseAngle;
    lastAngleRef.current = angleRef.current;
    lastTimeRef.current = performance.now();
  };

  const moveDrag = (mx: number, my: number) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = (now - lastTimeRef.current) / 1000 || 0.016;
    const newCardAngle = angleFromPivot(mx, my) + dragOffsetRef.current;
    angularVelRef.current = (newCardAngle - angleRef.current) / dt;
    angleRef.current = newCardAngle;
    lastAngleRef.current = newCardAngle;
    lastTimeRef.current = now;
  };

  // release — physics takes over with whatever velocity the drag had
  const endDrag = () => { isDraggingRef.current = false; };

  useEffect(() => {
    const mm = (e: MouseEvent) => moveDrag(e.clientX, e.clientY);
    const tm = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener('mousemove', mm);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchmove', tm, { passive: false });
    window.addEventListener('touchend', endDrag);
    return () => {
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchmove', tm);
      window.removeEventListener('touchend', endDrag);
    };
  }, []);

  return (
    <div className="flex flex-col items-center select-none" style={{ cursor: isDraggingRef.current ? 'grabbing' : 'grab' }}>
      {/* Pivot anchor */}
      <div ref={pivotRef} className="w-1 h-1" />

      {/* Rotating wrapper — origin at top center */}
      <div ref={cardWrapRef} style={{ transformOrigin: 'top center' }}
        onMouseDown={e => { e.preventDefault(); startDrag(e.clientX, e.clientY); }}
        onTouchStart={e => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
      >
        {/* Lanyard cord */}
        <div className="flex flex-col items-center">
          {/* Neck loop anchor bar */}
          <div className="w-16 h-1.5 rounded-full mb-0.5" style={{ background: 'linear-gradient(90deg, transparent, #b91c1c 20%, #dc2626 50%, #b91c1c 80%, transparent)' }} />

          {/* Double-cord lanyard (two parallel strings) */}
          <div className="relative flex items-start justify-center" style={{ height: 'clamp(80px, 14vw, 220px)', width: '16px' }}>
            <div className="absolute w-px h-full left-1" style={{ background: 'linear-gradient(to bottom, #b91c1c, #dc262688 60%, #b91c1c)' }} />
            <div className="absolute w-px h-full right-1" style={{ background: 'linear-gradient(to bottom, #b91c1c, #dc262688 60%, #b91c1c)' }} />
          </div>

          {/* Metal clip */}
          <div className="relative flex flex-col items-center -mb-0.5">
            <div className="w-5 h-2 rounded-t-sm" style={{ background: 'linear-gradient(180deg,#ef4444,#b91c1c)', border: '1px solid #991b1b' }} />
            <div className="w-3 h-3 rounded-b-full" style={{ background: 'linear-gradient(180deg,#dc2626,#991b1b)', border: '1px solid #5a3a10' }} />
          </div>

          {/* ID Card */}
          <div
            className="w-48 sm:w-52 overflow-hidden"
            style={{
              backgroundColor: '#0f0f0f',
              border: '1.5px solid #2a2a2a',
              borderRadius: '10px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(220,38,38,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Card top bar */}
            <div
              className="px-3 py-2.5 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #222222 100%)', borderBottom: '1px solid #2a2a2a' }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-black"
                style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', color: '#0a0a0a' }}
              >
                AT
              </div>
              <div>
                <p className="font-bold text-white leading-none" style={{ fontSize: '9px', letterSpacing: '1.5px' }}>PORTFOLIO</p>
                <p style={{ fontSize: '7px', color: '#dc2626', letterSpacing: '0.5px', marginTop: '2px' }}>aldrin b. tanuan</p>
              </div>
              <div className="ml-auto">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
              </div>
            </div>

            {/* Gold accent line */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #dc2626, transparent)' }} />

            {/* Photo */}
            <div className="flex justify-center pt-4 pb-2" style={{ backgroundColor: '#111111' }}>
              <div
                className="overflow-hidden"
                style={{
                  width: '96px',
                  height: '116px',
                  border: '2px solid #2a2a2a',
                  borderRadius: '4px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
                }}
              >
                <img src={idPhoto} alt="Aldrin B. Tanuan" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Info */}
            <div className="px-3 pb-3 text-center" style={{ backgroundColor: '#111111' }}>
              <p className="font-bold tracking-wider" style={{ fontSize: '10px', color: '#ffffff', letterSpacing: '1px' }}>
                ALDRIN B. TANUAN
              </p>
              <div
                className="inline-block px-2 py-0.5 mt-1.5"
                style={{ backgroundColor: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.3)' }}
              >
                <p className="font-semibold" style={{ fontSize: '8px', color: '#dc2626', letterSpacing: '0.8px' }}>WEB DEVELOPER</p>
              </div>
              <p className="mt-2" style={{ fontSize: '7px', color: '#444444', letterSpacing: '0.5px' }}>tanuanaldrin28@gmail.com</p>
            </div>

            {/* Barcode strip */}
            <div className="px-3 pb-3 flex items-center gap-1" style={{ backgroundColor: '#111111', borderTop: '1px solid #1a1a1a' }}>
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i % 3 === 0 ? '3px' : '1.5px',
                    height: i % 5 === 0 ? '18px' : '12px',
                    backgroundColor: '#222222',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Bottom gold line */}
            <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #dc2626, #991b1b, #dc2626)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const typedRole = useTypewriter(ROLES);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ backgroundColor: '#dc2626', opacity: 0.04 }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl" style={{ backgroundColor: '#dc2626', opacity: 0.02 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[85vh]">

          {/* Left */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border"
              style={{ borderColor: '#2a2a2a', backgroundColor: '#111111', color: '#888888' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#dc2626' }} />
              Open to Opportunities
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span style={{ color: '#dc2626' }}>Aldrin!</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-1" style={{ minHeight: '2.5rem' }}>
                <span style={{ color: '#dc2626' }}>{typedRole}</span>
                <span className="inline-block w-0.5 h-7 sm:h-8 ml-0.5" style={{ backgroundColor: '#dc2626', animation: 'blink 1s step-end infinite' }} />
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: '#888888' }}>
              I build responsive web applications and drive business growth through technology.
              Experienced in web development, AI integration, and SaaS sales at Activerse Incorporation.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              {[{ value: '12', label: 'UK Projects' }, { value: '3', label: 'Years Experience' }, { value: '2026', label: 'BSIT Graduate' }].map(({ value, label }) => (
                <div key={label} className="px-4 py-2.5 flex flex-col" style={{ border: '1px solid #1e1e1e', backgroundColor: '#111111' }}>
                  <span className="text-lg font-bold" style={{ color: '#dc2626' }}>{value}</span>
                  <span className="text-xs" style={{ color: '#555555' }}>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={() => scrollTo('experience')}
                className="px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all duration-300 border"
                style={{ borderColor: '#ffffff', backgroundColor: 'transparent', color: '#ffffff' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#ffffff'; (e.currentTarget as HTMLButtonElement).style.color = '#0a0a0a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#ffffff'; }}>
                View My Work <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('contact')}
                className="px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all duration-300 border"
                style={{ borderColor: '#2a2a2a', backgroundColor: 'transparent', color: '#888888' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#dc2626'; (e.currentTarget as HTMLButtonElement).style.color = '#dc2626'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#2a2a2a'; (e.currentTarget as HTMLButtonElement).style.color = '#888888'; }}>
                <Mail className="w-4 h-4" /> Get in Touch
              </button>
            </div>
          </div>

          {/* Right: Swinging ID — anchored to top so lanyard reaches header */}
          <div className="flex justify-center order-1 lg:order-2 self-start lg:-mt-20">
            <SwingingID />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}

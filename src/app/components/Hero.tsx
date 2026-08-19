import { ChevronRight, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
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

const TICKER_ITEMS = [
  'WEB DEVELOPER',
  'FRONTEND DEVELOPER',
  'CLAUDE DEVELOPER',
  'SAAS SALES EXECUTIVE',
  '12 UK PROJECTS',
  '3 YEARS EXPERIENCE',
  'BSIT GRADUATE · 2026',
  'BASED IN THE PHILIPPINES',
  'OPEN TO OPPORTUNITIES',
];

function Ticker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="hero-ticker" style={{ borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--paper)' }}>
      <div className="hero-ticker-track">
        {loop.map((item, i) => (
          <span className="hero-ticker-item" key={i}>
            {item}
            <span className="hero-ticker-dot" style={{ backgroundColor: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)' }} />
          </span>
        ))}
      </div>
    </div>
  );
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
          <div className="w-16 h-1.5 rounded-full mb-0.5" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-2-dim) 20%, var(--accent-2) 50%, var(--accent-2-dim) 80%, transparent)' }} />

          {/* Double-cord lanyard (two parallel strings) */}
          <div className="relative flex items-start justify-center" style={{ height: 'clamp(80px, 14vw, 220px)', width: '16px' }}>
            <div className="absolute w-px h-full left-1" style={{ background: 'linear-gradient(to bottom, var(--accent-2-dim), var(--accent-2)60 60%, var(--accent-2-dim))' }} />
            <div className="absolute w-px h-full right-1" style={{ background: 'linear-gradient(to bottom, var(--accent-2-dim), var(--accent-2)60 60%, var(--accent-2-dim))' }} />
          </div>

          {/* Metal clip */}
          <div className="relative flex flex-col items-center -mb-0.5">
            <div className="w-5 h-2 rounded-t-sm" style={{ background: 'linear-gradient(180deg,var(--accent-2-bright),var(--accent-2-dim))', border: '1px solid var(--accent-2-dim)' }} />
            <div className="w-3 h-3 rounded-b-full" style={{ background: 'linear-gradient(180deg,var(--accent-2),var(--accent-2-dim))', border: '1px solid var(--accent-mute)' }} />
          </div>

          {/* ID Card */}
          <div
            className="w-48 sm:w-52 overflow-hidden"
            style={{
              backgroundColor: 'var(--paper-2)',
              border: '1.5px solid var(--rule)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px oklch(66% 0.235 25 /0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Card top bar */}
            <div
              className="px-3 py-2.5 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, var(--paper-3) 0%, var(--paper-3) 100%)', borderBottom: '1px solid var(--rule)' }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-black"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))', color: 'var(--paper)' }}
              >
                AT
              </div>
              <div>
                <p className="font-bold leading-none" style={{ fontSize: '9px', letterSpacing: '1.5px', color: 'var(--ink)', fontFamily: 'var(--font-mono)' }}>PORTFOLIO</p>
                <p style={{ fontSize: '7px', color: 'var(--accent)', letterSpacing: '0.5px', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>aldrin b. tanuan</p>
              </div>
              <div className="ml-auto">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--status-go)', boxShadow: '0 0 6px var(--status-go)' }} />
              </div>
            </div>

            {/* Gold accent line */}
            <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-2), transparent)' }} />

            {/* Photo */}
            <div className="flex justify-center pt-4 pb-2" style={{ backgroundColor: 'var(--paper-2)' }}>
              <div
                className="overflow-hidden"
                style={{
                  width: '96px',
                  height: '116px',
                  border: '2px solid var(--rule)',
                  borderRadius: '4px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
                }}
              >
                <img src={idPhoto} alt="Aldrin B. Tanuan" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Info */}
            <div className="px-3 pb-3 text-center" style={{ backgroundColor: 'var(--paper-2)' }}>
              <p className="font-bold tracking-wider" style={{ fontSize: '10px', color: 'var(--ink)', letterSpacing: '1px' }}>
                ALDRIN B. TANUAN
              </p>
              <div
                className="inline-block px-2 py-0.5 mt-1.5"
                style={{ backgroundColor: 'oklch(66% 0.235 25 /0.12)', border: '1px solid oklch(66% 0.235 25 /0.3)' }}
              >
                <p className="font-semibold" style={{ fontSize: '8px', color: 'var(--accent)', letterSpacing: '0.8px', fontFamily: 'var(--font-mono)' }}>WEB DEVELOPER</p>
              </div>
              <p className="mt-2" style={{ fontSize: '7px', color: 'var(--ink-faint)', letterSpacing: '0.5px' }}>tanuanaldrin28@gmail.com</p>
            </div>

            {/* Barcode strip */}
            <div className="px-3 pb-3 flex items-center gap-1" style={{ backgroundColor: 'var(--paper-2)', borderTop: '1px solid var(--hairline)' }}>
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i % 3 === 0 ? '3px' : '1.5px',
                    height: i % 5 === 0 ? '18px' : '12px',
                    backgroundColor: 'var(--paper-3)',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Bottom gold line */}
            <div className="h-1.5" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const typedRole = useTypewriter(ROLES);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    { value: '12', label: 'UK Projects' },
    { value: '3', label: 'Years Experience' },
    { value: '2026', label: 'BSIT Graduate' },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col pt-16 sm:pt-20 relative overflow-hidden grid-bg" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)', opacity: 0.1 }} />
        <div className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-2)', opacity: 0.08 }} />
        <div className="absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent-2)', opacity: 0.05 }} />
      </div>

      <Ticker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 lg:py-0 w-full">

          {/* Left */}
          <motion.div
            className="space-y-5 sm:space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border uppercase tracking-wider"
                style={{ borderColor: 'var(--rule)', backgroundColor: 'var(--paper-2)', color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--status-go)' }} />
                Open to Opportunities
              </div>
              <span className="text-xs" style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                14.5995°N 120.9842°E · METRO MANILA, PH
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="font-bold leading-[0.98]" style={{ color: 'var(--ink)', fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', fontFamily: 'var(--font-display)' }}>
                Hi, I'm{' '}
                <span
                  style={{
                    background: 'linear-gradient(100deg, var(--accent) 30%, var(--accent-2) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Aldrin!
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-1" style={{ minHeight: '2.5rem', fontFamily: 'var(--font-display)' }}>
                <span style={{ color: 'var(--accent)' }}>{typedRole}</span>
                <span className="inline-block w-0.5 h-7 sm:h-8 ml-0.5" style={{ backgroundColor: 'var(--accent)', animation: 'blink 1s step-end infinite' }} />
              </h2>
            </div>

            <p className="text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-body)' }}>
              I build responsive web applications and drive business growth through technology.
              Experienced in web development, API integration, tech support, and SaaS sales.
            </p>

            <div
              className="flex flex-wrap gap-x-6 gap-y-3 py-4"
              style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}
            >
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className="flex items-baseline gap-2"
                  style={{
                    paddingRight: i < stats.length - 1 ? '1.5rem' : 0,
                    borderRight: i < stats.length - 1 ? '1px solid var(--hairline)' : 'none',
                  }}
                >
                  <span className="text-2xl" style={{ fontWeight: 800, color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)', fontFamily: 'var(--font-display)' }}>{value}</span>
                  <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button onClick={() => scrollTo('experience')}
                className="px-6 py-3 text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-all duration-300 border"
                style={{ borderColor: 'var(--ink)', backgroundColor: 'transparent', color: 'var(--ink)', fontFamily: 'var(--font-mono)', borderRadius: 'var(--radius-sm)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--ink)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--paper)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)'; }}>
                View My Work <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('contact')}
                className="px-6 py-3 text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-all duration-300 border"
                style={{ borderColor: 'var(--rule)', backgroundColor: 'transparent', color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)', borderRadius: 'var(--radius-sm)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--rule)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-mute)'; }}>
                <Mail className="w-4 h-4" /> Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Right: Swinging ID — anchored to top so the lanyard reads as hanging from the ticker */}
          <motion.div
            className="flex justify-center order-1 lg:order-2 self-start"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <SwingingID />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        aria-label="Scroll to about"
      >
        <span className="text-xs tracking-[0.22em] uppercase" style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)' }}>Scroll</span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)', transformOrigin: 'top' }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.button>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .hero-ticker { position: relative; overflow: hidden; z-index: 1; }
        .hero-ticker::before, .hero-ticker::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 64px; z-index: 2; pointer-events: none;
        }
        .hero-ticker::before { left: 0; background: linear-gradient(90deg, var(--paper) 0%, transparent 100%); }
        .hero-ticker::after { right: 0; background: linear-gradient(270deg, var(--paper) 0%, transparent 100%); }
        .hero-ticker-track {
          display: flex; align-items: center; gap: 2rem; width: max-content; white-space: nowrap;
          padding: 0.6rem 0; animation: hero-ticker-scroll 34s linear infinite;
        }
        .hero-ticker:hover .hero-ticker-track { animation-play-state: paused; }
        .hero-ticker-item {
          display: inline-flex; align-items: center; gap: 2rem;
          font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em;
          color: var(--ink-faint);
        }
        .hero-ticker-dot { width: 3px; height: 3px; border-radius: 999px; background: var(--accent); flex-shrink: 0; }
        @keyframes hero-ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        @media (prefers-reduced-motion: reduce) {
          .hero-ticker-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

import { ExternalLink, Globe, GraduationCap, Sparkles, Zap, Layers, Paintbrush, Droplets, Wrench, Hammer, Home, Building, Wind } from 'lucide-react';
import { motion } from 'motion/react';

import logoIjones       from '../../assets/logos/ijones.svg';
import logoShine        from '../../assets/logos/shine.png';
import logoSparky       from '../../assets/logos/sparky.png';
import logoHampshire    from '../../assets/logos/hampshire.svg';
import logoPhe          from '../../assets/logos/phe.png';
import logoKwikrod      from '../../assets/logos/kwikrod.png';
import logoDd           from '../../assets/logos/ddmaintenance.png';
import logoSa           from '../../assets/logos/sacontractors-logo2.png';
import logoCcj          from '../../assets/logos/ccj.png';
import logoFlat         from '../../assets/logos/flat.svg';
import logoWpe          from '../../assets/logos/wpe.svg';
import logoLondon       from '../../assets/logos/london.png';

export function Projects() {
  const projects = [
    {
      id: 'ijones',
      icon: GraduationCap,
      initials: 'IJ',
      label: 'Training Platform',
      title: 'iJones Training',
      url: 'https://ijonestraining.center/',
      displayUrl: 'ijonestraining.center',
      description: 'Logistics and transport training provider in Telford — ADR, Driver CPC, Forklift, and Transport Manager CPC courses backed by 30+ years of experience.',
      logo: logoIjones,
      logoBg: 'rgba(180,140,20,0.12)',
      gradient: 'linear-gradient(135deg, #0d1b2e 0%, #1a3550 50%, #0f2640 100%)',
      accentColor: '#3b82f6',
      glowColor: 'rgba(59,130,246,0.15)',
    },
    {
      id: 'shine',
      icon: Sparkles,
      initials: 'LS',
      label: 'Service Website',
      title: 'Look at Them Shine',
      url: 'https://lookatthemshine.co.uk',
      displayUrl: 'lookatthemshine.co.uk',
      description: 'Exterior cleaning services across Norwich & Norfolk — window cleaning, gutter cleaning, and fascia & soffit cleaning for homes and businesses.',
      logo: logoShine,
      logoBg: 'rgba(255,255,255,0.95)',
      gradient: 'linear-gradient(135deg, #071a1a 0%, #0d3030 50%, #0a2525 100%)',
      accentColor: '#06b6d4',
      glowColor: 'rgba(6,182,212,0.15)',
    },
    {
      id: 'sparky',
      icon: Zap,
      initials: 'WF',
      label: 'Electrical Services',
      title: 'West Fife Sparky',
      url: 'https://westfifesparky.com/',
      displayUrl: 'westfifesparky.com',
      description: 'Trusted electrician based in West Fife, Scotland — domestic and commercial electrical installations, rewiring, fault finding, and EV charger fitting.',
      logo: logoSparky,
      logoBg: 'rgba(255,255,255,0.95)',
      gradient: 'linear-gradient(135deg, #1a1400 0%, #2d2200 50%, #1f1800 100%)',
      accentColor: '#eab308',
      glowColor: 'rgba(234,179,8,0.15)',
    },
    {
      id: 'hampshire',
      icon: Layers,
      initials: 'HW',
      label: 'Windows & Glazing',
      title: 'Hampshire Windows',
      url: 'https://hampshirewindows.com/',
      displayUrl: 'hampshirewindows.com',
      description: 'Window and door specialists across Hampshire — uPVC, aluminium, and composite installations for residential properties with free quotes and supply.',
      logo: logoHampshire,
      logoBg: 'rgba(22,101,52,0.15)',
      gradient: 'linear-gradient(135deg, #0a1520 0%, #0f2535 50%, #0c1e30 100%)',
      accentColor: '#60a5fa',
      glowColor: 'rgba(96,165,250,0.15)',
    },
    {
      id: 'phe',
      icon: Paintbrush,
      initials: 'PH',
      label: 'Decorating Services',
      title: 'PHE Decorating',
      url: 'https://phedecorating.co.uk/',
      displayUrl: 'phedecorating.co.uk',
      description: 'Professional painting and decorating company in the UK — interior and exterior decoration, wallpapering, and colour consultancy for homes and commercial spaces.',
      logo: logoPhe,
      logoBg: 'rgba(255,255,255,0.95)',
      gradient: 'linear-gradient(135deg, #1a0d00 0%, #2d1a00 50%, #221000 100%)',
      accentColor: '#f97316',
      glowColor: 'rgba(249,115,22,0.15)',
    },
    {
      id: 'kwikrod',
      icon: Droplets,
      initials: 'KR',
      label: 'Drainage Solutions',
      title: 'Kwikrod',
      url: 'https://kwikrod.co.uk/',
      displayUrl: 'kwikrod.co.uk',
      description: 'Fast drainage and unblocking specialists in the UK — drain jetting, CCTV surveys, rod services, and emergency call-outs for residential and commercial clients.',
      logo: logoKwikrod,
      logoBg: 'rgba(14,30,60,0.6)',
      gradient: 'linear-gradient(135deg, #05101a 0%, #0a1e30 50%, #071525 100%)',
      accentColor: '#0ea5e9',
      glowColor: 'rgba(14,165,233,0.15)',
    },
    {
      id: 'ddmaintenance',
      icon: Wrench,
      initials: 'DD',
      label: 'Property Maintenance',
      title: 'DD Maintenance',
      url: 'https://ddpropertymaintenace.co.uk/',
      displayUrl: 'ddpropertymaintenace.co.uk',
      description: 'All-trades property maintenance company in the UK — plumbing, electrical, tiling, carpentry, and general repairs for landlords, letting agents, and homeowners.',
      logo: logoDd,
      logoBg: 'rgba(255,255,255,0.95)',
      gradient: 'linear-gradient(135deg, #0d0d14 0%, #14142a 50%, #0f0f1e 100%)',
      accentColor: '#8b5cf6',
      glowColor: 'rgba(139,92,246,0.15)',
    },
    {
      id: 'sacontractors',
      icon: Hammer,
      initials: 'SA',
      label: 'Building Contractors',
      title: 'SA Contractors',
      url: 'https://sacontractors.co.uk/',
      displayUrl: 'sacontractors.co.uk',
      description: 'Experienced building contractors in the UK — extensions, loft conversions, refurbishments, and new builds delivered to a high standard for residential clients.',
      logo: logoSa,
      logoBg: 'rgba(255,255,255,0.95)',
      gradient: 'linear-gradient(135deg, #1a0e00 0%, #2d1a00 50%, #231200 100%)',
      accentColor: '#f59e0b',
      glowColor: 'rgba(245,158,11,0.15)',
    },
    {
      id: 'ccjgroundworks',
      icon: Building,
      initials: 'CC',
      label: 'Groundworks',
      title: 'CCJ Groundworks',
      url: 'https://ccjgroundworks.co.uk/',
      displayUrl: 'ccjgroundworks.co.uk',
      description: 'Specialist groundworks contractor in the UK — foundations, drainage, concrete works, landscaping groundworks, and site preparation for construction projects.',
      logo: logoCcj,
      logoBg: 'rgba(255,255,255,0.95)',
      gradient: 'linear-gradient(135deg, #100e04 0%, #1e1a06 50%, #161202 100%)',
      accentColor: '#84cc16',
      glowColor: 'rgba(132,204,22,0.15)',
    },
    {
      id: 'flatroofing',
      icon: Home,
      initials: 'FR',
      label: 'Flat Roofing',
      title: 'Flat Roofing Guys',
      url: 'https://flatroofingguys.co.uk/',
      displayUrl: 'flatroofingguys.co.uk',
      description: 'Flat roofing specialists across the UK — GRP fibreglass, EPDM rubber, torch-on felt, and roof repairs with comprehensive guarantees for homes and commercial buildings.',
      logo: logoFlat,
      logoBg: 'rgba(0,0,0,0)',
      gradient: 'linear-gradient(135deg, #0a0a14 0%, #14142a 50%, #0d0d20 100%)',
      accentColor: '#a78bfa',
      glowColor: 'rgba(167,139,250,0.15)',
    },
    {
      id: 'wpe',
      icon: Hammer,
      initials: 'WP',
      label: 'Property Improvements',
      title: 'WPE Property Improvements',
      url: 'https://www.wpepropertyimprovementsltd.co.uk/',
      displayUrl: 'wpepropertyimprovementsltd.co.uk',
      description: 'Full-service property improvement company in the UK — kitchens, bathrooms, extensions, and renovation projects managed end-to-end for homeowners and landlords.',
      logo: logoWpe,
      logoBg: 'rgba(0,0,0,0)',
      gradient: 'linear-gradient(135deg, #140a0a 0%, #241212 50%, #1a0c0c 100%)',
      accentColor: '#f43f5e',
      glowColor: 'rgba(244,63,94,0.15)',
    },
    {
      id: 'londonpressure',
      icon: Wind,
      initials: 'LP',
      label: 'Pressure Washing',
      title: 'London Pressure Wash',
      url: 'https://londonpressurewash.co.uk/',
      displayUrl: 'londonpressurewash.co.uk',
      description: 'Professional pressure washing and exterior cleaning in London — driveways, patios, decking, render, and commercial facades restored to pristine condition.',
      logo: logoLondon,
      logoBg: 'rgba(255,255,255,0.95)',
      gradient: 'linear-gradient(135deg, #001a14 0%, #003025 50%, #00221a 100%)',
      accentColor: '#2dd4bf',
      glowColor: 'rgba(45,212,191,0.15)',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative grid-bg" style={{ backgroundColor: '#131309', borderTop: '1px solid #282812' }}>
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#f5a623 1px, transparent 1px), linear-gradient(90deg, #f5a623 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#f5a623' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#f5a623' }}>
              03 — Client Work · United Kingdom
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Projects</h2>
          <p className="mt-3 text-sm sm:text-base max-w-xl" style={{ color: '#888888' }}>
            Websites built for UK-based businesses — designed, developed, and delivered remotely.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group flex flex-col transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: '#1b1b0d', border: '1px solid #282812' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.36), ease: [0.21, 0.47, 0.32, 0.98] }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,166,35,0.4)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#282812';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {/* Browser Window Mockup */}
              <div className="relative overflow-hidden" style={{ height: '160px', backgroundColor: '#0d0d09' }}>
                {/* Ambient glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 50% 60%, ${project.glowColor} 0%, transparent 70%)` }}
                />

                {/* Browser chrome */}
                <div
                  className="relative z-10 flex items-center gap-2 px-3 py-2"
                  style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#28c840' }} />
                  </div>
                  <div
                    className="flex-1 flex items-center gap-1.5 px-2 py-0.5"
                    style={{ backgroundColor: 'rgba(0,0,0,0.35)', borderRadius: '3px' }}
                  >
                    <svg className="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="truncate" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>{project.displayUrl}</span>
                  </div>
                </div>

                {/* Logo display */}
                <div className="absolute inset-0 top-[33px] flex items-center justify-center z-10 px-4">
                  <div
                    className="flex items-center justify-center rounded-lg px-4 py-3 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: project.logoBg,
                      backdropFilter: project.logoBg !== 'rgba(0,0,0,0)' ? 'blur(2px)' : undefined,
                      boxShadow: project.logoBg !== 'rgba(0,0,0,0)' ? '0 4px 20px rgba(0,0,0,0.3)' : undefined,
                      maxWidth: '85%',
                    }}
                  >
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      style={{
                        maxWidth: '140px',
                        maxHeight: '56px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>

                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none z-20"
                  style={{ background: 'linear-gradient(to bottom, transparent, #1b1b0d)' }}
                />
              </div>

              {/* Card Info */}
              <div className="px-4 pt-3 pb-2.5" style={{ borderBottom: '1px solid #282812' }}>
                <div className="flex items-center justify-between mb-1.5">
                  <p style={{ fontSize: '9px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.label}</p>
                  <span
                    className="px-1.5 py-0.5 font-medium"
                    style={{ backgroundColor: '#1e1e0c', border: '1px solid #302e14', color: '#888888', fontSize: '10px' }}
                  >
                    🇬🇧 UK
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1 leading-tight">{project.title}</h3>
                <p className="flex items-center gap-1" style={{ color: '#777777', fontSize: '10px' }}>
                  <Globe className="w-2.5 h-2.5" />{project.displayUrl}
                </p>
              </div>

              {/* Description + Tags */}
              <div className="flex-1 px-4 py-3 space-y-2.5">
                <p className="leading-relaxed" style={{ color: '#aaaaaa', fontSize: '11px' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {['HTML', 'CSS', 'JS', 'UK Client'].map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5"
                      style={{
                        backgroundColor: tag === 'UK Client' ? 'rgba(245,166,35,0.08)' : '#131309',
                        border: tag === 'UK Client' ? '1px solid rgba(245,166,35,0.25)' : '1px solid #222222',
                        color: tag === 'UK Client' ? '#f5a623' : '#666666',
                        fontSize: '10px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visit Button */}
              <div className="px-4 pb-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium transition-all duration-300"
                  style={{ border: '1px solid #302e14', color: '#888888', backgroundColor: 'transparent' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#f5a623';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#f5a623';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(245,166,35,0.05)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#302e14';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#888888';
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <ExternalLink className="w-3 h-3" />
                  Visit Live Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

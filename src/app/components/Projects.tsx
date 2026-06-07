import { ExternalLink, Globe, GraduationCap, Sparkles, Truck } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 'ijones',
      icon: GraduationCap,
      initials: 'IJ',
      label: 'Training Platform',
      title: 'iJones Training',
      url: 'https://ijones-training.co.uk/',
      displayUrl: 'ijones-training.co.uk',
      description:
        'Logistics and transport training provider in Telford — ADR, Driver CPC, Forklift, and Transport Manager CPC courses backed by 30+ years of experience.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UK Client'],
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
      description:
        'Exterior cleaning services across Norwich & Norfolk — window cleaning, gutter cleaning, and fascia & soffit cleaning for homes and businesses.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UK Client'],
      gradient: 'linear-gradient(135deg, #071a1a 0%, #0d3030 50%, #0a2525 100%)',
      accentColor: '#06b6d4',
      glowColor: 'rgba(6,182,212,0.15)',
    },
    {
      id: 'vanhelps',
      icon: Truck,
      initials: 'MV',
      label: 'Removals & Clearance',
      title: 'Man and Van Helps',
      url: 'https://manandvanhelps.co.uk/',
      displayUrl: 'manandvanhelps.co.uk',
      description:
        '24/7 removal and clearance company in Cambridgeshire — house removals, waste removal, end of tenancy cleaning across 30+ towns in East England.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UK Client'],
      gradient: 'linear-gradient(135deg, #0d1a05 0%, #1a3010 50%, #122008 100%)',
      accentColor: '#22c55e',
      glowColor: 'rgba(34,197,94,0.15)',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative" style={{ backgroundColor: '#0d0d0d', borderTop: '1px solid #1e1e1e' }}>
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#c9a84c' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#c9a84c' }}>
              Client Work · United Kingdom
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Projects</h2>
          <p className="mt-3 text-sm sm:text-base max-w-xl" style={{ color: '#888888' }}>
            Websites built for UK-based businesses — designed, developed, and delivered remotely.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group flex flex-col transition-all duration-300 overflow-hidden"
                style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.4)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Browser Window Mockup */}
                <div className="relative overflow-hidden" style={{ height: '200px', background: project.gradient }}>

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
                    {/* Traffic lights */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28c840' }} />
                    </div>
                    {/* Address bar */}
                    <div
                      className="flex-1 flex items-center gap-1.5 px-2.5 py-1 text-xs"
                      style={{ backgroundColor: 'rgba(0,0,0,0.35)', borderRadius: '3px', color: 'rgba(255,255,255,0.5)' }}
                    >
                      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span className="truncate">{project.displayUrl}</span>
                    </div>
                  </div>

                  {/* Preview content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-[calc(200px-37px)]">
                    {/* Large initials watermark */}
                    <span
                      className="select-none font-black leading-none"
                      style={{ fontSize: '80px', color: 'rgba(255,255,255,0.04)', letterSpacing: '-4px' }}
                    >
                      {project.initials}
                    </span>
                    {/* Centered icon */}
                    <div
                      className="absolute flex items-center justify-center w-14 h-14"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        border: `1px solid ${project.accentColor}40`,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: project.accentColor }} />
                    </div>
                  </div>

                  {/* Bottom fade into card */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent, #111111)' }}
                  />
                </div>

                {/* Card Info */}
                <div className="px-5 pt-4 pb-3" style={{ borderBottom: '1px solid #1a1a1a' }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs uppercase tracking-widest" style={{ color: '#555555' }}>{project.label}</p>
                    <span
                      className="text-xs px-2 py-0.5 font-medium"
                      style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#888888' }}
                    >
                      🇬🇧 UK
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs flex items-center gap-1" style={{ color: '#444444' }}>
                    <Globe className="w-3 h-3" />{project.displayUrl}
                  </p>
                </div>

                {/* Description + Tags */}
                <div className="flex-1 px-5 py-4 space-y-3">
                  <p className="text-xs leading-relaxed" style={{ color: '#777777' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5"
                        style={{
                          backgroundColor: tag === 'UK Client' ? 'rgba(201,168,76,0.08)' : '#0a0a0a',
                          border: tag === 'UK Client' ? '1px solid rgba(201,168,76,0.25)' : '1px solid #222222',
                          color: tag === 'UK Client' ? '#c9a84c' : '#666666',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <div className="px-5 pb-5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-all duration-300"
                    style={{ border: '1px solid #2a2a2a', color: '#888888', backgroundColor: 'transparent' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#c9a84c';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(201,168,76,0.05)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#2a2a2a';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#888888';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visit Live Site
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, Globe, GraduationCap, Sparkles, Truck } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 'ijones',
      initials: 'IJ',
      icon: GraduationCap,
      label: 'Training Platform',
      title: 'iJones Training',
      url: 'https://ijones-training.co.uk/',
      displayUrl: 'ijones-training.co.uk',
      description:
        'A professional logistics and transport training website for a family-run provider based in Telford. Offers ADR, Driver CPC, Forklift, and Transport Manager CPC courses backed by over 30 years of industry experience.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UK Client'],
      accent: '#c9a84c',
    },
    {
      id: 'shine',
      initials: 'LS',
      icon: Sparkles,
      label: 'Service Website',
      title: 'Look at Them Shine',
      url: 'https://lookatthemshine.co.uk',
      displayUrl: 'lookatthemshine.co.uk',
      description:
        'A clean and modern website for a family-run exterior cleaning business serving homes and businesses across Norwich and Norfolk — covering window cleaning, gutter cleaning, and fascia & soffit cleaning.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UK Client'],
      accent: '#c9a84c',
    },
    {
      id: 'vanhelps',
      initials: 'MV',
      icon: Truck,
      label: 'Removals & Clearance',
      title: 'Man and Van Helps',
      url: 'https://manandvanhelps.co.uk/',
      displayUrl: 'manandvanhelps.co.uk',
      description:
        'A 24/7 removals and clearance company website based in Cambridgeshire, covering house removals, waste removal, end of tenancy cleaning, and garden clearance across 30+ towns in East England.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UK Client'],
      accent: '#c9a84c',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Projects
          </h2>
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
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.5)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Card Header */}
                <div className="relative px-6 pt-6 pb-5" style={{ borderBottom: '1px solid #1e1e1e' }}>
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 flex items-center justify-center text-lg font-bold"
                      style={{
                        backgroundColor: 'rgba(201,168,76,0.1)',
                        border: '1px solid rgba(201,168,76,0.25)',
                        color: '#c9a84c',
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* UK badge */}
                    <span
                      className="text-xs px-2.5 py-1 font-medium tracking-wide"
                      style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#888888' }}
                    >
                      🇬🇧 UK
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#555555' }}>
                    {project.label}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs" style={{ color: '#555555' }}>
                    <Globe className="w-3 h-3 inline mr-1" />
                    {project.displayUrl}
                  </p>
                </div>

                {/* Card Body */}
                <div className="flex-1 px-6 py-5 space-y-4">
                  <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1"
                        style={{
                          backgroundColor: tag === 'UK Client' ? 'rgba(201,168,76,0.08)' : '#0a0a0a',
                          border: tag === 'UK Client' ? '1px solid rgba(201,168,76,0.25)' : '1px solid #2a2a2a',
                          color: tag === 'UK Client' ? '#c9a84c' : '#777777',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6">
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

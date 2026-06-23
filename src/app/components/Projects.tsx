import { ExternalLink, Globe, GraduationCap, Sparkles, Zap, Layers, Paintbrush, Droplets, Wrench, Hammer, Home, Building, Wind } from 'lucide-react';

import imgIjones from '../../assets/screenshots/ijones-training.jpg';
import imgShine from '../../assets/screenshots/lookatthemshine.jpg';
import imgSparky from '../../assets/screenshots/westfifesparky.jpg';
import imgHampshire from '../../assets/screenshots/hampshirewindows.jpg';
import imgPhe from '../../assets/screenshots/phedecorating.jpg';
import imgKwikrod from '../../assets/screenshots/kwikrod.jpg';
import imgDd from '../../assets/screenshots/ddmaintenance.jpg';
import imgSa from '../../assets/screenshots/sacontractors.jpg';
import imgCcj from '../../assets/screenshots/ccjgroundworks.jpg';
import imgFlat from '../../assets/screenshots/flatroofingguys.jpg';
import imgWpe from '../../assets/screenshots/wpe.jpg';
import imgLondon from '../../assets/screenshots/londonpressurewash.jpg';

export function Projects() {
  const projects = [
    {
      id: 'ijones',
      icon: GraduationCap,
      label: 'Training Platform',
      title: 'iJones Training',
      url: 'https://ijones-training.co.uk/',
      displayUrl: 'ijones-training.co.uk',
      description: 'Logistics and transport training provider in Telford — ADR, Driver CPC, Forklift, and Transport Manager CPC courses backed by 30+ years of experience.',
      screenshot: imgIjones,
      accentColor: '#3b82f6',
    },
    {
      id: 'shine',
      icon: Sparkles,
      label: 'Service Website',
      title: 'Look at Them Shine',
      url: 'https://lookatthemshine.co.uk',
      displayUrl: 'lookatthemshine.co.uk',
      description: 'Exterior cleaning services across Norwich & Norfolk — window cleaning, gutter cleaning, and fascia & soffit cleaning for homes and businesses.',
      screenshot: imgShine,
      accentColor: '#06b6d4',
    },
    {
      id: 'sparky',
      icon: Zap,
      label: 'Electrical Services',
      title: 'West Fife Sparky',
      url: 'https://westfifesparky.com/',
      displayUrl: 'westfifesparky.com',
      description: 'Trusted electrician based in West Fife, Scotland — domestic and commercial electrical installations, rewiring, fault finding, and EV charger fitting.',
      screenshot: imgSparky,
      accentColor: '#eab308',
    },
    {
      id: 'hampshire',
      icon: Layers,
      label: 'Windows & Glazing',
      title: 'Hampshire Windows',
      url: 'https://hampshirewindows.com/',
      displayUrl: 'hampshirewindows.com',
      description: 'Window and door specialists across Hampshire — uPVC, aluminium, and composite installations for residential properties with free quotes and supply.',
      screenshot: imgHampshire,
      accentColor: '#60a5fa',
    },
    {
      id: 'phe',
      icon: Paintbrush,
      label: 'Decorating Services',
      title: 'PHE Decorating',
      url: 'https://phedecorating.co.uk/',
      displayUrl: 'phedecorating.co.uk',
      description: 'Professional painting and decorating company in the UK — interior and exterior decoration, wallpapering, and colour consultancy for homes and commercial spaces.',
      screenshot: imgPhe,
      accentColor: '#f97316',
    },
    {
      id: 'kwikrod',
      icon: Droplets,
      label: 'Drainage Solutions',
      title: 'Kwikrod',
      url: 'https://kwikrod.co.uk/',
      displayUrl: 'kwikrod.co.uk',
      description: 'Fast drainage and unblocking specialists in the UK — drain jetting, CCTV surveys, rod services, and emergency call-outs for residential and commercial clients.',
      screenshot: imgKwikrod,
      accentColor: '#0ea5e9',
    },
    {
      id: 'ddmaintenance',
      icon: Wrench,
      label: 'Property Maintenance',
      title: 'DD Maintenance',
      url: 'https://ddmaintenance.co.uk/',
      displayUrl: 'ddmaintenance.co.uk',
      description: 'All-trades property maintenance company in the UK — plumbing, electrical, tiling, carpentry, and general repairs for landlords, letting agents, and homeowners.',
      screenshot: imgDd,
      accentColor: '#8b5cf6',
    },
    {
      id: 'sacontractors',
      icon: Hammer,
      label: 'Building Contractors',
      title: 'SA Contractors',
      url: 'https://sacontractors.co.uk/',
      displayUrl: 'sacontractors.co.uk',
      description: 'Experienced building contractors in the UK — extensions, loft conversions, refurbishments, and new builds delivered to a high standard for residential clients.',
      screenshot: imgSa,
      accentColor: '#f59e0b',
    },
    {
      id: 'ccjgroundworks',
      icon: Building,
      label: 'Groundworks',
      title: 'CCJ Groundworks',
      url: 'https://ccjgroundworks.co.uk/',
      displayUrl: 'ccjgroundworks.co.uk',
      description: 'Specialist groundworks contractor in the UK — foundations, drainage, concrete works, landscaping groundworks, and site preparation for construction projects.',
      screenshot: imgCcj,
      accentColor: '#84cc16',
    },
    {
      id: 'flatroofing',
      icon: Home,
      label: 'Flat Roofing',
      title: 'Flat Roofing Guys',
      url: 'https://flatroofingguys.co.uk/',
      displayUrl: 'flatroofingguys.co.uk',
      description: 'Flat roofing specialists across the UK — GRP fibreglass, EPDM rubber, torch-on felt, and roof repairs with comprehensive guarantees for homes and commercial buildings.',
      screenshot: imgFlat,
      accentColor: '#a78bfa',
    },
    {
      id: 'wpe',
      icon: Hammer,
      label: 'Property Improvements',
      title: 'WPE Property Improvements',
      url: 'https://www.wpepropertyimprovementsltd.co.uk/',
      displayUrl: 'wpepropertyimprovementsltd.co.uk',
      description: 'Full-service property improvement company in the UK — kitchens, bathrooms, extensions, and renovation projects managed end-to-end for homeowners and landlords.',
      screenshot: imgWpe,
      accentColor: '#f43f5e',
    },
    {
      id: 'londonpressure',
      icon: Wind,
      label: 'Pressure Washing',
      title: 'London Pressure Wash',
      url: 'https://londonpressurewash.co.uk/',
      displayUrl: 'londonpressurewash.co.uk',
      description: 'Professional pressure washing and exterior cleaning in London — driveways, patios, decking, render, and commercial facades restored to pristine condition.',
      screenshot: imgLondon,
      accentColor: '#2dd4bf',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
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
                <div className="relative overflow-hidden" style={{ height: '180px', backgroundColor: '#0a0a0a' }}>

                  {/* Browser chrome */}
                  <div
                    className="relative z-20 flex items-center gap-2 px-3 py-2"
                    style={{ backgroundColor: 'rgba(15,15,15,0.95)', backdropFilter: 'blur(4px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {/* Traffic lights */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#28c840' }} />
                    </div>
                    {/* Address bar */}
                    <div
                      className="flex-1 flex items-center gap-1.5 px-2 py-0.5"
                      style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '3px' }}
                    >
                      <svg className="w-2.5 h-2.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span className="truncate" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>{project.displayUrl}</span>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="absolute inset-0 top-[33px] overflow-hidden">
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle dark overlay so text below reads well */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 60%, rgba(17,17,17,0.9) 100%)' }} />
                  </div>
                </div>

                {/* Card Info */}
                <div className="px-4 pt-3 pb-2.5" style={{ borderBottom: '1px solid #1a1a1a' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p style={{ fontSize: '9px', color: '#555555', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{project.label}</p>
                    <span
                      className="px-1.5 py-0.5 font-medium"
                      style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#888888', fontSize: '10px' }}
                    >
                      🇬🇧 UK
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 leading-tight">{project.title}</h3>
                  <p className="flex items-center gap-1" style={{ color: '#444444', fontSize: '10px' }}>
                    <Globe className="w-2.5 h-2.5" />{project.displayUrl}
                  </p>
                </div>

                {/* Description + Tags */}
                <div className="flex-1 px-4 py-3 space-y-2.5">
                  <p className="leading-relaxed" style={{ color: '#777777', fontSize: '11px' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {['HTML', 'CSS', 'JS', 'UK Client'].map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5"
                        style={{
                          backgroundColor: tag === 'UK Client' ? 'rgba(201,168,76,0.08)' : '#0a0a0a',
                          border: tag === 'UK Client' ? '1px solid rgba(201,168,76,0.25)' : '1px solid #222222',
                          color: tag === 'UK Client' ? '#c9a84c' : '#666666',
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
                    <ExternalLink className="w-3 h-3" />
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

import { Briefcase, ShoppingBag, Headphones, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'Claude Developer',
      company: 'Freelance',
      period: '2026',
      description: 'Built AI-powered tools and automated workflows using Anthropic\'s Claude API.',
      tags: ['Claude AI', 'Prompt Engineering', 'Automation'],
      icon: Globe,
    },
    {
      title: 'Web Developer',
      company: 'Freelance',
      period: '2026',
      description: 'Built responsive web apps and landing pages for clients using modern frontend stack.',
      tags: ['HTML/CSS', 'JavaScript', 'React'],
      icon: Globe,
    },
    {
      title: 'SaaS Sales Executive',
      company: 'Freelance',
      period: '2025',
      description: 'Drove B2B SaaS sales through client demos, pipeline management, and deal closing.',
      tags: ['B2B Sales', 'CRM', 'Lead Generation'],
      icon: TrendingUp,
    },
    {
      title: 'Tech Support Specialist',
      company: 'Freelance',
      period: '2023–2024',
      description: 'Resolved software issues and escalated complex tickets while maintaining high CSAT.',
      tags: ['Troubleshooting', 'Ticketing', 'Customer Success'],
      icon: Headphones,
    },
    {
      title: 'Product Listing Specialist',
      company: 'Shopify / Activerse',
      period: '2022–2023',
      description: 'Optimized Shopify product listings with SEO-friendly content and catalog management.',
      tags: ['Shopify', 'SEO', 'E-commerce'],
      icon: ShoppingBag,
    },
    {
      title: 'Game Tester',
      company: 'AI Company',
      period: '2025',
      description: 'Identified bugs and evaluated gameplay mechanics to ensure quality and performance.',
      tags: ['QA Testing', 'Bug Reporting', 'Game Mechanics'],
      icon: Briefcase,
    },
    {
      title: 'Frontend Developer',
      company: 'VAWC System',
      period: '2024',
      description: 'Built accessible, responsive UI for an online case filing system for barangay use.',
      tags: ['React', 'TypeScript', 'UI/UX'],
      icon: Briefcase,
    },
    {
      title: 'QA / System Tester',
      company: 'VAWC System',
      period: '2024',
      description: 'Conducted functional testing and verified fixes to maintain platform reliability.',
      tags: ['Testing', 'QA', 'Documentation'],
      icon: Briefcase,
    },
    {
      title: 'System Developer',
      company: 'Boarding House System',
      period: '2023',
      description: 'Assisted in building a management system for tenant records and payment tracking.',
      tags: ['System Design', 'Database', 'Development'],
      icon: Briefcase,
    },
    {
      title: 'Streamer & Coordinator',
      company: 'Axie Infinity Community',
      period: '2021',
      description: 'Managed community events, Discord moderation, and live streaming for Axie players.',
      tags: ['Community', 'Streaming', 'Discord'],
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 grid-bg" style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--hairline)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>02 — Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--ink)' }}>Experience</h2>
        </motion.div>

        {/* Manifest header row — desktop only */}
        <div
          className="hidden lg:grid gap-4 px-4 pb-3 text-xs uppercase tracking-widest"
          style={{
            gridTemplateColumns: '3.5rem 1fr 11rem 7rem',
            color: 'var(--ink-faint)',
            fontFamily: 'var(--font-mono)',
            borderBottom: '1px solid var(--rule)',
          }}
        >
          <span>Nº</span>
          <span>Role · Company</span>
          <span>Focus</span>
          <span style={{ textAlign: 'right' }}>Period</span>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isOngoing = exp.period.includes('2026');
            return (
              <motion.div
                key={index}
                className="group grid grid-cols-1 lg:items-center gap-3 lg:gap-4 px-4 py-5 transition-all duration-300"
                style={{
                  gridTemplateColumns: '3.5rem 1fr 11rem 7rem',
                  borderBottom: '1px solid var(--hairline)',
                  borderLeft: '2px solid transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--paper-2)';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'transparent';
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4), ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="flex items-center gap-3 lg:block">
                  <span className="text-xs" style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="w-8 h-8 flex items-center justify-center lg:hidden"
                    style={{ backgroundColor: 'oklch(66% 0.235 25 / 0.1)', border: '1px solid oklch(66% 0.235 25 / 0.2)', borderRadius: 'var(--radius-sm)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-7 h-7 items-center justify-center hidden lg:flex flex-shrink-0"
                      style={{ backgroundColor: 'oklch(66% 0.235 25 / 0.1)', border: '1px solid oklch(66% 0.235 25 / 0.2)', borderRadius: 'var(--radius-sm)' }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold leading-snug" style={{ color: 'var(--ink)' }}>
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-xs mb-2" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}>{exp.company}</p>
                  <p className="text-xs leading-relaxed mb-2.5 max-w-xl" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-body)' }}>
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5"
                        style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--hairline)', color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)', borderRadius: 'var(--radius-xs)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 uppercase tracking-wider"
                    style={{
                      color: isOngoing ? 'var(--status-go)' : 'var(--ink-faint)',
                      border: `1px solid ${isOngoing ? 'oklch(72% 0.150 145 / 0.35)' : 'var(--hairline)'}`,
                      fontFamily: 'var(--font-mono)',
                      borderRadius: 'var(--radius-xs)',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isOngoing ? 'var(--status-go)' : 'var(--ink-faint)' }} />
                    {isOngoing ? 'Ongoing' : 'Logged'}
                  </span>
                </div>

                <div className="text-left lg:text-right">
                  <span className="text-xs" style={{ color: 'var(--ink-faint)', fontFamily: 'var(--font-mono)' }}>
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

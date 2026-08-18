import { Briefcase, ShoppingBag, Headphones, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: 'Claude Developer',
      company: 'Activerse Inc.',
      period: '2026',
      description: 'Built AI-powered tools and automated workflows using Anthropic\'s Claude API.',
      tags: ['Claude AI', 'Prompt Engineering', 'Automation'],
      icon: Globe,
    },
    {
      title: 'Web Developer',
      company: 'Activerse Inc.',
      period: '2026',
      description: 'Built responsive web apps and landing pages for clients using modern frontend stack.',
      tags: ['HTML/CSS', 'JavaScript', 'React'],
      icon: Globe,
    },
    {
      title: 'SaaS Sales Executive',
      company: 'Activerse Inc.',
      period: '2025',
      description: 'Drove B2B SaaS sales through client demos, pipeline management, and deal closing.',
      tags: ['B2B Sales', 'CRM', 'Lead Generation'],
      icon: TrendingUp,
    },
    {
      title: 'Tech Support Specialist',
      company: 'Activerse Inc.',
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
    <section id="experience" className="py-12 sm:py-16 md:py-24 grid-bg" style={{ backgroundColor: '#131309', borderTop: '1px solid #282812' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#f5a623' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#f5a623' }}>02 — Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                className="p-4 transition-all duration-300"
                style={{ backgroundColor: '#1b1b0d', border: '1px solid #282812', borderLeft: '2px solid rgba(245,166,35,0.35)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,166,35,0.4)';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = '#f5a623';
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1b1b0c';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#282812';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = 'rgba(245,166,35,0.35)';
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1b1b0d';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.42), ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#f5a623' }} />
                  </div>
                  <span
                    className="text-xs px-2 py-0.5"
                    style={{ backgroundColor: '#1e1e0c', border: '1px solid #302e14', color: '#666666' }}
                  >
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-sm font-bold mb-2 leading-snug" style={{ color: '#ffffff' }}>
                  {exp.title}
                </h3>

                <p className="text-xs leading-relaxed mb-3" style={{ color: '#666666' }}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5"
                      style={{ backgroundColor: '#131309', border: '1px solid #222222', color: '#777777' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

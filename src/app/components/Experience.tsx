import { Briefcase, ShoppingBag, Headphones, TrendingUp, Globe } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'Activerse Incorporation',
      period: '2026',
      description: 'Developed and maintained web applications and landing pages for clients. Built responsive interfaces using modern frontend technologies, collaborated with the design team to implement UI/UX improvements, and ensured cross-browser compatibility and performance optimization.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
      icon: Globe,
    },
    {
      title: 'SaaS Sales Executive',
      company: 'Activerse Incorporation',
      period: '2025',
      description: 'Drove SaaS product sales by identifying and engaging potential clients, delivering compelling product demos, and closing deals. Built strong client relationships, managed the sales pipeline, and collaborated with the team to exceed revenue targets and expand the customer base.',
      tags: ['B2B Sales', 'CRM', 'Lead Generation', 'Product Demos', 'Client Relations'],
      icon: TrendingUp,
    },
    {
      title: 'Tech Support Specialist',
      company: 'Activerse Incorporation',
      period: '2023 – 2024',
      description: 'Provided first and second-line technical support to end users, troubleshooting software issues, account configurations, and system integrations. Documented bug reports and escalated complex tickets to the engineering team. Maintained a high customer satisfaction score by resolving issues promptly and clearly communicating solutions.',
      tags: ['Troubleshooting', 'Ticketing Systems', 'Software Support', 'Customer Success'],
      icon: Headphones,
    },
    {
      title: 'Product Listing Specialist',
      company: 'Shopify / Activerse Incorporation',
      period: '2022 – 2023',
      description: 'Managed and optimized product listings on Shopify, ensuring accurate descriptions, high-quality images, and SEO-friendly content. Maintained organized product catalogs, monitored inventory updates, and worked to enhance product visibility and drive conversions through compelling listing strategies.',
      tags: ['Shopify', 'SEO', 'Product Management', 'E-commerce'],
      icon: ShoppingBag,
    },
    {
      title: 'Game Tester',
      company: 'AI Company',
      period: '2025',
      description: 'Worked as a Game Tester in an AI-driven company, responsible for identifying bugs, evaluating gameplay mechanics, and ensuring overall quality and performance. Collaborated with development teams by providing detailed test reports and feedback to improve user experience and system reliability.',
      tags: ['QA Testing', 'Bug Reporting', 'Game Mechanics'],
      icon: Briefcase,
    },
    {
      title: 'Frontend Developer',
      company: 'Online Case Filing Management System for VAWC',
      period: '2024',
      description: 'Developed and implemented user-friendly interfaces for the Online Case Filing Management System. Focused on creating responsive layouts, improving usability, and ensuring accessibility for barangay personnel and end-users.',
      tags: ['React', 'TypeScript', 'UI/UX', 'Responsive Design'],
      icon: Briefcase,
    },
    {
      title: 'System Quality Assurance / Tester',
      company: 'Online Case Filing Management System for VAWC',
      period: '2024',
      description: "Performed system testing and quality assurance tasks to ensure the platform's stability, accuracy, and reliability. Conducted functional testing, identified system issues, and verified fixes to maintain high-quality standards.",
      tags: ['Testing', 'QA', 'Documentation'],
      icon: Briefcase,
    },
    {
      title: 'System Developer',
      company: 'Boarding House Management System',
      period: '2023',
      description: 'Participated in the development of a Boarding House Management System by assisting in system design, feature implementation, and database integration. Helped streamline tenant records, payment tracking, and administrative processes.',
      tags: ['System Design', 'Database', 'Development'],
      icon: Briefcase,
    },
    {
      title: 'Streamer & Discord Coordinator',
      company: 'Axie Infinity Community',
      period: '2021',
      description: 'Worked as a content streamer and Discord coordinator for an Axie Infinity community. Managed online interactions, organized community events, moderated discussions, and supported players.',
      tags: ['Community Management', 'Streaming', 'Discord'],
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #1e1e1e' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#c9a84c' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#c9a84c' }}>Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 transition-all duration-300"
              style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e';
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base sm:text-lg font-semibold leading-snug" style={{ color: '#ffffff' }}>
                  {exp.title}
                </h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#888888' }}
                >
                  {exp.period}
                </span>
              </div>

              <p className="text-sm font-semibold mb-3" style={{ color: '#c9a84c' }}>
                {exp.company}
              </p>

              <p className="text-sm leading-relaxed mb-4" style={{ color: '#888888' }}>
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: '#0a0a0a', border: '1px solid #2a2a2a', color: '#cccccc' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

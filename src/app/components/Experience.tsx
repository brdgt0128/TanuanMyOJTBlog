import { Briefcase, Calendar, ShoppingBag, Headphones, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16" style={{ color: '#ffffff' }}>
          Experience
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="relative flex gap-6 pb-10 sm:pb-12">
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex flex-col items-center pt-1">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#c9a84c', boxShadow: '0 0 8px rgba(201,168,76,0.4)' }}
                  />
                  {index < experiences.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ backgroundColor: '#1e1e1e' }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: '#ffffff' }}>
                      {exp.title}
                    </h3>
                    <span
                      className="text-xs px-3 py-1.5 rounded-full flex-shrink-0 self-start"
                      style={{ backgroundColor: '#111111', border: '1px solid #2a2a2a', color: '#888888' }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold mb-3" style={{ color: '#c9a84c' }}>
                    {exp.company}
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: '#888888' }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ backgroundColor: '#111111', border: '1px solid #2a2a2a', color: '#cccccc' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Briefcase, Calendar, ShoppingBag, Headphones, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'SaaS Sales Executive',
      company: 'Activerse Incorporation',
      period: '2026',
      description: 'Drove SaaS product sales by identifying and engaging potential clients, delivering compelling product demos, and closing deals. Built strong client relationships, managed the sales pipeline, and collaborated with the team to exceed revenue targets and expand the customer base.',
      icon: TrendingUp,
    },
    {
      title: 'Tech Support Specialist',
      company: 'Activerse Incorporation',
      period: '2026',
      description: 'Provided technical support to clients, resolving software and system issues promptly and effectively. Assisted users with onboarding, troubleshooting, and navigating the platform, ensuring a smooth and satisfactory experience while maintaining high customer satisfaction rates.',
      icon: Headphones,
    },
    {
      title: 'Product Listing Specialist',
      company: 'Shopify / Activerse Incorporation',
      period: '2026',
      description: 'Managed and optimized product listings on Shopify, ensuring accurate descriptions, high-quality images, and SEO-friendly content. Maintained organized product catalogs, monitored inventory updates, and worked to enhance product visibility and drive conversions through compelling listing strategies.',
      icon: ShoppingBag,
    },
    {
      title: 'Game Tester',
      company: 'AI Company',
      period: '2025',
      description: 'Worked as a Game Tester in an AI-driven company, responsible for identifying bugs, evaluating gameplay mechanics, and ensuring overall quality and performance. Collaborated with development teams by providing detailed test reports and feedback to improve user experience and system reliability.',
      icon: Briefcase,
    },
    {
      title: 'Frontend Developer',
      company: 'Online Case Filing Management System for Violence Against Women and Their Children',
      period: '2024',
      description: 'Developed and implemented user-friendly interfaces for the Online Case Filing Management System. Focused on creating responsive layouts, improving usability, and ensuring accessibility for barangay personnel and end-users, contributing to a more efficient and secure case management process.',
      icon: Briefcase,
    },
    {
      title: 'System Quality Assurance / Tester',
      company: 'Online Case Filing Management System for Violence Against Women and Their Children',
      period: '2024',
      description: "Performed system testing and quality assurance tasks to ensure the platform's stability, accuracy, and reliability. Conducted functional testing, identified system issues, and verified fixes to maintain high-quality standards throughout the development lifecycle.",
      icon: Briefcase,
    },
    {
      title: 'System Developer',
      company: 'Boarding House Management System',
      period: '2023',
      description: 'Participated in the development of a Boarding House Management System by assisting in system design, feature implementation, and database integration. Helped streamline tenant records, payment tracking, and administrative processes through a structured and efficient system.',
      icon: Briefcase,
    },
    {
      title: 'Streamer & Discord Coordinator',
      company: 'Axie Infinity Community',
      period: '2021',
      description: 'Worked as a content streamer and Discord coordinator for an Axie Infinity community. Managed online interactions, organized community events, moderated discussions, and supported players, strengthening engagement and maintaining an active and organized online community.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#161925', borderTop: '1px solid #1B3145' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16 text-center" style={{ color: '#c8dae8' }}>
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #1F4964, #1B3145, transparent)' }}
          />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} className="relative flex gap-4 sm:gap-6 group">
                  {/* Timeline dot + icon */}
                  <div className="flex-shrink-0 hidden sm:flex flex-col items-center z-10">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ border: '2px solid #2B334C', backgroundColor: '#1B3145' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = '#1F4964';
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(31,73,100,0.3)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = '#2B334C';
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1B3145';
                      }}
                    >
                      <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: '#3a6a88' }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 rounded-sm"
                    style={{
                      backgroundColor: '#1B3145',
                      border: '1px solid #2B334C',
                      borderLeft: '3px solid #1F4964',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = '#1F4964';
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1d3a55';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = '#2B334C';
                      (e.currentTarget as HTMLDivElement).style.borderLeftColor = '#1F4964';
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1B3145';
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <div>
                        {/* Mobile icon */}
                        <div className="flex items-center gap-3 mb-2 sm:hidden">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ border: '1px solid #1F4964', backgroundColor: '#161925' }}
                          >
                            <Icon className="w-4 h-4" style={{ color: '#1F4964' }} />
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-sm sm:text-base mt-1 break-words" style={{ color: '#7ec8de' }}>
                          {exp.company}
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-2 text-xs sm:text-sm px-3 py-1.5 flex-shrink-0 self-start rounded-sm"
                        style={{ backgroundColor: '#312840', border: '1px solid #2B334C', color: '#7a9ab5' }}
                      >
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#5a7d96' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

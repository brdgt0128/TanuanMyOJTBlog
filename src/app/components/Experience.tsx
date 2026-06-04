import { Briefcase, Calendar, ShoppingBag, Headphones, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'SaaS Sales Executive',
      company: 'Activerse Incorporation',
      period: '2026',
      description: 'Drove SaaS product sales by identifying and engaging potential clients, delivering compelling product demos, and closing deals. Built strong client relationships, managed the sales pipeline, and collaborated with the team to exceed revenue targets and expand the customer base.',
      icon: TrendingUp,
      accent: '#6366F1',
    },
    {
      title: 'Tech Support Specialist',
      company: 'Activerse Incorporation',
      period: '2026',
      description: 'Provided technical support to clients, resolving software and system issues promptly and effectively. Assisted users with onboarding, troubleshooting, and navigating the platform, ensuring a smooth and satisfactory experience while maintaining high customer satisfaction rates.',
      icon: Headphones,
      accent: '#6366F1',
    },
    {
      title: 'Product Listing Specialist',
      company: 'Shopify / Activerse Incorporation',
      period: '2026',
      description: 'Managed and optimized product listings on Shopify, ensuring accurate descriptions, high-quality images, and SEO-friendly content. Maintained organized product catalogs, monitored inventory updates, and worked to enhance product visibility and drive conversions through compelling listing strategies.',
      icon: ShoppingBag,
      accent: '#6366F1',
    },
    {
      title: 'Game Tester',
      company: 'AI Company',
      period: '2025',
      description: 'Worked as a Game Tester in an AI-driven company, responsible for identifying bugs, evaluating gameplay mechanics, and ensuring overall quality and performance. Collaborated with development teams by providing detailed test reports and feedback to improve user experience and system reliability.',
      icon: Briefcase,
      accent: '#6366F1',
    },
    {
      title: 'Frontend Developer',
      company: 'Online Case Filing Management System for Violence Against Women and Their Children',
      period: '2024',
      description: 'Developed and implemented user-friendly interfaces for the Online Case Filing Management System. Focused on creating responsive layouts, improving usability, and ensuring accessibility for barangay personnel and end-users, contributing to a more efficient and secure case management process.',
      icon: Briefcase,
      accent: '#6366F1',
    },
    {
      title: 'System Quality Assurance / Tester',
      company: 'Online Case Filing Management System for Violence Against Women and Their Children',
      period: '2024',
      description: 'Performed system testing and quality assurance tasks to ensure the platform\'s stability, accuracy, and reliability. Conducted functional testing, identified system issues, and verified fixes to maintain high-quality standards throughout the development lifecycle.',
      icon: Briefcase,
      accent: '#6366F1',
    },
    {
      title: 'System Developer',
      company: 'Boarding House Management System',
      period: '2023',
      description: 'Participated in the development of a Boarding House Management System by assisting in system design, feature implementation, and database integration. Helped streamline tenant records, payment tracking, and administrative processes through a structured and efficient system.',
      icon: Briefcase,
      accent: '#6366F1',
    },
    {
      title: 'Streamer & Discord Coordinator',
      company: 'Axie Infinity Community',
      period: '2021',
      description: 'Worked as a content streamer and Discord coordinator for an Axie Infinity community. Managed online interactions, organized community events, moderated discussions, and supported players, strengthening engagement and maintaining an active and organized online community.',
      icon: Briefcase,
      accent: '#6366F1',
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#000000] py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#CECECE] mb-8 sm:mb-12 md:mb-16 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#474747] to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div
                  key={index}
                  className="relative flex gap-4 sm:gap-6 group"
                >
                  {/* Timeline dot + icon */}
                  <div className="flex-shrink-0 hidden sm:flex flex-col items-center z-10">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#474747] bg-[#1a1a1a] flex items-center justify-center
                               group-hover:border-[#6366F1] transition-all duration-300"
                    >
                      <Icon className="w-6 h-6 text-[#919191] group-hover:text-[#6366F1] transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-[#111111] border border-[#2a2a2a] p-4 sm:p-6 md:p-8
                             hover:border-[#6366F1] hover:bg-[#161622]
                             transition-all duration-300 rounded-sm
                             border-l-2 border-l-[#6366F1]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <div>
                        {/* Mobile icon */}
                        <div className="flex items-center gap-3 mb-2 sm:hidden">
                          <div className="w-8 h-8 rounded-full border border-[#6366F1] bg-[#1a1a1a] flex items-center justify-center">
                            <Icon className="w-4 h-4 text-[#6366F1]" />
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl text-white font-medium leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#6366F1] mt-1 break-words">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm bg-[#1e1e2e] border border-[#333] px-3 py-1.5 text-[#919191] flex-shrink-0 self-start">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-[#9a9a9a] leading-relaxed">
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

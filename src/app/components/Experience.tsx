import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Game Tester',
      company: 'AI Company',
      period: '2025',
      description: 'Worked as a Game Tester in an AI-driven company, responsible for identifying bugs, evaluating gameplay mechanics, and ensuring overall quality and performance. Collaborated with development teams by providing detailed test reports and feedback to improve user experience and system reliability.',
    },
    {
      title: 'Frontend Developer',
      company: 'Online Case Filing Management System for Violence Against Women and Their Children',
      period: '2024',
      description: 'Developed and implemented user-friendly interfaces for the Online Case Filing Management System. Focused on creating responsive layouts, improving usability, and ensuring accessibility for barangay personnel and end-users, contributing to a more efficient and secure case management process.',
    },
    {
      title: 'System Quality Assurance / Tester',
      company: 'Online Case Filing Management System for Violence Against Women and Their Children',
      period: '2024',
      description: 'Performed system testing and quality assurance tasks to ensure the platform\'s stability, accuracy, and reliability. Conducted functional testing, identified system issues, and verified fixes to maintain high-quality standards throughout the development lifecycle.',
    },
    {
      title: 'System Developer',
      company: 'Boarding House Management System',
      period: '2023',
      description: 'Participated in the development of a Boarding House Management System by assisting in system design, feature implementation, and database integration. Helped streamline tenant records, payment tracking, and administrative processes through a structured and efficient system.',
    },
    {
      title: 'Streamer & Discord Coordinator',
      company: 'Axie Infinity Community',
      period: '2021',
      description: 'Worked as a content streamer and Discord coordinator for an Axie Infinity community. Managed online interactions, organized community events, moderated discussions, and supported players, strengthening engagement and maintaining an active and organized online community.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#000000] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl text-[#CECECE] mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#353535] p-8 border border-[#474747] 
                       hover:border-[#919191] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#474747] p-3 border border-[#919191] flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-[#CECECE]" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-white mb-2">{exp.title}</h3>
                    <p className="text-[#919191]">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#919191] flex-shrink-0 md:ml-4">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-[#CECECE] leading-relaxed ml-0 md:ml-16">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

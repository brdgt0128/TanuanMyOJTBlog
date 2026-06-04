import { Trophy, Award } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      category: 'Research Festival 2025',
      year: '2025',
      title: '2nd Best in Capstone Research',
      description: 'Developed an Online Case Filing System for Violence Against Women and Children (VAWC), recognized for innovation and practical application. Also received Best in Booth Setup and People\'s Choice Award for presentation and engagement.',
    },
    {
      icon: Award,
      category: 'Innovation',
      year: '2025',
      title: '4th Runner-Up, DICT Regional Pitching',
      description: 'Presented the Online Case Filing System for Violence Against Women and Children (VAWC), recognized for innovation, practicality, and impact in addressing community needs.',
    },
    {
      icon: Award,
      category: 'Innovation',
      year: '2025',
      title: 'Saint Columban College Representative of Zam-Basulta Pitching Presentation',
      description: 'Represented Saint Columban College in the Zam-Basulta Pitching Presentation, showcasing innovative project ideas and solutions.',
    },
    {
      icon: Award,
      category: 'Frontend Developer',
      year: '2024',
      title: 'Tuluyan App',
      description: 'Tuluyan App is a mobile application designed to help students easily find a place to stay by renting or inquiring about boarding houses, apartments, and condominiums that fit their needs and budget.',
    },
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] py-12 sm:py-16 md:py-24 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#CECECE] mb-8 sm:mb-12 md:mb-16 text-center">
          Achievements & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-[#111111] p-5 sm:p-6 md:p-8 border border-[#222]
                         hover:border-[#6366F1]/50 hover:bg-[#111622]
                         transition-all duration-300 rounded-sm group"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="bg-[#6366F1]/10 p-2.5 sm:p-3 border border-[#6366F1]/20 rounded-sm
                                  group-hover:bg-[#6366F1]/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#6366F1]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#555] bg-[#1a1a1a] border border-[#222] px-3 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-xs sm:text-sm text-[#6366F1] uppercase tracking-wider font-medium">
                      {achievement.category}
                    </p>
                    <h3 className="text-base sm:text-lg md:text-xl text-white leading-tight font-medium">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-[#777] leading-relaxed">
                      {achievement.description}
                    </p>
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

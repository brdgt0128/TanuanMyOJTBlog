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
  ];

  return (
    <section className="min-h-screen bg-[#000000] py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#CECECE] mb-8 sm:mb-12 md:mb-16 text-center">
          Achievements & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-[#353535] p-4 sm:p-6 md:p-8 border border-[#474747] 
                         hover:border-[#919191] transition-all duration-300"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="bg-[#474747] p-2 sm:p-3 border border-[#919191]">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#CECECE]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#919191]">{achievement.year}</span>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-xs sm:text-sm text-[#919191]">{achievement.category}</p>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#CECECE] leading-relaxed">
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

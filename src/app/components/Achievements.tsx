import { Trophy, Award } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      category: 'Research Festival 2025',
      year: '2025',
      title: '2nd Best in Capstone Research',
      description: "Developed an Online Case Filing System for Violence Against Women and Children (VAWC), recognized for innovation and practical application. Also received Best in Booth Setup and People's Choice Award for presentation and engagement.",
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
    <section className="min-h-screen py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#161925', borderTop: '1px solid #1B3145' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16 text-center" style={{ color: '#c8dae8' }}>
          Achievements & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="p-5 sm:p-6 md:p-8 transition-all duration-300 rounded-sm group"
                style={{ backgroundColor: '#1B3145', border: '1px solid #2B334C' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#1F4964';
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1d3a55';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#2B334C';
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1B3145';
                }}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className="p-2.5 sm:p-3 rounded-sm transition-colors duration-300"
                      style={{ backgroundColor: 'rgba(31,73,100,0.25)', border: '1px solid rgba(31,73,100,0.4)' }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#1F4964' }} />
                    </div>
                    <span
                      className="text-xs sm:text-sm px-3 py-1 rounded-full"
                      style={{ color: '#4a6a80', backgroundColor: '#312840', border: '1px solid #2B334C' }}
                    >
                      {achievement.year}
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-xs sm:text-sm uppercase tracking-wider font-medium" style={{ color: '#7ec8de' }}>
                      {achievement.category}
                    </p>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium leading-tight" style={{ color: '#c8dae8' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a6a80' }}>
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

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
    <section className="min-h-screen py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #1e1e1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#dc2626' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#dc2626' }}>Awards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Achievements & Recognition</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="p-5 sm:p-6 md:p-8 transition-all duration-300 group"
                style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(220,38,38,0.4)';
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#161616';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e';
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#111111';
                }}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between">
                    <div
                      className="p-2.5 sm:p-3 transition-colors duration-300"
                      style={{ backgroundColor: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)' }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#dc2626' }} />
                    </div>
                    <span
                      className="text-xs sm:text-sm px-3 py-1 rounded-full"
                      style={{ color: '#888888', backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
                    >
                      {achievement.year}
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-xs sm:text-sm uppercase tracking-wider font-medium" style={{ color: '#dc2626' }}>
                      {achievement.category}
                    </p>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium leading-tight" style={{ color: '#ffffff' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
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

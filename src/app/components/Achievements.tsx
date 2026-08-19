import { Trophy, Award } from 'lucide-react';
import { motion } from 'motion/react';

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

  const [featured, ...rest] = achievements;
  const FeaturedIcon = featured.icon;

  return (
    <section className="py-16 sm:py-20 md:py-28 grid-bg" style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--hairline)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>05 — Awards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: 'var(--ink)' }}>Achievements & Recognition</h2>
        </motion.div>

        {/* Featured achievement — top billing for the strongest credential */}
        <motion.div
          className="mb-5 sm:mb-6 overflow-hidden"
          style={{ backgroundColor: 'var(--paper-2)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-sm)' }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, var(--accent) 0%, oklch(48% 0.170 25 / 0.4) 60%, transparent 100%)' }} />
          <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-4 flex-shrink-0 md:w-40">
              <div
                className="p-3 sm:p-4 flex-shrink-0"
                style={{ backgroundColor: 'oklch(66% 0.235 25 /0.1)', border: '1px solid oklch(66% 0.235 25 /0.2)', borderRadius: 'var(--radius-sm)' }}
              >
                <FeaturedIcon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <span
                  className="inline-block text-xs px-3 py-1 uppercase tracking-wider"
                  style={{ color: 'var(--status-go)', border: '1px solid oklch(72% 0.150 145 / 0.35)', fontFamily: 'var(--font-mono)', borderRadius: 'var(--radius-xs)' }}
                >
                  Top Honor · {featured.year}
                </span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
              <p className="text-xs sm:text-sm uppercase tracking-wider font-medium" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                {featured.category}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)' }}>
                {featured.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-body)' }}>
                {featured.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Remaining recognitions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {rest.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                className="overflow-hidden transition-all duration-300"
                style={{ backgroundColor: 'var(--paper-2)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-sm)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(66% 0.235 25 /0.4)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--hairline)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div
                      className="p-2 sm:p-2.5 transition-colors duration-300"
                      style={{ backgroundColor: 'oklch(66% 0.235 25 /0.1)', border: '1px solid oklch(66% 0.235 25 /0.2)', borderRadius: 'var(--radius-sm)' }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <span
                      className="text-xs px-2.5 py-1"
                      style={{ color: 'var(--ink-mute)', backgroundColor: 'var(--paper-3)', border: '1px solid var(--rule)', fontFamily: 'var(--font-mono)', borderRadius: 'var(--radius-xs)' }}
                    >
                      {achievement.year}
                    </span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <p className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                      {achievement.category}
                    </p>
                    <h3 className="text-sm sm:text-base font-medium leading-snug" style={{ color: 'var(--ink)' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-body)' }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
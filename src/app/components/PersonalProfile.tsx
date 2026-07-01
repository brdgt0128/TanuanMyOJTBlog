import { Code, Palette, Database, Terminal, Github, Figma as FigmaIcon } from 'lucide-react';
import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export function PersonalProfile() {
  const skillGroups = [
    {
      label: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Node.js'],
    },
    {
      label: 'Database',
      skills: ['MySQL', 'Firebase', 'PostgreSQL', 'MongoDB'],
    },
    {
      label: 'API Integration',
      skills: ['REST API', 'Claude API', 'Resend API', 'Postman', 'Webhook'],
    },
    {
      label: 'DNS & Hosting',
      skills: ['DNS Configuration', 'Cloudflare', 'Domain Management', 'GitHub Pages', 'Vercel'],
    },
    {
      label: 'Other',
      skills: ['C#', 'Java', 'Git', 'Figma'],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: Code },
    { name: 'GitHub', icon: Github },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Visual Studio 2022', icon: Terminal },
    { name: 'Firebase', icon: Database },
    { name: 'Canva', icon: Palette },
    { name: 'Draw.io', icon: Palette },
    { name: 'Postman', icon: Terminal },
    { name: 'Claude AI', icon: Code },
    { name: 'ChatGPT', icon: Code },
    { name: 'Resend', icon: Terminal },
    { name: 'Vercel', icon: Terminal },
    { name: 'n8n', icon: Code },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 grid-bg" style={{ backgroundColor: '#131309', borderTop: '1px solid #282812' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div className="mb-12 sm:mb-16" {...fadeUp()}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: '#f5a623' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#f5a623' }}>Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          <div className="space-y-6">
            <motion.div
              className="p-4 sm:p-6 md:p-8 transition-all duration-300"
              style={{ backgroundColor: '#1b1b0d', border: '1px solid #282812' }}
              {...fadeUp(0.1)}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Professional Summary</h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#888888' }}>
                A versatile professional with hands-on experience as a Web Developer, Tech Support Specialist,
                and SaaS Sales Executive. Skilled in building responsive web applications, resolving technical
                issues, and driving B2B sales growth. Passionate about leveraging modern tools and AI to deliver
                impactful digital solutions and exceed client expectations.
              </p>
            </motion.div>

            <motion.div
              id="skills"
              className="p-4 sm:p-6 md:p-8 transition-all duration-300"
              style={{ backgroundColor: '#1b1b0d', border: '1px solid #282812' }}
              {...fadeUp(0.18)}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">Skills</h3>
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs uppercase tracking-widest mb-2.5" style={{ color: '#555555' }}>
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs transition-all duration-300 cursor-default"
                          style={{
                            color: '#f5a623',
                            backgroundColor: 'rgba(245,166,35,0.08)',
                            border: '1px solid rgba(245,166,35,0.2)',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 md:p-8 transition-all duration-300"
              style={{ backgroundColor: '#1b1b0d', border: '1px solid #282812' }}
              {...fadeUp(0.26)}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={index}
                      className="p-3 sm:p-4 flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer"
                      style={{ backgroundColor: '#131309', border: '1px solid #282812' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,166,35,0.4)';
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(245,166,35,0.05)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = '#282812';
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#131309';
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4), ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#f5a623' }} />
                      <span className="text-xs sm:text-sm text-center" style={{ color: '#888888' }}>{tool.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

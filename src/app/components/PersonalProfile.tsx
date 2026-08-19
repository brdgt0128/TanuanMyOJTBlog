import { Braces, Webhook, Network, Globe2, FileCode, Coffee, Code, Terminal, Palette, Bot } from 'lucide-react';
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiMysql, SiFirebase, SiPostgresql, SiMongodb,
  SiClaude, SiResend, SiPostman,
  SiCloudflare, SiGithubpages, SiVercel,
  SiGit, SiFigma, SiGithub, SiDiagramsdotnet, SiN8N,
} from 'react-icons/si';
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
      skills: [
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'React', icon: SiReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Node.js', icon: SiNodedotjs },
      ],
    },
    {
      label: 'Database',
      skills: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
      ],
    },
    {
      label: 'API Integration',
      skills: [
        { name: 'REST API', icon: Braces },
        { name: 'Claude API', icon: SiClaude },
        { name: 'Resend API', icon: SiResend },
        { name: 'Postman', icon: SiPostman },
        { name: 'Webhook', icon: Webhook },
      ],
    },
    {
      label: 'DNS & Hosting',
      skills: [
        { name: 'DNS Configuration', icon: Network },
        { name: 'Cloudflare', icon: SiCloudflare },
        { name: 'Domain Management', icon: Globe2 },
        { name: 'GitHub Pages', icon: SiGithubpages },
        { name: 'Vercel', icon: SiVercel },
      ],
    },
    {
      label: 'Other',
      skills: [
        { name: 'C#', icon: FileCode },
        { name: 'Java', icon: Coffee },
        { name: 'Git', icon: SiGit },
        { name: 'Figma', icon: SiFigma },
      ],
    },
  ];

  const tools = [
    { name: 'VS Code', icon: Code },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Figma', icon: SiFigma },
    { name: 'Visual Studio', icon: Terminal },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Canva', icon: Palette },
    { name: 'Draw.io', icon: SiDiagramsdotnet },
    { name: 'Postman', icon: SiPostman },
    { name: 'Claude AI', icon: SiClaude },
    { name: 'ChatGPT', icon: Bot },
    { name: 'Resend', icon: SiResend },
    { name: 'Vercel', icon: SiVercel },
    { name: 'n8n', icon: SiN8N },
  ];

  const quickFacts = [
    { label: 'Based in', value: 'Philippines' },
    { label: 'Degree', value: 'BSIT · 2026' },
    { label: 'Available', value: 'Now' },
    { label: 'Experience', value: '3 Years' },
    { label: 'Projects', value: '12 UK Clients' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 grid-bg" style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--hairline)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div className="mb-12 sm:mb-16" {...fadeUp()}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>01 — Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">About Me</h2>
        </motion.div>

        {/* Bento Row 1: Summary (2/3) + Quick Facts (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
          <motion.div
            className="lg:col-span-2 p-6 md:p-8 transition-all duration-300"
            style={{ backgroundColor: 'var(--paper-2)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-sm)' }}
            {...fadeUp(0.1)}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Professional Summary</h3>
            <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: 'var(--ink-mute)' }}>
              A versatile professional with hands-on experience as a Web Developer, Tech Support Specialist,
              and SaaS Sales Executive. Skilled in building responsive web applications, resolving technical
              issues, and driving B2B sales growth. Passionate about leveraging modern tools and AI to deliver
              impactful digital solutions and exceed client expectations.
            </p>
            <div className="pl-4 py-0.5" style={{ borderLeft: '2px solid var(--accent)' }}>
              <p className="text-sm sm:text-base italic leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                "Passionate about building digital products that are fast, beautiful, and genuinely useful."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-6 md:p-8 transition-all duration-300"
            style={{ backgroundColor: 'var(--paper-2)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-sm)' }}
            {...fadeUp(0.15)}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">Quick Facts</h3>
            <div className="space-y-0">
              {quickFacts.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-3"
                  style={{ borderBottom: '1px solid var(--paper-3)' }}
                >
                  <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}>{label}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--ink-2)' }}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bento Row 2: Skills */}
        <motion.div
          id="skills"
          className="p-6 md:p-8 transition-all duration-300 mb-5 sm:mb-6"
          style={{ backgroundColor: 'var(--paper-2)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-sm)' }}
          {...fadeUp(0.18)}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Skills</h3>
          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs uppercase tracking-widest mb-2.5" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}>
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs transition-all duration-300 cursor-default"
                        style={{
                          color: 'var(--accent)',
                          backgroundColor: 'oklch(66% 0.235 25 /0.07)',
                          border: '1px solid oklch(66% 0.235 25 /0.18)',
                          borderRadius: 'var(--radius-sm)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bento Row 3: Tools & Technologies */}
        <motion.div
          className="p-6 md:p-8 transition-all duration-300"
          style={{ backgroundColor: 'var(--paper-2)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-sm)' }}
          {...fadeUp(0.24)}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Tools & Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  className="p-3 flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer group"
                  style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--paper-3)', borderRadius: 'var(--radius-sm)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'oklch(66% 0.235 25 /0.35)';
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = 'oklch(66% 0.235 25 /0.04)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--paper-3)';
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--paper)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4), ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
                  <span className="text-xs text-center leading-tight" style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)' }}>{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

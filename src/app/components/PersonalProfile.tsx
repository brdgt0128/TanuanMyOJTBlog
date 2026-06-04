import { Code, Palette, Database, Terminal, Github, Figma as FigmaIcon } from 'lucide-react';
import profileImg from '../../assets/34f594899b925642a0558dcc467c890c89fdbc95.png';

export function PersonalProfile() {
  const skills = [
    'HTML',
    'CSS',
    'C#',
    'Java',
    'JavaScript',
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
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #1e1e1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16" style={{ color: '#ffffff' }}>
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Profile Card */}
          <div
            className="lg:col-span-1 p-6 sm:p-8 transition-all duration-300"
            style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
          >
            <div className="space-y-4">
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden"
                style={{ border: '3px solid rgba(201,168,76,0.4)' }}
              >
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left space-y-2">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">Aldrin B. Tanuan</h3>
                <p className="text-sm sm:text-base font-medium" style={{ color: '#c9a84c' }}>Frontend Developer · SaaS Sales Executive</p>
                <p className="text-sm sm:text-base" style={{ color: '#888888' }}>BS Information Technology</p>
              </div>

              <div className="pt-4 space-y-3 text-left" style={{ borderTop: '1px solid #1e1e1e' }}>
                {[
                  { label: 'Age', value: '22' },
                  { label: 'Address', value: 'Buug Zamboanga Sibugay' },
                  { label: 'Email', value: 'aldrin.tanuan@sccpag.edu.ph' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="text-xs uppercase tracking-wider" style={{ color: '#555555' }}>{label}</span>
                    <p className="text-sm sm:text-base break-all mt-0.5" style={{ color: '#cccccc' }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <div
              className="p-4 sm:p-6 md:p-8 transition-all duration-300"
              style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Professional Summary</h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#888888' }}>
                A passionate frontend developer and SaaS sales professional with hands-on experience
                in web development, product listing, tech support, and enterprise software sales.
                Currently expanding skills through practicum experience at Activerse Incorporation,
                focusing on building modern web applications and driving business growth through technology.
              </p>
            </div>

            {/* Skills */}
            <div
              id="skills"
              className="p-4 sm:p-6 md:p-8 transition-all duration-300"
              style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm transition-all duration-300 cursor-default"
                    style={{
                      color: '#c9a84c',
                      backgroundColor: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.25)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div
              className="p-4 sm:p-6 md:p-8 transition-all duration-300"
              style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={index}
                      className="p-3 sm:p-4 flex flex-col items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer"
                      style={{ backgroundColor: '#0a0a0a', border: '1px solid #1e1e1e' }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.4)';
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(201,168,76,0.05)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = '#1e1e1e';
                        (e.currentTarget as HTMLDivElement).style.backgroundColor = '#0a0a0a';
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#c9a84c' }} />
                      <span className="text-xs sm:text-sm text-center" style={{ color: '#888888' }}>{tool.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

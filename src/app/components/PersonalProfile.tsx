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
    <section id="about" className="bg-[#0a0a0a] py-12 sm:py-16 md:py-24 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#CECECE] mb-8 sm:mb-12 md:mb-16 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 bg-[#111111] p-6 sm:p-8 border border-[#222] hover:border-[#6366F1]/50 transition-all duration-300 rounded-sm">
            <div className="space-y-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-[#6366F1]/30">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left space-y-2">
                <h3 className="text-2xl sm:text-3xl text-white font-semibold">Aldrin B. Tanuan</h3>
                <p className="text-sm sm:text-base text-[#6366F1]">Frontend Developer · SaaS Sales Executive</p>
                <p className="text-[#777] text-sm sm:text-base">BS Information Technology</p>
              </div>

              <div className="pt-4 border-t border-[#222] space-y-3 text-left">
                {[
                  { label: 'Age', value: '22' },
                  { label: 'Address', value: 'Buug Zamboanga Sibugay' },
                  { label: 'Email', value: 'aldrin.tanuan@sccpag.edu.ph' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <span className="text-xs text-[#555] uppercase tracking-wider">{label}</span>
                    <p className="text-sm sm:text-base text-[#CECECE] break-all mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <div className="bg-[#111111] p-4 sm:p-6 md:p-8 border border-[#222] hover:border-[#6366F1]/50 transition-all duration-300 rounded-sm">
              <h3 className="text-lg sm:text-xl text-white font-medium mb-3 sm:mb-4">Professional Summary</h3>
              <p className="text-sm sm:text-base text-[#9a9a9a] leading-relaxed">
                A passionate frontend developer and SaaS sales professional with hands-on experience
                in web development, product listing, tech support, and enterprise software sales.
                Currently expanding skills through practicum experience at Activerse Incorporation,
                focusing on building modern web applications and driving business growth through technology.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-[#111111] p-4 sm:p-6 md:p-8 border border-[#222] hover:border-[#6366F1]/50 transition-all duration-300 rounded-sm">
              <h3 className="text-lg sm:text-xl text-white font-medium mb-4 sm:mb-6">Skills</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm text-[#a5b4fc] bg-[#6366F1]/10 border border-[#6366F1]/20
                             hover:bg-[#6366F1]/20 hover:border-[#6366F1]/50
                             transition-all duration-300 rounded-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-[#111111] p-4 sm:p-6 md:p-8 border border-[#222] hover:border-[#6366F1]/50 transition-all duration-300 rounded-sm">
              <h3 className="text-lg sm:text-xl text-white font-medium mb-4 sm:mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={index}
                      className="bg-[#0d0d0d] p-3 sm:p-4 flex flex-col items-center gap-2 border border-[#1e1e1e]
                               hover:border-[#6366F1]/50 hover:bg-[#6366F1]/5 hover:scale-105
                               transition-all duration-300 cursor-pointer rounded-sm"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#6366F1]" />
                      <span className="text-[#9a9a9a] text-xs sm:text-sm text-center">{tool.name}</span>
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

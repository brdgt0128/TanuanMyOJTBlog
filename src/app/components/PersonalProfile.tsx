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
    <section id="about" className="bg-[#353535] py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#CECECE] mb-8 sm:mb-12 md:mb-16 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 bg-[#474747] p-6 sm:p-8 border border-[#919191] hover:border-[#CECECE] transition-all duration-300">
            <div className="space-y-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-[#919191]">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl text-white">Aldrin B. Tanuan</h3>
                <p className="text-base sm:text-lg text-[#919191]">Frontend Developer</p>
                <p className="text-[#CECECE] text-sm sm:text-base">Bachelor of Science in Information Technology</p>
              </div>

              <div className="pt-5 border-t border-[#919191] space-y-3 text-center">
                <p className="text-sm sm:text-base text-[#CECECE]">
                  <span className="text-white">Age:</span> 22
                </p>
                <p className="text-sm sm:text-base text-[#CECECE]">
                  <span className="text-white">Course:</span> Bachelor of Science Information Technology
                </p>
                <p className="text-sm sm:text-base text-[#CECECE]">
                  <span className="text-white">Address:</span> Buug Zamboanga Sibugay
                </p>
                <p className="text-sm sm:text-base text-[#CECECE] break-all">
                  <span className="text-white">Email:</span> aldrin.tanuan@sccpag.edu.ph
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <div className="bg-[#474747] p-4 sm:p-6 md:p-8 border border-[#919191] hover:border-[#CECECE] transition-all duration-300">
              <h3 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">Professional Summary</h3>
              <p className="text-sm sm:text-base text-[#CECECE] leading-relaxed">
                A passionate frontend developer with a strong foundation in web development 
                technologies. Currently expanding my skills through hands-on practicum experience, 
                focusing on building modern, responsive web applications. Dedicated to writing 
                clean, maintainable code and continuously learning new technologies to stay 
                current in the ever-evolving tech landscape.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-[#474747] p-4 sm:p-6 md:p-8 border border-[#919191] hover:border-[#CECECE] transition-all duration-300">
              <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#353535] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-[#CECECE] text-center border border-[#474747] 
                             hover:border-[#919191] hover:bg-[#474747] transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-[#474747] p-4 sm:p-6 md:p-8 border border-[#919191] hover:border-[#CECECE] transition-all duration-300">
              <h3 className="text-xl sm:text-2xl text-white mb-4 sm:mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {tools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={index}
                      className="bg-[#353535] p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 border border-[#474747] 
                               hover:border-[#919191] hover:bg-[#474747] hover:scale-105 
                               transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#CECECE]" />
                      <span className="text-[#CECECE] text-xs sm:text-sm text-center">{tool.name}</span>
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

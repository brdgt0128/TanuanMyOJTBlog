import { Github, Facebook, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
    },
  ];

  return (
    <footer id="contact" className="bg-[#000000] border-t border-[#474747] py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl text-white">DevPortfolio</h3>
            <p className="text-sm sm:text-base text-[#919191] leading-relaxed">
              A personal blog documenting my journey as a software developer, 
              sharing insights, projects, and experiences along the way.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm sm:text-base text-[#919191] hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl text-white">Get in Touch</h3>
            <a 
              href="mailto:aldrin.tanuan@sccpag.edu.ph"
              className="flex items-center gap-2 text-sm sm:text-base text-[#919191] hover:text-white transition-colors duration-300 cursor-pointer break-all"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>aldrin.tanuan@sccpag.edu.ph</span>
            </a>

            <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#353535] p-2.5 sm:p-3 border border-[#474747] 
                             hover:border-[#919191] hover:bg-[#474747] hover:scale-110 
                             transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#CECECE]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#474747] flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#919191] text-center md:text-left">
            © 2025 DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
    <footer id="contact" className="bg-[#000000] border-t border-[#1a1a1a] py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#6366F1] flex items-center justify-center">
                <span className="text-white text-xs font-bold">AT</span>
              </div>
              <h3 className="text-lg sm:text-xl text-white font-semibold">DevPortfolio</h3>
            </div>
            <p className="text-sm text-[#555] leading-relaxed">
              A personal portfolio documenting my journey as a frontend developer and
              SaaS professional, sharing projects and real-world experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm text-[#777] uppercase tracking-wider font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Experience', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-[#555] hover:text-[#a5b4fc] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm text-[#777] uppercase tracking-wider font-medium">Get in Touch</h3>
            <a
              href="mailto:aldrin.tanuan@sccpag.edu.ph"
              className="flex items-center gap-2 text-sm text-[#555] hover:text-[#a5b4fc] transition-colors duration-300 break-all"
            >
              <Mail className="w-4 h-4 flex-shrink-0 text-[#6366F1]" />
              <span>aldrin.tanuan@sccpag.edu.ph</span>
            </a>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#111] p-2.5 border border-[#222]
                             hover:border-[#6366F1]/50 hover:bg-[#6366F1]/10 hover:scale-110
                             transition-all duration-300 rounded-sm"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-[#777] hover:text-[#a5b4fc]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#444] text-center md:text-left">
            © 2026 Aldrin B. Tanuan · All rights reserved.
          </p>
          <p className="text-xs text-[#333]">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

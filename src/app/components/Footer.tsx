import { Github, Facebook, Linkedin, Mail, Heart } from 'lucide-react';

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
    <footer id="contact" className="bg-[#000000] border-t border-[#474747] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl text-white">DevPortfolio</h3>
            <p className="text-[#919191] leading-relaxed">
              A personal blog documenting my journey as a software developer, 
              sharing insights, projects, and experiences along the way.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-[#919191] hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl text-white">Get in Touch</h3>
            <a 
              href="mailto:aldrin.tanuan@sccpag.edu.ph"
              className="flex items-center gap-2 text-[#919191] hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>aldrin.tanuan@sccpag.edu.ph</span>
            </a>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#353535] p-3 border border-[#474747] 
                             hover:border-[#919191] hover:bg-[#474747] hover:scale-110 
                             transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-[#CECECE]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#474747] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#919191] text-sm">
            © 2025 DevPortfolio. All rights reserved.
          </p>
          <p className="text-[#919191] text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

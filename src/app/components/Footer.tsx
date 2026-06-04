import { Github, Facebook, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  ];

  return (
    <footer id="contact" className="py-10 sm:py-14 md:py-16" style={{ backgroundColor: '#0e1420', borderTop: '1px solid #1B3145' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#1F4964' }}
              >
                <span className="text-white text-xs font-bold">AT</span>
              </div>
              <h3 className="text-lg sm:text-xl text-white font-semibold">DevPortfolio</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#3a5a72' }}>
              A personal portfolio documenting my journey as a frontend developer and
              SaaS professional, sharing projects and real-world experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-medium" style={{ color: '#3a5a72' }}>Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Experience', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#3a5a72' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#7ec8de'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#3a5a72'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-medium" style={{ color: '#3a5a72' }}>Get in Touch</h3>
            <a
              href="mailto:aldrin.tanuan@sccpag.edu.ph"
              className="flex items-center gap-2 text-sm transition-colors duration-300 break-all"
              style={{ color: '#3a5a72' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#7ec8de'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#3a5a72'}
            >
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#1F4964' }} />
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
                    className="p-2.5 rounded-sm transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#1B3145', border: '1px solid #2B334C' }}
                    aria-label={social.name}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1F4964';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(31,73,100,0.3)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#2B334C';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1B3145';
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#3a6a88' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid #1B3145' }}>
          <p className="text-xs text-center md:text-left" style={{ color: '#2a4a62' }}>
            © 2026 Aldrin B. Tanuan · All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#243040' }}>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

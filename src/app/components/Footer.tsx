import { Github, Facebook, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  ];

  return (
    <footer id="contact" className="py-10 sm:py-14 md:py-16" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #1e1e1e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wider" style={{ color: '#c9a84c' }}>BT</span>
              <h3 className="text-lg sm:text-xl text-white font-semibold">· DevPortfolio</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>
              A personal portfolio documenting my journey as a frontend developer and
              SaaS professional, sharing projects and real-world experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-medium" style={{ color: '#555555' }}>Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Experience', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#888888' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#888888'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-medium" style={{ color: '#555555' }}>Get in Touch</h3>
            <a
              href="mailto:aldrin.tanuan@sccpag.edu.ph"
              className="flex items-center gap-2 text-sm transition-colors duration-300 break-all"
              style={{ color: '#888888' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#888888'}
            >
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#c9a84c' }} />
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
                    className="p-2.5 transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
                    aria-label={social.name}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,168,76,0.5)';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(201,168,76,0.08)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1e1e1e';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#111111';
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#888888' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid #1e1e1e' }}>
          <p className="text-xs text-center md:text-left" style={{ color: '#333333' }}>
            © 2026 Aldrin B. Tanuan · All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#2a2a2a' }}>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

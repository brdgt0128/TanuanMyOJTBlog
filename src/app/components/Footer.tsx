import { Github, Facebook, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  ];

  return (
    <footer id="contact" className="py-10 sm:py-14 md:py-16 grid-bg" style={{ backgroundColor: '#131309', borderTop: '1px solid #282812' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* About */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-wider" style={{ color: '#f5a623' }}>AT</span>
              <h3 className="text-lg sm:text-xl text-white font-semibold">· DevPortfolio</h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>
              Web Developer specializing in responsive web apps, AI integration with Claude,
              and SaaS sales. Built client websites for UK-based businesses and experienced
              in full-stack tools, DNS, and API development.
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
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#f5a623'}
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
              href="mailto:tanuanaldrin28@gmail.com"
              className="flex items-center gap-2 text-sm transition-colors duration-300 break-all"
              style={{ color: '#888888' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#f5a623'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#888888'}
            >
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#f5a623' }} />
              <span>tanuanaldrin28@gmail.com</span>
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
                    style={{ backgroundColor: '#1b1b0d', border: '1px solid #282812' }}
                    aria-label={social.name}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(245,166,35,0.5)';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(245,166,35,0.08)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = '#282812';
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1b1b0d';
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#888888' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid #282812' }}>
          <p className="text-xs text-center md:text-left" style={{ color: '#333333' }}>
            © 2026 Aldrin B. Tanuan · All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#302e14' }}>Built by Aldrin Tanuan</p>
        </div>
      </div>
    </footer>
  );
}

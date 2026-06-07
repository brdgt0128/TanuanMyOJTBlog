import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PersonalProfile } from './components/PersonalProfile';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { BlogEntries } from './components/BlogEntries';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // ── Section-level fade-up ──────────────────────────────
      const sections = document.querySelectorAll<HTMLElement>('section:not(#home)');

      const sectionObs = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            target.classList.add('sr-in');

            // Stagger all direct grid / flex children inside this section
            const cards = target.querySelectorAll<HTMLElement>(
              '.grid > *, [class*="space-y"] > *, [class*="flex-wrap"] > *'
            );
            cards.forEach((card, i) => {
              card.classList.add('sr-card');
              card.style.transitionDelay = `${i * 60}ms`;
              // tiny extra timeout so the card class + delay are applied before .sr-in fires
              setTimeout(() => card.classList.add('sr-in'), 60 + i * 60);
            });

            sectionObs.unobserve(target);
          });
        },
        { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
      );

      sections.forEach((el) => {
        el.classList.add('sr-section');
        sectionObs.observe(el);
      });

      // ── Section headers — slide in from left ──────────────
      const headers = document.querySelectorAll<HTMLElement>('section:not(#home) h2');
      const headerObs = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
              target.classList.add('sr-in');
              headerObs.unobserve(target);
            }
          });
        },
        { threshold: 0.5 }
      );
      headers.forEach((el) => {
        el.classList.add('sr-left');
        headerObs.observe(el);
      });

      return () => {
        sectionObs.disconnect();
        headerObs.disconnect();
      };
    }, 120); // wait for React to finish painting

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000]">
      <Navigation />
      <Hero />
      <PersonalProfile />
      <Experience />
      <Projects />
      <BlogEntries />
      <Achievements />
      <Footer />
    </div>
  );
}

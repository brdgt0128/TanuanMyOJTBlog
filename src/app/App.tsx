import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PersonalProfile } from './components/PersonalProfile';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { BlogEntries } from './components/BlogEntries';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';

export default function App() {

  return (
    <div className="min-h-screen grid-bg" style={{ backgroundColor: 'var(--paper)' }}>
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

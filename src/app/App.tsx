import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PersonalProfile } from './components/PersonalProfile';
import { Experience } from './components/Experience';
import { BlogEntries } from './components/BlogEntries';
import { Achievements } from './components/Achievements';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navigation />
      <Hero />
      <PersonalProfile />
      <Experience />
      <BlogEntries />
      <Achievements />
      <Footer />
    </div>
  );
}
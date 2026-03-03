import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Production } from './components/Production';
import { Quarries } from './components/Quarries';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero onNavigate={scrollToSection} />
      <About />
      <Products />
      <Production />
      <Quarries />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

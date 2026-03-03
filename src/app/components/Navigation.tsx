import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-gray-900"
          >
            ELSTONE
          </button>
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'about', label: 'О компании' },
              { id: 'products', label: 'Продукция' },
              { id: 'production', label: 'Производство' },
              { id: 'quarries', label: 'Карьер' },
              { id: 'projects', label: 'Проекты' },
              { id: 'contact', label: 'Контакты' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-gray-900 transition-colors capitalize"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

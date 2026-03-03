import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}elsone.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
              className="text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
          Искусство камня
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Натуральный камень от ELSTONE
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={() => onNavigate('products')}
            className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Каталог
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Связаться
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => onNavigate('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}

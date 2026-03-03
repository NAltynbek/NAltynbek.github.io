import { motion } from 'motion/react';
import { Award, Factory, Truck, Headphones, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const advantages = [
  {
    icon: Award,
    title: 'Премиальное качество',
    description: 'Натуральный камень высшего класса',
  },
  {
    icon: Factory,
    title: 'Собственное производство',
    description: 'Полный контроль качества',
  },
  {
    icon: Truck,
    title: 'Доставка по миру',
    description: 'Отгрузки по всему миру',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Экспертные консультации',
  },
  {
    icon: Leaf,
    title: 'Экологично',
    description: 'Ответственное производство',
  },
];

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">О компании ELSTONE</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 25 лет опыта: сочетание ручного мастерства и современных технологий. Собственные карьеры гарантируют
            стабильное качество камня и ответственную переработку.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-900 text-white">
                <item.icon size={32} />
              </div>
              <h3 className="text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

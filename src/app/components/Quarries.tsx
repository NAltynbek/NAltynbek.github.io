import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { ImageWithFallback } from './ImageWithFallback';
import { Leaf, Droplet, Recycle } from 'lucide-react';

const practices = [
  {
    icon: Leaf,
    title: 'Экологичная добыча',
    description: 'Ответственные методы разработки карьеров',
  },
  {
    icon: Droplet,
    title: 'Сбережение воды',
    description: 'Замкнутый цикл воды на всех этапах',
  },
  {
    icon: Recycle,
    title: 'Безотходность',
    description: 'Повторное использование фракций камня',
  },
];

export function Quarries() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="quarries" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Наши карьеры</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прямой доступ к месторождениям премиального камня с экологичными практиками
          </p>
        </motion.div>

        <motion.div
          className="relative h-[500px] mb-12 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1662049384524-02abb7d96fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMHF1YXJyeSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI1NDAzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Stone quarry landscape"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              className="bg-white p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-900 text-white">
                <practice.icon size={32} />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

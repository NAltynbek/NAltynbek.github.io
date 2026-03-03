import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { ImageWithFallback } from './ImageWithFallback';
import { Settings, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'Современные технологии',
    description: 'Оборудование для точной резки и полировки',
  },
  {
    icon: Shield,
    title: 'Контроль качества',
    description: 'Проверка на каждом этапе производства',
  },
  {
    icon: Zap,
    title: 'Быстрая обработка',
    description: 'Высокая скорость при сохранении стандартов',
  },
];

export function Production() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="production" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Технологии и качество</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Производство объединяет ручное мастерство и современные технологии
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="relative h-96 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697281679290-ad7be1b10682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGZhY3RvcnklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc3MjU0MDMxOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Stone factory production"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white flex items-center justify-center">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

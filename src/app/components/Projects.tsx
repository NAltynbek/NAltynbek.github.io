import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { ImageWithFallback } from './ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Лобби премиум-отеля',
    location: 'Ош, Кыргызстан',
    image: 'https://images.unsplash.com/photo-1700687175205-158daefd9880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXJibGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0Njg4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Премиальная кухня',
    location: 'Джалал-Абад, Кыргызстан',
    image: 'https://images.unsplash.com/photo-1771795638652-01821921a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBraXRjaGVuJTIwY291bnRlcnRvcHxlbnwxfHx8fDE3NzI1NDAzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Фасад бизнес-центра',
    location: 'Бишкек, Кыргызстан',
    image: 'https://images.unsplash.com/photo-1625335412895-e8133ea7ad85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3RvbmUlMjB3YWxsfGVufDF8fHx8MTc3MjU0MDMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Жилой пол',
    location: 'Ыссык-Куль, Кыргызстан',
    image: 'https://images.unsplash.com/photo-1771509620264-0cb5203bc105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZXJ0aW5lJTIwdGlsZSUyMGZsb29yfGVufDF8fHx8MTc3MjU0MDMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Наши проекты</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Лучшие реализации из натурального камня по всему миру
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative h-96 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="text-white/90">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

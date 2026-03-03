import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { ImageWithFallback } from './ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Белый мрамор',
    type: 'marble',
    category: 'Слэбы',
    image: 'https://images.unsplash.com/photo-1772211506168-1cbfcb361be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMGJsb2Nrc3xlbnwxfHx8fDE3NzI1NDAzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Премиальный белый мрамор для статусных интерьеров',
  },
  {
    id: 2,
    name: 'Травертин Classic',
    type: 'travertine',
    category: 'Слэбы',
    image: 'https://images.unsplash.com/photo-1759507058804-cc729b38d1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZXJ0aW5lJTIwc3RvbmUlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjU0MDMxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Натуральный травертин с выразительным рисунком',
  },
  {
    id: 3,
    name: 'Слэбы мрамора',
    type: 'marble',
    category: 'Слэбы',
    image: 'https://images.unsplash.com/photo-1673924967770-6c78d239476e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBzbGFicyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzcyNTQwMzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Крупноформатные слэбы для коммерческих объектов',
  },
  {
    id: 4,
    name: 'Плитка травертин',
    type: 'travertine',
    category: 'Плитка',
    image: 'https://images.unsplash.com/photo-1771509620264-0cb5203bc105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZXJ0aW5lJTIwdGlsZSUyMGZsb29yfGVufDF8fHx8MTc3MjU0MDMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Элегантная плитка для пола и стен',
  },
  {
    id: 5,
    name: 'Каменные блоки',
    type: 'blocks',
    category: 'Блоки',
    image: 'https://images.unsplash.com/photo-1625335412895-e8133ea7ad85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3RvbmUlMjB3YWxsfGVufDF8fHx8MTc3MjU0MDMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Блоки из натурального камня для архитектурных задач',
  },
  {
    id: 6,
    name: 'Интерьер из мрамора',
    type: 'marble',
    category: 'Слэбы',
    image: 'https://images.unsplash.com/photo-1700687175205-158daefd9880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXJibGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0Njg4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Премиальный мрамор для высоких интерьеров',
  },
];

const filters = [
  { id: 'all', label: 'Все' },
  { id: 'marble', label: 'Мрамор' },
  { id: 'travertine', label: 'Травертин' },
  { id: 'blocks', label: 'Блоки' },
];

export function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.type === activeFilter);

  return (
    <section id="products" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">Наша продукция</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Премиальный натуральный камень напрямую из наших карьеров
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 transition-colors ${
                activeFilter === filter.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-80 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h3 className="text-xl text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

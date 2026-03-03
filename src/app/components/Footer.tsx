import { Facebook, Instagram, PhoneCall } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4">ELSTONE</h3>
            <p className="text-gray-400">
              Натуральный камень премиум-класса из Кыргызстана. Добыча, обработка, поставки по всему миру.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Продукция
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Проекты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+(996)559-10-00-97</li>
              <li>info@elstone.com</li>
              <li>Жалал-Абад, ул. Индустриальная пром зона</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Мы на связи</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/996559100097"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <PhoneCall size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 ELSTONE. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

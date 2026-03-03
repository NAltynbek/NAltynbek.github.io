import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 bg-[#f6f3ed]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="bg-gradient-to-br from-white via-[#f9f5ef] to-[#f1eadf] text-[#1f2a33] p-12 rounded-3xl shadow-xl border border-[#e6dece]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#8a7657]">Свяжитесь с нами</p>
              <h2 className="text-4xl md:text-5xl font-semibold">Поговорите с нашей командой</h2>
              <p className="text-lg text-[#4a4f55] max-w-2xl">
                Позвоните — сразу соединяем с нужным специалистом. Без форм и ожиданий.
              </p>

              <div className="bg-white/70 border border-[#e6dece] rounded-2xl p-5 inline-flex items-start gap-3 shadow-sm">
                <Phone size={20} className="mt-1 text-[#d97745]" />
                <div>
                  <p className="text-sm text-[#8a7657]">Номера для звонков</p>
                  <div className="mt-1 space-y-1">
                    <a href="tel:+996559100097" className="block text-lg font-medium text-[#1f2a33]">
                      +(996)559-10-00-97
                    </a>
                    <a href="tel:+996559100097" className="block text-lg font-medium text-[#1f2a33]">
                      WhatsApp: +(996)559-10-00-97
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/70 border border-[#e6dece] rounded-2xl p-5 sm:col-span-2">
                <p className="text-sm text-[#8a7657]">Email</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="mailto:elstone.kg@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4ede1] text-[#1f2a33] border border-[#e6dece]"
                  >
                    <Mail size={16} />
                    Elstone.kg@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-white/70 border border-[#e6dece] rounded-2xl p-5 sm:col-span-2">
                <p className="text-sm text-[#8a7657]">Адрес</p>
                <p className="text-lg text-[#1f2a33] mt-1">г. Жалал-Абад </p>
                <p className="text-[#4a4f55]">ул. Индустриальная пром зона</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

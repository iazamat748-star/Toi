import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section 
      id="welcome-section"
      className="relative min-h-[80vh] flex flex-col justify-center py-20 px-4 xl:px-8 bg-gradient-to-b from-[#faf6f0] via-white to-[#faf6f0] overflow-hidden"
    >
      {/* Decorative floral pattern outline overlays */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-gold-medium/5 text-9xl font-serif pointer-events-none select-none">
        Шаңырақ
      </div>

      <div className="max-w-3xl mx-auto w-full relative z-20 text-center">
        {/* Heart icon with slow floating pulse */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0 }}
          className="flex justify-center mb-6"
        >
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-amber-500/5 border border-[#dfba6b]/30">
            <Heart className="w-5 h-5 text-gold-medium animate-[pulse_2.5s_infinite]" />
            <span className="absolute -inset-1 rounded-full border border-dashed border-[#dfba6b]/20 animate-[spin_20s_linear_infinite]" />
          </div>
        </motion.div>

        {/* Small header */}
        <h3 className="text-[11px] sm:text-xs tracking-[0.3em] font-sans uppercase text-gold-dark font-medium mb-4 select-none">
          Қадірлі ағайын-туыс, бауырлар, құда-жекжат және достар!
        </h3>

        {/* Elegant divider */}
        <div className="gold-ornament mb-8 scale-90" />

        {/* Beautiful warm Kazakh invitation poem */}
        <div className="space-y-6 text-gray-800 font-serif font-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4 italic">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Бөлісіп біздермен бірге қуанышты,<br />
            Көтеріңіз ақ тілекпен мерейді.<br />
            Бұл құдалық — екі әулетті тоғыстырған,<br />
            Ынтымақ пен сыйластықты тереңдеткен!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="not-italic text-sm sm:text-base font-sans text-gray-600 font-light max-w-lg mx-auto pt-4 leading-relaxed"
          >
            Ұлымыз бен келініміздің өмір суреттерін бірге өрнектеп, екі шаңырақтың сыйластығы мен татулығын бекітер салтанатты “ҚҰДАЛЫҚ ТОЙЫНА” сіздерді зор құрметпен шақырамыз!
          </motion.p>
        </div>

        {/* Traditional Blessing Cards (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 rounded-2xl border border-gold-light shadow-sm"
          >
            <h4 className="text-sm font-sans font-semibold text-amber-900 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-medium" />
              Той Иелері:
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
              Ұлымыз бен келініміздің ұядан ұшқан ақ жолын тілеп, бата берер ата-анасы мен жақын әулет мүшелері.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 rounded-2xl border border-gold-light shadow-sm"
          >
            <h4 className="text-sm font-sans font-semibold text-amber-900 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-medium" />
              Тілек:
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed">
              “Келіннің бетін кім ашса, сол ыстық” демекші, ата-салтымызға сай құдалар арасындағы ынтымақты нығайту.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

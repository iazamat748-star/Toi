import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#12100d] text-[#faf6f0] pt-24 pb-12 px-4 overflow-hidden border-t border-gold-medium/10">
      
      {/* Decorative vector arches */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#dfba6b_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
      
      <div className="max-w-4xl mx-auto w-full relative z-20 text-center flex flex-col items-center">
        
        {/* Animated luxury top divider ornaments */}
        <div className="gold-ornament mb-10 scale-90 opacity-80" />

        {/* Big Heart element */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2, ease: 'easeInOut' }}
          className="text-[#dfba6b] mb-6 inline-block cursor-pointer"
        >
          <Heart className="w-8 h-8 fill-gold-medium text-gold-medium" />
        </motion.div>

        {/* Central phrase */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-widest text-gold-gradient leading-tight uppercase mb-6"
        >
          Сіздерді асыға күтеміз!
        </motion.h2>

        <p className="text-xs sm:text-sm text-gray-405 font-sans font-light tracking-[0.2em] uppercase text-gray-400 max-w-sm mb-12 leading-relaxed">
          Абзал & Диананың Құдалық Мерекесі
        </p>

        {/* Beautiful bottom divider ornament */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-medium to-transparent mb-10" />

        {/* Watermark Details */}
        <div className="space-y-2 text-[10px] sm:text-xs font-sans font-light tracking-wider text-gray-500 max-w-lg">
          <p>© {currentYear} • Барлық құқықтар қорғалған.</p>
          <p className="text-gray-600 font-extralight text-[9px] sm:text-10px tracking-[0.25em] h-6 flex items-center justify-center">
            ЖҮРЕКТЕН ЖҮРЕККЕ • ЭЛИТАЛЫҚ ЦИФРЛЫҚ ШАҚЫРУ
          </p>
        </div>

      </div>
    </footer>
  );
}

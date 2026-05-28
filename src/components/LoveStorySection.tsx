import { motion } from 'motion/react';
import { HeartHandshake, Sparkles, Infinity as InfinityIcon } from 'lucide-react';

export default function LoveStorySection() {
  return (
    <section 
      id="lovestory-section"
      className="relative min-h-[90vh] flex flex-col justify-center py-24 px-4 bg-[#12100d] text-[#faf6f0] overflow-hidden"
    >
      {/* Absolute layout elements for background glow */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-amber-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      
      {/* Subtle fine grid lines */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-5xl mx-auto w-full relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="mb-6"
          >
            <span className="w-10 h-10 rounded-full border border-gold-medium/40 flex items-center justify-center text-gold-medium/75 bg-white/5 shadow-gold-glow">
              <InfinityIcon className="w-5 h-5 animate-pulse" />
            </span>
          </motion.div>

          <h3 className="text-xs tracking-[0.3em] font-sans uppercase text-gold-light font-medium mb-12 select-none">
            ЖАС ЖҰБАЙЛАР
          </h3>

          {/* Luxury Floating Interactive Names Panel with shimmer */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full max-w-3xl my-6">
            
            {/* Abzal Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-12 rounded-3xl glass-panel-dark border border-gold-medium/10 text-center w-full max-w-xs group overflow-hidden"
            >
              <div className="absolute -inset-10 bg-gradient-to-tr from-gold-medium/5 via-transparent to-white/5 opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute top-4 left-4 text-gold-medium/20 text-3xl font-serif select-none font-bold">A</div>
              <Sparkles className="w-5 h-5 text-gold-medium/30 absolute right-6 top-6 animate-pulse" />

              <h4 className="text-4xl md:text-5xl font-serif font-light text-gold-gradient tracking-wide mb-3">
                Абзал
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-gray-400 font-medium">
                салиқалы күйеу жігіт
              </p>
              
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-amber-100/60 font-serif leading-relaxed italic">
                “Ақылды, салмақты, отбасының тірегі мен мақтанышы”
              </div>
            </motion.div>

            {/* Heart Core Separator */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient shadow-gold-glow-lg text-[#12100d] relative group cursor-pointer"
            >
              <div className="absolute -inset-2 rounded-full border border-gold-medium/25 animate-ping opacity-60 pointer-events-none" />
              <span className="font-serif italic font-semibold text-lg">А ❤️ Д</span>
            </motion.div>

            {/* Diana Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 md:p-12 rounded-3xl glass-panel-dark border border-gold-medium/10 text-center w-full max-w-xs group overflow-hidden"
            >
              <div className="absolute -inset-10 bg-gradient-to-tr from-gold-medium/5 via-transparent to-white/5 opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute top-4 left-4 text-gold-medium/20 text-3xl font-serif select-none font-bold">Д</div>
              <Sparkles className="w-5 h-5 text-gold-medium/30 absolute right-6 top-6 animate-pulse" />

              <h4 className="text-4xl md:text-5xl font-serif font-light text-gold-gradient tracking-wide mb-3">
                Диана
              </h4>
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-gray-400 font-medium">
                парасатты сұлу келін
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-amber-100/60 font-serif leading-relaxed italic">
                “Парасатты, ардақты, отбасының шуағы мен көркі”
              </div>
            </motion.div>

          </div>

          {/* Inspirational Kazakh wisdom about family */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.0 }}
            className="mt-14 max-w-xl text-center px-4"
          >
            <div className="w-12 h-[1px] bg-gold-medium/40 mx-auto mb-6" />
            <p className="text-sm sm:text-base font-serif font-light italic text-amber-105/90 leading-relaxed">
              “Құдалық — мың жылдық, күйеу — жүз жылдық” дейді дана халқымыз. Сыйластық пен сырластыққа толы мыңжылдық құдалыққа аяқ басқан қос шаңырақтың ақ мерекесі баянды болғай.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Film, Music, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLovePoem, setShowLovePoem] = useState(false);

  const toggleTeaser = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#dfba6b', '#ffffff']
      });
    }
  };

  return (
    <section 
      id="video-section"
      className="relative min-h-[80vh] flex flex-col justify-center py-24 px-4 bg-gradient-to-b from-[#faf6f0] via-white to-[#faf6f0] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full relative z-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.3em] font-sans text-gold-dark uppercase font-semibold">Синематикалық сезім</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 mt-2">Той Трейлері</h2>
          <div className="gold-ornament mt-4 scale-75" />
        </div>

        {/* Video Player Box Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="relative aspect-video rounded-3xl overflow-hidden glass-panel border border-gold-medium/30 shadow-gold-glow group cursor-pointer"
          onClick={toggleTeaser}
        >
          {/* Animated Cinematic Background Panel */}
          <div className="absolute inset-0 bg-[#12100d] flex items-center justify-center">
            {/* Ambient gradients */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-amber-900/45 via-transparent to-black/80 transition-opacity duration-1000 ${isPlaying ? 'opacity-80' : 'opacity-100'}`} />
            
            {/* Floating film ornaments inside player */}
            <Film className="w-16 h-16 text-gold-medium/10 absolute left-6 top-6 animate-pulse" />
            <Music className="w-12 h-12 text-gold-medium/10 absolute right-8 bottom-8 animate-bounce" />

            {/* Glowing circular backdrop for button */}
            <div className={`absolute w-36 h-36 rounded-full bg-gold-medium/5 blur-xl transition-all duration-1000 ${isPlaying ? 'scale-150 opacity-40' : 'scale-100 opacity-100'}`} />

            {/* Simulated Cinema Screen State */}
            {isPlaying ? (
              <div className="flex flex-col items-center justify-center p-6 text-center z-10 space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-gold-medium/80 mb-2"
                >
                  <Sparkles className="w-4 h-4 animate-spin text-gold-medium" />
                  <span className="text-[10px] tracking-[0.2em] font-sans uppercase">Бейнебаян қосылды • Киноәлем</span>
                </motion.div>
                
                {/* Simulated Film Subtitles rolling (Cinematic wedding movie style) */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                  transition={{ repeat: Infinity, duration: 4.5, times: [0, 0.1, 0.9, 1] }}
                  className="text-lg sm:text-2xl font-serif text-white font-light tracking-wide italic max-w-xl px-4"
                >
                  “Екі жүрек тоғысқан сәттен бері, біздің махаббат хикаямыз басталды...”
                </motion.p>

                <p className="text-[9px] font-sans text-gray-400 tracking-wider">
                  Презентацияны тоқтату үшін кез келген жерді басыңыз
                </p>

                {/* Simulated playback bar */}
                <div className="w-48 h-[2px] bg-white/20 rounded-full relative overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    className="absolute inset-0 bg-gold-gradient" 
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center z-10 text-center p-6">
                {/* Big Royal Play Circle Button */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-gold-gradient text-[#12100d] flex items-center justify-center shadow-gold-glow-lg transition-all duration-300 relative"
                >
                  <span className="absolute -inset-2 rounded-full border border-gold-medium/30 animate-ping opacity-60" />
                  <Play className="w-8 h-8 fill-[#12100d] ml-1 text-[#12100d]" />
                </motion.div>

                <h4 className="text-lg font-serif text-[#faf6f0] mt-6 tracking-wide font-light">
                  Абзал & Диана — Бақыт жолында
                </h4>
                <p className="text-[10px] font-sans text-gold-light/60 uppercase tracking-[0.2em] mt-2">
                  Көру үшін басыңыз (Синематикалық таныстырылым)
                </p>
              </div>
            )}
          </div>

          {/* Golden border frame */}
          <div className="absolute inset-4 border border-gold-medium/10 rounded-2xl pointer-events-none" />
        </motion.div>

        {/* Dynamic Poem Reveal Under Video */}
        <div className="mt-12 text-center max-w-xl mx-auto px-4">
          <button
            onClick={() => setShowLovePoem(prev => !prev)}
            className="text-xs sm:text-sm font-sans tracking-[0.15em] text-gold-dark font-medium uppercase border-b border-gold-medium/30 pb-1 hover:text-amber-900 transition-colors cursor-pointer inline-block"
          >
            {showLovePoem ? 'Өлең шумағын жабу' : 'Жүрекжарды сөздерді оқу'}
          </button>

          <motion.div
            initial={false}
            animate={{ height: showLovePoem ? 'auto' : 0, opacity: showLovePoem ? 1 : 0 }}
            className="overflow-hidden"
            transition={{ duration: 0.5 }}
          >
            <div className="pt-6 space-y-4 text-sm sm:text-base text-gray-700 font-serif font-light leading-relaxed italic">
              <p>
                “Ақ тілекпен аялап қос жүректі,<br />
                Бір арнаға тоғысты егіз тілек.<br />
                Абзал мықты қорғаны, Диана — гүлі,<br />
                Жарассын мәңгі бақи өмір жыры.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onFinished: () => void;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant steady loading simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onFinished, 900); // Allow exit animations
          }, 400);
          return 100;
        }
        return prev + Math.random() * 8 + 3;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#12100d] overflow-hidden text-[#faf6f0]"
        >
          {/* Decorative luxury abstract glowing backdrops */}
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

          {/* Golden ornamental pattern background overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#dfba6b_1px,transparent_1px)] [background-size:24px_24px]" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center max-w-lg px-6 text-center"
          >
            {/* Elegant luxury top vector details */}
            <div className="mb-6 flex items-center justify-center gap-2 text-gold-medium/60 scale-75">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-medium" />
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold-medium" />
              <span className="text-sm font-light uppercase tracking-[0.3em] font-serif">Құдалық Той</span>
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold-medium" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold-medium" />
            </div>

            {/* Gorgeous Cinematic Serif Names with Golden Glow */}
            <h1 className="text-4xl sm:text-5xl font-serif font-light tracking-wide text-center leading-relaxed">
              <span className="text-gold-gradient font-light block">Абзал</span>
              <span className="text-lg sm:text-xl font-sans italic text-gold-light/70 my-1 block">мен</span>
              <span className="text-gold-gradient font-light block">Диана</span>
            </h1>

            {/* Elegant subtext with golden shimmer sweep */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.6, duration: 1.0 }}
              className="mt-6 text-xs sm:text-sm tracking-[0.2em] font-sans font-light text-amber-100/60 uppercase"
            >
              Той шақыруы жүктелуде
            </motion.p>

            {/* Luxurious Loading Progress bar */}
            <div className="relative mt-8 w-48 sm:w-60 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gold-gradient rounded-full"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
              <div className="absolute inset-0 bg-gold-shimmer mix-blend-overlay" />
            </div>

            {/* Progress Percentage */}
            <div className="mt-3 text-[10px] sm:text-xs font-mono tracking-widest text-[#dfba6b]/75">
              {Math.min(100, Math.floor(progress))}%
            </div>
          </motion.div>

          {/* Exquisite footer watermark on loading */}
          <div className="absolute bottom-10 text-[9px] sm:text-10px tracking-[0.25em] font-sans font-extralight uppercase text-white/30 text-center">
            Қазақша Элиттік Шақыру хат • 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

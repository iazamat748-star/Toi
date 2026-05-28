import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const targetDate = new Date('2026-07-23T15:00:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      let newTimeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      setTimeLeft(newTimeLeft);
      setIsCalculated(true);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const triggerSurprise = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#dfba6b', '#f4ebd9', '#ffffff', '#b58d3d']
    });
  };

  const nextSectionScroll = () => {
    const nextElem = document.getElementById('welcome-section');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-16 pb-12 px-4 overflow-hidden self-center">
      {/* Background radial gradient overlay that contrasts nicely with particles and text */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f0]/60 via-[#fdfbf7]/80 to-[#faf6f0] pointer-events-none z-0" />

      {/* Exquisite Top Ring Silhouette / Frame ornament */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 border border-amber-900/[0.03] rounded-full pointer-events-none flex items-center justify-center">
        <div className="w-[180px] h-[180px] border border-dashed border-amber-900/[0.04] rounded-full flex items-center justify-center">
          <div className="w-[170px] h-[170px] border border-amber-900/[0.03] rounded-full" />
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center text-center relative z-20 max-w-4xl mx-auto w-full pt-12">
        {/* Shimmering Small Intro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="px-5 py-2 rounded-full glass-panel border border-gold-medium/40 text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase inline-block text-amber-800/80 shadow-gold-glow">
            ТОЙҒА ШАҚЫРУ
          </span>
        </motion.div>

        {/* Core Cinematic Text Animations */}
        <div className="space-y-4 max-w-2xl px-2">
          {/* Son Name */}
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-gray-900"
          >
            Ұлымыз <span className="text-gold-gradient font-medium cursor-pointer relative group inline-block" onClick={triggerSurprise}>
              Абзал
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gold-medium/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
          </motion.h2>

          {/* Connective text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-gold-medium/60 py-1"
          >
            <span className="h-[1px] w-12 bg-gold-medium/30" />
            <span className="font-serif italic text-lg text-amber-900/40">пен</span>
            <span className="h-[1px] w-12 bg-gold-medium/30" />
          </motion.div>

          {/* Daughter-in-law Name */}
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-gray-900"
          >
            келініміз <span className="text-gold-gradient font-medium cursor-pointer relative group inline-block" onClick={triggerSurprise}>
              Диананың
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gold-medium/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </span>
          </motion.h2>

          {/* Event Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0 }}
            className="pt-4"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-widest text-[#b58d3d] uppercase leading-tight select-none">
              ҚҰДАЛЫҚ ТОЙЫ
            </span>
          </motion.div>
        </div>

        {/* Elegant Invitation Verse */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="mt-8 text-sm sm:text-base text-amber-950/70 font-serif max-w-xl font-light leading-relaxed italic px-4"
        >
          “Сіздерді ақ дастарханымыздың қадірлі қонағы болуға шақырамыз”
        </motion.p>

        {/* Event Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full px-4"
        >
          {/* Card: Date */}
          <div className="glass-card p-4 rounded-2xl flex flex-col items-center shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-medium/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center text-amber-700/80 mb-2">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-[0.15em] font-sans text-gray-400 uppercase">Мезгілі</span>
            <span className="text-sm font-sans font-semibold text-gray-800 mt-1">23 Шілде 2026</span>
          </div>

          {/* Card: Location */}
          <div className="glass-card p-4 rounded-2xl flex flex-col items-center shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-medium/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center text-amber-700/80 mb-2">
              <MapPin className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-[10px] tracking-[0.15em] font-sans text-gray-400 uppercase">Мекені</span>
            <span className="text-sm font-sans font-semibold text-gray-800 mt-1">Астана қ., Балқантау 41</span>
          </div>

          {/* Card: Time */}
          <div className="glass-card p-4 rounded-2xl flex flex-col items-center shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-medium/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="w-10 h-10 rounded-full bg-gold-light/20 flex items-center justify-center text-amber-700/80 mb-2">
              <Clock className="w-5 h-5 animate-[spin_10s_linear_infinite]" />
            </div>
            <span className="text-[10px] tracking-[0.15em] font-sans text-gray-400 uppercase">Уақыты</span>
            <span className="text-sm font-sans font-semibold text-gray-800 mt-1">Сағат 15:00-де</span>
          </div>
        </motion.div>

        {/* ULTRA LUXURY 3D COUNTDOWN TIMER */}
        {isCalculated && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.9 }}
            className="mt-12 w-full max-w-md px-4"
          >
            <div className="relative p-6 sm:p-8 rounded-3xl glass-panel border border-[#dfba6b]/35 shadow-gold-glow overflow-hidden group">
              {/* Luxury animated inner borders */}
              <div className="absolute inset-0 rounded-3xl border border-dashed border-[#b58d3d]/10 pointer-events-none margin-2" />
              <div className="absolute -inset-10 bg-gradient-to-tr from-gold-medium/5 via-transparent to-white/5 opacity-50 group-hover:scale-110 transition-transform duration-1000" />

              <h4 className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-gold-dark uppercase mb-5 font-semibold text-center select-none">
                Салтанатты сәтке қалған уақыт:
              </h4>

              {/* Countdown numbers grid */}
              <div className="grid grid-cols-4 gap-3 sm:gap-4 relative z-10">
                {/* Days */}
                <div className="flex flex-col items-center bg-white/40 p-2 sm:p-3 rounded-2xl border border-amber-900/5 shadow-inner">
                  <span className="text-2xl sm:text-3xl font-serif font-light text-amber-950 tracking-tight animate-[pulse_2s_infinite]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-sans tracking-wide text-amber-800/80 mt-1 font-medium">күн</span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center bg-white/40 p-2 sm:p-3 rounded-2xl border border-amber-900/5 shadow-inner">
                  <span className="text-2xl sm:text-3xl font-serif font-light text-amber-950 tracking-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-sans tracking-wide text-amber-800/80 mt-1 font-medium">сағат</span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center bg-white/40 p-2 sm:p-3 rounded-2xl border border-amber-900/5 shadow-inner">
                  <span className="text-2xl sm:text-3xl font-serif font-light text-amber-950 tracking-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-sans tracking-wide text-amber-800/80 mt-1 font-medium">минут</span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center bg-white/40 p-2 sm:p-4 rounded-2xl border border-amber-900/5 shadow-inner relative overflow-hidden group/sec">
                  <span className="text-2xl sm:text-3xl font-serif font-light text-gold-dark tracking-tight scale-105 inline-block text-gold-gradient transition-all duration-300">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-sans tracking-wide text-amber-800/90 mt-1 font-medium">секунд</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Exquisite Chevron Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2.3, duration: 1.0 }}
        className="flex flex-col items-center gap-1 cursor-pointer select-none active:scale-95 text-gold-dark z-20 pb-4"
        onClick={nextSectionScroll}
      >
        <span className="text-[10px] tracking-[0.2em] font-sans uppercase font-medium">Төмен қарай сырғытыңыз</span>
        <ChevronDown className="w-5 h-5 animate-[bounce_2s_infinite]" />
      </motion.div>
    </section>
  );
}

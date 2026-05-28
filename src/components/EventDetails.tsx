import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle, Gift } from 'lucide-react';

export default function EventDetails() {
  const [selectedColor, setSelectedColor] = useState<string | null>('gold');

  const dressColors = [
    { id: 'gold', name: 'Алтын түсті / Golden', color: 'bg-gold-medium', hex: '#dfba6b', dark: true },
    { id: 'champagne', name: 'Шампань / Champagne', color: 'bg-champagne', hex: '#f4ebd9', dark: false },
    { id: 'ivory', name: 'Піл сүйегі / Ivory', color: 'bg-ivory', hex: '#faf6f0', dark: false },
    { id: 'beige', name: 'Сарғыш-қоңыр / Warm Beige', color: 'bg-amber-100', hex: '#fef3c7', dark: false },
    { id: 'classic', name: 'Классикалық / Elegant Dark', color: 'bg-gray-800', hex: '#1f2937', dark: true },
  ];

  const timelineSteps = [
    { time: '15:00', title: 'Қонақтардың жиналуы', desc: 'Қоршаған ақ тілек, музыкалық қарсы алу уақыты' },
    { time: '15:30', title: 'Құдаларды қарсы алу салтанаты', desc: 'Дәстүрлі Шәшу, танысу рәсімі' },
    { time: '16:00', title: 'Дін салтанаты және Ақ Дастархан', desc: 'Бата беру, сыйлықтар алмасу, мерекелік той' },
    { time: '19:00', title: 'Естелік фотосессия мен сыйлықтар', desc: 'Қонақтармен естелік сәттер' },
  ];

  return (
    <section 
      id="details-section"
      className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-[#faf6f0] via-white to-[#faf6f0] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full relative z-20">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-sans text-gold-dark uppercase font-semibold">Салтанат бағдарламасы</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 mt-2">Той Ережелері мен Уақыты</h2>
          <div className="gold-ornament mt-4 scale-75" />
        </div>

        {/* Dynamic Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Timeline / Card 1: Time */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-3xl text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-gold-medium to-transparent" />
            <div className="w-12 h-12 rounded-full bg-gold-medium/10 flex items-center justify-center text-amber-700 mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-medium text-lg text-gray-900 mb-1">Күні мен Уақыты</h4>
            <p className="text-sm font-sans font-bold text-gold-dark mt-2">23 Шілде 2026 жыл</p>
            <p className="text-xs font-sans text-gray-500 mt-1">Тәрсенбіден кейін • Бейсенбі</p>
            <p className="text-xs font-sans text-gray-500 mt-1">Сағат 15:00</p>
          </motion.div>

          {/* Card 2: Location Detail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-gold-medium to-transparent" />
            <div className="w-12 h-12 rounded-full bg-gold-medium/10 flex items-center justify-center text-amber-700 mx-auto mb-4">
              <MapPin className="w-6 h-6 animate-bounce" />
            </div>
            <h4 className="font-serif font-medium text-lg text-gray-900 mb-1">Мекенжай</h4>
            <p className="text-sm font-sans font-bold text-gold-dark mt-2">Астана қаласы</p>
            <p className="text-xs font-sans text-gray-600 mt-1">Балқантау көшесі, 41-үй</p>
            <p className="text-xs font-sans text-gray-400 mt-1">Арнайы салтанат сарайы</p>
          </motion.div>

          {/* Card 3: Registry note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-gold-medium to-transparent" />
            <div className="w-12 h-12 rounded-full bg-gold-medium/10 flex items-center justify-center text-amber-700 mx-auto mb-4">
              <Gift className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-medium text-lg text-gray-900 mb-1">Маңызды ақпарат</h4>
            <p className="text-sm font-sans font-bold text-gold-dark mt-2">Жүректен тілек</p>
            <p className="text-xs font-sans text-gray-600 mt-1">Гүлдер немесе ақ ниетті сыйлықтарыңыз қуантады</p>
            <p className="text-xs font-sans text-gray-400 mt-1">Ең жақсы сыйлық — бата беруіңіз</p>
          </motion.div>
        </div>

        {/* Elegant Day Timeline List */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl shadow-sm border border-gold-light max-w-2xl mx-auto mb-16">
          <h3 className="text-center font-serif text-xl font-medium text-amber-950 mb-8 tracking-wide">
            Құдалық Кезеңі
          </h3>

          <div className="space-y-8 relative before:absolute before:left-[17px] sm:before:left-[21px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gold-medium/30">
            {timelineSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex gap-4 sm:gap-6 relative z-10"
              >
                {/* Visual Circle Element */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-gold-medium/80 flex items-center justify-center font-mono font-medium text-xs sm:text-sm text-gold-dark shadow-sm shrink-0">
                  {step.time}
                </div>
                
                {/* Text */}
                <div className="pt-0.5 sm:pt-1.5">
                  <h4 className="font-sans font-semibold text-sm sm:text-base text-gray-900">{step.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DRESS CODE: Elegant swatch selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-gold-light max-w-2xl mx-auto text-center"
        >
          <span className="text-[10px] tracking-[0.2em] font-sans text-gold-dark font-semibold uppercase">Dress Code • Киім Үлгісі</span>
          <h3 className="text-2xl font-serif font-light text-gray-900 mt-1 mb-4">Салтанатты Классика</h3>
          
          <p className="text-gray-600 text-xs sm:text-sm font-sans font-light max-w-md mx-auto leading-relaxed mb-6">
            Ортақ жарасымдылық үшін келесі элиталық түстердің бірін немесе классикалық ресми костюм мен кешкі көйлекті таңдауды ұсынамыз:
          </p>

          {/* Intersecting Color Swatches */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
            {dressColors.map((dc) => (
              <button
                key={dc.id}
                onClick={() => setSelectedColor(dc.id)}
                className={`relative px-4 py-2.5 rounded-full border text-xs font-sans font-medium transition-all duration-500 flex items-center gap-2 cursor-pointer shadow-sm ${
                  selectedColor === dc.id
                    ? 'border-gold-dark bg-amber-50/60 scale-105 shadow-gold-glow font-semibold text-amber-900'
                    : 'border-gold-light bg-white text-gray-500 hover:border-gold-medium'
                }`}
              >
                {/* Glowing Color Spot */}
                <span 
                  className={`w-4 h-4 rounded-full ${dc.color} inline-block border border-gray-100/30 shadow-inner`}
                  style={{ backgroundColor: dc.hex }}
                />
                <span>{dc.id === 'classic' ? 'Ресми классика' : dc.name.split('/')[0]}</span>
                {selectedColor === dc.id && <CheckCircle className="w-3.5 h-3.5 text-gold-dark animate-pulse" />}
              </button>
            ))}
          </div>

          {/* Feedback description for chosen swatch */}
          <div className="mt-8 pt-4 border-t border-amber-900/5 h-10 flex items-center justify-center">
            {selectedColor && (
              <p className="text-xs sm:text-sm text-amber-900/80 font-serif italic">
                {selectedColor === 'gold' && '✨ Алтын және сары реңктер — тойымыздың басты сәні мен жылуы'}
                {selectedColor === 'champagne' && '🥂 Шампань — кез келген элиталық мерекелердің классикалық таңдауы'}
                {selectedColor === 'ivory' && '🕊️ Піл сүйегі — тазалық пен ақ пейілділікті білдіретін нәзік түс'}
                {selectedColor === 'beige' && '🍂 Жылы сарғыш — отбасылық береке мен бейбітшіліктің символы'}
                {selectedColor === 'classic' && '👔 Ресми киім — кеш мезгілінің салтанатын асқақтататын таңдау'}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, ZoomIn, X, Heart, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const galleryPhotos = [
    {
      id: 1,
      title: 'Махаббат бастауы',
      relation: 'Абзал & Диана',
      bgGrad: 'from-amber-100 to-amber-200/40',
      silhouette: (
        <svg className="w-24 h-24 text-gold-medium opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      description: 'Мәңгілік сапардың басы. Қос жүректің алғашқы таныстығы мен нәзік сезімдері.'
    },
    {
      id: 2,
      title: 'Жүректің үні',
      relation: 'Құдалық Шапағаты',
      bgGrad: 'from-champagne via-white to-amber-100/30',
      silhouette: (
        <svg className="w-24 h-24 text-gold-medium opacity-30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
        </svg>
      ),
      description: 'Терең сыйластық пен ұлттық нақыштағы құдалар арасындағы ыстық сенім орны.'
    },
    {
      id: 3,
      title: 'Ақ Баталы Үйлену',
      relation: 'Шаңырақ Тірегі',
      bgGrad: 'from-amber-50 to-amber-200/20',
      silhouette: (
        <svg className="w-24 h-24 text-gold-medium opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      description: 'Үлкен өмір белесіне бастар ақ бата мен ең жылы отбасылық тілектер сәті.'
    },
    {
      id: 4,
      title: 'Мәңгілік Одақ',
      relation: 'Бақыт Құшағында',
      bgGrad: 'from-amber-100/50 to-gold-light/40',
      silhouette: (
        <svg className="w-24 h-24 text-gold-medium opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      description: 'Абзал мен Диананың баянды махаббатының шуағы мен берекелі жаңа шаңырағы.'
    }
  ];

  return (
    <section 
      id="gallery-section"
      className="relative min-h-screen py-24 px-4 bg-[#12100d] text-[#faf6f0] overflow-hidden"
    >
      {/* Background glow node */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-amber-400/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-20">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-sans text-gold-light uppercase font-semibold">Естелік суреттер</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gold-gradient mt-2">Бақытты Сәттер Галереясы</h2>
          <div className="gold-ornament mt-4 scale-75 opacity-70" />
        </div>

        {/* 3D FLOATING PHOTO FRAMES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {galleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative aspect-[3/4] rounded-2xl p-3 bg-gradient-to-b from-[#dfba6b]/20 to-[#dfba6b]/5 border border-[#dfba6b]/30 group cursor-pointer shadow-gold-glow flex flex-col justify-between overflow-hidden"
              onClick={() => setActivePhoto(idx)}
              style={{ perspective: 1000 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: idx % 2 === 0 ? 5 : -5,
                rotateX: 3,
                boxShadow: "0 15px 35px rgba(223, 186, 107, 0.25)"
              }}
            >
              <div className="absolute inset-0 bg-gold-shimmer opacity-10 pointer-events-none mix-blend-overlay" />

              {/* Polaroid Frame Interior */}
              <div className={`flex-grow rounded-xl bg-gradient-to-tr ${photo.bgGrad} relative flex flex-col items-center justify-center p-4 overflow-hidden border border-white/10 shadow-inner`}>
                <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,transparent_20%,rgba(18,16,13,0.15)_100%) pointer-events-none" />
                
                {/* Floating Hearts in slot */}
                <Heart className="w-5 h-5 text-gold-medium/20 absolute top-4 left-4 animate-float" />
                <Sparkles className="w-5 h-5 text-gold-medium/15 absolute bottom-4 right-4 animate-pulse" />

                {/* Simulated silhouettes & line arts */}
                {photo.silhouette}

                {/* Overlay details */}
                <motion.div 
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/75 via-gray-950/40 to-transparent p-4 text-center transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <span className="text-[9px] font-sans font-medium tracking-[0.2em] text-gold-light uppercase block">
                    {photo.relation}
                  </span>
                  <span className="text-sm font-serif text-white block mt-0.5">
                    {photo.title}
                  </span>
                </motion.div>
                
                {/* Hover zoom circle icon */}
                <div className="absolute inset-0 bg-gray-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-white/95 text-gray-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 text-amber-900" />
                  </span>
                </div>
              </div>

              {/* Decorative base of polaroid */}
              <div className="pt-3 text-center pb-1">
                <span className="text-[10px] tracking-[0.25em] font-sans text-gold-light font-light uppercase select-none">
                  КӨРУ ҮШІН СЫРҒЫТЫҢЫЗ
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Zoom Overlay */}
        <AnimatePresence>
          {activePhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#12100dL]/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setActivePhoto(null)}
            >
              <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="relative bg-white text-gray-900 max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-gold-medium/30 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top decorative lock */}
                <span className="w-12 h-1 bg-gradient-to-r from-transparent via-gold-medium to-transparent mx-auto block mb-6" />

                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gold-light/20 transition-colors"
                  aria-label="Жабу"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Styled interior of frame */}
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${galleryPhotos[activePhoto].bgGrad} flex items-center justify-center p-6 border border-amber-900/10 shadow-inner relative overflow-hidden`}>
                  <div className="absolute top-4 left-4 text-xs font-serif text-amber-900/55 uppercase tracking-widest">
                    Абзал & Диана • 23.07.2026
                  </div>
                  {galleryPhotos[activePhoto].silhouette}
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-serif text-amber-950 font-medium tracking-wide">
                    {galleryPhotos[activePhoto].title}
                  </h3>
                  <div className="w-8 h-[1px] bg-gold-medium/40 mx-auto my-3" />
                  <p className="text-xs sm:text-sm text-gray-600 font-sans font-light leading-relaxed px-2">
                    {galleryPhotos[activePhoto].description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

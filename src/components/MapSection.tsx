import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, PhoneCall } from 'lucide-react';

export default function MapSection() {
  const addressString = 'Балқантау көшесі 41, Астана қаласы';
  
  // Custom navigation links for Astana local services
  const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Балқантау+41+Астана';
  const TWO_GIS_URL = 'https://2gis.kz/astana/search/Балқантау+41';
  const YANDEX_TAXI_URL = 'https://3.redirect.appmetrica.yandex.com/route?end-lat=51.1392&end-lon=71.4924&ref=AbzalDianaWedding&app=taxi';

  return (
    <section 
      id="map-section"
      className="relative min-h-[90vh] flex flex-col justify-center py-24 px-4 bg-[#12100d] text-[#faf6f0] overflow-hidden"
    >
      {/* Background visual circles */}
      <div className="absolute top-[30%] left-[20%] w-[250px] h-[250px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.3em] font-sans text-gold-light uppercase font-semibold">Салтанат орны</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gold-gradient mt-2">Бағыт Навигациясы</h2>
          <div className="gold-ornament mt-4 scale-75 opacity-70" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch px-4">
          
          {/* Formatted Guide Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl glass-panel-dark border border-gold-medium/10 text-left space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 text-gold-medium mb-3">
                <Compass className="w-5 h-5 animate-spin-slow" />
                <span className="text-[10px] tracking-[0.2em] font-sans uppercase font-medium">Мекен-жай анықтамасы</span>
              </div>
              
              <h3 className="text-2xl font-serif text-white tracking-wide font-light">
                Салтанат сарайы
              </h3>
              <p className="text-xs font-sans text-gray-400 mt-2 leading-relaxed">
                Құдалық тойы Астана қаласының таза, панорамалық ауданында, Балқантау көшесі бойындағы салтанатты залында өтеді.
              </p>
            </div>

            {/* Address box with custom hover glowing pin */}
            <div className="p-5 rounded-2xl bg-white/5 border border-gold-medium/10 space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#dfba6b] text-[#12100d] flex items-center justify-center shrink-0 shadow-gold-glow animate-pulse">
                  <MapPin className="w-4 h-4 fill-[#12100d]" />
                </span>
                <div>
                  <h4 className="font-sans font-semibold text-xs text-gold-light tracking-wider uppercase">Орналасқан жері:</h4>
                  <p className="text-sm font-sans font-medium text-white mt-1">{addressString}</p>
                </div>
              </div>
            </div>

            {/* Quick action buttons for Kazakh navigation */}
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.15em] font-sans text-gray-400 uppercase font-medium block">
                Сілтеме арқылы картадан ашу:
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Google Maps Button */}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-gold-light/20 text-xs font-sans text-white hover:bg-gold-light/10 hover:border-gold-medium/50 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Карта</span>
                </a>

                {/* 2GIS Button */}
                <a
                  href={TWO_GIS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[#dfba6b] text-[#12100d] text-xs font-sans font-semibold hover:bg-gold-light/95 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-gold-glow"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>2GIS Карта</span>
                </a>
              </div>

              {/* Yandex Taxi preset deep link */}
              <a
                href={YANDEX_TAXI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-3 rounded-xl bg-[#e52e2e]/10 border border-[#e52e2e]/30 text-xs font-sans text-amber-200 hover:bg-[#e52e2e]/20 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🚕 Такси шақыру (Yandex)</span>
              </a>
            </div>
          </motion.div>

          {/* Styled Map Embed Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-gold-medium/20 shadow-gold-glow h-[400px] lg:h-auto"
          >
            {/* Elegant OpenStreetMap or custom styled Map iframe (no keys required, 100% reliable) */}
            <iframe
              id="invitation-map-iframe"
              title="Абзал мен Диана құдалық орны"
              src="https://maps.google.com/maps?q=Балқантау%2041,%20Астана&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] saturate-[60%]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Elegant luxury styled corner widgets */}
            <div className="absolute top-4 left-4 glass-panel-dark px-4 py-2 rounded-xl text-[10px] font-sans text-gold-light border border-gold-medium/15 shadow-md pointer-events-none uppercase tracking-wider">
              Қазақстан • Нұр-Сұлтан (Астана)
            </div>

            <div className="absolute inset-x-4 bottom-4 glass-panel-dark p-4 rounded-2xl pointer-events-none border border-gold-medium/10 flex items-center justify-between">
              <p className="text-[10px] sm:text-xs font-sans text-gray-300 font-light leading-snug">
                📍 Қонақтарды сағат <strong className="text-gold-medium">15:00</strong> уақытында асыға күтеміз!
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

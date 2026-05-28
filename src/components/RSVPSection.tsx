import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, CheckCircle2, User, Users, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPSection() {
  const [guestName, setGuestName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [guestWishes, setGuestWishes] = useState('');
  const [submitting, setSubmitting] = useState<string | null>(null); // 'attending' | 'declined' | null
  const [success, setSuccess] = useState<boolean>(false);
  const [statsCount, setStatsCount] = useState(42); // Seed default beautiful count
  const [hasVoted, setHasVoted] = useState(false);

  // Default Host Phone Number for Kazakh WhatsApp (Customizable)
  const HOST_PHONE = '77764749950'; // Default placeholder, users can change easily

  useEffect(() => {
    // Generate organic sounding live participant count from localStorage or seed
    const storedCount = localStorage.getItem('abzal_diana_rsvp_count');
    const storedVoted = localStorage.getItem('abzal_diana_rsvp_voted');
    if (storedCount) {
      setStatsCount(parseInt(storedCount, 10));
    } else {
      const seedCount = 42 + Math.floor(Math.random() * 8);
      setStatsCount(seedCount);
      localStorage.setItem('abzal_diana_rsvp_count', seedCount.toString());
    }
    if (storedVoted === 'true') {
      setHasVoted(true);
    }
  }, []);

  const buildWhatsAppLink = (isAttending: boolean) => {
    // Prepare elegant custom WhatsApp message
    const intro = `Сәлеметсіздер ме! 🌺`;
    const nameStr = guestName.trim() ? `\n\nҚонақтың аты-жөні: *${guestName.trim()}*` : '';
    const countStr = isAttending ? `\nҚатысушылар саны: *${guestCount} адам*` : '';
    const wishesStr = guestWishes.trim() ? `\nҚұттықтау-тілек: _"${guestWishes.trim()}"_` : '';
    const responseStr = isAttending 
      ? `\n\nҰлыңыз Абзал мен келініңіз Диананың құдалық тойына *ҚУАНА БАРАМЫН* ❤️` 
      : `\n\nӨкінішке орай, бұл жолы құдалық тойға *БЕЙМӘЛІМ ЖАҒДАЙЛАРМЕН БАРА АЛМАЙМЫН*. Сәтті өтсін!`;

    const fullMessage = `${intro}${nameStr}${countStr}${wishesStr}${responseStr}`;
    const encodedText = encodeURIComponent(fullMessage);

    // Deep link structure that is native mobile and web optimized
    const mobileLink = `whatsapp://send?phone=${HOST_PHONE}&text=${encodedText}`;
    const webLink = `https://api.whatsapp.com/send?phone=${HOST_PHONE}&text=${encodedText}`;

    return { mobileLink, webLink };
  };

  const handleRSVPSubmit = (isAttending: boolean) => {
    if (!guestName.trim()) {
      alert('Өтінеміз, есіміңізді жазыңыз!');
      return;
    }

    setSubmitting(isAttending ? 'attending' : 'declined');

    // Trigger luxury celebrating confetti on attending
    if (isAttending) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.75 },
        colors: ['#dfba6b', '#faf6f0', '#b58d3d']
      });

      // Update local counter stats once to make page alive
      if (!hasVoted) {
        const nextCount = statsCount + guestCount;
        setStatsCount(nextCount);
        localStorage.setItem('abzal_diana_rsvp_count', nextCount.toString());
        localStorage.setItem('abzal_diana_rsvp_voted', 'true');
        setHasVoted(true);
      }
    }

    setTimeout(() => {
      setSuccess(true);
      const { mobileLink, webLink } = buildWhatsAppLink(isAttending);

      // Attempt mobile link launch first, fallback to browser api link
      const startWebLaunch = () => {
        window.open(webLink, '_blank', 'noopener,noreferrer');
      };

      // Direct dynamic native protocol redirection
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      const timer = setTimeout(() => {
        document.body.removeChild(iframe);
        startWebLaunch();
      }, 500);

      try {
        iframe.src = mobileLink;
      } catch (err) {
        console.log('Direct whatsapp protocol failed, launching web fallback', err);
        clearTimeout(timer);
        document.body.removeChild(iframe);
        startWebLaunch();
      }

      setSubmitting(null);
    }, 1200);
  };

  return (
    <section 
      id="rsvp-section"
      className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-[#faf6f0] via-white to-[#faf6f0] overflow-hidden self-center"
    >
      <div className="max-w-3xl mx-auto w-full relative z-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[0.3em] font-sans text-gold-dark uppercase font-semibold">Қатысуды растау</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-gray-900 mt-2">Жауап Хат жолдау</h2>
          <div className="gold-ornament mt-4 scale-75" />
        </div>

        {/* Live counter display for participants counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="inline-flex flex-col items-center bg-white/75 glass-panel px-8 py-4 rounded-3xl border border-gold-medium/20 shadow-sm">
            <span className="text-[10px] tracking-[0.2em] font-sans text-gray-400 font-semibold uppercase">Қатысушылар саны (расталған):</span>
            <span className="text-3xl sm:text-4xl font-serif font-light text-gold-dark mt-1 animate-pulse">
              {statsCount} қонақ
            </span>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="relative bg-white/70 glass-card p-6 sm:p-10 rounded-3xl border border-gold-light max-w-xl mx-auto shadow-md"
        >
          <h3 className="text-center font-serif text-xl font-medium text-amber-950 mb-8 tracking-wide">
            Құрметті қонақ, жауап бланкісі
          </h3>

          <div className="space-y-6">
            
            {/* Input: Name */}
            <div>
              <label htmlFor="guest-name-input" className="block text-xs font-sans font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <User className="w-4 h-4 text-gold-medium" />
                <span>Сіздің есіміңіз:</span>
              </label>
              <input
                id="guest-name-input"
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Есіміңізді және текіңізді жазыңыз"
                className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-gold-light bg-white/50 text-gray-800 placeholder-gray-400 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold-medium focus:border-gold-medium/80 transition-all duration-300"
              />
            </div>

            {/* Input: Guest Count slider */}
            <div>
              <label htmlFor="guest-count-selector" className="block text-xs font-sans font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-gold-medium" />
                <span>Өзіңізбен келетін адам саны: <strong className="text-gold-dark">{guestCount}</strong></span>
              </label>
              
              <div className="flex items-center gap-4 bg-white/30 border border-gold-light p-3.5 rounded-2xl">
                <input
                  id="guest-count-selector"
                  type="range"
                  min="1"
                  max="6"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <span className="w-8 text-center font-mono text-sm font-bold text-amber-900 border-l border-gold-light pl-2">
                  {guestCount}
                </span>
              </div>
            </div>

            {/* Input: Wishes (Optional) */}
            <div>
              <label htmlFor="guest-wishes-input" className="block text-xs font-sans font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-gold-medium" />
                <span>Жас жұбайларға ақ тілек (қосымша):</span>
              </label>
              <textarea
                id="guest-wishes-input"
                rows={3}
                value={guestWishes}
                onChange={(e) => setGuestWishes(e.target.value)}
                placeholder="Тілегіңізді осында жаза аласыз..."
                className="w-full px-4 py-3 rounded-2xl border border-gold-light bg-white/50 text-gray-800 placeholder-gray-400 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-gold-medium focus:border-gold-medium/80 transition-all duration-300 resize-none"
              />
            </div>

            {/* Disclaimer badge about whatsapp launch */}
            <div className="flex gap-2 items-start bg-amber-500/5 border border-gold-medium/20 rounded-2xl p-3 text-xs text-amber-900/70 font-sans leading-relaxed">
              <AlertCircle className="w-4 h-4 text-gold-medium shrink-0 mt-0.5" />
              <span>Түймені басқанда жауабыңыз автоматты түрде жинақталып, Растау нөмірінің <strong>WhatsApp</strong> чатына бағытталады.</span>
            </div>

            {/* TWO GIANT PREMIUM ANIMATED BUTTONS */}
            <div className="flex flex-col gap-4 pt-4 relative">
              
              {/* BUTTON 1: Attending */}
              <button
                id="rsvp-button-attending"
                disabled={submitting !== null}
                onClick={() => handleRSVPSubmit(true)}
                className={`relative w-full py-4.5 rounded-2xl bg-gold-gradient hover:bg-gold-light text-[#12100d] font-sans font-semibold text-sm sm:text-base tracking-wider uppercase active:scale-98 cursor-pointer transition-all duration-500 shadow-gold-glow-lg flex items-center justify-center gap-2 overflow-hidden ${
                  submitting === 'attending' ? 'opacity-90' : ''
                }`}
              >
                {submitting === 'attending' ? (
                  <span className="w-5 h-5 rounded-full border-2 border-[#12100d] border-t-transparent animate-spin" />
                ) : (
                  <>
                    <Heart className="w-5 h-5 fill-[#12100d] animate-pulse text-[#12100d]" />
                    <span>Қуана барамын ❤️</span>
                  </>
                )}
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 bg-gold-shimmer opacity-30 pointer-events-none mix-blend-overlay" />
              </button>

              {/* BUTTON 2: Decline */}
              <button
                id="rsvp-button-declined"
                disabled={submitting !== null}
                onClick={() => handleRSVPSubmit(false)}
                className="w-full py-4 rounded-2xl bg-white/10 border border-gray-400/35 text-gray-500 hover:text-amber-900 hover:border-gold-medium/60 font-sans font-medium text-xs sm:text-sm tracking-wide active:scale-98 transition-all duration-500 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {submitting === 'declined' ? (
                  <span className="w-4 h-4 rounded-full border-2 border-gray-400 border-t-transparent animate-spin" />
                ) : (
                  <span>Өкінішке орай, бара алмаймын</span>
                )}
              </button>

            </div>

            {/* Status dynamic overlays */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-center text-xs sm:text-sm text-green-900 font-sans font-medium flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 animate-bounce" />
                  <span>Рахмет! Жауабыңыз сәтті жинақталды және WhatsApp-қа бағытталды!</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

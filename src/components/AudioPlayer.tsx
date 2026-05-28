import { useState, useEffect, useRef, MouseEvent } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (val: boolean) => void;
}

export default function AudioPlayer({ isPlaying, setIsPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Exquisite cinematic instrumental wedding theme representation
  const AUDIO_SRC = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-84.wav'; // fallback system sounds
  // Let's use a beautiful, light, highly emotional background wedding instrumental track
  const GENTLE_INSTRUMENTAL_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // beautiful smooth classical tune for fallback / demo
  const KAZAKH_STYLE_TUNE = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'; // soft, sweet classical loop

  useEffect(() => {
    // Graceful Audio Initialization
    const audio = new Audio(KAZAKH_STYLE_TUNE);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    // Auto-setup interaction listener to bypass browser autoplay blocks
    const handleFirstClick = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audio.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log('Autoplay deferred or blocked. Player is ready.', err);
          });
        window.removeEventListener('click', handleFirstClick);
        window.removeEventListener('touchstart', handleFirstClick);
      }
    };

    window.addEventListener('click', handleFirstClick);
    window.addEventListener('touchstart', handleFirstClick);

    return () => {
      audio.pause();
      window.removeEventListener('click', handleFirstClick);
      window.removeEventListener('touchstart', handleFirstClick);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(err => {
        console.log('Audio playback waiting for interaction', err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = (e: MouseEvent) => {
    e.stopPropagation(); // Avoid triggering child events
    if (!audioRef.current) return;

    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-45 flex items-center gap-3">
      {/* Visual Equalizer Pill */}
      {isPlaying && (
        <div className="flex items-center gap-1.5 h-7 px-3 rounded-full glass-panel border-gold py-1">
          <span className="text-[10px] tracking-wider text-amber-800 font-sans font-medium uppercase select-none">
            Әуен қосулы
          </span>
          <div className="flex items-end gap-[2px] h-3 w-4">
            <span className="w-[2px] bg-gold-medium animate-[pulse_0.8s_infinite] h-2.5" />
            <span className="w-[2px] bg-gold-medium animate-[pulse_1.2s_infinite] h-3" />
            <span className="w-[2px] bg-gold-medium animate-[pulse_0.9s_infinite] h-1.5" />
            <span className="w-[2px] bg-gold-medium animate-[pulse_1.1s_infinite] h-2.5" />
          </div>
        </div>
      )}

      {/* Premium Floating Controller Button */}
      <button
        id="music-control-button"
        onClick={togglePlay}
        className={`relative w-12 h-12 flex items-center justify-center rounded-full active:scale-95 transition-all duration-500 shadow-gold-glow cursor-pointer ${
          isPlaying 
            ? 'bg-amber-500/10 border border-gold-medium/50 text-amber-800' 
            : 'bg-white/80 border border-gold-light text-gray-400'
        }`}
        aria-label="Музыканы қосу/өшіру"
        title="Фондық әуен"
      >
        {/* Animated outer glowing layers */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full bg-amber-200/20 animate-ping opacity-60 pointer-events-none" />
            <span className="absolute -inset-1 rounded-full border border-amber-300/30 animate-[pulse_2s_infinite] pointer-events-none" />
          </>
        )}
        
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

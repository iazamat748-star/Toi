import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import FloatingParticles from './components/FloatingParticles';
import AudioPlayer from './components/AudioPlayer';
import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import LoveStorySection from './components/LoveStorySection';
import EventDetails from './components/EventDetails';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import MapSection from './components/MapSection';
import RSVPSection from './components/RSVPSection';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  return (
    <>
      {/* 1. Preloader Cinematic Screen */}
      <LoadingScreen onFinished={() => {
        setIsLoaded(true);
        // Start playing the gorgeous background theme on load complete
        setAudioPlaying(true);
      }} />

      {/* Main Container */}
      {isLoaded && (
        <div className="relative min-h-screen selection:bg-gold-light selection:text-amber-950 text-gray-800 font-sans antialiased overflow-x-hidden">
          
          {/* 2. Global background dust & bokeh canvas layer */}
          <FloatingParticles />

          {/* 3. Luxury Floating Audio Controller */}
          <AudioPlayer isPlaying={audioPlaying} setIsPlaying={setAudioPlaying} />

          {/* 4. Main Sections */}
          <main className="relative z-20 w-full">
            {/* Cinematic landing hero with 3D look timer */}
            <HeroSection />

            {/* Traditional welcome text & poem block */}
            <WelcomeSection />

            {/* Custom high end animated names card layout */}
            <LoveStorySection />

            {/* Event Agenda & clothing dress code swatch selector */}
            <EventDetails />

            {/* POLAROID 3D float gallery */}
            <GallerySection />

            {/* Audio/Video Cinematic Tease frame */}
            <VideoSection />

            {/* Interactive map coordinates guidance */}
            <MapSection />

            {/* Dynamic RSVP Form & Direct WhatsApp linkages */}
            <RSVPSection />
          </main>

          {/* 5. Gold themed footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  amplitude: number;
  frequency: number;
  angle: number;
  color: string;
}

interface RosePetal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swingAmplitude: number;
  swingSpeed: number;
  swingAngle: number;
}

interface BokehDot {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let petals: RosePetal[] = [];
    let bokehs: BokehDot[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic sizing helper
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      particles = [];
      petals = [];
      bokehs = [];

      // Gold dust particles (sparkling)
      const particleCount = Math.min(60, Math.floor(width / 20));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: -Math.random() * 0.5 - 0.2,
          opacity: Math.random(),
          fadeSpeed: Math.random() * 0.01 + 0.005,
          amplitude: Math.random() * 1.5 + 0.5,
          frequency: Math.random() * 0.01 + 0.005,
          angle: Math.random() * Math.PI * 2,
          color: `rgba(${220 + Math.floor(Math.random() * 35)}, ${180 + Math.floor(Math.random() * 45)}, ${90 + Math.floor(Math.random() * 50)}, ${Math.random() * 0.4 + 0.3})`,
        });
      }

      // Rose petals (slow falling)
      const petalCount = Math.min(15, Math.floor(width / 80));
      for (let i = 0; i < petalCount; i++) {
        petals.push({
          x: Math.random() * width,
          y: Math.random() * height - height, // Start offscreen
          size: Math.random() * 8 + 6,
          speedY: Math.random() * 0.6 + 0.4,
          speedX: (Math.random() - 0.5) * 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: Math.random() * 0.4 + 0.4,
          swingAmplitude: Math.random() * 2 + 1,
          swingSpeed: Math.random() * 0.02 + 0.01,
          swingAngle: Math.random() * Math.PI * 2,
        });
      }

      // Large warm bokeh dots
      const bokehCount = Math.min(12, Math.floor(width / 120));
      for (let i = 0; i < bokehCount; i++) {
        bokehs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 60 + 30,
          speedY: -Math.random() * 0.15 - 0.05,
          opacity: Math.random() * 0.1 + 0.04,
          color: Math.random() > 0.5 ? 'rgba(244, 235, 217, 0.15)' : 'rgba(223, 186, 107, 0.12)',
        });
      }
    };

    // Track mouse coordinates for interactive light and 3D parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
      }
    };

    // Initialize position directly
    mouseRef.current.x = window.innerWidth / 2;
    mouseRef.current.y = window.innerHeight / 2;
    mouseRef.current.targetX = window.innerWidth / 2;
    mouseRef.current.targetY = window.innerHeight / 2;

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    initElements();

    // Fill initial petals across the whole screen so they are visible immediately
    petals.forEach(p => {
      p.y = Math.random() * height;
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // 1. Draw elegant ambient cinematic radial light rays from mouse center (shimmering)
      const lightGrad = ctx.createRadialGradient(mx, my, 5, mx, my, Math.max(width, height) * 0.7);
      lightGrad.addColorStop(0, 'rgba(253, 243, 219, 0.07)');
      lightGrad.addColorStop(0.3, 'rgba(244, 235, 217, 0.03)');
      lightGrad.addColorStop(1, 'rgba(26, 23, 19, 0)');
      
      // Draw background overlay or base radial light
      ctx.fillStyle = lightGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw luxury bokeh (background parallax layer)
      bokehs.forEach(b => {
        b.y += b.speedY;
        if (b.y < -b.radius) {
          b.y = height + b.radius;
          b.x = Math.random() * width;
        }

        // Apply mouse horizontal parallax
        const parallaxX = (mx - width / 2) * -0.015;
        const parallaxY = (my - height / 2) * -0.015;

        ctx.beginPath();
        ctx.arc(b.x + parallaxX, b.y + parallaxY, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = b.color;
        ctx.globalAlpha = b.opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0; // Reset
      });

      // 3. Draw Gold Dust Particles
      particles.forEach(p => {
        p.y += p.speedY;
        p.angle += p.frequency;
        p.x += p.speedX + Math.sin(p.angle) * p.amplitude * 0.05;

        // Reset off-screen particles
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.opacity = 0;
        }

        // Shimmer opacity
        p.opacity += p.fadeSpeed;
        if (p.opacity > 0.8 || p.opacity < 0.1) {
          p.fadeSpeed = -p.fadeSpeed;
        }
        
        // Ensure within bounds
        const cappedOpacity = Math.max(0.1, Math.min(0.9, p.opacity));

        // Parallax offset
        const pX = (mx - width / 2) * 0.02;
        const pY = (my - height / 2) * 0.02;

        ctx.beginPath();
        ctx.arc(p.x + pX, p.y + pY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = '#dfba6b';
        ctx.globalAlpha = cappedOpacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0; // Reset
      });

      // 4. Draw Royal Soft Pink/Gold Rose Petals (Cinematic foreground layer)
      petals.forEach(p => {
        p.y += p.speedY;
        p.swingAngle += p.swingSpeed;
        p.x += p.speedX + Math.sin(p.swingAngle) * p.swingAmplitude * 0.15;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
          p.opacity = Math.random() * 0.4 + 0.4;
        }

        // Draw individual stylized soft petal path (curved heart/tear shape)
        ctx.save();
        // Foreground parallax
        const petalMouseParallaxX = (mx - width / 2) * 0.035;
        const petalMouseParallaxY = (my - height / 2) * 0.035;

        ctx.translate(p.x + petalMouseParallaxX, p.y + petalMouseParallaxY);
        ctx.rotate(p.rotation);
        ctx.beginPath();

        // High end petal styling
        const w = p.size;
        const h = p.size * 1.3;
        
        // Smooth curved bezier paths for rose petal
        ctx.moveTo(0, -h / 2);
        ctx.bezierCurveTo(w / 1.5, -h / 2, w, -h / 4, w / 2, h / 2);
        ctx.bezierCurveTo(0, h * 0.8, -w / 2, h * 0.8, -w / 2, h / 2);
        ctx.bezierCurveTo(-w, -h / 4, -w / 1.5, -h / 2, 0, -h / 2);

        // Soft royal pinkish gold glow / gold sunset gradient for petals
        const petalGrad = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
        petalGrad.addColorStop(0, 'rgba(253, 224, 224, 0.85)'); // Warm soft rose white
        petalGrad.addColorStop(0.5, 'rgba(239, 196, 178, 0.75)'); // Peach/gold
        petalGrad.addColorStop(1, 'rgba(223, 186, 107, 0.85)'); // Champagne gold

        ctx.fillStyle = petalGrad;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(223, 186, 107, 0.2)';
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full mix-blend-screen"
      style={{ opacity: 0.9 }}
    />
  );
}

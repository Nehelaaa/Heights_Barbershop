import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen w-full overflow-hidden noise">
      {/* Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={hero} alt="Luxury barbershop interior" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/60 animate-float"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i * 0.4) % 6}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold flex items-center gap-2">
            <Sparkles className="w-3 h-3" /> Est. 2014 — A House of Craft
          </span>
        </motion.div>

        <h1 className="font-display font-light text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight max-w-5xl">
          {["Precision", "Cuts.", "Premium"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block italic text-gradient-gold"
          >
            Experience.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          A modern atelier for the gentleman who values craft, ritual, and detail.
          Master barbers, rare tools, an unhurried hour that's entirely yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium rounded-sm hover-lift"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-xs uppercase tracking-[0.25em] font-medium rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            View Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(20, 0, 0, 0);
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setT({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Promo() {
  const t = useCountdown();
  const blocks = [
    { label: "Days", value: t.d },
    { label: "Hours", value: t.h },
    { label: "Mins", value: t.m },
    { label: "Secs", value: t.s },
  ];
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-sm p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                <Flame className="w-3 h-3" /> Limited Offer
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-light leading-tight">
                25% off your first <em className="text-gradient-gold not-italic font-normal">Maison Gold</em> month.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                New members only. Includes priority booking, two services, and
                a complimentary product set on arrival.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-3 lg:gap-4">
              {blocks.map((b) => (
                <div
                  key={b.label}
                  className="bg-background/60 border border-border rounded-sm p-4 text-center"
                >
                  <div className="font-display text-4xl md:text-5xl text-gradient-gold tabular-nums">
                    {String(b.value).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

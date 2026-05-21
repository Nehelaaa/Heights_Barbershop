import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Camera } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-48">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel>Visit</SectionLabel>
            <SectionTitle>
              Find <em className="text-gradient-gold not-italic font-normal">the chair.</em>
            </SectionTitle>

            <div className="mt-12 space-y-6">
              {[
                { icon: MapPin, label: "42 Hanover Lane, Soho, London W1F 9QR" },
                { icon: Phone, label: "+44 20 7946 0815" },
                { icon: Mail, label: "concierge@maisonnoir.co" },
                { icon: Clock, label: "Tue–Sat · 10:00 – 20:00 · Closed Sun & Mon" },
              ].map((it, i) => {
                const Icon = it.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-full border border-border group-hover:border-gold transition-colors flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="pt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {it.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 flex gap-3">
              {["Camera", "TikTok", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-4 py-2 border border-border rounded-sm text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Camera className="w-3 h-3" /> {s}
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto rounded-sm overflow-hidden border border-border shadow-deep"
          >
            <iframe
              title="Maison Noir Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.144%2C51.510%2C-0.130%2C51.518&layer=mapnik"
              className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 glass-strong p-4 rounded-sm pointer-events-none">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Maison Noir</div>
              <div className="font-display text-lg mt-1">Soho · London</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

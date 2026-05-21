import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import b1 from "@/assets/barber-1.jpg";
import b2 from "@/assets/barber-2.jpg";
import b3 from "@/assets/barber-3.jpg";
import { SectionLabel, SectionTitle } from "./Section";

const team = [
  { name: "Marcus Laurent", role: "Founder · Master Barber", specialty: "Scissor Work · Classic Cuts", img: b1, handle: "@marcus.cuts" },
  { name: "Elias Romano", role: "Senior Stylist", specialty: "Skin Fades · Texture Work", img: b2, handle: "@romano.fades" },
  { name: "Jonah Vega", role: "Stylist", specialty: "Beard Sculpting · Modern Cuts", img: b3, handle: "@jonah.barbering" },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 lg:py-48">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <SectionLabel>The Chairs</SectionLabel>
          <SectionTitle>
            Six masters, one <em className="text-gradient-gold not-italic font-normal">standard.</em>
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                      {m.role}
                    </div>
                    <h3 className="font-display text-3xl font-light">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.specialty}</p>

                    <div className="mt-4 flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <Camera className="w-4 h-4 text-gold" />
                      <span className="text-muted-foreground">{m.handle}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-xs font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  0{i + 1}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

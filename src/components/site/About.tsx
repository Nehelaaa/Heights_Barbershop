import { motion } from "framer-motion";
import about from "@/assets/about.jpg";
import { SectionLabel, SectionTitle, FadeIn } from "./Section";

const stats = [
  { value: "12K+", label: "Clients Served" },
  { value: "11", label: "Years Crafting" },
  { value: "6", label: "Master Barbers" },
  { value: "4.9", label: "Avg. Rating" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-deep"
          >
            <motion.img
              src={about}
              alt="Master barber working with straight razor"
              loading="lazy"
              width={1080}
              height={1920}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden md:block absolute -bottom-8 -right-8 glass-strong px-8 py-6 rounded-sm shadow-gold max-w-xs"
          >
            <p className="font-display italic text-2xl leading-snug">
              "A haircut is a ritual, not a transaction."
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gold">
              — Founder, M. Laurent
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <SectionLabel>The House</SectionLabel>
          <SectionTitle>
            A modern atelier for <em className="text-gradient-gold not-italic font-normal">timeless</em> grooming.
          </SectionTitle>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Maison Noir is where the old craft of barbering meets contemporary
              taste. We don't rush. We don't cut corners. Every appointment is
              a one-hour conversation with a master — hot towel, sharp blade,
              and a finish you'll feel for weeks.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
              {stats.map((s) => (
                <div key={s.label} className="bg-background p-6">
                  <div className="font-display text-4xl text-gradient-gold">{s.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

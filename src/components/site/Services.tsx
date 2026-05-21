import { motion } from "framer-motion";
import { Scissors, Wind, Droplets, Brush, Baby, Crown, ArrowUpRight } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

const services = [
  { icon: Scissors, name: "Signature Haircut", price: "$65", duration: "45 min", desc: "Consultation, precision cut, hot-towel finish, styling." },
  { icon: Wind, name: "Skin Fade", price: "$75", duration: "50 min", desc: "Bladework taper down to skin with clean line-up." },
  { icon: Brush, name: "Beard Sculpting", price: "$45", duration: "30 min", desc: "Shape, line, oil, and condition for shape that lasts." },
  { icon: Droplets, name: "Hot Towel Shave", price: "$70", duration: "45 min", desc: "Pre-oil, lather, straight razor pass, cold towel, balm." },
  { icon: Baby, name: "Young Gentleman", price: "$40", duration: "30 min", desc: "Patient, playful cuts for clients under 12." },
  { icon: Crown, name: "VIP Grooming Hour", price: "$180", duration: "90 min", desc: "Cut, shave, brow, scalp massage, espresso, whisky." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-48 bg-card noise">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle>
            Craft, distilled into <em className="text-gradient-gold not-italic font-normal">six</em> rituals.
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-card p-10 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-12">
                    <Icon className="w-8 h-8 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                  </div>

                  <h3 className="font-display text-3xl font-light">{s.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                  <div className="mt-10 pt-6 border-t border-border/50 flex items-end justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {s.duration}
                    </span>
                    <span className="font-display text-3xl text-gradient-gold">{s.price}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

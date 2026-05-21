import { motion } from "framer-motion";
import { Scissors, Wind, Droplets, Brush, Baby, ArrowUpRight } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

const services = [
  { icon: Scissors, name: "Classic Haircut", price: "$32", duration: "30 min", desc: "Traditional cut, neck trim, and styling — our bread and butter." },
  { icon: Wind, name: "Skin Fade", price: "$38", duration: "40 min", desc: "Clean taper down to skin with sharp line-up and finish." },
  { icon: Brush, name: "Beard Trim", price: "$18", duration: "15 min", desc: "Shape, line, and tidy your beard to match your cut." },
  { icon: Droplets, name: "Hot Towel Shave", price: "$35", duration: "30 min", desc: "Hot towel, lather, straight-razor pass, and soothing balm." },
  { icon: Baby, name: "Kids Cut", price: "$25", duration: "25 min", desc: "Patient cuts for young clients — under 12 welcome." },
  { icon: Scissors, name: "Cut & Beard Combo", price: "$45", duration: "45 min", desc: "Full haircut plus beard sculpt in one visit." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-48 bg-card noise">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <SectionLabel>Services</SectionLabel>
          <SectionTitle>
            Straightforward cuts at <em className="text-gradient-gold not-italic font-normal">fair</em> prices.
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
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

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

import { motion } from "framer-motion";
import b1 from "@/assets/barber-1.jpg";
import b2 from "@/assets/barber-2.jpg";
import b4 from "@/assets/barber-4.jpg";
import { SectionLabel, SectionTitle } from "./Section";

const team = [
  { name: "Steve", role: "Owner · Master Barber", specialty: "Classic Cuts · Family Favorites", img: b1 },
  { name: "David", role: "Barber", specialty: "Kids Cuts · Precision Work", img: b2 },
  { name: "Rina", role: "Barber", specialty: "Precision Cuts · All Styles", img: b4 },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 lg:py-48">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <SectionLabel>The Barbers</SectionLabel>
          <SectionTitle>
            Skilled hands, <em className="text-gradient-gold not-italic font-normal">friendly</em> chairs.
          </SectionTitle>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our team keeps the shop running smooth — same great cuts, same welcoming vibe
            every time you walk in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border">
                <img
                  src={m.img}
                  alt={`${m.name}, ${m.role} at Heights Barber Shop`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl">{m.name}</h3>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold mt-1">{m.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{m.specialty}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

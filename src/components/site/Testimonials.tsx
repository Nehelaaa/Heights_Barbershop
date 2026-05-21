import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

const reviews = [
  { name: "James W.", role: "Architect", quote: "The closest thing to a Savile Row tailor for hair. I haven't gone anywhere else in three years." },
  { name: "Daniel K.", role: "Film Director", quote: "Marcus didn't just cut my hair — he reshaped how I see my face. Worth every minute." },
  { name: "Anton P.", role: "CEO", quote: "Booking is effortless, the chair is unrushed, the whisky is real. This is grooming, elevated." },
  { name: "Lucas R.", role: "Photographer", quote: "I drove forty minutes the first time. Now I drive an hour. The fade is that good." },
  { name: "Marcus T.", role: "Musician", quote: "An hour at Maison Noir is the best part of my week. Cinematic, calm, and a perfect cut." },
  { name: "Henry V.", role: "Lawyer", quote: "A real ritual. The hot towel alone is worth the visit. I've sent half my firm here." },
];

const row1 = [...reviews, ...reviews];

export function Testimonials() {
  return (
    <section className="relative py-32 lg:py-48 bg-card noise overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl">
          <SectionLabel>Word of Mouth</SectionLabel>
          <SectionTitle>
            What our <em className="text-gradient-gold not-italic font-normal">gentlemen</em> say.
          </SectionTitle>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-card to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-card to-transparent pointer-events-none" />

        <div className="flex gap-6 marquee w-max">
          {row1.map((r, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="w-[360px] sm:w-[420px] shrink-0 glass rounded-sm p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-xl leading-snug font-light">
                "{r.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="text-sm">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                  {r.role}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

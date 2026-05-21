import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

const faqs = [
  { q: "Do I need to book in advance?", a: "Walk-ins are welcome when chairs are open. For weekends and busy afternoons, we recommend calling ahead at (781) 648-9686." },
  { q: "Where do I park?", a: "Street parking is available along Massachusetts Ave and nearby side streets. Allow a few extra minutes during peak hours." },
  { q: "What are your hours?", a: "Tuesday–Thursday 9 AM–5 PM, Friday 9 AM–4 PM, Saturday 7 AM–3 PM. Closed Sunday and Monday." },
  { q: "Where can I read Google reviews?", a: "We have 64+ reviews on Google with a 4.9 rating. Scroll to the Reviews section on this site or open our Google listing to read them all and leave your own." },
  { q: "Do you cut kids' hair?", a: "Yes — our Kids Cut service is for clients under 12. Our barbers are patient and keep the experience relaxed." },
  { q: "Do you sell gift cards?", a: "Gift cards are available in-shop. Call us to check balances or purchase over the phone." },
  { q: "What forms of payment do you accept?", a: "Cash only — as noted by many Google reviewers. Please plan accordingly." },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="relative py-32 lg:py-48 bg-card noise">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <SectionLabel>Questions</SectionLabel>
          <SectionTitle>
            Good to <em className="text-gradient-gold not-italic font-normal">know.</em>
          </SectionTitle>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            Still have a question? Give us a call — we're happy to help during shop hours.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl font-light group-hover:text-gold transition-colors">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-16 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

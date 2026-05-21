import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

const faqs = [
  { q: "Do I need to book in advance?", a: "We recommend booking 3–5 days ahead, though same-day chairs often open up. Members enjoy skip-the-line priority." },
  { q: "What's your cancellation policy?", a: "Cancellations more than 12 hours before your appointment are free. Late cancellations are charged 50% of the service." },
  { q: "Do you accept walk-ins?", a: "Yes, when chairs are open — typically mid-morning and late afternoon. Booking guarantees your slot." },
  { q: "Can I bring my child?", a: "Of course. Our Young Gentleman service is built for clients under 12, with patient barbers and small chairs." },
  { q: "Do you sell gift cards?", a: "Yes — physical and digital. Available at the front desk or via the contact form below." },
  { q: "Is parking available?", a: "Two-hour validated street parking, and a partner garage two blocks west." },
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
            Don't see your question here? The team is one message away — we usually
            reply within an hour during opening hours.
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
                    className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-gold transition-colors"
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

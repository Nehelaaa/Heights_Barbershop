import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

const plans = [
  {
    name: "Essential",
    price: "$120",
    period: "/ month",
    desc: "One signature haircut per month, plus member perks.",
    features: ["1 Signature Haircut", "Priority booking", "10% off products", "Complimentary espresso"],
    accent: false,
  },
  {
    name: "Maison Gold",
    price: "$240",
    period: "/ month",
    desc: "Our flagship membership. Most popular among regulars.",
    features: [
      "2 Cuts + 1 Beard service",
      "Skip-the-line booking",
      "20% off all products",
      "Quarterly hot towel shave",
      "Whisky on arrival",
      "Birthday gift box",
    ],
    accent: true,
  },
  {
    name: "Noir Reserve",
    price: "$540",
    period: "/ month",
    desc: "Unlimited grooming. The full house, always open to you.",
    features: [
      "Unlimited cuts & shaves",
      "Dedicated master barber",
      "Private hours on request",
      "30% off all products",
      "Annual leather kit",
      "Plus-one referral perks",
    ],
    accent: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-32 lg:py-48">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <SectionLabel>VIP Membership</SectionLabel>
          <SectionTitle>
            Join the <em className="text-gradient-gold not-italic font-normal">house.</em>
          </SectionTitle>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative p-10 rounded-sm overflow-hidden transition-all duration-500 ${
                p.accent
                  ? "bg-gradient-to-b from-card to-background border border-gold/40 shadow-gold lg:-translate-y-4"
                  : "bg-card border border-border hover:border-gold/30"
              }`}
            >
              {p.accent && (
                <>
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
                    <Crown className="w-3 h-3" /> Popular
                  </div>
                </>
              )}

              <div>
                <h3 className="font-display text-3xl font-light">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed min-h-[3rem]">
                  {p.desc}
                </p>
              </div>

              <div className="mt-10 flex items-baseline gap-2">
                <span className={`font-display text-6xl ${p.accent ? "text-gradient-gold" : ""}`}>
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>

              <ul className="mt-10 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-4 text-xs uppercase tracking-[0.3em] rounded-sm transition-all ${
                  p.accent
                    ? "bg-gradient-gold text-primary-foreground hover-lift"
                    : "border border-border hover:border-gold hover:text-gold"
                }`}
              >
                Become a member
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

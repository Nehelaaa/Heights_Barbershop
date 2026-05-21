import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";
import { BUSINESS, HOURS_SUMMARY } from "@/data/business";

const MAP_EMBED =
  "https://www.google.com/maps?q=1317+Massachusetts+Ave,+Arlington,+MA+02476&output=embed";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 lg:py-48">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel>Visit</SectionLabel>
            <SectionTitle>
              Find us on <em className="text-gradient-gold not-italic font-normal">Mass Ave.</em>
            </SectionTitle>

            <div className="mt-12 space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "1317 Massachusetts Ave, Arlington, MA 02476",
                  href: BUSINESS.googleMapsSearchUrl,
                },
                {
                  icon: Phone,
                  label: "(781) 648-9686",
                  href: "tel:+17816489686",
                },
                {
                  icon: Clock,
                  label: HOURS_SUMMARY,
                },
              ].map((it, i) => {
                const Icon = it.icon;
                const inner = (
                  <>
                    <div className="w-11 h-11 rounded-full border border-border group-hover:border-primary transition-colors flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="pt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {it.label}
                    </span>
                  </>
                );
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    {it.href ? (
                      <a href={it.href} className="flex items-start gap-4" target={it.href.startsWith("http") ? "_blank" : undefined} rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12">
              <a
                href="tel:+17816489686"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium rounded-sm hover-lift"
              >
                <Phone className="w-4 h-4" />
                Call to book
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] rounded-sm overflow-hidden border border-border shadow-deep"
          >
            <iframe
              title="Heights Barber Shop location"
              src={MAP_EMBED}
              className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 glass-strong p-4 rounded-sm pointer-events-none">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Heights Barber Shop</div>
              <div className="font-display text-lg mt-1">Arlington · Massachusetts</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

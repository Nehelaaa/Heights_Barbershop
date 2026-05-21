import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export function Promo() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-sm p-10 md:p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                <Scissors className="w-3 h-3" /> First Visit
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-light leading-tight">
                $5 off your first <em className="text-gradient-gold not-italic font-normal">classic</em> haircut.
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md">
                New to Heights? Mention this offer when you call or walk in. One per
                customer — classic haircut or skin fade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="tel:+17816489686"
                className="inline-flex justify-center items-center px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium rounded-sm hover-lift"
              >
                Call (781) 648-9686
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-border text-xs uppercase tracking-[0.25em] font-medium rounded-sm hover:border-primary hover:text-gold transition-colors"
              >
                Get directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

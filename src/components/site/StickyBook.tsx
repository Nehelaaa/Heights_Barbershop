import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

export function StickyBook() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const y = useTransform(scrollY, [200, 400], [60, 0]);
  return (
    <motion.a
      href="tel:+17816489686"
      style={{ opacity, y }}
      className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-7 py-3.5 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium rounded-full shadow-gold"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </motion.a>
  );
}

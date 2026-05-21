import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { SectionLabel, SectionTitle } from "./Section";

const items = [
  { src: g1, span: "row-span-2", alt: "Fresh fade haircut" },
  { src: g2, span: "", alt: "Vintage barber tools" },
  { src: g5, span: "", alt: "Luxury barbershop interior" },
  { src: g4, span: "row-span-2", alt: "Beard sculpting result" },
  { src: g3, span: "", alt: "Hot towel shave service" },
  { src: g6, span: "", alt: "Premium grooming products" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-32 lg:py-48">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>
            The work, <em className="text-gradient-gold not-italic font-normal">in frames.</em>
          </SectionTitle>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpen(it.src)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-sm bg-card cursor-zoom-in ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                View
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={open}
              alt=""
              className="max-w-full max-h-full object-contain rounded-sm shadow-deep"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

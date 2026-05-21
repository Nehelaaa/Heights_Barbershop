import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";
import { BUSINESS, GOOGLE_REVIEWS } from "@/data/business";

const row = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-32 lg:py-48 bg-card noise overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl">
          <SectionLabel>Google Reviews</SectionLabel>
          <SectionTitle>
            What customers say on{" "}
            <em className="text-gradient-gold not-italic font-normal">Google.</em>
          </SectionTitle>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border bg-background/50">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-display text-2xl">{BUSINESS.googleRating}</span>
              <span className="text-sm text-muted-foreground">
                · {BUSINESS.googleReviewCount} Google reviews
              </span>
            </div>
            <a
              href={BUSINESS.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold link-underline hover:text-foreground transition-colors"
            >
              Read all on Google
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-card to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-card to-transparent pointer-events-none" />

        <div className="flex gap-6 marquee w-max">
          {row.map((r, i) => (
            <motion.article
              key={`${r.name}-${i}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="w-[360px] sm:w-[420px] shrink-0 glass rounded-sm p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-xl leading-snug font-light line-clamp-6">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-8 pt-6 border-t border-border/50 flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Google · {r.when}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">
                  Verified
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 text-center">
        <a
          href={BUSINESS.googleMapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-border text-xs uppercase tracking-[0.25em] font-medium rounded-sm hover:border-primary hover:text-gold transition-colors"
        >
          Leave a review on Google
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

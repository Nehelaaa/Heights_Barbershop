import { Sparkles } from "lucide-react";

export function Marquee() {
  const items = [
    "Precision Cuts", "Hot Towel Shaves", "Master Barbers", "Est. 2014",
    "Skin Fades", "Beard Sculpting", "VIP Hour", "Soho London",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-border bg-background py-8 overflow-hidden">
      <div className="flex marquee w-max items-center gap-12">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-3xl md:text-5xl font-light italic text-foreground/80">
              {t}
            </span>
            <Sparkles className="w-5 h-5 text-gold shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

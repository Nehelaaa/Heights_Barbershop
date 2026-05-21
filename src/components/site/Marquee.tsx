import { Sparkles } from "lucide-react";

export function Marquee() {
  const items = [
    "Classic Haircuts", "Skin Fades", "Beard Trims", "Hot Towel Shaves",
    "Walk-Ins Welcome", "Arlington MA", "4.9★ Rated", "Massachusetts Ave",
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
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

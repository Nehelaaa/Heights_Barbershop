import { Scissors } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card noise">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-gold" />
              <span className="font-display text-2xl tracking-wider">
                MAISON <span className="text-gradient-gold">NOIR</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              A modern barbering atelier in Soho. Precision cuts, master craft,
              an hour of quiet luxury.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Open today · 3 chairs available
              </span>
            </div>
          </div>

          {[
            { title: "Explore", links: ["Services", "Team", "Gallery", "Membership"] },
            { title: "Visit", links: ["Soho · London", "Mayfair · Coming Soon", "Press", "Careers"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="link-underline text-sm text-muted-foreground hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maison Noir Barbering Atelier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground link-underline">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground link-underline">Terms</a>
          </div>
        </div>
      </div>

      {/* huge wordmark */}
      <div className="overflow-hidden">
        <div className="font-display text-[clamp(6rem,22vw,22rem)] leading-[0.8] text-center text-foreground/[0.04] select-none -mb-8">
          MAISON NOIR
        </div>
      </div>
    </footer>
  );
}

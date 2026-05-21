import { Logo } from "./Logo";
import { BUSINESS } from "@/data/business";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card noise">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Logo className="origin-left [&_svg]:h-14" />
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              Your neighborhood classic barbershop on Massachusetts Ave. Walk-ins
              welcome, appointments recommended — sharp cuts and friendly chairs.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {BUSINESS.googleRating}★ on Google · {BUSINESS.googleReviewCount} reviews
              </span>
            </div>
          </div>

          {[
            { title: "Explore", links: ["Services", "Team", "Gallery", "Membership"] },
            { title: "Visit", links: ["Arlington, MA", "Directions", "Call Us", "Hours"] },
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

        <div className="mt-20 pt-8 border-t border-border flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Heights Barber Shop. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-xs text-muted-foreground link-underline">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground link-underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

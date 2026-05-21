import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { Booking } from "@/components/site/Booking";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Membership } from "@/components/site/Membership";
import { Promo } from "@/components/site/Promo";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyBook } from "@/components/site/StickyBook";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heights Barber Shop — Classic Cuts · Arlington, MA" },
      {
        name: "description",
        content:
          "Heights Barber Shop on Massachusetts Ave in Arlington. Classic haircuts, skin fades, beard trims, and hot towel shaves. 4.9★ rated. Call (781) 648-9686.",
      },
      { property: "og:title", content: "Heights Barber Shop — Arlington, MA" },
      {
        property: "og:description",
        content: "Classic neighborhood barbershop. Walk-ins welcome. 1317 Massachusetts Ave, Arlington.",
      },
      { property: "og:image", content: "/logo.svg" },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Heights Barber Shop",
          image: "/logo.svg",
          telephone: "+1-781-648-9686",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1317 Massachusetts Ave",
            addressLocality: "Arlington",
            addressRegion: "MA",
            postalCode: "02476",
            addressCountry: "US",
          },
          openingHours: ["Mo-Fr 09:00-17:00", "Sa 09:00-15:00"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "64",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Team />
      <Booking />
      <Gallery />
      <Testimonials />
      <Membership />
      <Promo />
      <Faq />
      <Contact />
      <Footer />
      <StickyBook />
    </main>
  );
}

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
      { title: "Maison Noir — Luxury Barbering Atelier · Soho, London" },
      {
        name: "description",
        content:
          "A modern barbering atelier in Soho. Precision cuts, hot towel shaves, master barbers, and an unhurried hour of quiet luxury. Book your chair.",
      },
      { property: "og:title", content: "Maison Noir — Luxury Barbering Atelier" },
      {
        property: "og:description",
        content: "Precision cuts. Premium experience. Soho's modern barbering atelier.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "Maison Noir",
          image: "/og-image.jpg",
          telephone: "+44 20 7946 0815",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "42 Hanover Lane",
            addressLocality: "Soho, London",
            postalCode: "W1F 9QR",
            addressCountry: "GB",
          },
          openingHours: "Tu-Sa 10:00-20:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "412",
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

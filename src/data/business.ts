/** Heights Barber Shop — public listing details (Google / Maps). */

export const BUSINESS = {
  name: "Heights Barber Shop",
  phone: "(781) 648-9686",
  phoneTel: "+17816489686",
  address: "1317 Massachusetts Ave, Arlington, MA 02476",
  googleRating: 4.9,
  googleReviewCount: 64,
  /** Opens the Google Business listing (reviews tab). */
  googleMapsSearchUrl: "https://maps.google.com/maps?cid=15028273561629920310",
} as const;

/** Verified Google reviews (via public Google review aggregators). */
export const GOOGLE_REVIEWS = [
  {
    name: "Aidan Curtin",
    quote:
      "This place is just the best! Kevin always gives me the best haircuts. The people here did such a great job showing a little kiddo that haircuts are fun and safe — smiling ear to ear by the end. I'd rate it 10 stars if I could.",
    when: "2 months ago",
  },
  {
    name: "Rev. Lance Matthew Dyer",
    quote:
      "Always a great hair cut. Since moving out of Arlington, I still come back to Heights Barber years later.",
    when: "3 months ago",
  },
  {
    name: "P. Browne",
    quote:
      "This is my dad's favorite barber shop. He rates the barbers as artists who do a great cut.",
    when: "8 months ago",
  },
  {
    name: "Alice Lim",
    quote:
      "My kid got an awesome cut by David today. He took his time and wanted to be sure we were both happy. Glenn was friendly and welcoming too. Cash only — thanks guys!",
    when: "2 years ago",
  },
  {
    name: "Michael Smith",
    quote:
      "Customer for over 10 years now, still the same great service. Rina and David are always welcoming. Convenient walk-in hours and parking right out front. Highly recommend!",
    when: "Google reviewer",
  },
  {
    name: "Matthew Palmacci",
    quote:
      "I've tried most barbers in Arlington. The three barbers at Heights are all up to date with recent trends, and very skilled in the craft.",
    when: "Google reviewer",
  },
  {
    name: "Peter Ph",
    quote:
      "Wonderful. David listens well, and is very accurate and painstaking to get the cut just right.",
    when: "Google reviewer",
  },
  {
    name: "Paige Stewart",
    quote:
      "Steve is the owner and he is very focused on doing a great job on his clients. My son only goes to him for his haircuts — and he is a great guy.",
    when: "Google reviewer",
  },
] as const;

export const HOURS_LINES = [
  "Monday · Closed",
  "Tuesday–Thursday · 9:00 AM – 5:00 PM",
  "Friday · 9:00 AM – 4:00 PM",
  "Saturday · 7:00 AM – 3:00 PM",
  "Sunday · Closed",
] as const;

export const HOURS_SUMMARY =
  "Tue–Thu 9–5 · Fri 9–4 · Sat 7–3 · Closed Sun & Mon";

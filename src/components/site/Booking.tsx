import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Calendar, Clock, User, Scissors } from "lucide-react";
import { SectionLabel, SectionTitle } from "./Section";

const barbers = ["Marcus Laurent", "Elias Romano", "Jonah Vega"];
const services = ["Signature Haircut", "Skin Fade", "Beard Sculpting", "Hot Towel Shave", "VIP Hour"];
const times = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

function getNextDays(n: number) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export function Booking() {
  const [barber, setBarber] = useState(barbers[0]);
  const [service, setService] = useState(services[0]);
  const [day, setDay] = useState<Date>(new Date());
  const [time, setTime] = useState(times[2]);
  const [submitted, setSubmitted] = useState(false);

  const days = getNextDays(7);

  return (
    <section id="booking" className="relative py-32 lg:py-48 bg-card noise overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>Reserve</SectionLabel>
            <SectionTitle>
              Book your <em className="text-gradient-gold not-italic font-normal">chair.</em>
            </SectionTitle>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Same-day appointments often available. We hold your slot for 10 minutes
              after the chosen time — please arrive a few minutes early for an espresso.
            </p>

            <div className="mt-12 space-y-4">
              {[
                { icon: User, label: "Choose your master barber" },
                { icon: Scissors, label: "Select a ritual" },
                { icon: Calendar, label: "Pick a day that suits you" },
                { icon: Clock, label: "Lock in the perfect hour" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground">{s.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-strong rounded-sm p-8 lg:p-10 shadow-deep relative"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", damping: 12 }}
                    className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold"
                  >
                    <Check className="w-10 h-10 text-primary-foreground" strokeWidth={3} />
                  </motion.div>
                  <h3 className="mt-8 font-display text-4xl">Your chair is reserved.</h3>
                  <p className="mt-4 text-muted-foreground max-w-md">
                    {service} with {barber} on{" "}
                    {day.toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}{" "}
                    at {time}. A confirmation has been sent.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-10 text-xs uppercase tracking-[0.3em] text-gold link-underline"
                  >
                    Book another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <Field label="Barber">
                    <div className="grid grid-cols-3 gap-2">
                      {barbers.map((b) => (
                        <Pill key={b} active={barber === b} onClick={() => setBarber(b)}>
                          {b.split(" ")[0]}
                        </Pill>
                      ))}
                    </div>
                  </Field>

                  <Field label="Service">
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <Pill key={s} active={service === s} onClick={() => setService(s)}>
                          {s}
                        </Pill>
                      ))}
                    </div>
                  </Field>

                  <Field label="Date">
                    <div className="grid grid-cols-7 gap-2">
                      {days.map((d) => {
                        const isActive = d.toDateString() === day.toDateString();
                        return (
                          <button
                            key={d.toISOString()}
                            type="button"
                            onClick={() => setDay(d)}
                            className={`p-2 rounded-sm text-center border transition-all ${
                              isActive
                                ? "border-gold bg-gold/10 text-gold"
                                : "border-border hover:border-gold/50"
                            }`}
                          >
                            <div className="text-[9px] uppercase tracking-widest text-muted-foreground">
                              {d.toLocaleDateString("en", { weekday: "short" })}
                            </div>
                            <div className="font-display text-xl mt-1">{d.getDate()}</div>
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label="Time">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {times.map((t) => (
                        <Pill key={t} active={time === t} onClick={() => setTime(t)}>
                          {t}
                        </Pill>
                      ))}
                    </div>
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      placeholder="Your name"
                      className="bg-background/50 border border-border px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className="bg-background/50 border border-border px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.3em] font-medium rounded-sm hover-lift"
                  >
                    Confirm Booking
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        {label}
      </div>
      {children}
    </div>
  );
}

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-sm text-xs uppercase tracking-wider border transition-all ${
        active
          ? "bg-gradient-gold border-gold text-primary-foreground shadow-gold"
          : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  image: string;
  name: string;
  role: string;
  quote: string;
};

const items: Testimonial[] = [
  {
    image:
      "https://res.cloudinary.com/dfdrpegbr/image/upload/v1776599925/WhatsApp_Image_2026-04-19_at_5.01.46_PM_ajrxro.jpg",
    name: "​",
    role: "​",
    quote:
      "Avinya transformed my store into a space that finally feels like my brand. Customers stay longer and buy more — the design speaks for itself.",
  },
  {
    image:
      "https://res.cloudinary.com/dfdrpegbr/image/upload/v1776599925/WhatsApp_Image_2026-04-19_at_5.01.46_PM_ajrxro.jpg",
    name: "Rohan Mehta",
    role: "Café Founder",
    quote:
      "From mood boards to the final reveal, the process was creative and stress-free. The graphics tied everything together beautifully.",
  },
  {
    image:
      "https://res.cloudinary.com/dfdrpegbr/image/upload/v1776599925/WhatsApp_Image_2026-04-19_at_5.01.46_PM_ajrxro.jpg",
    name: "Anita Verma",
    role: "Wellness Studio",
    quote:
      "She truly listened to my vision and brought a calming, premium feel to my space. I get compliments from clients every single day.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const current = items[index];

  return (
    <section id="testimonials" className="py-24 md:py-32 gradient-deep relative overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground font-bold text-xs tracking-widest uppercase mb-6">
            Testimonials
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Loved by <span className="text-primary-glow">small businesses</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Real words from clients who watched their spaces and brands come alive.
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="absolute -inset-4 gradient-primary rounded-[2rem] blur-2xl opacity-40" />

          {/* Square slideshow container */}
          <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden shadow-bold border-4 border-primary-foreground/20 bg-background">
            {items.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-smooth ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={t.image}
                  alt={`Project for ${t.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/70 to-transparent" />
                <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end text-primary-foreground">
                  <Quote size={36} className="text-primary-glow mb-3" />
                  <p className="font-display text-lg md:text-xl font-medium leading-snug mb-5">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-base">{t.name}</div>
                    <div className="text-primary-foreground/70 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 md:-left-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-foreground text-primary flex items-center justify-center shadow-bold hover:scale-110 transition-bounce"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 md:-right-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-foreground text-primary flex items-center justify-center shadow-bold hover:scale-110 transition-bounce"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-smooth ${
                  i === index ? "w-10 bg-primary-glow" : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

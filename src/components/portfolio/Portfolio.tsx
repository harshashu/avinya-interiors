import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolioShowcase from "@/assets/portfolio-showcase.mp4";

type Slide =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string }
  | { type: "file-video"; src: string; title: string };

const slides: Slide[] = [
  {
    type: "image",
    src: "https://res.cloudinary.com/dfdrpegbr/image/upload/v1776599925/WhatsApp_Image_2026-04-19_at_5.01.46_PM_ajrxro.jpg",
    alt: "Interior design project by Avinya Interiors",
  },
  {
    type: "file-video",
    src: portfolioShowcase,
    title: "Avinya Interiors — Project Showcase",
  },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-bold text-xs tracking-widest uppercase mb-6">
            Portfolio
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every project I take on is a unique blend of creativity, functionality, and brand
            storytelling—designed to leave a lasting impression.
          </p>
        </div>

        {/* Horizontal rectangular slideshow container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-4 gradient-primary rounded-[2rem] blur-2xl opacity-20" />

          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden bg-primary-deep shadow-bold border-4 border-primary">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-smooth ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {slide.type === "image" ? (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : slide.type === "file-video" ? (
                  <video
                    src={slide.src}
                    title={slide.title}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <iframe
                    src={slide.src}
                    title={slide.title}
                    className="w-full h-full"
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            ))}

            {/* Slide counter */}
            <div className="absolute top-5 right-5 z-20 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-foreground font-bold text-sm">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shadow-bold hover:scale-110 transition-bounce"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shadow-bold hover:scale-110 transition-bounce"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-smooth ${
                  i === index ? "w-10 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

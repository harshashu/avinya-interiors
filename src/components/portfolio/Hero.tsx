import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const housePattern = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='#ffffff' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round' opacity='0.55'><polyline points='20,70 50,40 80,70'/><rect x='28' y='70' width='44' height='40'/><rect x='42' y='86' width='10' height='24'/><rect x='58' y='80' width='10' height='10'/><polyline points='95,110 115,90 135,110'/><rect x='100' y='110' width='30' height='28'/><rect x='110' y='122' width='8' height='16'/></g></svg>`
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* House pattern background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url("${housePattern}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/30 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-primary/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(217_95%_62%_/_0.15),transparent_50%)]" />

      <div className="container relative z-10 py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 mb-8 animate-fade-in-up">
            <Sparkles size={16} className="text-primary-glow" />
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Avinya Interiors — Design Studio
            </span>
          </div>

          <h1
            className="font-display text-primary-foreground font-bold leading-[0.95] mb-8 animate-fade-in-up"
            style={{ fontSize: "clamp(2.75rem, 7vw, 6rem)", animationDelay: "0.1s", opacity: 0 }}
          >
            Designs that bring{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-secondary">
                your brand
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary-glow/30 -z-0 rounded" />
            </span>{" "}
            to life
          </h1>

          <p
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            At Avinya Interiors, I craft creative interior and graphic design solutions
            that help small businesses stand out, connect, and grow with confidence.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-bold hover:scale-105 transition-bounce font-bold text-base h-14 px-8 rounded-full group border-0"
            >
              <a
                href={`https://wa.me/919491047484?text=${encodeURIComponent("Hi! I'd like to start my design journey with Avinya Interiors.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Start Your Design Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:border-primary-foreground hover:text-primary-foreground font-semibold text-base h-14 px-8 rounded-full"
            >
              <a href="#portfolio">View Portfolio</a>
            </Button>
          </div>

          <div
            className="mt-20 grid grid-cols-3 gap-8 max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {[
              { num: "50+", label: "Projects" },
              { num: "100%", label: "Custom Design" },
              { num: "5★", label: "Client Rated" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                  {s.num}
                </div>
                <div className="text-primary-foreground/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 text-xs tracking-widest font-medium">
        <div className="flex flex-col items-center gap-2">
          <span>SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

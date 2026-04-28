import { Mail, Instagram, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] gradient-primary p-10 md:p-16 lg:p-20 overflow-hidden shadow-bold">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-deep/30 blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/30 text-primary-foreground font-bold text-xs tracking-widest uppercase mb-8">
              Let's Create Together
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.05] mb-6">
              Ready to bring your{" "}
              <span className="italic">vision</span> to life?
            </h2>
            <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's design a space or brand that truly represents who you are. I'd love to hear about your project.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-bounce font-bold text-base h-14 px-8 rounded-full shadow-bold border-0 group"
            >
              <a
                href={`https://wa.me/919177112409?text=${encodeURIComponent("Hi! I'd like to start my design journey with Avinya Interiors.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Start Your Design Journey — Work With Me
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center">
              <a
                href="mailto:avinyainteriors.ai@gmail.com"
                className="inline-flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/30 flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Mail size={20} />
                </div>
                <span className="font-semibold">avinyainteriors.ai@gmail.com</span>
              </a>

              <a
                href="tel:+919177112409"
                className="inline-flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/30 flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Phone size={20} />
                </div>
                <span className="font-semibold">+91 91771 12409</span>
              </a>

              <a
                href="tel:+919491047484"
                className="inline-flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/30 flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Phone size={20} />
                </div>
                <span className="font-semibold">+91 94910 47484</span>
              </a>

              <a
                href="https://www.instagram.com/avinyainteriors?igsh=NHZrdmFkMTRtYjRn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/30 flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Instagram size={20} />
                </div>
                <span className="font-semibold">@avinyainteriors</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

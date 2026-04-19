import { Instagram, Mail } from "lucide-react";
import avinyaIcon from "@/assets/avinya-icon-footer.jpeg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="gradient-deep text-primary-foreground border-t border-primary-foreground/10">
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-glow bg-primary-foreground flex items-center justify-center">
                <img src={avinyaIcon} alt="Avinya Interiors" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl">
                Avinya Interiors<span className="text-primary-glow">.</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Creative interior &amp; graphic design for small businesses ready to stand out.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase mb-4 text-primary-glow">
              Explore
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-glow transition-smooth">About</a></li>
              <li><a href="#portfolio" className="hover:text-primary-glow transition-smooth">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-primary-glow transition-smooth">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-glow transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase mb-4 text-primary-glow">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.instagram.com/avinyainteriors?igsh=NHZrdmFkMTRtYjRn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-glow hover:text-primary-deep flex items-center justify-center transition-smooth"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:avinyainteriors.ai@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-glow hover:text-primary-deep flex items-center justify-center transition-smooth"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm">avinyainteriors.ai@gmail.com</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-primary-foreground/60">
          <p>© {year} Avinya Interiors. All rights reserved.</p>
          <p>Designed with intention. Built to inspire.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import avinyaIcon from "@/assets/avinya-icon.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-11 h-11 rounded-xl bg-background shadow-glow group-hover:scale-110 transition-bounce flex items-center justify-center overflow-hidden">
            <img src={avinyaIcon} alt="Avinya Interiors logo" width={44} height={44} className="w-full h-full object-contain p-1" />
          </div>
          <span className={`font-display font-bold text-xl ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Avinya Interiors<span className="text-primary-glow">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-medium text-sm tracking-wide hover:text-primary-glow transition-smooth ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          asChild
          variant="default"
          className="hidden md:inline-flex gradient-primary text-primary-foreground shadow-glow hover:shadow-bold hover:scale-105 transition-bounce border-0 font-semibold"
        >
          <a href="#contact">Work With Me</a>
        </Button>

        <button
          aria-label="Toggle menu"
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-medium text-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full gradient-primary text-primary-foreground border-0">
                <a href="#contact" onClick={() => setOpen(false)}>Work With Me</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

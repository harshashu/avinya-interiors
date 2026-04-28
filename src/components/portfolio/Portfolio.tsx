import bedroom1 from "@/assets/portfolio/bedroom-1.webp";
import bedroom2 from "@/assets/portfolio/bedroom-2.webp";
import bedroom3 from "@/assets/portfolio/bedroom-3.avif";
import kitchen1 from "@/assets/portfolio/kitchen-1.jpg";
import kitchen2 from "@/assets/portfolio/kitchen-2.jpeg";
import kitchen3 from "@/assets/portfolio/kitchen-3.jpg";

const heroImage =
  "https://res.cloudinary.com/dfdrpegbr/image/upload/v1776599925/WhatsApp_Image_2026-04-19_at_5.01.46_PM_ajrxro.jpg";

const galleryRow1 = [
  { src: bedroom1, alt: "Modern bedroom interior design" },
  { src: bedroom2, alt: "Contemporary bedroom with wardrobe" },
  { src: bedroom3, alt: "Elegant bedroom interior" },
];

const galleryRow2 = [
  { src: kitchen1, alt: "Modular kitchen with mosaic backsplash" },
  { src: kitchen2, alt: "Bright modern modular kitchen" },
  { src: kitchen3, alt: "L-shaped modular kitchen design" },
];

const Portfolio = () => {
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

        {/* Hero Image */}
        <div className="relative max-w-6xl mx-auto mb-10">
          <div className="absolute -inset-4 gradient-primary rounded-[2rem] blur-2xl opacity-20" />
          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden bg-primary-deep shadow-bold border-4 border-primary">
            <img
              src={heroImage}
              alt="Interior design project by Avinya Interiors"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Tagline */}
        <h3 className="text-center max-w-4xl mx-auto font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 leading-tight">
          End-to-End Interior Solutions & <span className="text-gradient">Modular Kitchens</span> for Joyful Living Spaces
        </h3>

        {/* Gallery — 3 images per row */}
        <div className="max-w-6xl mx-auto space-y-6">
          {[galleryRow1, galleryRow2].map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {row.map((item, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary-deep shadow-bold border-4 border-primary"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;

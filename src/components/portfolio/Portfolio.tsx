import portfolioShowcase from "@/assets/portfolio-showcase.mp4";

const heroImage =
  "https://res.cloudinary.com/dfdrpegbr/image/upload/v1776599925/WhatsApp_Image_2026-04-19_at_5.01.46_PM_ajrxro.jpg";

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

        {/* Image */}
        <div className="relative max-w-6xl mx-auto mb-12">
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

        {/* Video below the image */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-4 gradient-primary rounded-[2rem] blur-2xl opacity-20" />
          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden bg-primary-deep shadow-bold border-4 border-primary">
            <video
              src={portfolioShowcase}
              title="Avinya Interiors — Project Showcase"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

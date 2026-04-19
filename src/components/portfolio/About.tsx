const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 gradient-soft">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-6 gradient-primary rounded-[2rem] blur-2xl opacity-30" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-bold border-4 border-primary-foreground">
              <img
                src="https://res.cloudinary.com/dfdrpegbr/image/upload/v1776614643/WhatsApp_Image_2026-04-19_at_9.28.48_PM_hmqqyj.jpg"
                alt="Founder of Avinya Interiors — interior and graphic designer"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-glow rotate-3 hover:rotate-0 transition-bounce">
              <div className="font-display font-bold text-2xl">Avinya</div>
              <div className="text-xs uppercase tracking-widest opacity-90">Interiors</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-bold text-xs tracking-widest uppercase mb-6">
              About Me
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-8">
              The creative mind behind{" "}
              <span className="text-gradient">Avinya Interiors</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm the creative mind behind <strong className="text-foreground">Avinya Interiors</strong>,
                specializing in interior and graphic design tailored for small businesses.
              </p>
              <p>
                I believe that every space and brand has a story waiting to be expressed visually.
                My approach blends creativity with strategy, ensuring designs are not just beautiful, but purposeful.
              </p>
              <p>
                What sets me apart is my ability to understand your vision and transform it into a space
                or design that truly represents your identity.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { title: "Interior Design", desc: "Spaces with soul" },
                { title: "Graphic Design", desc: "Brands that connect" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-background border-2 border-border hover:border-primary hover:shadow-card transition-smooth"
                >
                  <div className="font-display font-bold text-foreground">{item.title}</div>
                  <div className="text-muted-foreground text-sm mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

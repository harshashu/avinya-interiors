import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonials from "@/components/portfolio/Testimonials";
import Booking from "@/components/portfolio/Booking";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

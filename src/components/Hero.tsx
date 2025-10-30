import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-navy pattern-overlay">
      <div className="container-custom py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                ✓ Verfügbar für neue Projekte
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Ich automatisiere dein Business und erstelle Websites, die verkaufen
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Freelance Automation & Webdesign Spezialistin aus Deutschland. Ich helfe Selbstständigen und kleinen Unternehmen, Zeit zu sparen und online professionell aufzutreten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="cta"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Kostenloses Erstgespräch
              </Button>
              <Button
                variant="outlineWhite"
                size="lg"
                onClick={() => scrollToSection("services")}
              >
                Leistungen ansehen
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Business automation and web design workflow illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("social-proof")}
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-smooth"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

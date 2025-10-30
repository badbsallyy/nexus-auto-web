import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const highlights = [
  "Praxisnahes Wissen aus realen Projekten",
  "Schnelle Umsetzung ohne Agentur-Wartezeiten",
  "Persönlicher Support auch nach Projektabschluss",
  "Faire Preise für Selbstständige und KMUs",
];

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-navy pattern-overlay">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-accent/20 backdrop-blur-sm border-2 border-accent/30 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto rounded-full bg-primary/20 backdrop-blur-sm border-4 border-accent/40 flex items-center justify-center mb-6">
                      <span className="text-6xl text-primary-foreground">👤</span>
                    </div>
                    <p className="text-primary-foreground font-semibold text-lg">
                      Ihr Name
                    </p>
                    <p className="text-primary-foreground/70 text-sm">
                      Automation & Webdesign Specialist
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative blur */}
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm font-semibold text-accent">Über mich</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Hi, ich bin Ihr Name!
            </h2>

            <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
              <p>
                Seit über X Jahren beschäftige ich mich leidenschaftlich mit digitalen Lösungen und No-Code-Tools. Was als Hobby begann, ist zu meiner Expertise geworden.
              </p>

              <p>
                Ich habe mir selbstständig beigebracht, wie man komplexe Workflows automatisiert, moderne Websites erstellt und No-Code Tools wie Framer, Make und Notion professionell einsetzt.
              </p>

              <p className="font-semibold text-primary-foreground">
                Meine Mission?
              </p>

              <p>
                Selbstständige und kleine Unternehmen dabei unterstützen, ihre digitalen Prozesse zu optimieren – ohne teures Entwicklerteam und mit persönlichem Support.
              </p>

              <p className="font-semibold text-primary-foreground">
                Was mich auszeichnet:
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button
              variant="cta"
              size="lg"
              onClick={scrollToContact}
              className="mt-6"
            >
              Lass uns sprechen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

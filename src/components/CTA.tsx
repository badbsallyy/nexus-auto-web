import { Button } from "@/components/ui/button";

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gradient-teal">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Bereit, dein Business zu optimieren?
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Lass uns in einem kostenlosen Erstgespräch herausfinden, wie ich dir helfen kann.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              variant="default"
              size="lg"
              onClick={scrollToContact}
              className="bg-background text-accent hover:bg-background/90"
            >
              Jetzt Termin buchen
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
            >
              E-Mail schreiben
            </Button>
          </div>

          <p className="text-sm text-primary/60">
            Keine Verpflichtung · Kostenloses 30-Minuten-Gespräch
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

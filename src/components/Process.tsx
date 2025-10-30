import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Kostenloses Kennenlerngespräch",
    description:
      "Wir besprechen deine Ziele, Herausforderungen und Vision. Ich analysiere deine aktuellen Prozesse und zeige Optimierungspotenziale auf.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Individuelles Konzept & Angebot",
    description:
      "Du erhältst ein detailliertes Konzept mit klarem Umfang, Timeline und transparenter Preisgestaltung. Keine versteckten Kosten.",
  },
  {
    number: "03",
    icon: Code,
    title: "Entwicklung & Feedback-Runden",
    description:
      "Ich setze dein Projekt um und halte dich regelmäßig auf dem Laufenden. Du kannst jederzeit Feedback geben und Anpassungen vornehmen.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Go-Live & Support",
    description:
      "Nach ausführlichem Testing geht dein Projekt live. Ich stehe dir auch danach für Fragen zur Verfügung und optimiere bei Bedarf nach.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-accent mb-3">So arbeite ich</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Mein Arbeitsprozess</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent, strukturiert und auf deine Bedürfnisse zugeschnitten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-border" style={{ width: "calc(100% - 8rem)", marginLeft: "4rem" }} />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number badge */}
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-2xl font-bold mb-6 shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

import { Zap, Clock, Check } from "lucide-react";

const stats = [
  {
    icon: Zap,
    number: "15+",
    description: "Automatisierungsprojekte erfolgreich umgesetzt",
  },
  {
    icon: Clock,
    number: "8h+",
    description: "Durchschnittlich eingesparte Zeit pro Woche für Kunden",
  },
  {
    icon: Check,
    number: "100%",
    description: "Kundenzufriedenheit & persönlicher Support",
  },
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent mb-2">Vertrauen durch Ergebnisse</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-5xl font-bold text-primary mb-4">{stat.number}</div>
              <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

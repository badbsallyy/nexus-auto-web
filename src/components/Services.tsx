import { Workflow, Globe, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Make & Zapier Automationen",
    description:
      "Verbinde deine Tools intelligent miteinander. Automatisiere wiederkehrende Aufgaben, spare Zeit und vermeide manuelle Fehler. Von einfachen Workflows bis zu komplexen Multi-Tool-Integrationen.",
    features: [
      "Prozessanalyse & Beratung",
      "Workflow-Konzeption",
      "Komplette Einrichtung",
      "Testing & Optimierung",
      "Video-Dokumentation",
      "2 Wochen Support",
    ],
    price: "Ab 500€",
  },
  {
    icon: Globe,
    title: "Framer Websites & Landing Pages",
    description:
      "Moderne, schnelle und responsive Websites, die deine Besucher begeistern. Optimiert für Conversions und alle Geräte. Von Landing Pages bis zu umfangreichen Business-Websites.",
    features: [
      "Modernes, individuelles Design",
      "Mobil-optimiert",
      "SEO-Grundlagen",
      "Schnelle Ladezeiten",
      "CMS-Integration",
      "Launch-Support",
    ],
    price: "Ab 1.500€",
  },
  {
    icon: Package,
    title: "Komplett-Lösungen",
    description:
      "Website, Automation und Backend-Systeme aus einer Hand. Perfekt für den professionellen Start oder die digitale Transformation deines Business. Alles perfekt aufeinander abgestimmt.",
    features: [
      "Professionelle Website",
      "Automation-Workflows",
      "Notion/CRM Setup",
      "E-Mail-Integration",
      "Komplettes Onboarding",
      "Langzeit-Support",
    ],
    price: "Ab 2.500€",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-accent mb-3">Was ich für dich tun kann</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meine Leistungen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spezialisiert auf No-Code Automatisierung und modernes Webdesign
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover-lift flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon and Price */}
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                  {service.price}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features List */}
              <div className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button variant="outline" size="default" className="w-full">
                Mehr erfahren
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

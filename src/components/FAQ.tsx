import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Einfache Automationen oder Landing Pages: 3-7 Tage. Umfangreiche Websites oder komplexe Automation-Setups: 2-4 Wochen. Die genaue Timeline besprechen wir im Erstgespräch basierend auf deinen Anforderungen.",
  },
  {
    question: "Was kostet ein Projekt?",
    answer:
      "Die Kosten variieren je nach Umfang. Einfache Automationen starten ab 500€, Websites ab 1.500€, Komplett-Pakete ab 2.500€. Du erhältst immer ein transparentes Festpreis-Angebot ohne versteckte Kosten.",
  },
  {
    question: "Brauche ich technisches Vorwissen?",
    answer:
      "Nein! Ich erkläre dir alles verständlich und stelle sicher, dass du nach dem Projekt selbstständig damit arbeiten kannst. Du erhältst Video-Anleitungen und persönlichen Support.",
  },
  {
    question: "Welche Tools verwendest du?",
    answer:
      "Ich arbeite primär mit No-Code Tools wie Framer (Websites), Make/Zapier (Automationen), Notion (CRM/Workflows) und vielen weiteren modernen Lösungen. Alle Tools sind benutzerfreundlich und leistungsstark.",
  },
  {
    question: "Bietest du auch Support nach Projektabschluss?",
    answer:
      "Ja! Jedes Projekt beinhaltet 2 Wochen kostenlosen Support nach Go-Live. Danach biete ich flexible Wartungs- und Support-Pakete an oder helfe dir punktuell bei Fragen.",
  },
  {
    question: "Für wen sind deine Dienstleistungen geeignet?",
    answer:
      "Perfekt für Selbstständige, Coaches, Berater, kleine Unternehmen, E-Commerce Shops und alle, die ihre digitalen Prozesse optimieren oder professionell online auftreten möchten.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-muted-foreground">Alles was du wissen musst</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

const tools = [
  "Framer",
  "Make",
  "Zapier",
  "Notion",
  "Figma",
  "Airtable",
  "Webflow",
  "Memberstack",
  "Stripe",
  "Mailchimp",
  "Google Workspace",
  "Slack",
];

const Tools = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tools & Technologien mit denen ich arbeite
          </h2>
          <p className="text-xl text-muted-foreground">
            Moderne, bewährte Lösungen für deine digitalen Prozesse
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center border border-border hover-lift transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <p className="font-semibold text-primary">{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

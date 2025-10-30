import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
      toast({
        title: "Fehler",
        description: "Bitte fülle alle Pflichtfelder aus und akzeptiere die Datenschutzerklärung.",
        variant: "destructive",
      });
      return;
    }

    // Form submission logic would go here
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für deine Nachricht. Ich melde mich innerhalb von 24 Stunden bei dir.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false,
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Kontakt aufnehmen
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schreib mir eine Nachricht und ich melde mich innerhalb von 24 Stunden bei dir. Ich freue mich auf dein Projekt!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">E-Mail</p>
                  <a
                    href="mailto:deine@email.de"
                    className="text-muted-foreground hover:text-accent transition-smooth"
                  >
                    deine@email.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Standort</p>
                  <p className="text-muted-foreground">Köln, Deutschland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Verfügbarkeit</p>
                  <p className="text-muted-foreground">Mo-Fr, 9-18 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-primary font-medium">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 border-2 focus:border-accent"
                  placeholder="Max Mustermann"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-primary font-medium">
                  E-Mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 border-2 focus:border-accent"
                  placeholder="max@beispiel.de"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-primary font-medium">
                  Betreff
                </Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => setFormData({ ...formData, subject: value })}
                >
                  <SelectTrigger className="mt-2 border-2">
                    <SelectValue placeholder="Bitte wählen..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automation">Automation</SelectItem>
                    <SelectItem value="webdesign">Webdesign</SelectItem>
                    <SelectItem value="komplett">Komplett-Paket</SelectItem>
                    <SelectItem value="sonstiges">Sonstiges</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-primary font-medium">
                  Nachricht *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 border-2 focus:border-accent"
                  placeholder="Erzähl mir von deinem Projekt..."
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, privacy: checked as boolean })
                  }
                  className="mt-1"
                />
                <Label htmlFor="privacy" className="text-sm text-muted-foreground cursor-pointer">
                  Ich habe die Datenschutzerklärung gelesen und akzeptiere diese. *
                </Label>
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

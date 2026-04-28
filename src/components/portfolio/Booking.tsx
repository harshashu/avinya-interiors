import { useState } from "react";
import { z } from "zod";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().trim().nonempty({ message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Phone is required" })
    .max(20, { message: "Phone must be less than 20 characters" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional(),
});

const Booking = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const result = bookingSchema.safeParse(data);
    if (!result.success) {
      toast({
        title: "Please check your details",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const lines = [
      "*New Free Design Consultation Request*",
      "",
      `*Name:* ${result.data.name}`,
      `*Email:* ${result.data.email}`,
      `*Phone:* ${result.data.phone}`,
    ];
    if (result.data.message && result.data.message.length > 0) {
      lines.push("", "*Project details:*", result.data.message);
    }
    const messageBody = lines.join("\n");
    const waText = encodeURIComponent(messageBody);
    window.open(`https://wa.me/919491047484?text=${waText}`, "_blank", "noopener,noreferrer");

    // Also open the user's default mail client with the same details prefilled
    const mailSubject = encodeURIComponent("New Free Design Consultation Request");
    const mailBody = encodeURIComponent(messageBody.replace(/\*/g, ""));
    setTimeout(() => {
      window.open(
        `mailto:avinyainteriors.ai@gmail.com?subject=${mailSubject}&body=${mailBody}`,
        "_blank",
        "noopener,noreferrer"
      );
    }, 400);

    toast({
      title: "Opening WhatsApp & Email…",
      description: "Send both prefilled messages and I'll reply within 24 hours.",
    });
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-5">
            Book a Free <span className="text-gradient">Design Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Share your vision and a few details — I'll personally reach out to schedule your free
            consultation call.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-4 gradient-primary rounded-[2rem] blur-2xl opacity-20" />
          <div className="relative bg-background rounded-[2rem] border-4 border-primary shadow-bold p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="booking-name" className="text-foreground font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="booking-name"
                    name="name"
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="h-12 rounded-xl border-2 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="booking-email" className="text-foreground font-semibold">
                    Email
                  </Label>
                  <Input
                    id="booking-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    maxLength={255}
                    className="h-12 rounded-xl border-2 focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="booking-phone" className="text-foreground font-semibold">
                  Phone
                </Label>
                <Input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 ..."
                  required
                  maxLength={20}
                  className="h-12 rounded-xl border-2 focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="booking-message" className="text-foreground font-semibold">
                  Tell me about your project
                </Label>
                <Textarea
                  id="booking-message"
                  name="message"
                  placeholder="Space type, style preferences, timeline…"
                  rows={4}
                  maxLength={1000}
                  className="rounded-xl border-2 focus-visible:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full gradient-primary text-primary-foreground hover:scale-[1.02] transition-bounce font-bold text-base h-14 rounded-full shadow-bold border-0 group"
              >
                <CalendarCheck size={20} className="mr-2" />
                {submitting ? "Opening WhatsApp…" : "Book My Free Consultation"}
                <MessageCircle
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-smooth"
                />
              </Button>

              <p className="text-center text-xs text-muted-foreground pt-2">
                No spam. Your details stay private.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HopeShare" },
      {
        name: "description",
        content:
          "Questions about a campaign, a giveaway payout or partnering with HopeShare? Send us a message.",
      },
      { property: "og:title", content: "Contact HopeShare" },
      {
        property: "og:description",
        content: "Questions about a campaign or giveaway payout? Send us a message.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <div>
        <h1 className="text-3xl font-extrabold sm:text-4xl">Get in touch</h1>
        <p className="mt-3 text-muted-foreground">
          Whether you're chasing a payout, nominating a family, or want to fund a whole campaign,
          we read everything.
        </p>
        <ul className="mt-8 space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
              <Mail className="size-4" />
            </span>
            hello@hopeshare.demo
          </li>
          <li className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
              <Phone className="size-4" />
            </span>
            +234 800 000 0000
          </li>
          <li className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
              <MapPin className="size-4" />
            </span>
            Yaba, Lagos, Nigeria
          </li>
        </ul>
      </div>

      <form
        className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-lift"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          toast.success("Message sent", {
            description: "This is a demo — nothing was actually delivered.",
          });
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" required placeholder="Ada Okafor" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-msg">Message</Label>
          <Textarea id="c-msg" required rows={5} placeholder="How can we help?" />
        </div>
        <Button type="submit" size="lg" className="w-full">
          <Send className="size-4" /> Send message
        </Button>
        {sent && (
          <p className="animate-fade-in text-center text-sm text-success">
            Thanks — we'll reply within two working days.
          </p>
        )}
      </form>
    </div>
  );
}

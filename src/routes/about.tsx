import { createFileRoute, Link } from "@tanstack/react-router";
import { Coins, HeartHandshake, ScrollText, Users } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HopeShare — why we pool small gifts" },
      {
        name: "description",
        content:
          "HopeShare collects small donations for families in need and runs free giveaways. Here is how the money moves and who it reaches.",
      },
      { property: "og:title", content: "About HopeShare — why we pool small gifts" },
      {
        property: "og:description",
        content: "How HopeShare pools small donations for families in need.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Small gifts, pooled well</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        HopeShare exists for one reason: most people want to help the poor, but few can give a
        large amount. Pooled together, ₦2,000 gifts fund school kits, weekend food packs and
        restock grants that change a household's month.
      </p>

      <img
        src={heroImg}
        alt="Volunteers distributing food bags to families"
        loading="lazy"
        width={1600}
        height={1100}
        className="shadow-lift mt-8 w-full rounded-3xl object-cover"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {[
          [Users, "Who we serve", "Widows, market traders and school children identified by local volunteers, not by us from a desk."],
          [Coins, "How money moves", "Funds go straight to the goods — kits, food packs, restock grants — handed over in person."],
          [ScrollText, "What we publish", "Every campaign shows its goal, raised amount, donor count and closing date."],
          [HeartHandshake, "Why giveaways", "Some people need help now and cannot wait for a campaign. Free giveaways cover them."],
        ].map(([Icon, title, body]) => {
          const I = Icon as typeof Users;
          return (
            <section key={title as string} className="rounded-2xl border border-border bg-card p-6">
              <I className="size-6 text-brand" />
              <h2 className="mt-3 font-display text-lg font-bold">{title as string}</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{body as string}</p>
            </section>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl bg-accent/60 p-6 text-sm text-accent-foreground">
        <strong>Demonstration prototype.</strong> HopeShare is a design demo. Donations are not
        charged, giveaways are not paid out, and every donor, entry and review shown is sample
        data.
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link to="/campaigns">See active campaigns</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact">Talk to us</Link>
        </Button>
      </div>
    </div>
  );
}

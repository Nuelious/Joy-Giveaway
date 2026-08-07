import { createFileRoute } from "@tanstack/react-router";
import { Clock, Gift, ShieldCheck, Star } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { GiveawayForm } from "@/components/GiveawayForm";
import { recentEntries, reviews } from "@/data/campaigns";

export const Route = createFileRoute("/giveaway")({
  head: () => ({
    meta: [
      { title: "Instant giveaway entry — HopeShare" },
      {
        name: "description",
        content:
          "Skip the browsing and enter the ₦20,000 HopeShare weekend giveaway right now. Free entry, name only.",
      },
      { property: "og:title", content: "Instant giveaway entry — HopeShare" },
      {
        property: "og:description",
        content: "Enter the ₦20,000 weekend giveaway now — free, name only.",
      },
    ],
  }),
  component: GiveawayPage,
});

function GiveawayPage() {
  return (
    <div className="gradient-soft">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
            <Gift className="size-3.5" /> Free entry — no donation needed
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">₦20,000 weekend giveaway</h1>
          <p className="mt-4 text-muted-foreground">
            Ten winners every weekend. Type your name, pass the human check, and a coordinator
            sends your payout details on WhatsApp.
          </p>

          <div className="mt-7 max-w-sm">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Clock className="size-4 text-brand" /> Draw closes in
            </p>
            <Countdown endsAt="2026-08-31T21:00:00Z" />
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <h2 className="font-display text-base font-bold">Recent entries</h2>
            <ul className="mt-3 divide-y divide-border">
              {recentEntries.map((e) => (
                <li key={e.name} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="truncate font-medium">{e.name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{e.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lift">
            <h2 className="font-display text-xl font-bold">Enter now</h2>
            <p className="mb-5 mt-1 text-sm text-muted-foreground">
              Just your name — that's the whole form.
            </p>
            <GiveawayForm prize="the ₦20,000 weekend giveaway" cta="Start giveaway" />
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" />
              A human verification step runs after entry to keep bots out of the draw.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            {reviews.slice(0, 2).map((r) => (
              <figure key={r.name} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-3.5 ${i < r.rating ? "fill-highlight text-highlight" : "text-border"}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-2 text-sm text-muted-foreground">{r.text}</blockquote>
                <figcaption className="mt-2 text-xs font-semibold">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

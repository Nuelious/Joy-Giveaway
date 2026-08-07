import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/CampaignCard";
import { campaigns, leaderboard, naira, recentDonors, reviews } from "@/data/campaigns";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HopeShare — Give a little, change a lot" },
      {
        name: "description",
        content:
          "Fund school kits, food packs and small businesses in Nigeria, or enter a free giveaway. Transparent campaigns from ₦2,000.",
      },
      { property: "og:title", content: "HopeShare — Give a little, change a lot" },
      {
        property: "og:description",
        content: "Community fundraisers and free giveaways. Give from ₦2,000.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pl30738806.effectivecpmnetwork.com/21/29/21/21292166f0f387f479c164214a289d24.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);
  return (
    <div>
      <section className="gradient-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
              <Sparkles className="size-3.5" /> 4,128 people helped this year
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Give a little.
              <br />
              Change a lot.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              HopeShare pools small gifts from ordinary people into food packs, school kits and
              restock grants for families who need them today — and runs free giveaways for anyone
              going through a hard patch.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-lift">
                <Link to="/campaigns">
                  <HeartHandshake className="size-4" /> Donate now
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/giveaway">
                  <Zap className="size-4" /> Skip everything — Get Your giveaway
                </Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                ["₦4.6m", "raised"],
                ["1,240", "donors"],
                ["38", "campaigns"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-extrabold text-brand">{v}</dt>
                  <dd className="text-xs uppercase tracking-wide text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Volunteers handing food bags to families at a community drive"
              width={1600}
              height={1100}
              className="shadow-lift w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-5 left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-lift sm:block">
              <p className="text-xs text-muted-foreground">Latest gift</p>
              <p className="text-sm font-semibold">Grace E. gave {naira(25000)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            [ShieldCheck, "Every naira tracked", "Each campaign shows its goal, progress and the people funded."],
            [HeartHandshake, "From ₦2,000", "Small gifts stack up. Most of our impact comes from tiny donations."],
            [Zap, "Free giveaways", "No donation required to enter. Ever."],
          ].map(([Icon, title, body]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={title as string} className="rounded-2xl border border-border bg-card p-6">
                <I className="size-6 text-brand" />
                <h3 className="mt-3 font-display text-lg font-bold">{title as string}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{body as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-7 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Active campaigns</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Pick a cause and give what you can.
            </p>
          </div>
          <Link
            to="/campaigns"
            className="shrink-0 text-sm font-semibold text-brand hover:underline"
          >
            View all <ArrowRight className="inline size-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.slice(0, 3).map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold">Recent donors</h2>
          <ul className="mt-4 divide-y divide-border">
            {recentDonors.slice(0, 6).map((d, i) => (
              <li key={i} className="flex items-center justify-between py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.when}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-brand">
                  {naira(d.amount)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-xl font-bold">Top donors this month</h2>
          <ol className="mt-4 space-y-3">
            {leaderboard.map((row, i) => (
              <li
                key={row.name}
                className="flex items-center gap-3 rounded-xl bg-secondary/50 px-3 py-2.5"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{row.name}</p>
                  <p className="text-xs text-muted-foreground">{row.badge}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold">{naira(row.total)}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-extrabold sm:text-3xl">What collectors say</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Feedback from people who collected a giveaway.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure key={r.name} className="card-hover rounded-2xl border border-border bg-card p-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < r.rating ? "fill-highlight text-highlight" : "text-border"}`}
                  />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-muted-foreground">"{r.text}"</blockquote>
              <figcaption className="mt-3 text-sm font-semibold">
                {r.name} <span className="font-normal text-muted-foreground">· {r.when}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

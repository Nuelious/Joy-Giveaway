import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "@/components/CampaignCard";
import {
  campaigns,
  leaderboard,
  naira,
  recentDonors,
  reviews,
} from "@/data/campaigns";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HopeShare — Give a little, change a lot" },
      {
        name: "description",
        content:
          "Fund school kits, food packs and small businesses in Nigeria, or enter a free giveaway. Transparent campaigns from ₦2,000.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  // ✅ POPUP AD (no container)
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pl30738806.effectivecpmnetwork.com/43/6f/0a/436f0ad03a50a603c1f3545c8f1a0d21.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // ✅ BANNER AD (uses container)
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pl30738807.effectivecpmnetwork.com/e23db6dfcbc8eb8c595cfbca197b2abb/invoke.js";
    script.async = true;

    // REQUIRED for this ad network
    script.setAttribute("data-cfasync", "false");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* HERO */}
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
              HopeShare pools small gifts from ordinary people into food packs,
              school kits and restock grants for families who need them today.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-lift">
                <Link to="/campaigns">
                  <HeartHandshake className="size-4" /> Donate now
                </Link>
              </Button>

              <Button asChild size="lg" variant="secondary">
                <Link to="/giveaway">
                  <Zap className="size-4" /> Get giveaway
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Community support"
              className="shadow-lift w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ✅ AD BANNER (SAFE PLACEMENT) */}
      <div className="mx-auto max-w-6xl px-4 py-10 flex justify-center">
        <div id="container-e23db6dfcbc8eb8c595cfbca197b2abb"></div>
      </div>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            [ShieldCheck, "Every naira tracked"],
            [HeartHandshake, "From ₦2,000"],
            [Zap, "Free giveaways"],
          ].map(([Icon, title]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div
                key={title as string}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <I className="size-6 text-brand" />
                <h3 className="mt-3 font-display text-lg font-bold">
                  {title as string}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.slice(0, 3).map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <blockquote className="text-sm text-muted-foreground">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

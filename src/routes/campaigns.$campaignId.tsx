import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { MapPin, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Countdown } from "@/components/Countdown";
import { DonateForm } from "@/components/DonateForm";
import { GiveawayForm } from "@/components/GiveawayForm";
import {
  getCampaign,
  naira,
  recentDonors,
  recentEntries,
  reviews,
} from "@/data/campaigns";

export const Route = createFileRoute("/campaigns/$campaignId")({
  loader: ({ params }) => {
    const campaign = getCampaign(params.campaignId);
    if (!campaign) throw notFound();
    return { campaignId: campaign.id, title: campaign.title, short: campaign.short };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Campaign unavailable — HopeShare" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} — HopeShare` },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: `${loaderData.title} — HopeShare` },
        { property: "og:description", content: loaderData.short },
      ],
    };
  },
  component: CampaignDetail,
});

function CampaignDetail() {
  const { campaignId } = Route.useLoaderData();
  const campaign = getCampaign(campaignId)!;
  const isGiveaway = campaign.type === "giveaway";
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
  const donors = recentDonors.filter((d) => d.campaignId === campaign.id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/campaigns" className="text-sm text-muted-foreground hover:text-foreground">
        ← All campaigns
      </Link>

      <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <article className="min-w-0">
          <img
            src={campaign.image}
            alt={campaign.title}
            width={1200}
            height={800}
            className="shadow-lift aspect-[3/2] w-full rounded-3xl object-cover"
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge variant="secondary">{isGiveaway ? "Free giveaway" : "Fundraiser"}</Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5" /> {campaign.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="size-3.5" /> {campaign.supporters.toLocaleString()}{" "}
              {isGiveaway ? "entries" : "donors"}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{campaign.title}</h1>
          <div className="mt-5 space-y-4 text-muted-foreground">
            {campaign.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="font-display text-xl font-bold">
              {isGiveaway ? "Recent entries" : "Recent donors"}
            </h2>
            <ul className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card px-5">
              {(isGiveaway
                ? recentEntries.map((e) => ({ name: e.name, when: e.when, amount: null }))
                : (donors.length ? donors : recentDonors).map((d) => ({
                    name: d.name,
                    when: d.when,
                    amount: d.amount as number | null,
                  }))
              ).map((item, i) => (
                <li key={i} className="flex items-center justify-between py-3.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.when}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-brand">
                    {item.amount === null ? "Entered" : naira(item.amount)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-bold">Comments & ratings from collectors</h2>
            <div className="mt-4 space-y-4">
              {reviews.map((r) => (
                <figure key={r.name} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand">
                      {r.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.when}</p>
                    </div>
                    <div className="ml-auto flex shrink-0 gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`size-3.5 ${i < r.rating ? "fill-highlight text-highlight" : "text-border"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-3 text-sm text-muted-foreground">{r.text}</blockquote>
                </figure>
              ))}
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-lift">
            <div>
              <div className="flex items-end justify-between">
                <span className="font-display text-2xl font-extrabold text-brand">
                  {naira(campaign.raised)}
                </span>
                <span className="text-sm text-muted-foreground">
                  of {naira(campaign.goal)} goal
                </span>
              </div>
              <Progress value={pct} className="mt-3 h-2.5" />
              <p className="mt-2 text-xs text-muted-foreground">{pct}% funded</p>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold">
                {isGiveaway ? "Draw closes in" : "Campaign closes in"}
              </p>
              <Countdown endsAt={campaign.endsAt} />
            </div>

            {isGiveaway ? (
              <GiveawayForm prize={campaign.title} />
            ) : (
              <DonateForm campaignTitle={campaign.title} />
            )}

            {!isGiveaway && (
              <Button asChild variant="ghost" className="w-full">
                <Link to="/giveaway">Or enter the free giveaway</Link>
              </Button>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { CampaignCard } from "@/components/CampaignCard";
import { campaigns } from "@/data/campaigns";

export const Route = createFileRoute("/campaigns/")({
  head: () => ({
    meta: [
      { title: "Active campaigns & giveaways — HopeShare" },
      {
        name: "description",
        content:
          "Browse every open HopeShare fundraiser and free giveaway, with live progress towards each goal.",
      },
      { property: "og:title", content: "Active campaigns & giveaways — HopeShare" },
      {
        property: "og:description",
        content: "Browse open fundraisers and free giveaways with live progress.",
      },
    ],
  }),
  component: CampaignsPage,
});

function CampaignsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Campaigns & giveaways</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Goals range from ₦2,000 to ₦120,000. Every campaign shows exactly how far it has come.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c) => (
          <CampaignCard key={c.id} campaign={c} />
        ))}
      </div>
    </div>
  );
}

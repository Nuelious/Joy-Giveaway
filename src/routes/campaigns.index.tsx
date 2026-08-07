import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
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
    ],
  }),
  component: CampaignsPage,
});

function CampaignsPage() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // ✅ Popunder (ONLY ONE)
    const pop = document.createElement("script");
    pop.src =
      "https://pl30738808.effectivecpmnetwork.com/67/ad/9d/67ad9dfaa53b3a0468e87ab75fabec8b.js";
    pop.async = true;

    // ✅ Banner script
    const banner = document.createElement("script");
    banner.src =
      "https://pl30738807.effectivecpmnetwork.com/e23db6dfcbc8eb8c595cfbca197b2abb/invoke.js";
    banner.async = true;
    banner.setAttribute("data-cfasync", "false");

    document.body.appendChild(pop);
    document.body.appendChild(banner);

    return () => {
      document.body.removeChild(pop);
      document.body.removeChild(banner);
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold sm:text-4xl">
        Campaigns & giveaways
      </h1>

      <p className="mt-2 max-w-2xl text-muted-foreground">
        Goals range from ₦2,000 to ₦120,000. Every campaign shows exactly how far it has come.
      </p>

      {/* ✅ Banner Ad (top placement) */}
      <div className="mt-8 flex justify-center">
        <div id="container-e23db6dfcbc8eb8c595cfbca197b2abb"></div>
      </div>

      {/* Campaigns grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((c, i) => (
          <>
            <CampaignCard key={c.id} campaign={c} />

            {/* ✅ Optional mid-grid ad (every 6 items) */}
            {(i + 1) % 6 === 0 && (
              <div className="col-span-full flex justify-center py-6">
                <div id="container-e23db6dfcbc8eb8c595cfbca197b2abb"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

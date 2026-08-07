import { Link } from "@tanstack/react-router";
import { MapPin, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { naira, type Campaign } from "@/data/campaigns";

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));

  return (
    <Link
      to="/campaigns/$campaignId"
      params={{ campaignId: campaign.id }}
      className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          loading="lazy"
          width={1200}
          height={800}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          className="absolute left-3 top-3 border-0 bg-background/90 text-foreground"
          variant="secondary"
        >
          {campaign.type === "giveaway" ? "Free giveaway" : "Fundraiser"}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold leading-snug">{campaign.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{campaign.short}</p>

        <div className="mt-auto space-y-2 pt-2">
          <Progress value={pct} className="h-2" />
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-brand">{naira(campaign.raised)}</span>
            <span className="text-muted-foreground">of {naira(campaign.goal)}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" /> {campaign.location}
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-3.5" /> {campaign.supporters.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

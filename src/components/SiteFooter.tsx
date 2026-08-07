import { Link } from "@tanstack/react-router";
import { HeartHandshake } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-brand text-brand-foreground">
              <HeartHandshake className="size-4" />
            </span>
            <span className="font-display text-base font-extrabold">HopeShare</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A community pot for people who need a little help right now. Give what you can, or
            enter a free giveaway.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link to="/campaigns" className="story-link">
                Campaigns
              </Link>
            </li>
            <li>
              <Link to="/giveaway" className="story-link">
                Instant giveaway
              </Link>
            </li>
            <li>
              <Link to="/about" className="story-link">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="story-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <h3 className="font-semibold text-foreground">Demo notice</h3>
          <p className="mt-3">
            This is a design prototype. No real payments are processed and no real prizes are
            awarded. All donors, entries and reviews are sample data.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 HopeShare — prototype for demonstration only.
      </div>
    </footer>
  );
}

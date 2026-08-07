import { useState, useEffect, useRef } from "react";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VerifyDialog } from "@/components/VerifyDialog";

export function GiveawayForm({ prize, cta = "Enter giveaway" }: { prize: string; cta?: string }) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  // جلوگیری از اجرای چندباره (React strict mode)
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // ✅ Popunder 1
    const pop1 = document.createElement("script");
    pop1.src =
      "https://pl30738808.effectivecpmnetwork.com/67/ad/9d/67ad9dfaa53b3a0468e87ab75fabec8b.js";
    pop1.async = true;

    // ✅ Popunder 2
    const pop2 = document.createElement("script");
    pop2.src =
      "https://pl30738806.effectivecpmnetwork.com/21/29/21/21292166f0f387f479c164214a289d24.js";
    pop2.async = true;

    // ✅ Banner script
    const banner = document.createElement("script");
    banner.src =
      "https://pl30738807.effectivecpmnetwork.com/e23db6dfcbc8eb8c595cfbca197b2abb/invoke.js";
    banner.async = true;
    banner.setAttribute("data-cfasync", "false");

    document.body.appendChild(pop1);
    document.body.appendChild(pop2);
    document.body.appendChild(banner);

    return () => {
      document.body.removeChild(pop1);
      document.body.removeChild(pop2);
      document.body.removeChild(banner);
    };
  }, []);

  return (
    <>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="giveaway-name">Your full name</Label>
          <Input
            id="giveaway-name"
            required
            placeholder="e.g. Ada Okafor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          <Gift className="size-4" /> {cta}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Free to enter. No card details, ever.
        </p>
      </form>

      {/* ✅ Banner Ad Container */}
      <div className="mt-6 flex justify-center">
        <div id="container-e23db6dfcbc8eb8c595cfbca197b2abb"></div>
      </div>

      <VerifyDialog open={open} onOpenChange={setOpen} name={name} prize={prize} />
    </>
  );
}      </form>

      <VerifyDialog open={open} onOpenChange={setOpen} name={name} prize={prize} />
    </>
  );
}

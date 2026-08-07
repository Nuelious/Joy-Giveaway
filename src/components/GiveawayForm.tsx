import { useState } from "react";
import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VerifyDialog } from "@/components/VerifyDialog";

export function GiveawayForm({ prize, cta = "Enter giveaway" }: { prize: string; cta?: string }) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

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

      <VerifyDialog open={open} onOpenChange={setOpen} name={name} prize={prize} />
    </>
  );
}

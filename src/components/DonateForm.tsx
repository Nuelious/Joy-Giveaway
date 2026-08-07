import { useState } from "react";
import { CheckCircle2, HandCoins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { naira } from "@/data/campaigns";

const presets = [2000, 5000, 10000, 25000];

export function DonateForm({ campaignTitle }: { campaignTitle: string }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(5000);
  const [done, setDone] = useState(false);

  return (
    <>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="donor-name">Your name</Label>
          <Input
            id="donor-name"
            required
            placeholder="e.g. Ada Okafor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="donor-amount">Donation amount (₦)</Label>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setAmount(p)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  amount === p
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border hover:bg-secondary"
                }`}
              >
                {naira(p)}
              </button>
            ))}
          </div>
          <Input
            id="donor-amount"
            type="number"
            min={2000}
            max={120000}
            step={500}
            required
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <p className="text-xs text-muted-foreground">Between ₦2,000 and ₦120,000.</p>
        </div>

        <Button type="submit" size="lg" className="w-full">
          <HandCoins className="size-4" /> Donate {naira(amount)}
        </Button>
      </form>

      <Dialog open={done} onOpenChange={setDone}>
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="sr-only">Payment successful</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-3 py-2">
            <CheckCircle2 className="size-14 animate-scale-in text-success" />
            <h3 className="font-display text-xl font-bold">Thank you, {name || "friend"}!</h3>
            <p className="text-sm text-muted-foreground">
              Your simulated donation of {naira(amount)} to{" "}
              <span className="font-medium text-foreground">{campaignTitle}</span> was successful. A
              receipt would normally be emailed to you.
            </p>
            <Button className="mt-2 w-full" onClick={() => setDone(false)}>
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

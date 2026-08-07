import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Bot, MessageCircle, ShieldCheck, Users2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const CONTACT_TARGET = 15;
const GROUP_TARGET = 10;
const WHATSAPP_URL =
  "https://wa.me/?text=" +
  encodeURIComponent(
    "I just entered the HopeShare giveaway and I collected ₦2,000 - they support families in need. Check it out! https://joy-giveaway-qv35-five.vercel.app/",
  );

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  prize: string;
};

export function VerifyDialog({ open, onOpenChange, name, prize }: Props) {
  const [stage, setStage] = useState<"human" | "task">("human");
  const [contacts, setContacts] = useState(0);
  const [groups, setGroups] = useState(0);
  const [checking, setChecking] = useState(false);
  const clicks = useRef(0);

  useEffect(() => {
    if (!open) {
      setStage("human");
      setContacts(0);
      setGroups(0);
      setChecking(false);
      clicks.current = 0;
    }
  }, [open]);

  const startTask = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      setStage("task");
    }, 1400);
  };

  const registerShare = (kind: "contact" | "group") => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    clicks.current += 1;

    // Deliberately unreliable verification: sometimes it counts, sometimes it resets.
    const roll = Math.random();
    if (roll < 0.3 || clicks.current % 7 === 0) {
      setContacts(0);
      setGroups(0);
      toast.error("Verification lost your progress", {
        description: "Some shares could not be confirmed. Please start the task again.",
      });
      return;
    }
    if (roll < 0.62) {
      toast("Still syncing…", { description: "That share has not been confirmed yet." });
      return;
    }
    if (kind === "contact") setContacts((c) => Math.min(CONTACT_TARGET - 2, c + 1));
    else setGroups((g) => Math.min(GROUP_TARGET - 2, g + 1));
    toast.success("Share counted");
  };

  const pct = Math.round(
    ((contacts / CONTACT_TARGET) * 0.6 + (groups / GROUP_TARGET) * 0.4) * 100,
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        {stage === "human" ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-brand" /> Are you human?
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              {name ? `${name}, your` : "Your"} entry for{" "}
              <span className="font-semibold text-foreground">{prize}</span> was received. Before we
              release it, confirm you are not a robot.
            </p>
            <button
              type="button"
              onClick={startTask}
              disabled={checking}
              className="flex w-full items-center gap-3 rounded-xl border border-border bg-secondary/50 p-4 text-left transition-colors hover:bg-secondary disabled:opacity-70"
            >
              <span className="grid size-6 shrink-0 place-items-center rounded border border-border bg-background">
                {checking && (
                  <span className="size-3 animate-spin rounded-full border-2 border-brand border-t-transparent" />
                )}
              </span>
              <span className="min-w-0 text-sm font-medium">
                {checking ? "Verifying…" : "I'm not a robot"}
              </span>
              <Bot className="ml-auto size-6 shrink-0 text-muted-foreground" />
            </button>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Users2 className="size-5 text-brand" /> One last human check
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Bots cannot share. Send the giveaway link to{" "}
              <strong className="text-foreground">{CONTACT_TARGET} contacts</strong> or{" "}
              <strong className="text-foreground">{GROUP_TARGET} groups</strong> on WhatsApp. When
              the check passes you will be redirected to the coordinator to collect {prize}.
            </p>

            <div className="space-y-2 rounded-xl border border-border p-4">
              <Progress value={pct} className="h-2.5" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>
                  Contacts {contacts}/{CONTACT_TARGET}
                </span>
                <span>
                  Groups {groups}/{GROUP_TARGET}
                </span>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <Button onClick={() => registerShare("contact")} className="w-full">
                <MessageCircle className="size-4" /> Share to contact
              </Button>
              <Button
                variant="secondary"
                onClick={() => registerShare("group")}
                className="w-full"
              >
                <Users2 className="size-4" /> Share to group
              </Button>
            </div>

            <p className="flex items-start gap-2 rounded-lg bg-accent/60 p-3 text-xs text-accent-foreground">
              <AlertTriangle className="mt-0.5 size-4 shrink-0" />
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

import { useEffect, useState } from "react";

function parts(ms: number) {
  const clamp = Math.max(0, ms);
  return {
    d: Math.floor(clamp / 86400000),
    h: Math.floor(clamp / 3600000) % 24,
    m: Math.floor(clamp / 60000) % 60,
    s: Math.floor(clamp / 1000) % 60,
  };
}

export function Countdown({ endsAt }: { endsAt: string }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(endsAt).getTime();
    const tick = () => setLeft(target - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  const p = parts(left ?? 0);
  const cells: Array<[string, number]> = [
    ["Days", p.d],
    ["Hours", p.h],
    ["Mins", p.m],
    ["Secs", p.s],
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {cells.map(([label, value]) => (
        <div key={label} className="rounded-xl bg-secondary px-2 py-3 text-center">
          <div className="font-display text-xl font-extrabold tabular-nums sm:text-2xl">
            {left === null ? "--" : String(value).padStart(2, "0")}
          </div>
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  );
}

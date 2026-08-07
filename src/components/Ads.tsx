import { useEffect, useRef } from "react";

type AdConfig = {
  key: string;
  width: number;
  height: number;
};

const highPerformanceAds: AdConfig[] = [
  { key: "57b818531814917288baf17acc25f7d8", width: 728, height: 90 },
  { key: "21c4c6bf55d2f99a16bac2584f24e3f8", width: 320, height: 50 },
  { key: "ba48ce26c915ff63e0f70c83e088e1a5", width: 160, height: 600 },
  { key: "926b6762bdaa9b70066b5889718a9b37", width: 300, height: 250 },
  { key: "882b4a4615a25867bbeee25c244be2fd", width: 468, height: 60 },
];

export function HighPerformanceAd({ ad }: { ad: AdConfig }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.dataset.loaded === "true") return;

    const win = window as typeof window & {
      atOptions?: {
        key: string;
        format: string;
        height: number;
        width: number;
        params: Record<string, unknown>;
      };
    };

    win.atOptions = {
      key: ad.key,
      format: "iframe",
      height: ad.height,
      width: ad.width,
      params: {},
    };

    const script = document.createElement("script");
    script.src = `https://www.highperformanceformat.com/${ad.key}/invoke.js`;
    script.async = true;
    host.appendChild(script);
    host.dataset.loaded = "true";

    return () => {
      script.remove();
    };
  }, [ad]);

  return (
    <div
      ref={hostRef}
      className="flex w-full justify-center overflow-hidden py-4"
      aria-label="Advertisement"
    />
  );
}

export function EffectiveCpmAds() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.dataset.loaded === "true") return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "https://pl30738807.effectivecpmnetwork.com/e23db6dfcbc8eb8c595cfbca197b2abb/invoke.js";
    container.appendChild(script);

    const target = document.createElement("div");
    target.id = "container-e23db6dfcbc8eb8c595cfbca197b2abb";
    container.appendChild(target);

    const secondScript = document.createElement("script");
    secondScript.src =
      "https://pl30738806.effectivecpmnetwork.com/21/29/21/21292166f0f387f479c164214a289d24.js";
    secondScript.async = true;
    container.appendChild(secondScript);

    container.dataset.loaded = "true";

    return () => {
      script.remove();
      target.remove();
      secondScript.remove();
    };
  }, []);

  return <div ref={containerRef} className="flex w-full justify-center overflow-hidden py-4" aria-label="Advertisement" />;
}

export function DirectAdLink() {
  return (
    <div className="flex justify-center py-2">
      <a
        href="https://www.effectivecpmnetwork.com/xt3cqskjb?key=0d3c8fe7d03d06bc544fb33805dc94ec"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground underline"
      >
        Advertisement
      </a>
    </div>
  );
}

export function TopAds() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <HighPerformanceAd ad={highPerformanceAds[0]} />
      <HighPerformanceAd ad={highPerformanceAds[1]} />
    </div>
  );
}

export function BottomAds() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <HighPerformanceAd ad={highPerformanceAds[4]} />
      <HighPerformanceAd ad={highPerformanceAds[3]} />
      <HighPerformanceAd ad={highPerformanceAds[2]} />
      <EffectiveCpmAds />
      <DirectAdLink />
    </div>
  );
}

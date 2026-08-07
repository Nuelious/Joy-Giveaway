# Joy Giveaway — Ad Placement Guide

The supplied ad snippets are integrated into the React/TanStack Router application through `src/components/Ads.tsx`.

## Placement map

| Ad | Size | Location |
|---|---:|---|
| HighPerformanceFormat | 728 × 90 | Top of every page, immediately below the header |
| HighPerformanceFormat | 320 × 50 | Top of every page, below the 728 × 90 ad |
| HighPerformanceFormat | 468 × 60 | Bottom ad section, above the other bottom ads |
| HighPerformanceFormat | 300 × 250 | Bottom ad section |
| HighPerformanceFormat | 160 × 600 | Bottom ad section |
| EffectiveCPM container | Dynamic | Bottom ad section |
| EffectiveCPM script | Dynamic | Bottom ad section |
| EffectiveCPM direct link | Direct ad link | Bottom of the ad section |

## Files changed

### `src/components/Ads.tsx`
Contains reusable components for the supplied third-party advertisements. The HighPerformanceFormat snippets set `atOptions` immediately before loading their corresponding `invoke.js` file.

### `src/routes/__root.tsx`
Adds:
- `<TopAds />` immediately after the site header.
- `<BottomAds />` after the page content and before the site footer.

Because these are mounted in the root route, the ad placements appear across the application's pages.

## Ad keys

- 728 × 90: `57b818531814917288baf17acc25f7d8`
- 320 × 50: `21c4c6bf55d2f99a16bac2584f24e3f8`
- 160 × 600: `ba48ce26c915ff63e0f70c83e088e1a5`
- 300 × 250: `926b6762bdaa9b70066b5889718a9b37`
- 468 × 60: `882b4a4615a25867bbeee25c244be2fd`

## EffectiveCPM items

The supplied EffectiveCPM direct URL is included once as an `Advertisement` link. The duplicate URL in the original request was intentionally not duplicated.

The supplied EffectiveCPM container script and second external script are both loaded in the bottom ad section.

## Responsive behavior

The fixed-size ad content is placed inside centered, horizontally constrained containers with overflow handling. This prevents the ad itself from unnecessarily widening the page on small screens.

The ad networks control the content displayed inside their external scripts/iframes.

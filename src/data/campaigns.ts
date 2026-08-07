import schoolImg from "@/assets/campaign-school.jpg";
import foodImg from "@/assets/campaign-food.jpg";
import giveawayImg from "@/assets/campaign-giveaway.jpg";
import traderImg from "@/assets/campaign-trader.jpg";

export type CampaignType = "fundraiser" | "giveaway";

export type Campaign = {
  id: string;
  type: CampaignType;
  title: string;
  short: string;
  story: string[];
  image: string;
  goal: number;
  raised: number;
  supporters: number;
  location: string;
  endsAt: string;
};

export const campaigns: Campaign[] = [
  {
    id: "school-kits-lagos",
    type: "fundraiser",
    title: "School kits for 40 children in Ajegunle",
    short: "Books, uniforms and bags so no child sits at home this term.",
    story: [
      "Forty children in Ajegunle resumed this term without books or uniforms. Their parents are market traders and daily earners who simply could not cover the cost after rent.",
      "A full kit costs about ₦3,000 per child — a notebook set, one uniform, sandals and a bag. Every naira raised here goes straight into kits handed over at the community hall.",
    ],
    image: schoolImg,
    goal: 120000,
    raised: 86400,
    supporters: 132,
    location: "Ajegunle, Lagos",
    endsAt: "2026-09-30T21:00:00Z",
  },
  {
    id: "food-bank-relief",
    type: "fundraiser",
    title: "Weekend food bank for elderly widows",
    short: "Rice, beans and oil packs delivered every Saturday morning.",
    story: [
      "Twenty-two elderly widows on our list live alone and skip meals towards the end of the month.",
      "₦2,000 feeds one household for a full weekend. Volunteers pack and deliver the bags themselves, so there is no logistics cost.",
    ],
    image: foodImg,
    goal: 60000,
    raised: 41250,
    supporters: 97,
    location: "Ibadan, Oyo",
    endsAt: "2026-09-12T21:00:00Z",
  },
  {
    id: "market-trader-boost",
    type: "fundraiser",
    title: "Restock grant for Mama Ngozi's stall",
    short: "A one-off grant to rebuild a vegetable stall lost to flooding.",
    story: [
      "Mama Ngozi lost her entire stock when the market flooded. She has traded on the same spot for eleven years and supports four children.",
      "A ₦45,000 restock grant puts her back in business within a week.",
    ],
    image: traderImg,
    goal: 45000,
    raised: 12500,
    supporters: 38,
    location: "Onitsha, Anambra",
    endsAt: "2026-10-15T21:00:00Z",
  },
  {
    id: "weekend-cash-giveaway",
    type: "giveaway",
    title: "₦20,000 weekend cash giveaway",
    short: "Free to enter. Ten winners every weekend — no donation required.",
    story: [
      "Our supporters fund a small cash pot each week for people going through a hard patch. Entry is completely free.",
      "Enter your name, pass the human check, and a coordinator sends the payout details on WhatsApp.",
    ],
    image: giveawayImg,
    goal: 20000,
    raised: 20000,
    supporters: 4128,
    location: "Nationwide",
    endsAt: "2026-08-31T21:00:00Z",
  },
];

export const getCampaign = (id: string) => campaigns.find((c) => c.id === id);

export type Donor = { name: string; amount: number; when: string; campaignId: string };

export const recentDonors: Donor[] = [
  { name: "Chinaza O.", amount: 10000, when: "12 minutes ago", campaignId: "school-kits-lagos" },
  { name: "Tunde A.", amount: 5000, when: "48 minutes ago", campaignId: "school-kits-lagos" },
  { name: "Anonymous", amount: 2000, when: "2 hours ago", campaignId: "food-bank-relief" },
  { name: "Grace E.", amount: 25000, when: "3 hours ago", campaignId: "school-kits-lagos" },
  { name: "Musa I.", amount: 3500, when: "5 hours ago", campaignId: "market-trader-boost" },
  { name: "Blessing U.", amount: 7500, when: "yesterday", campaignId: "food-bank-relief" },
  { name: "Kelechi N.", amount: 15000, when: "yesterday", campaignId: "market-trader-boost" },
  { name: "Fatima S.", amount: 2000, when: "2 days ago", campaignId: "food-bank-relief" },
];

export type Entry = { name: string; when: string };

export const recentEntries: Entry[] = [
  { name: "Samuel A.", when: "just now" },
  { name: "Ifeoma C.", when: "1 minute ago" },
  { name: "Yakubu M.", when: "4 minutes ago" },
  { name: "Peace O.", when: "9 minutes ago" },
  { name: "Daniel K.", when: "15 minutes ago" },
  { name: "Halima B.", when: "22 minutes ago" },
];

export type Review = { name: string; rating: number; text: string; when: string };

export const reviews: Review[] = [
  {
    name: "Emeka U.",
    rating: 5,
    text: "Collected mine last Saturday. The coordinator replied on WhatsApp within an hour. Very smooth.",
    when: "3 days ago",
  },
  {
    name: "Aisha L.",
    rating: 4,
    text: "The sharing task took me a while but the payout came through the same evening. Worth it.",
    when: "1 week ago",
  },
  {
    name: "Bola T.",
    rating: 5,
    text: "I honestly thought it was a scam. It wasn't. My kids ate well that week, God bless the donors.",
    when: "2 weeks ago",
  },
  {
    name: "Victor N.",
    rating: 4,
    text: "Human verification is strict but I understand — too many people were using bots before.",
    when: "3 weeks ago",
  },
];

export type LeaderRow = { name: string; total: number; badge: string };

export const leaderboard: LeaderRow[] = [
  { name: "Grace E.", total: 118000, badge: "Gold patron" },
  { name: "Chinaza O.", total: 94500, badge: "Gold patron" },
  { name: "Kelechi N.", total: 61000, badge: "Silver patron" },
  { name: "Tunde A.", total: 47500, badge: "Silver patron" },
  { name: "Blessing U.", total: 32000, badge: "Bronze patron" },
];

export const naira = (n: number) =>
  "\u20A6" + n.toLocaleString("en-NG", { maximumFractionDigits: 0 });    endsAt: "2026-09-30T21:00:00Z",
  },
  {
    id: "food-bank-relief",
    type: "fundraiser",
    title: "Weekend food bank for elderly widows",
    short: "Rice, beans and oil packs delivered every Saturday morning.",
    story: [
      "Twenty-two elderly widows on our list live alone and skip meals towards the end of the month.",
      "₦2,000 feeds one household for a full weekend. Volunteers pack and deliver the bags themselves, so there is no logistics cost.",
    ],
    image: foodImg,
    goal: 60000,
    raised: 41250,
    supporters: 97,
    location: "Ibadan, Oyo",
    endsAt: "2026-09-12T21:00:00Z",
  },
  {
    id: "market-trader-boost",
    type: "fundraiser",
    title: "Restock grant for Mama Ngozi's stall",
    short: "A one-off grant to rebuild a vegetable stall lost to flooding.",
    story: [
      "Mama Ngozi lost her entire stock when the market flooded. She has traded on the same spot for eleven years and supports four children.",
      "A ₦45,000 restock grant puts her back in business within a week.",
    ],
    image: traderImg,
    goal: 45000,
    raised: 12500,
    supporters: 38,
    location: "Onitsha, Anambra",
    endsAt: "2026-10-15T21:00:00Z",
  },
  {
    id: "weekend-cash-giveaway",
    type: "giveaway",
    title: "₦20,000 weekend cash giveaway",
    short: "Free to enter. Ten winners every weekend — no donation required.",
    story: [
      "Our supporters fund a small cash pot each week for people going through a hard patch. Entry is completely free.",
      "Enter your name, pass the human check, and a coordinator sends the payout details on WhatsApp.",
    ],
    image: giveawayImg,
    goal: 20000,
    raised: 20000,
    supporters: 4128,
    location: "Nationwide",
    endsAt: "2026-08-31T21:00:00Z",
  },
];

export const getCampaign = (id: string) => campaigns.find((c) => c.id === id);

export type Donor = { name: string; amount: number; when: string; campaignId: string };

export const recentDonors: Donor[] = [
  { name: "Chinaza O.", amount: 10000, when: "12 minutes ago", campaignId: "school-kits-lagos" },
  { name: "Tunde A.", amount: 5000, when: "48 minutes ago", campaignId: "school-kits-lagos" },
  { name: "Anonymous", amount: 2000, when: "2 hours ago", campaignId: "food-bank-relief" },
  { name: "Grace E.", amount: 25000, when: "3 hours ago", campaignId: "school-kits-lagos" },
  { name: "Musa I.", amount: 3500, when: "5 hours ago", campaignId: "market-trader-boost" },
  { name: "Blessing U.", amount: 7500, when: "yesterday", campaignId: "food-bank-relief" },
  { name: "Kelechi N.", amount: 15000, when: "yesterday", campaignId: "market-trader-boost" },
  { name: "Fatima S.", amount: 2000, when: "2 days ago", campaignId: "food-bank-relief" },
];

export type Entry = { name: string; when: string };

export const recentEntries: Entry[] = [
  { name: "Samuel A.", when: "just now" },
  { name: "Ifeoma C.", when: "1 minute ago" },
  { name: "Yakubu M.", when: "4 minutes ago" },
  { name: "Peace O.", when: "9 minutes ago" },
  { name: "Daniel K.", when: "15 minutes ago" },
  { name: "Halima B.", when: "22 minutes ago" },
];

export type Review = { name: string; rating: number; text: string; when: string };

export const reviews: Review[] = [
  {
    name: "Emeka U.",
    rating: 5,
    text: "Collected mine last Saturday. The coordinator replied on WhatsApp within an hour. Very smooth.",
    when: "3 days ago",
  },
  {
    name: "Aisha L.",
    rating: 4,
    text: "The sharing task took me a while but the payout came through the same evening. Worth it.",
    when: "1 week ago",
  },
  {
    name: "Bola T.",
    rating: 5,
    text: "I honestly thought it was a scam. It wasn't. My kids ate well that week, God bless the donors.",
    when: "2 weeks ago",
  },
  {
    name: "Victor N.",
    rating: 4,
    text: "Human verification is strict but I understand — too many people were using bots before.",
    when: "3 weeks ago",
  },
];

export type LeaderRow = { name: string; total: number; badge: string };

export const leaderboard: LeaderRow[] = [
  { name: "Grace E.", total: 118000, badge: "Gold patron" },
  { name: "Chinaza O.", total: 94500, badge: "Gold patron" },
  { name: "Kelechi N.", total: 61000, badge: "Silver patron" },
  { name: "Tunde A.", total: 47500, badge: "Silver patron" },
  { name: "Blessing U.", total: 32000, badge: "Bronze patron" },
];

export const naira = (n: number) =>
  "\u20A6" + n.toLocaleString("en-NG", { maximumFractionDigits: 0 });

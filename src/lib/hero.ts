export const FRAME_COUNT = 240;

export const framePath = (n: number) =>
  `/frames/sequence1/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Every stitch tells a story, every piece carries a soul.",
    speaker: "Elena Vasquez",
    film: "Master Weaver — Third Generation",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "We don't mass produce. We pour love into every single loop.",
    speaker: "Marta Chen",
    film: "Head of Craftsmanship",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "This is not fast fashion. This is forever fashion.",
    speaker: "Samuel Okafor",
    film: "Materials Curator",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
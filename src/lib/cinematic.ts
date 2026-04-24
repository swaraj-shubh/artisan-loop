export const CINE_FRAME_COUNT = 240;

export const cineFramePath = (n: number) =>
  `/frames/sequence2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Heritage",
    quote: "The thread connects generations. My grandmother taught me, and I'll teach my daughter.",
    speaker: "Amara Okafor",
    film: "Fourth Generation Weaver",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Process",
    quote: "Each piece takes twelve hours. Not because it's slow, but because love cannot be rushed.",
    speaker: "Clara Bennett",
    film: "Master Artisan",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Philosophy",
    quote: "We don't chase seasons. We create pieces that outlive them.",
    speaker: "Marcus Thorne",
    film: "Founder & Creative Director",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
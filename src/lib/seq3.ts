// Artisan Loop - The Collection & Sustainability
export const YOUR_FRAME_COUNT = 240;

export const framePath = (n: number) =>
  `/frames/sequence3/frame_${String(n).padStart(4, "0")}.jpg`;

export type YourDialogue = {
  id: string;
  show: number;    // 0-1 scroll progress where quote appears
  hide: number;    // 0-1 scroll progress where quote disappears
  quote: string;
  speaker: string;
  film: string;
};

export const YOUR_DIALOGUES: YourDialogue[] = [
  {
    id: "y1",
    show: 0.1,
    hide: 0.3,
    quote: "We don't follow trends. We follow the thread.",
    speaker: "Ivy Nakamura",
    film: "Sustainability Director",
  },
  {
    id: "y2",
    show: 0.4,
    hide: 0.6,
    quote: "Every piece is an original. No two are exactly alike — that's the beauty.",
    speaker: "Diego Reyes",
    film: "Lead Designer",
  },
  {
    id: "y3",
    show: 0.7,
    hide: 0.9,
    quote: "Waste is a design flaw. We use every scrap, every fiber, every moment.",
    speaker: "Fatima Al-Mansour",
    film: "Zero-Waste Advocate",
  },
];

export const YOUR_TEXT_FADE_START = 0.05;
export const YOUR_TEXT_FADE_END = 0.15;
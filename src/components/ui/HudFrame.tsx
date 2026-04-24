type Props = {
  corner: "tl" | "tr" | "bl" | "br";
  size?: number;
  className?: string;
};

export function HudFrame({ corner, size = 28, className = "" }: Props) {
  const paths: Record<Props["corner"], string> = {
    tl: `M 3 ${size} L 3 3 L ${size} 3`,
    tr: `M ${size - 22} 3 L ${size} 3 L ${size} ${size}`,
    bl: `M 3 ${size - 22} L 3 ${size} L ${size} ${size}`,
    br: `M ${size - 22} ${size} L ${size} ${size} L ${size} ${size - 22}`,
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={`text-accent/40 transition-all duration-500 hover:text-accent/70 ${className}`}
    >
      <path
        d={paths[corner]}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
    </svg>
  );
}
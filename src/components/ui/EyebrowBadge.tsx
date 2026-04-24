type Props = { children: React.ReactNode; className?: string };

export function EyebrowBadge({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-gradient-to-r from-accent/5 to-transparent px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-accent backdrop-blur-md transition-all duration-300 hover:border-accent/30 hover:from-accent/10 ${className}`}
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(232,201,160,0.08), 0 0 32px -12px rgba(232,201,160,0.3)",
      }}
    >
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-75"></span>
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(232,201,160,0.9)]"></span>
      </span>
      {children}
    </span>
  );
}
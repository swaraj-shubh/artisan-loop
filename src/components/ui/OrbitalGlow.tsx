export function OrbitalGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[80%] rounded-full bg-gradient-radial from-accent/5 via-transparent to-transparent blur-3xl" />
      <div className="absolute -bottom-[40%] -right-[20%] h-[80%] w-[80%] rounded-full bg-gradient-radial from-accent/3 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-conic from-transparent via-accent/5 to-transparent blur-3xl" />
    </div>
  );
}
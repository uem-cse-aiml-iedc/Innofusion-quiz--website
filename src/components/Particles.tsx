import { useMemo, useState, useEffect } from "react";

export function Particles({ count = 18 }: { count?: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particles = useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 12,
      duration: 12 + Math.random() * 18,
      opacity: 0.3 + Math.random() * 0.5,
    })),
    [count],
  );

  if (!isMounted) return null;
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            width: p.size, height: p.size,
            boxShadow: "0 0 12px var(--gold)",
            opacity: p.opacity,
            animation: `particle-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            bottom: "-20px",
          }}
        />
      ))}
    </div>
  );
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CountdownTimer({
  duration,
  onComplete,
  size = 120,
  resetKey,
}: {
  duration: number;
  onComplete?: () => void;
  size?: number;
  resetKey?: string | number;
}) {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    setRemaining(duration);
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      const r = Math.max(0, duration - elapsed);
      setRemaining(r);
      if (r <= 0) {
        clearInterval(id);
        onComplete?.();
      }
    }, 50);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, resetKey]);

  const progress = remaining / duration;
  const circumference = 2 * Math.PI * 45;
  const strokeOffset = circumference * (1 - progress);
  const display = Math.ceil(remaining);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r="45" fill="none" stroke="oklch(0.2 0.04 45)" strokeWidth="8" />
        <circle
          cx="50" cy="50" r="45" fill="none"
          stroke="url(#timerGrad)" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={strokeOffset}
          style={{ transition: "stroke-dashoffset 50ms linear" }}
        />
        <defs>
          <linearGradient id="timerGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.18 88)" />
            <stop offset="100%" stopColor="oklch(0.7 0.22 45)" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        key={display}
        initial={{ scale: 1.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute font-display text-4xl font-black text-gold text-stroke"
      >
        {display}
      </motion.div>
    </div>
  );
}

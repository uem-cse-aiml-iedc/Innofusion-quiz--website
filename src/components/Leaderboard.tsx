import { AnimatePresence, motion } from "framer-motion";
import { Crown, Medal, Trophy } from "lucide-react";
import type { Participant } from "@/store/quiz-store";

function rankIcon(rank: number) {
  if (rank === 1) return <Crown className="h-6 w-6 text-yellow-300" />;
  if (rank === 2) return <Trophy className="h-5 w-5 text-slate-200" />;
  if (rank === 3) return <Medal className="h-5 w-5 text-orange-400" />;
  return null;
}

function rankBg(rank: number) {
  if (rank === 1) return "from-yellow-400/30 to-amber-700/20 border-yellow-400/60";
  if (rank === 2) return "from-slate-300/20 to-slate-600/10 border-slate-300/50";
  if (rank === 3) return "from-orange-400/25 to-amber-800/15 border-orange-400/50";
  return "from-card/60 to-card/30 border-border/50";
}

export function Leaderboard({ participants, highlightId }: { participants: Participant[]; highlightId?: string }) {
  const sorted = [...participants].sort((a, b) => b.score - a.score || a.responseTime - b.responseTime);

  if (sorted.length === 0) {
    return (
      <div className="wood-panel p-8 text-center text-muted-foreground">
        No warriors have entered the arena yet.
      </div>
    );
  }

  return (
    <div className="wood-panel p-4 sm:p-6">
      <div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs uppercase tracking-widest text-gold font-display font-bold border-b-2 border-gold/30 mb-3">
        <div className="col-span-2">Rank</div>
        <div className="col-span-5">Warrior</div>
        <div className="col-span-3 text-right">Score</div>
        <div className="col-span-2 text-right">Time</div>
      </div>
      <div className="space-y-2">
        <AnimatePresence>
          {sorted.map((p, i) => {
            const rank = i + 1;
            return (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className={`grid grid-cols-12 items-center gap-2 rounded-lg border-2 bg-gradient-to-r ${rankBg(rank)} px-3 py-3 ${
                  highlightId === p.id ? "ring-2 ring-gold animate-pulse-gold" : ""
                }`}
              >
                <div className="col-span-2 flex items-center gap-2">
                  <span className="font-display text-xl font-black text-gold w-6">{rank}</span>
                  {rankIcon(rank)}
                </div>
                <div className="col-span-5 font-bold truncate">{p.name}</div>
                <motion.div
                  key={p.score}
                  initial={{ scale: 1.3, color: "#fbbf24" }}
                  animate={{ scale: 1, color: "var(--foreground)" }}
                  className="col-span-3 text-right font-display text-lg font-black"
                >
                  {p.score}
                </motion.div>
                <div className="col-span-2 text-right text-sm text-muted-foreground">
                  {p.responseTime ? `${p.responseTime}s` : "—"}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

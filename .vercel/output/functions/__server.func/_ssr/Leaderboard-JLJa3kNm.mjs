import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { C as Crown, T as Trophy, M as Medal } from "../_libs/lucide-react.mjs";
function rankIcon(rank) {
  if (rank === 1) return /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-6 w-6 text-yellow-300" });
  if (rank === 2) return /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5 text-slate-200" });
  if (rank === 3) return /* @__PURE__ */ jsxRuntimeExports.jsx(Medal, { className: "h-5 w-5 text-orange-400" });
  return null;
}
function rankBg(rank) {
  if (rank === 1) return "from-yellow-400/30 to-amber-700/20 border-yellow-400/60";
  if (rank === 2) return "from-slate-300/20 to-slate-600/10 border-slate-300/50";
  if (rank === 3) return "from-orange-400/25 to-amber-800/15 border-orange-400/50";
  return "from-card/60 to-card/30 border-border/50";
}
function Leaderboard({ participants, highlightId }) {
  const sorted = [...participants].sort((a, b) => b.score - a.score || a.responseTime - b.responseTime);
  if (sorted.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wood-panel p-8 text-center text-muted-foreground", children: "No warriors have entered the arena yet." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 px-3 py-2 text-xs uppercase tracking-widest text-gold font-display font-bold border-b-2 border-gold/30 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: "Rank" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-5", children: "Warrior" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 text-right", children: "Score" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-right", children: "Time" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sorted.map((p, i) => {
      const rank = i + 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, x: -20 },
          transition: { type: "spring", stiffness: 300, damping: 28 },
          className: `grid grid-cols-12 items-center gap-2 rounded-lg border-2 bg-gradient-to-r ${rankBg(rank)} px-3 py-3 ${highlightId === p.id ? "ring-2 ring-gold animate-pulse-gold" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-black text-gold w-6", children: rank }),
              rankIcon(rank)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-5 font-bold truncate", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 1.3, color: "#fbbf24" },
                animate: { scale: 1, color: "var(--foreground)" },
                className: "col-span-3 text-right font-display text-lg font-black",
                children: p.score
              },
              p.score
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-right text-sm text-muted-foreground", children: p.responseTime ? `${p.responseTime}s` : "—" })
          ]
        },
        p.id
      );
    }) }) })
  ] });
}
export {
  Leaderboard as L
};

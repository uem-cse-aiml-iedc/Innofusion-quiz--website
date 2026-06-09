import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { L as Leaderboard } from "./Leaderboard-JLJa3kNm.mjs";
import { u as useQuiz } from "./router-BTAvFi0D.mjs";
import "../_libs/socket.io-client.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { D as Download, H as House, T as Trophy, C as Crown, M as Medal } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/engine.io-client.mjs";
import "../_libs/xmlhttprequest-ssl.mjs";
import "fs";
import "url";
import "child_process";
import "http";
import "https";
import "../_libs/engine.io-parser.mjs";
import "../_libs/socket.io__component-emitter.mjs";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/ws.mjs";
import "events";
import "net";
import "tls";
import "zlib";
import "buffer";
import "../_libs/socket.io-parser.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Results() {
  const {
    state,
    resetQuiz
  } = useQuiz();
  const sorted = [...state.participants].sort((a, b) => b.score - a.score || a.responseTime - b.responseTime);
  const top3 = sorted.slice(0, 3);
  reactExports.useEffect(() => {
    const fire = () => confetti({
      particleCount: 120,
      spread: 90,
      origin: {
        y: 0.4
      },
      colors: ["#FFD700", "#F97316", "#fff", "#3B2416"]
    });
    fire();
    const id = setInterval(fire, 1800);
    return () => clearInterval(id);
  }, []);
  const downloadResults = () => {
    const lines = ["Rank,Name,Phone,Score,Avg Response Time (s)"];
    sorted.forEach((p, i) => lines.push(`${i + 1},${p.name},${p.phone},${p.score},${p.responseTime}`));
    const blob = new Blob([lines.join("\n")], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "startup-clash-results.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  const podiumOrder = [top3[1], top3[0], top3[2]].filter(Boolean);
  const heights = ["h-32", "h-44", "h-24"];
  const ranks = [2, 1, 3];
  const icons = [/* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-7 w-7 text-slate-200" }, "t"), /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-9 w-9 text-yellow-300" }, "c"), /* @__PURE__ */ jsxRuntimeExports.jsx(Medal, { className: "h-6 w-6 text-orange-400" }, "m")];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.8
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "text-center flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/leaderboard.png", alt: "Trophy Scene", className: "h-48 sm:h-64 object-contain drop-shadow-2xl mb-[-30px] relative z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-7xl font-black text-gold text-stroke relative z-20", children: "🏆 Quiz Finished" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "The dust settles. The champions are crowned." })
    ] }),
    top3.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-center gap-3 sm:gap-6", children: podiumOrder.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      y: 100,
      opacity: 0
    }, animate: {
      y: 0,
      opacity: 1
    }, transition: {
      delay: 0.3 + i * 0.2,
      type: "spring"
    }, className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 text-center", children: [
        icons[i],
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-base sm:text-xl font-black truncate max-w-[120px]", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-gold font-bold", children: [
          p.score,
          " pts"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `gold-panel w-24 sm:w-32 ${heights[i]} flex items-start justify-center pt-2 font-display text-3xl font-black`, children: ranks[i] })
    ] }, p.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Leaderboard, { participants: state.participants }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: downloadResults, className: "btn-medieval", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-5 w-5" }),
        " Download Results"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "btn-stone", onClick: () => resetQuiz(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
        " Return Home"
      ] })
    ] })
  ] }) });
}
export {
  Results as component
};

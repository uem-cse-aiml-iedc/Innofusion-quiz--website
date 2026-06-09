import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Leaderboard } from "./Leaderboard-JLJa3kNm.mjs";
import { u as useQuiz } from "./router-BTAvFi0D.mjs";
import "../_libs/socket.io-client.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const scoringTable = [{
  time: "1 sec",
  points: 95
}, {
  time: "2 sec",
  points: 90
}, {
  time: "3 sec",
  points: 85
}, {
  time: "5 sec",
  points: 75
}, {
  time: "10 sec",
  points: 50
}, {
  time: "Wrong / No Answer",
  points: 0
}];
function LeaderboardPage() {
  const {
    state,
    me
  } = useQuiz();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/leaderboard.png", alt: "Trophy Scene", className: "h-40 sm:h-56 object-contain drop-shadow-2xl mb-[-20px] relative z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        y: -10
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "text-center font-display text-4xl sm:text-5xl font-black text-gold text-stroke relative z-20", children: "🏆 Live Leaderboard 🏆" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Leaderboard, { participants: state.participants, highlightId: me?.id }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-gold mb-4", children: "⚜️ Scoring Codex" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-3", children: scoringTable.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border-2 border-border/50 bg-card/40 px-4 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: r.time }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-gold", children: r.points })
      ] }, r.time)) })
    ] })
  ] }) });
}
export {
  LeaderboardPage as component
};

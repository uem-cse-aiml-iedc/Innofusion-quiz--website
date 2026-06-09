import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useQuiz } from "./router-CCCeGJ67.mjs";
import "../_libs/socket.io-client.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { U as Users } from "../_libs/lucide-react.mjs";
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
function Lobby() {
  const {
    state,
    me
  } = useQuiz();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!me) navigate({
      to: "/join"
    });
  }, [me, navigate]);
  reactExports.useEffect(() => {
    if (state.status === "running") navigate({
      to: "/quiz"
    });
    if (state.status === "finished") navigate({
      to: "/results"
    });
  }, [state.status, navigate]);
  if (!me) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: -10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "wood-panel p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        rotate: [0, -5, 5, -5, 0]
      }, transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }, className: "inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/warrior.png", alt: "Warrior", className: "h-24 sm:h-32 object-contain drop-shadow-2xl" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-3xl sm:text-4xl font-black text-gold text-stroke", children: "Waiting For Quiz Master To Start" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-2 rounded-full bg-card/50 px-4 py-1.5 text-xs uppercase tracking-widest", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse" }),
        "Live · Awaiting Battle Horn"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-block gold-panel rounded-xl px-6 py-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest opacity-70", children: "Your Warrior" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-black", children: me.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm opacity-80", children: [
          "📞 ",
          me.phone
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-gold", children: "Warriors In Camp" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg gold-panel px-3 py-1 text-sm font-black", children: state.participants.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto space-y-2 pr-2", children: state.participants.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        delay: i * 0.05
      }, className: `flex items-center justify-between rounded-lg border-2 px-4 py-3 ${p.id === me.id ? "border-gold bg-gold/10" : "border-border/60 bg-card/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg gold-panel font-black", children: p.name.charAt(0).toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              "📞 ",
              p.phone
            ] })
          ] })
        ] }),
        p.id === me.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-gold uppercase tracking-widest", children: "You" })
      ] }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border-2 border-destructive/50 bg-destructive/10 p-4 text-center text-sm", children: "⚠️ Once the quiz starts, new participants cannot join." })
  ] }) });
}
export {
  Lobby as component
};

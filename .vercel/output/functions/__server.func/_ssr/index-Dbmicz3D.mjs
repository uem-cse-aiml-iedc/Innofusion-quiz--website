import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as Crown, S as Swords, d as Shield, T as Trophy, e as Timer, U as Users } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const features = [{
  icon: Trophy,
  title: "Real-Time Leaderboard",
  desc: "Live ranks update after every battle round."
}, {
  icon: Timer,
  title: "Speed-Based Scoring",
  desc: "Faster answers earn more glory points."
}, {
  icon: Shield,
  title: "Startup Questions",
  desc: "20 forged questions on entrepreneurship lore."
}, {
  icon: Users,
  title: "Live Competition",
  desc: "Warriors clash simultaneously in the arena."
}];
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat", style: {
      backgroundImage: "url(/bg.png)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-5xl pt-8 pb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: -20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/40 px-4 py-1.5 text-xs uppercase tracking-widest text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "h-3.5 w-3.5" }),
        " Season 1 · Live Now"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h1, { initial: {
        opacity: 0,
        scale: 0.9
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        delay: 0.1,
        type: "spring"
      }, className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-black text-gold text-stroke leading-[0.95]", children: "Startup Clash Quiz" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.25
      }, className: "mt-5 text-lg sm:text-2xl text-muted-foreground", children: "⚔️ Battle Your Entrepreneurial Knowledge ⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.4
      }, className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/join", className: "btn-medieval text-lg w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { className: "h-5 w-5" }),
          " Join Quiz"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin", className: "btn-stone text-lg w-full sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
          " Admin Login"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.8
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        delay: 0.6
      }, className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 blur-3xl bg-gold/20 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rotate-[-2deg] hover:rotate-0 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/warrior.png", alt: "Warrior", className: "h-48 sm:h-64 object-contain animate-pulse drop-shadow-2xl" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-6xl pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-3xl sm:text-4xl font-black text-gold mb-10", children: "⚜️ Battle Features ⚜️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, whileHover: {
        y: -6
      }, className: "wood-panel p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 inline-flex rounded-xl gold-panel p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-gold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
      ] }, f.title)) })
    ] })
  ] });
}
export {
  Landing as component
};

import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useQuiz, c as calculatePoints } from "./router-BTAvFi0D.mjs";
import "../_libs/socket.io-client.mjs";
import "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as Check, X } from "../_libs/lucide-react.mjs";
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
function CountdownTimer({
  duration,
  onComplete,
  size = 120,
  resetKey
}) {
  const [remaining, setRemaining] = reactExports.useState(duration);
  reactExports.useEffect(() => {
    setRemaining(duration);
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = (Date.now() - start) / 1e3;
      const r = Math.max(0, duration - elapsed);
      setRemaining(r);
      if (r <= 0) {
        clearInterval(id);
        onComplete?.();
      }
    }, 50);
    return () => clearInterval(id);
  }, [duration, resetKey]);
  const progress = remaining / duration;
  const circumference = 2 * Math.PI * 45;
  const strokeOffset = circumference * (1 - progress);
  const display = Math.ceil(remaining);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center justify-center", style: { width: size, height: size }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 100 100", className: "-rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "45", fill: "none", stroke: "oklch(0.2 0.04 45)", strokeWidth: "8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "circle",
        {
          cx: "50",
          cy: "50",
          r: "45",
          fill: "none",
          stroke: "url(#timerGrad)",
          strokeWidth: "8",
          strokeLinecap: "round",
          strokeDasharray: circumference,
          strokeDashoffset: strokeOffset,
          style: { transition: "stroke-dashoffset 50ms linear" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "timerGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.92 0.18 88)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.7 0.22 45)" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scale: 1.4, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        className: "absolute font-display text-4xl font-black text-gold text-stroke",
        children: display
      },
      display
    )
  ] });
}
const INTRO_SECONDS = 5;
const ANSWER_SECONDS = 10;
function Quiz() {
  const {
    state,
    me,
    submitAnswer,
    nextQuestion
  } = useQuiz();
  const navigate = useNavigate();
  const [selected, setSelected] = reactExports.useState(null);
  const [floatPoints, setFloatPoints] = reactExports.useState(null);
  const [answerStartedAt, setAnswerStartedAt] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!me) navigate({
      to: "/join"
    });
    else if (state.status === "lobby" || state.status === "idle") navigate({
      to: "/lobby"
    });
    else if (state.status === "finished") navigate({
      to: "/results"
    });
  }, [me, state.status, navigate]);
  reactExports.useEffect(() => {
    setSelected(null);
    setFloatPoints(null);
  }, [state.currentQuestionIndex, state.currentQuestion?.id]);
  reactExports.useEffect(() => {
    if (state.phase === "answering") setAnswerStartedAt(Date.now());
  }, [state.phase, state.currentQuestionIndex]);
  const q = state.currentQuestion;
  if (!q || !me) return null;
  const correctAnswerText = state.correctAnswer;
  const correctIndex = q.options.findIndex((opt) => opt === correctAnswerText);
  const handleSelect = (option) => {
    if (selected !== null || state.phase !== "answering") return;
    setSelected(option);
    const timeMs = Date.now() - answerStartedAt;
    submitAnswer(me.id, option, timeMs);
    const pts = calculatePoints(timeMs);
    setFloatPoints(pts);
    setTimeout(() => setFloatPoints(null), 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6 sm:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg gold-panel px-4 py-2 font-display font-black", children: [
        "Question ",
        state.currentQuestionIndex + 1,
        " of ",
        state.totalQuestions
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-card/50 border-2 border-border px-4 py-2 text-sm", children: [
        "Warrior: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-gold", children: me.name }),
        " · Score:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-gold", children: me.score })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "wood-panel p-6 sm:p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gold mb-4", children: "⚔️ The Challenge ⚔️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-4xl font-black leading-tight", children: q.question })
    ] }, q.id),
    state.phase === "intro" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground uppercase tracking-widest", children: "Brace yourself..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CountdownTimer, { duration: INTRO_SECONDS, size: 140, resetKey: `intro-${state.currentQuestionIndex}-${q.id}` })
    ] }),
    state.phase === "answering" && q.options.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CountdownTimer, { duration: ANSWER_SECONDS, size: 110, resetKey: `answer-${state.currentQuestionIndex}-${q.id}` }),
        selected !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.8
        }, animate: {
          opacity: 1,
          scale: 1
        }, className: "rounded-full bg-emerald-500/20 border border-emerald-400 px-4 py-1.5 text-sm font-bold text-emerald-300", children: "✓ Answer Submitted" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 relative", children: [
        q.options.map((opt, i) => {
          const isSelected = selected === opt;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
            scale: selected === null ? 1.02 : 1
          }, whileTap: {
            scale: 0.98
          }, onClick: () => handleSelect(opt), disabled: selected !== null, className: `text-left rounded-xl border-2 p-4 sm:p-5 font-bold transition-all ${isSelected ? "border-gold bg-gold/20 ring-2 ring-gold" : "border-border bg-card/60 hover:border-gold/60"} ${selected !== null && !isSelected ? "opacity-50" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg gold-panel font-display font-black", children: String.fromCharCode(65 + i) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg", children: opt })
          ] }) }, i);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: floatPoints !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 1,
          y: 0
        }, animate: {
          opacity: 0,
          y: -80
        }, exit: {
          opacity: 0
        }, transition: {
          duration: 1.2
        }, className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 font-display text-4xl font-black text-emerald-400 text-stroke", children: [
          "+",
          floatPoints
        ] }, "float") })
      ] })
    ] }),
    state.phase === "reveal" && q.options.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: q.options.map((opt, i) => {
        const isCorrect = i === correctIndex;
        const isSelected = selected === opt;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          scale: 0.95
        }, animate: {
          scale: 1
        }, className: `rounded-xl border-2 p-4 sm:p-5 font-bold flex items-center gap-3 ${isCorrect ? "border-emerald-400 bg-emerald-500/20" : isSelected ? "border-destructive bg-destructive/20" : "border-border bg-card/30 opacity-60"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg gold-panel font-display font-black", children: String.fromCharCode(65 + i) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: opt }),
          isCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-6 w-6 text-emerald-400" }),
          isSelected && !isCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6 text-destructive" })
        ] }, i);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "wood-panel p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gold mb-1", children: "Correct Answer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-black text-emerald-400", children: correctAnswerText ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-lg", children: selected === correctAnswerText ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold", children: "✓ Victory — well fought!" }) : selected !== null ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive font-bold", children: "✗ Fallen — try the next round." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "No answer submitted." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-sm text-muted-foreground", children: "Waiting for next question..." })
    ] })
  ] }) });
}
export {
  Quiz as component
};

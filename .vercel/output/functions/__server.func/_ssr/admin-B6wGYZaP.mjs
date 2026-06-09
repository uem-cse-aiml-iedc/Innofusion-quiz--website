import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useQuiz } from "./router-BTAvFi0D.mjs";
import { L as Leaderboard } from "./Leaderboard-JLJa3kNm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/socket.io-client.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { b as Shield, U as Users, T as Trophy, L as ListChecks, P as Play, c as SkipForward, d as Square, R as RotateCcw } from "../_libs/lucide-react.mjs";
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
const API_BASE = "https://server.uemcseaiml.org/clash-founders-backend";
function StatCard({
  label,
  value,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "wood-panel p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-3xl font-black text-gold", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl gold-panel p-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) })
  ] }) });
}
function Admin() {
  const {
    state,
    startQuiz,
    endQuiz,
    resetQuiz,
    nextQuestion,
    socket
  } = useQuiz();
  const [questions, setQuestions] = reactExports.useState([]);
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  const [secretCode, setSecretCode] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (secretCode === "#_Asif01_#_Pratyay02_#_Dipti03_#_Innofusion3_#") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect Admin Secret Code!");
    }
  };
  reactExports.useEffect(() => {
    if (socket) {
      socket.emit("admin_join");
    }
  }, [socket]);
  reactExports.useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/admin/status`);
        const data = await res.json();
        if (data.success && data.questions) {
          setQuestions(data.questions);
        }
      } catch (error2) {
        console.error("Failed to fetch admin data:", error2);
      }
    };
    fetchAdminData();
  }, []);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-10 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "mx-auto max-w-md wood-panel p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto inline-flex rounded-xl gold-panel p-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-7 w-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-black text-gold", children: "Admin Login" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Enter the secret code to access the war room." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-2 text-xs font-bold uppercase tracking-widest text-gold", children: "Secret Code" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: secretCode, onChange: (e) => setSecretCode(e.target.value), placeholder: "Enter secret code", className: "w-full rounded-lg border-2 border-border bg-input/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "btn-medieval w-full text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
          " Access Dashboard"
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: -10
    }, animate: {
      opacity: 1,
      y: 0
    }, className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/admin.png", alt: "Admin", className: "h-20 sm:h-24 object-contain drop-shadow-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-black text-gold", children: "⚔️ Quiz Master Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Command the battle from the war room." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest border-2 ${state.status === "running" ? "border-emerald-400 text-emerald-300 bg-emerald-400/10" : state.status === "finished" ? "border-orange-400 text-orange-300 bg-orange-400/10" : "border-border text-muted-foreground"}`, children: [
        "Status: ",
        state.status
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Participants", value: state.participants.length, icon: Users }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Quiz Status", value: state.status.toUpperCase(), icon: Trophy }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Current Question", value: state.status === "idle" || state.status === "lobby" ? "—" : state.currentQuestionIndex + 1, icon: ListChecks }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Questions", value: state.totalQuestions || questions.length, icon: ListChecks })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-gold mb-4", children: "⚜️ Battle Controls" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          startQuiz();
          toast.success("⚔️ The battle has begun!");
        }, disabled: state.participants.length === 0 || state.status === "running", className: "btn-medieval disabled:opacity-40 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-5 w-5" }),
          " Start Quiz"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          nextQuestion();
          toast("Next round!");
        }, disabled: state.status !== "running", className: "btn-medieval disabled:opacity-40 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "h-5 w-5" }),
          " Next Question"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          endQuiz();
          toast.success("Battle ended.");
        }, disabled: state.status !== "running", className: "btn-stone disabled:opacity-40 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-5 w-5" }),
          " End Quiz"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          if (confirm("Reset everything? This wipes all participants.")) {
            resetQuiz();
            toast.success("Arena reset.");
          }
        }, className: "btn-stone", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-5 w-5" }),
          " Reset Quiz"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leaderboard", className: "btn-stone", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-5 w-5" }),
          " Live Leaderboard"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/quiz", className: "btn-stone", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "h-5 w-5" }),
          " View Quiz Screen"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-gold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
          " Participants (",
          state.participants.length,
          ")"
        ] }),
        state.participants.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No warriors have enlisted yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-96 overflow-y-auto space-y-2", children: state.participants.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border-2 border-border/60 bg-card/40 px-4 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              "📞 ",
              p.phone
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-gold", children: p.score }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "pts" })
          ] })
        ] }, p.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Leaderboard, { participants: state.participants })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-gold mb-4", children: [
        "📜 Question Bank (",
        questions.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-y-auto space-y-2 text-sm", children: questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border-2 px-4 py-2.5 ${i === state.currentQuestionIndex && state.status === "running" ? "border-gold bg-gold/10" : "border-border/60 bg-card/40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold", children: [
          "Q",
          i + 1,
          ". ",
          q.question
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-emerald-400 mt-0.5", children: [
          "✓ ",
          q.correct_answer
        ] })
      ] }, q.id)) })
    ] })
  ] }) });
}
export {
  Admin as component
};

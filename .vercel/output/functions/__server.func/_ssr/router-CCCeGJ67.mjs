import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as lookup } from "../_libs/socket.io-client.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import { S as Swords } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BMoM2STj.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const API_BASE = "https://server.uemcseaiml.org/clash-founders-backend";
const SOCKET_URL = "https://server.uemcseaiml.org/clash-founders-backend";
const ME_KEY = "startup-clash-me";
const defaultState = {
  status: "idle",
  participants: [],
  currentQuestionIndex: 0,
  totalQuestions: 0,
  phase: "intro",
  phaseStartedAt: 0,
  currentQuestion: null,
  correctAnswer: null,
  leaderboard: []
};
const QuizContext = reactExports.createContext(null);
function QuizProvider({ children }) {
  const [state, setState] = reactExports.useState(defaultState);
  const [me, setMeState] = reactExports.useState(() => {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(ME_KEY);
    return raw ? JSON.parse(raw) : null;
  });
  const socketRef = reactExports.useRef(null);
  const answerSubmittedForQuestion = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (me) localStorage.setItem(ME_KEY, JSON.stringify(me));
    else localStorage.removeItem(ME_KEY);
  }, [me]);
  reactExports.useEffect(() => {
    const socketUrlObj = new URL(SOCKET_URL, window.location.origin);
    const basePath = socketUrlObj.pathname === "/" ? "" : socketUrlObj.pathname;
    const socketPath = `${basePath}/socket.io`;
    const socket = lookup(socketUrlObj.origin, {
      path: socketPath,
      transports: ["websocket", "polling"],
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1e3
    });
    socketRef.current = socket;
    socket.on("connect", () => {
      console.log("🔌 Connected to quiz server:", socket.id);
      const storedMe = localStorage.getItem(ME_KEY);
      if (storedMe) {
        const parsed = JSON.parse(storedMe);
        socket.emit("join_lobby", { participant_id: parsed.id });
      }
    });
    socket.on("disconnect", () => {
      console.log("🔌 Disconnected from quiz server");
    });
    socket.on("connect_error", (err) => {
      console.error("Socket Error:", err);
    });
    socket.on("connection_ack", (data) => {
      console.log("✅ Server acknowledged:", data.message);
    });
    socket.on("quiz_state_update", (data) => {
      console.log("📡 Quiz state update:", data);
      setState((prev) => ({
        ...prev,
        status: data.status === "waiting" ? "lobby" : data.status === "completed" ? "finished" : data.status === "running" ? "running" : prev.status,
        currentQuestionIndex: data.current_question_index ?? prev.currentQuestionIndex,
        totalQuestions: data.total_questions ?? prev.totalQuestions
      }));
    });
    socket.on("participant_joined", (participant) => {
      console.log("👤 Participant joined:", participant.name);
      setState((prev) => {
        const exists = prev.participants.some((p) => p.id === participant.id);
        if (exists) {
          return {
            ...prev,
            participants: prev.participants.map(
              (p) => p.id === participant.id ? participant : p
            )
          };
        }
        return {
          ...prev,
          participants: [...prev.participants, participant]
        };
      });
    });
    socket.on("quiz_started", (data) => {
      console.log("🚀 Quiz started:", data.message);
      setState((prev) => ({
        ...prev,
        status: "running",
        totalQuestions: data.total_questions ?? prev.totalQuestions
      }));
    });
    socket.on("show_question", (data) => {
      console.log("📖 Phase 1 (Intro):", data.question);
      answerSubmittedForQuestion.current = null;
      setState((prev) => ({
        ...prev,
        status: "running",
        phase: "intro",
        phaseStartedAt: Date.now(),
        currentQuestion: {
          id: data.question_id,
          question: data.question,
          options: []
        },
        currentQuestionIndex: (data.question_number ?? 1) - 1,
        totalQuestions: data.total_questions ?? prev.totalQuestions,
        correctAnswer: null
      }));
    });
    socket.on("show_options", (data) => {
      console.log("🎯 Phase 2 (Answering):", data.options);
      setState((prev) => ({
        ...prev,
        phase: "answering",
        phaseStartedAt: Date.now(),
        currentQuestion: {
          id: data.question_id,
          question: data.question,
          options: data.options
        }
      }));
    });
    socket.on("show_correct_answer", (data) => {
      console.log("✅ Phase 3 (Reveal):", data.correct_answer);
      setState((prev) => ({
        ...prev,
        phase: "reveal",
        phaseStartedAt: Date.now(),
        correctAnswer: data.correct_answer,
        currentQuestion: {
          id: prev.currentQuestion?.id ?? "",
          question: data.question,
          options: data.options,
          correct_answer: data.correct_answer
        }
      }));
    });
    socket.on("answer_submitted", (data) => {
      console.log("📝 Answer result:", data);
      if (data.success && data.is_correct) {
        setMeState((prev) => {
          if (!prev) return prev;
          const updated = {
            ...prev,
            score: prev.score + (data.points ?? 0)
          };
          return updated;
        });
      }
    });
    socket.on("leaderboard_update", (data) => {
      console.log("📊 Leaderboard updated:", data.leaderboard?.length, "entries");
      setState((prev) => ({
        ...prev,
        leaderboard: data.leaderboard ?? [],
        participants: data.leaderboard ?? prev.participants
      }));
      setMeState((prev) => {
        if (!prev) return prev;
        const myEntry = data.leaderboard?.find(
          (p) => p.id === prev.id
        );
        if (myEntry) {
          return {
            ...prev,
            score: myEntry.score,
            responseTime: myEntry.responseTime ?? prev.responseTime,
            answers: myEntry.answers ?? prev.answers
          };
        }
        return prev;
      });
    });
    socket.on("quiz_finished", (data) => {
      console.log("🏁 Quiz finished:", data.message);
      setState((prev) => ({
        ...prev,
        status: "finished",
        leaderboard: data.leaderboard ?? prev.leaderboard,
        participants: data.leaderboard ?? prev.participants
      }));
    });
    socket.on("error", (data) => {
      console.error("❌ Socket error:", data.message);
    });
    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);
  const joinAsParticipant = reactExports.useCallback(
    async (name, phone) => {
      try {
        const response = await fetch(`${API_BASE}/api/participant/join`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, phone })
        });
        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message);
        }
        const participant = {
          id: data.participant.id,
          name: data.participant.name,
          phone: data.participant.phone,
          score: data.participant.score ?? 0,
          responseTime: data.participant.responseTime ?? 0,
          answers: data.participant.answers ?? []
        };
        setMeState(participant);
        if (socketRef.current) {
          socketRef.current.emit("join_lobby", {
            participant_id: participant.id
          });
        }
        setState((prev) => ({
          ...prev,
          status: prev.status === "idle" ? "lobby" : prev.status,
          participants: [...prev.participants.filter((p) => p.id !== participant.id), participant]
        }));
        return participant;
      } catch (error) {
        console.error("Join error:", error.message);
        throw error;
      }
    },
    []
  );
  const startQuiz = reactExports.useCallback(() => {
    if (socketRef.current) {
      socketRef.current.emit("admin_start_quiz");
    }
  }, []);
  const endQuiz = reactExports.useCallback(() => {
    if (socketRef.current) {
      socketRef.current.emit("admin_end_quiz");
    }
  }, []);
  const resetQuiz = reactExports.useCallback(async () => {
    try {
      await fetch(`${API_BASE}/api/admin/reset`, { method: "POST" });
      setState(defaultState);
      setMeState(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem(ME_KEY);
      }
    } catch (error) {
      console.error("Reset error:", error);
    }
  }, []);
  const nextQuestion = reactExports.useCallback(() => {
    if (socketRef.current) {
      socketRef.current.emit("admin_next_question");
    }
  }, []);
  const setPhase = reactExports.useCallback((_phase) => {
  }, []);
  const submitAnswer = reactExports.useCallback(
    (participantId, selectedOption, timeMs) => {
      const questionId = state.currentQuestion?.id;
      if (answerSubmittedForQuestion.current === questionId) {
        console.log("Answer already submitted for this question");
        return;
      }
      if (socketRef.current) {
        answerSubmittedForQuestion.current = questionId ?? null;
        socketRef.current.emit("submit_answer", {
          participant_id: participantId,
          selected_option: selectedOption,
          response_time_ms: timeMs
        });
      }
    },
    [state.currentQuestion?.id]
  );
  reactExports.useEffect(() => {
    const fetchInitialState = async () => {
      try {
        const [stateRes, participantsRes] = await Promise.all([
          fetch(`${API_BASE}/api/quiz-state`),
          fetch(`${API_BASE}/api/participants`)
        ]);
        const stateData = await stateRes.json();
        const participantsData = await participantsRes.json();
        if (stateData.success) {
          const serverStatus = stateData.state.status;
          let mappedStatus = "idle";
          if (serverStatus === "waiting") mappedStatus = "lobby";
          else if (serverStatus === "running") mappedStatus = "running";
          else if (serverStatus === "completed") mappedStatus = "finished";
          setState((prev) => ({
            ...prev,
            status: mappedStatus,
            currentQuestionIndex: stateData.state.current_question_index ?? 0,
            totalQuestions: stateData.state.total_questions ?? 0,
            participants: participantsData.success ? participantsData.participants : prev.participants
          }));
        }
      } catch (error) {
        console.error("Failed to fetch initial state:", error);
      }
    };
    fetchInitialState();
  }, []);
  const ctx = {
    state,
    me,
    socket: socketRef.current,
    joinAsParticipant,
    setMe: setMeState,
    startQuiz,
    endQuiz,
    resetQuiz,
    nextQuestion,
    setPhase,
    submitAnswer
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QuizContext.Provider, { value: ctx, children });
}
function useQuiz() {
  const ctx = reactExports.useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
}
function calculatePoints(timeMs) {
  const seconds = Math.max(0, timeMs / 1e3);
  return Math.max(10, 100 - Math.floor(seconds * 5));
}
function Particles({ count = 18 }) {
  const [isMounted, setIsMounted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setIsMounted(true);
  }, []);
  const particles = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 12,
      duration: 12 + Math.random() * 18,
      opacity: 0.3 + Math.random() * 0.5
    })),
    [count]
  );
  if (!isMounted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden z-0", children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "absolute rounded-full bg-gold",
      style: {
        left: `${p.left}%`,
        width: p.size,
        height: p.size,
        boxShadow: "0 0 12px var(--gold)",
        opacity: p.opacity,
        animation: `particle-float ${p.duration}s linear infinite`,
        animationDelay: `${p.delay}s`,
        bottom: "-20px"
      }
    },
    p.id
  )) });
}
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative z-20 px-4 py-4 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg gold-panel p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl sm:text-2xl font-black text-gold leading-none", children: "Startup Clash" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest", children: "Battle Quiz Arena" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden sm:flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-stone text-sm", activeOptions: { exact: true }, children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "btn-stone text-sm", children: "Admin" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 mt-12 border-t border-border/40 px-4 py-6 text-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
    "⚔️ Startup Clash Quiz — Forged for Entrepreneurs · ",
    (/* @__PURE__ */ new Date()).getFullYear()
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel max-w-md p-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl font-black text-gold text-stroke", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-xl font-bold", children: "Lost in the wilderness" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "This path does not exist on the battle map." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "btn-medieval mt-6 inline-flex", children: "Return to Camp" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "wood-panel max-w-md p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-gold", children: "The battle was interrupted" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something broke. Try again or return home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "btn-medieval", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "btn-stone", children: "Go home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Startup Clash Quiz — Battle Your Entrepreneurial Knowledge" },
      { name: "description", content: "Real-time, Clash-of-Clans-inspired quiz arena for startup and entrepreneurship battles." },
      { property: "og:title", content: "Startup Clash Quiz" },
      { property: "og:description", content: "Battle Your Entrepreneurial Knowledge." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=MedievalSharp&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(QuizProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "top-center", richColors: true })
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./results-CIDfihDz.mjs");
const Route$6 = createFileRoute("/results")({
  head: () => ({
    meta: [{
      title: "Final Results — Startup Clash"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./quiz-BsDFsSKO.mjs");
const Route$5 = createFileRoute("/quiz")({
  head: () => ({
    meta: [{
      title: "Live Battle — Startup Clash"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./lobby-BU0agFLy.mjs");
const Route$4 = createFileRoute("/lobby")({
  head: () => ({
    meta: [{
      title: "Waiting Lobby — Startup Clash"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./leaderboard-BqAdJHc1.mjs");
const Route$3 = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [{
      title: "Live Leaderboard — Startup Clash"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./join-BlRy7EC5.mjs");
const Route$2 = createFileRoute("/join")({
  head: () => ({
    meta: [{
      title: "Join the Battle — Startup Clash"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin-CM8IOEK4.mjs");
const Route$1 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin Dashboard — Startup Clash"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Dbmicz3D.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Startup Clash Quiz — Battle Your Entrepreneurial Knowledge"
    }, {
      name: "description",
      content: "Real-time entrepreneurship quiz battles. Speed-based scoring, live leaderboard, medieval gaming UI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResultsRoute = Route$6.update({
  id: "/results",
  path: "/results",
  getParentRoute: () => Route$7
});
const QuizRoute = Route$5.update({
  id: "/quiz",
  path: "/quiz",
  getParentRoute: () => Route$7
});
const LobbyRoute = Route$4.update({
  id: "/lobby",
  path: "/lobby",
  getParentRoute: () => Route$7
});
const LeaderboardRoute = Route$3.update({
  id: "/leaderboard",
  path: "/leaderboard",
  getParentRoute: () => Route$7
});
const JoinRoute = Route$2.update({
  id: "/join",
  path: "/join",
  getParentRoute: () => Route$7
});
const AdminRoute = Route$1.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  JoinRoute,
  LeaderboardRoute,
  LobbyRoute,
  QuizRoute,
  ResultsRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  calculatePoints as c,
  router as r,
  useQuiz as u
};

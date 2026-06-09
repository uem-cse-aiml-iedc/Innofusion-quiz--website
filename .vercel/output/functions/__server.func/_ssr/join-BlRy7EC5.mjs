import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { u as useQuiz } from "./router-CCCeGJ67.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/socket.io-client.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
function Join() {
  const {
    joinAsParticipant,
    state
  } = useQuiz();
  const navigate = useNavigate();
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim() || name.trim().length < 3) errs.name = "Name must be at least 3 characters";
    if (!/^\d{10}$/.test(phone)) errs.phone = "Phone must be exactly 10 digits";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (state.status === "running" || state.status === "finished") {
      toast.error("Battle already underway. New warriors cannot join!");
      return;
    }
    setIsSubmitting(true);
    try {
      await joinAsParticipant(name.trim(), phone);
      toast.success("You have entered the arena!");
      navigate({
        to: "/lobby"
      });
    } catch (error) {
      toast.error(error.message || "Failed to join the quiz");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-10 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, animate: {
    opacity: 1,
    y: 0
  }, className: "mx-auto max-w-md wood-panel p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto inline-flex rounded-xl gold-panel p-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-black text-gold", children: "Enlist for Battle" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Forge your identity, warrior." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-2 text-xs font-bold uppercase tracking-widest text-gold", children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Rahul Sharma", className: "w-full rounded-lg border-2 border-border bg-input/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" }),
        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mb-2 text-xs font-bold uppercase tracking-widest text-gold", children: "Phone Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: phone, maxLength: 10, onChange: (e) => setPhone(e.target.value.replace(/\D/g, "")), placeholder: "10-digit number", className: "w-full rounded-lg border-2 border-border bg-input/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none" }),
        errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.phone })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: isSubmitting, className: "btn-medieval w-full text-lg disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Swords, { className: "h-5 w-5" }),
        " ",
        isSubmitting ? "Joining..." : "Join Battle"
      ] })
    ] })
  ] }) });
}
export {
  Join as component
};

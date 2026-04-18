import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const btnRef = useRef<HTMLButtonElement>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number; to: "dark" | "light"; id: number } | null>(null);

  const handleClick = () => {
    const el = btnRef.current;
    if (!el) {
      toggle();
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const id = Date.now();
    setRipple({ x, y, to: isDark ? "light" : "dark", id });
    setTimeout(() => toggle(), 180);
    setTimeout(() => setRipple((r) => (r?.id === id ? null : r)), 1200);
  };

  const maxRadius =
    typeof window !== "undefined"
      ? Math.hypot(Math.max(window.innerWidth, 1), Math.max(window.innerHeight, 1)) * 1.1
      : 1200;

  return (
    <>
      <button
        ref={btnRef}
        onClick={handleClick}
        aria-label="Toggle theme"
        className="liquid-glass relative h-11 w-11 rounded-full grid place-items-center group hover:scale-110 transition-transform duration-300"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-foreground"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {ripple && (
              <motion.div
                key={ripple.id}
                className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ width: 0, height: 0, opacity: 0.95 }}
                  animate={{ width: maxRadius * 2, height: maxRadius * 2, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                  style={{
                    position: "absolute",
                    left: ripple.x,
                    top: ripple.y,
                    transform: "translate(-50%, -50%)",
                    borderRadius: "9999px",
                    background:
                      ripple.to === "dark"
                        ? "radial-gradient(circle at center, hsl(252 35% 6%) 0%, hsl(265 60% 12%) 50%, hsl(270 80% 20%) 100%)"
                        : "radial-gradient(circle at center, hsl(250 40% 98%) 0%, hsl(280 60% 92%) 50%, hsl(265 80% 85%) 100%)",
                    boxShadow:
                      ripple.to === "dark"
                        ? "0 0 120px 20px hsl(270 95% 60% / 0.4)"
                        : "0 0 120px 20px hsl(265 89% 60% / 0.3)",
                  }}
                />
                <motion.div
                  initial={{ scale: 0, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    left: ripple.x - 100,
                    top: ripple.y - 100,
                    width: 200,
                    height: 200,
                    borderRadius: "9999px",
                    background:
                      ripple.to === "dark"
                        ? "radial-gradient(circle, hsl(285 100% 75% / 0.6), transparent 70%)"
                        : "radial-gradient(circle, hsl(50 100% 70% / 0.6), transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

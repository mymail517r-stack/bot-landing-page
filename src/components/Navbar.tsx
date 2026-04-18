import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import botLogo from "@/assets/bot-logo.png";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="container max-w-6xl">
        <nav className="liquid-glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9">
              <img src={botLogo} alt={siteConfig.bot.name} className="h-9 w-9 object-contain group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/40 blur-xl -z-10 group-hover:bg-primary/60 transition-colors" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">{siteConfig.bot.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-primary/15 border border-primary/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noreferrer">Invite</a>
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden liquid-glass h-11 w-11 rounded-full grid place-items-center"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 liquid-glass rounded-2xl p-3 flex flex-col gap-1"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-primary/15 text-foreground"
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="sm" className="mt-2">
              <a href={siteConfig.bot.inviteUrl} target="_blank" rel="noreferrer">Invite Bot</a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

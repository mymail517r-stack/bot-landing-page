import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";

const Commands = () => {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState(siteConfig.commandCategories[0].name);

  useEffect(() => {
    document.title = `Commands — ${siteConfig.bot.name}`;
  }, []);

  const category = siteConfig.commandCategories.find((c) => c.name === activeCat)!;
  const filtered = category.commands.filter(
    (c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="container max-w-6xl pt-6 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Commands</span>
        <h1 className="mt-3 font-display font-bold text-5xl md:text-6xl tracking-tight">
          {siteConfig.bot.commands}+ powerful <span className="text-gradient bg-aurora bg-clip-text">commands</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Browse every command grouped by category. Search to find what you need.
        </p>
      </motion.div>

      <div className="mt-10 max-w-xl mx-auto relative">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search commands…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="liquid-glass border-0 h-13 pl-12 rounded-full text-base h-12"
        />
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {siteConfig.commandCategories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActiveCat(c.name)}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCat === c.name
                ? "bg-aurora text-primary-foreground shadow-[var(--shadow-glow)]"
                : "liquid-glass text-foreground hover:scale-105"
            }`}
          >
            <c.icon className="h-4 w-4" />
            {c.name}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCat}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 grid sm:grid-cols-2 gap-4"
      >
        {filtered.map((cmd, i) => (
          <motion.div
            key={cmd.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="liquid-glass rounded-2xl p-5 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-start justify-between gap-3">
              <code className="font-mono text-base font-semibold text-gradient bg-aurora bg-clip-text">
                {cmd.name}
              </code>
              <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary font-medium">
                {category.name}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{cmd.description}</p>
            <div className="mt-3 text-xs font-mono text-muted-foreground bg-muted/40 rounded-lg px-3 py-2 border border-border/40">
              {cmd.usage}
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-16">No commands match your search.</div>
        )}
      </motion.div>
    </section>
  );
};

export default Commands;

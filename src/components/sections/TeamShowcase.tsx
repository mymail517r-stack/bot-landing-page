import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

export const TeamShowcase = () => {
  return (
    <section className="container max-w-6xl py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Developers</span>
        <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl tracking-tight">
          Built by a tiny, obsessed team
        </h2>
        <p className="mt-4 text-muted-foreground">
          The humans behind {siteConfig.bot.name}. Designers, engineers, dreamers.
        </p>
      </motion.div>

      <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {siteConfig.team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="liquid-glass rounded-3xl p-6 text-center group"
          >
            <div className="relative w-28 h-28 mx-auto">
              <div className="absolute inset-0 bg-aurora rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
              {m.avatar ? (
                <img
                  src={m.avatar}
                  alt={m.name}
                  loading="lazy"
                  className="relative w-28 h-28 rounded-full object-cover ring-2 ring-primary/40 group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="relative w-28 h-28 rounded-full grid place-items-center text-5xl bg-muted ring-2 ring-primary/40 group-hover:scale-105 transition-transform duration-500">
                  🖼️
                </div>
              )}
            </div>
            <h3 className="mt-5 font-display font-semibold text-lg">{m.name}</h3>
            <p className="text-sm text-primary font-medium">{m.role}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            <div className="mt-5 flex justify-center gap-2">
              <a href={m.socials.github} className="liquid-glass h-9 w-9 rounded-full grid place-items-center hover:scale-110 transition-transform">
                <Github className="h-4 w-4" />
              </a>
              <a href={m.socials.twitter} className="liquid-glass h-9 w-9 rounded-full grid place-items-center hover:scale-110 transition-transform">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

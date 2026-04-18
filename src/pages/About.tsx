import { motion } from "framer-motion";
import { useEffect } from "react";
import { Github, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";

const About = () => {
  useEffect(() => {
    document.title = `About the team — ${siteConfig.bot.name}`;
  }, []);

  return (
    <section className="container max-w-5xl pt-6 pb-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">About</span>
        <h1 className="mt-3 font-display font-bold text-5xl md:text-6xl tracking-tight">
          The team behind <span className="text-gradient bg-aurora bg-clip-text">{siteConfig.bot.name}</span>
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We're a small, distributed team obsessed with building tools that feel magical to use.
          {siteConfig.bot.name} started as a weekend project — today it powers communities all over the world.
        </p>
      </motion.div>

      <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {siteConfig.team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="liquid-glass rounded-3xl p-6 text-center group"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-aurora rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
              {m.avatar ? (
                <img src={m.avatar} alt={m.name} loading="lazy" className="relative w-32 h-32 rounded-full object-cover ring-2 ring-primary/40" />
              ) : (
                <div className="relative w-32 h-32 rounded-full grid place-items-center text-6xl bg-muted ring-2 ring-primary/40">
                  🖼️
                </div>
              )}
            </div>
            <h3 className="mt-5 font-display font-semibold text-xl">{m.name}</h3>
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 liquid-glass rounded-3xl p-10 text-center"
      >
        <h2 className="font-display font-bold text-3xl">Want to chat?</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          We love hearing from our community. Reach us on Discord or drop us an email.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.contact.discord}
            className="liquid-glass rounded-full px-6 py-3 font-medium hover:scale-105 transition-transform"
          >
            Join Discord
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="bg-aurora text-primary-foreground rounded-full px-6 py-3 font-medium hover:scale-105 transition-transform shadow-[var(--shadow-glow)]"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

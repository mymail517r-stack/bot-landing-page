import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export const Features = () => {
  return (
    <section className="container max-w-6xl py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Features</span>
        <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl tracking-tight">
          Everything your server needs
        </h2>
        <p className="mt-4 text-muted-foreground">
          Carefully crafted modules that work together seamlessly. Every command, every interaction — refined.
        </p>
      </motion.div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="liquid-glass rounded-2xl p-7 group hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="h-12 w-12 rounded-xl bg-aurora grid place-items-center mb-5 group-hover:rotate-6 transition-transform duration-500 shadow-[var(--shadow-glow)]">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

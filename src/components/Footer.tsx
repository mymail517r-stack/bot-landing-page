import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import botLogo from "@/assets/bot-logo.png";

export const Footer = () => {
  return (
    <footer className="relative mt-32 pb-10">
      <div className="container max-w-6xl">
        <div className="liquid-glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2.5">
                <img src={botLogo} alt={siteConfig.bot.name} className="h-10 w-10" />
                <span className="font-display font-bold text-xl">{siteConfig.bot.name}</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
                {siteConfig.bot.description}
              </p>
              <div className="flex gap-3 mt-5">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="liquid-glass h-10 w-10 rounded-full grid place-items-center hover:scale-110 transition-transform"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Navigate</h4>
              <ul className="space-y-2.5">
                {siteConfig.nav.map((n) => (
                  <li key={n.href}>
                    <Link to={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Resources</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href={siteConfig.bot.inviteUrl} className="text-muted-foreground hover:text-foreground transition-colors">Invite Bot</a></li>
                <li><a href={siteConfig.contact.discord} className="text-muted-foreground hover:text-foreground transition-colors">Support Server</a></li>
                <li><a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.bot.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">{siteConfig.bot.version} · {siteConfig.bot.uptime} uptime</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Bot, Sparkles, Shield, Music, Zap, MessageSquare, Globe, Github, Twitter, Mail } from "lucide-react";
import prayagAvatar from "@/assets/prayag-avatar.jpg";

export const siteConfig = {
  bot: {
    name: "Nebula",
    tagline: "The next-generation Discord bot",
    description:
      "Nebula is an all-in-one Discord bot crafted for modern communities. Moderation, music, fun, utilities — beautifully designed and lightning fast.",
    version: "v3.2.0",
    servers: "120K+",
    users: "8.4M+",
    commands: 240,
    uptime: "99.99%",
    inviteUrl: "https://discord.com/oauth2/authorize",
    supportUrl: "https://discord.gg/your-server",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Commands", href: "/commands" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
  ],

  features: [
    {
      icon: Shield,
      title: "Advanced Moderation",
      description:
        "AI-powered auto-mod, raid protection, and granular permission controls keep your server safe 24/7.",
    },
    {
      icon: Music,
      title: "High-Fidelity Music",
      description:
        "Crystal clear lossless audio streaming from Spotify, YouTube, SoundCloud and Apple Music.",
    },
    {
      icon: Sparkles,
      title: "Custom Embeds",
      description:
        "Create stunning announcements with our visual embed builder — no code required.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Globally distributed infrastructure ensures every command responds in under 50ms.",
    },
    {
      icon: MessageSquare,
      title: "Smart Tickets",
      description:
        "A complete support system with transcripts, categories and staff assignments.",
    },
    {
      icon: Globe,
      title: "20+ Languages",
      description:
        "Fully translated experience for your international community members.",
    },
  ],

  commandCategories: [
    {
      name: "Moderation",
      icon: Shield,
      commands: [
        { name: "/ban", description: "Ban a member from the server", usage: "/ban <user> [reason]" },
        { name: "/kick", description: "Kick a member from the server", usage: "/kick <user> [reason]" },
        { name: "/mute", description: "Timeout a member", usage: "/mute <user> <duration>" },
        { name: "/warn", description: "Issue a warning to a member", usage: "/warn <user> <reason>" },
        { name: "/purge", description: "Bulk delete messages", usage: "/purge <amount>" },
      ],
    },
    {
      name: "Music",
      icon: Music,
      commands: [
        { name: "/play", description: "Play a song or playlist", usage: "/play <query>" },
        { name: "/queue", description: "View the current music queue", usage: "/queue" },
        { name: "/skip", description: "Skip the current track", usage: "/skip" },
        { name: "/lyrics", description: "Fetch lyrics for the current song", usage: "/lyrics" },
        { name: "/loop", description: "Loop track or queue", usage: "/loop <mode>" },
      ],
    },
    {
      name: "Utility",
      icon: Zap,
      commands: [
        { name: "/serverinfo", description: "Display server statistics", usage: "/serverinfo" },
        { name: "/userinfo", description: "Display user information", usage: "/userinfo <user>" },
        { name: "/avatar", description: "Show user avatar in HD", usage: "/avatar <user>" },
        { name: "/poll", description: "Create an interactive poll", usage: "/poll <question>" },
        { name: "/remind", description: "Set a personal reminder", usage: "/remind <time> <text>" },
      ],
    },
    {
      name: "Fun",
      icon: Sparkles,
      commands: [
        { name: "/meme", description: "Get a random fresh meme", usage: "/meme" },
        { name: "/8ball", description: "Ask the magic 8-ball", usage: "/8ball <question>" },
        { name: "/trivia", description: "Start a trivia game", usage: "/trivia" },
        { name: "/ship", description: "Calculate love compatibility", usage: "/ship <user1> <user2>" },
      ],
    },
  ],

  team: [
    {
      name: "Prayag",
      role: "Founder & Lead Developer",
      bio: "Architects the core. Loves clean code and 3am refactors.",
      avatar: prayagAvatar,
      socials: { github: "#", twitter: "#" },
    },
    {
      name: "Priyanshu",
      role: "Product Designer",
      bio: "Crafts the pixels you fall in love with. Liquid glass enthusiast.",
      avatar: "",
      socials: { github: "#", twitter: "#" },
    },
  ],

  faqs: [
    {
      q: "Is Nebula free to use?",
      a: "Yes — all core features are completely free. We offer an optional Premium tier for advanced music quality and exclusive customization.",
    },
    {
      q: "How do I add Nebula to my server?",
      a: "Click the Invite button anywhere on the site, authorize the bot with the Manage Server permission, and you are ready in seconds.",
    },
    {
      q: "Does Nebula store my messages?",
      a: "No. We only store configuration data essential for commands. See our Privacy page for full details.",
    },
    {
      q: "Can I request a new feature?",
      a: "Absolutely. Join our support server and post in the #suggestions channel — we ship community ideas every week.",
    },
    {
      q: "What happens if the bot goes offline?",
      a: "Our infrastructure is multi-region with automatic failover. In the rare case of downtime, status updates are posted to our support server immediately.",
    },
  ],

  contact: {
    email: "hello@nebula-bot.app",
    discord: "https://discord.gg/your-server",
    github: "https://github.com/nebula-bot",
    twitter: "https://twitter.com/nebula_bot",
  },

  socials: [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@nebula-bot.app", label: "Email" },
  ],

  privacy: {
    lastUpdated: "March 12, 2025",
    sections: [
      {
        title: "Information We Collect",
        body: "We collect minimal data required for the bot to function: server IDs, channel IDs, role IDs, and configuration preferences. We never store message content unless explicitly enabled by a server administrator for logging features.",
      },
      {
        title: "How We Use Your Data",
        body: "Your data is used solely to provide bot functionality such as remembering your server's prefix, custom commands, moderation logs, and music queues. We do not sell, rent, or share your data with third parties.",
      },
      {
        title: "Data Retention",
        body: "Configuration data persists while the bot remains in your server. When Nebula is removed, all associated data is automatically purged within 30 days.",
      },
      {
        title: "Your Rights",
        body: "You may request a full export or deletion of your data at any time by contacting our support team via email or Discord.",
      },
    ],
  },

  terms: {
    sections: [
      {
        title: "Acceptable Use",
        body: "By using Nebula, you agree not to abuse the service, attempt to bypass rate limits, or use the bot for illegal activities. Violations may result in a permanent ban from the service.",
      },
      {
        title: "Service Availability",
        body: "While we target 99.99% uptime, Nebula is provided as-is. We are not liable for service interruptions, data loss, or damages arising from use of the bot.",
      },
      {
        title: "Changes to These Terms",
        body: "We may update these terms occasionally. Continued use after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;

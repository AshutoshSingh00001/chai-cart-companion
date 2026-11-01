import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUp, Mic, Plus, MessageCircle, SlidersHorizontal, Lock, Plug, Brain, Bell,
  ShieldCheck, Wallet, Truck, Clock, Check,
} from "lucide-react";
import integrations from "@/data/integrations.json";
import windfaceLogo from "@/assets/windface-logo-nav.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Windface — Your AI agent for every Indian app" },
      { name: "description", content: "Talk to Windface and it orders on Blinkit, Zepto, Flipkart, books trains, cabs and hotels, and pays via UPI or cash on delivery." },
      { property: "og:title", content: "Windface — Your AI agent for every Indian app" },
      { property: "og:description", content: "Order groceries, book travel, pay bills with one-tap UPI. 100+ integrations, daily nudges, and a secure vault." },
    ],
  }),
  component: Index,
});

const logo = (d: string) => `https://www.google.com/s2/favicons?domain=${d}&sz=128`;

const indianApps = [
  { name: "Blinkit", domain: "blinkit.com" },
  { name: "Zepto", domain: "zeptonow.com" },
  { name: "JioMart", domain: "jiomart.com" },
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "Amazon", domain: "amazon.in" },
  { name: "ConfirmTkt", domain: "confirmtkt.com" },
  { name: "MakeMyTrip", domain: "makemytrip.com" },
  { name: "OYO", domain: "oyorooms.com" },
  { name: "ixigo", domain: "ixigo.com" },
  { name: "Rapido", domain: "rapido.bike" },
  { name: "Ola", domain: "olacabs.com" },
  { name: "redBus", domain: "redbus.in" },
  { name: "Domino's", domain: "dominos.co.in" },
  { name: "Swiggy", domain: "swiggy.com" },
];

const appWashes = ["bg-blush/70", "bg-mint/60", "bg-lavender/70", "bg-babyblue/50", "bg-peach/60"];

const suggestions = [
  "Order 2L Amul milk on Blinkit",
  "Book Tatkal to Lucknow on ConfirmTkt",
  "Rapido bike to office at 9:30",
  "Recharge my Jio ₹299 plan",
];

const nudges = [
  { time: "8:00 AM", title: "Daily milk & bread", app: "Blinkit", domain: "blinkit.com", note: "Paid via UPI · ₹84", chip: "bg-mint text-mint-ink" },
  { time: "Fri 8:30 PM", title: "Farmhouse pizza takeaway", app: "Domino's", domain: "dominos.co.in", note: "Cash on delivery", chip: "bg-peach text-peach-ink" },
  { time: "1st of month", title: "Mobile recharge ₹299", app: "JioMart", domain: "jio.com", note: "One-tap UPI", chip: "bg-babyblue text-babyblue-ink" },
  { time: "Mon 9:15 AM", title: "Cab to office", app: "Ola", domain: "olacabs.com", note: "Auto-booked", chip: "bg-lavender text-lavender-ink" },
];

const pillars = [
  { icon: MessageCircle, wash: "bg-blush/60", tile: "bg-blush", color: "text-primary", title: "Just talk", body: "Ask in English or Hinglish. Windface opens the app, picks the item, and checks out." },
  { icon: Wallet, wash: "bg-mint/60", tile: "bg-mint", color: "text-mint-ink", title: "UPI & COD", body: "Approve with one tap on UPI, or choose cash on delivery where the site supports it." },
  { icon: Brain, wash: "bg-lavender/70", tile: "bg-lavender", color: "text-lavender-ink", title: "Knows your taste", body: "Memory remembers your brands, your address, your usual order — and forgets on request." },
  { icon: Lock, wash: "bg-babyblue/50", tile: "bg-babyblue", color: "text-babyblue-ink", title: "Protected vault", body: "Keep Aadhaar, PAN and tickets encrypted. Windface fills forms only when you allow it." },
  { icon: SlidersHorizontal, wash: "bg-peach/60", tile: "bg-peach", color: "text-peach-ink", title: "Control centre", body: "See every site login, permission and payment. Revoke anything in a tap." },
  { icon: Bell, wash: "bg-lavender/70", tile: "bg-lavender", color: "text-lavender-ink", title: "Nudges", body: "Set daily tasks once. Your agent runs them on time, every time." },
];

function Composer() {
  const [v, setV] = useState("");
  return (
    <div className="mx-auto w-full max-w-3xl">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-3xl border border-border bg-card p-4 shadow-composer"
      >
        <textarea
          value={v}
          onChange={(e) => setV(e.target.value)}
          rows={3}
          placeholder="Ask Windface a task, or attach an ID document to save to Vault..."
          className="w-full resize-none bg-transparent px-2 pt-1 text-lg text-foreground outline-none placeholder:text-muted-foreground"
        />
        <div className="mt-2 flex items-center justify-between">
          <button type="button" aria-label="Attach" className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground hover:bg-muted">
            <Plus className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Voice" className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground hover:bg-muted">
              <Mic className="h-5 w-5" />
            </button>
            <button type="submit" aria-label="Send" className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40" disabled={!v.trim()}>
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </form>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {suggestions.map((s) => (
          <button key={s} onClick={() => setV(s)} className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground backdrop-blur transition hover:bg-card">
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

function Logo({ domain, name, size = "h-8 w-8" }: { domain: string; name: string; size?: string }) {
  return domain ? (
    <img src={logo(domain)} alt={`${name} logo`} loading="lazy" className={`${size} rounded-lg object-contain`} />
  ) : (
    <div className={`${size} grid place-items-center rounded-lg bg-muted text-xs font-bold`}>{name[0]}</div>
  );
}

function Index() {
  const [cat, setCat] = useState(0);
  const total = integrations.reduce((n, c) => n + c.apps.length, 0);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-lavender">
              <img src={windfaceLogo.url} alt="Windface logo" className="h-8 w-8 object-contain" />
            </span>
            <span className="text-lg font-bold tracking-tight">Windface</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#apps" className="hover:text-foreground">Apps</a>
            <a href="#nudges" className="hover:text-foreground">Nudges</a>
            <a href="#privacy" className="hover:text-foreground">Privacy</a>
            <a href="#integrations" className="hover:text-foreground">Integrations</a>
          </nav>
          <a href="#start" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">Get started</a>
        </div>
      </header>

      {/* Hero */}
      <section id="start" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center md:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-mint-ink" /> Made for India · UPI & cash on delivery
          </span>
          <h1 className="mx-auto mt-8 max-w-4xl font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Say it. <em className="text-lavender-ink">Windface</em> gets it done.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            One AI agent for every Indian app — groceries, trains, cabs, hotels and bills. You talk, it orders, you pay with one tap.
          </p>
          <div className="mt-12">
            <Composer />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section id="apps" className="relative overflow-hidden border-y border-border bg-card py-20">
        <div className="absolute inset-0 bg-hero opacity-60" />
        <div className="relative">
          <h2 className="text-center font-display text-4xl md:text-5xl">Works on the apps you already use</h2>
          <p className="mt-3 text-center text-muted-foreground">From morning milk to midnight pizza — one agent, all your apps.</p>
          <div className="fade-x mt-12 space-y-5 overflow-hidden py-3">
            {[
              { row: indianApps, anim: "marquee" },
              { row: [...indianApps].reverse(), anim: "marquee-rev" },
            ].map(({ row, anim }, r) => (
              <div key={r} className={`${anim} flex w-max gap-5`}>
                {[...row, ...row].map((a, i) => (
                  <div
                    key={i}
                    className={`wave flex items-center gap-3.5 rounded-3xl px-7 py-4 shadow-sm transition hover:scale-105 hover:shadow-lg ${appWashes[i % appWashes.length]}`}
                    style={{ animationDelay: `${(i % row.length) * 0.2}s` }}
                  >
                    <Logo domain={a.domain} name={a.name} size="h-10 w-10" />
                    <span className="text-lg font-semibold">{a.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          A friend who knows you <em className="text-muted-foreground">— and your taste.</em>
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${p.wash}`}>
              <span className={`grid h-12 w-12 place-items-center rounded-full shadow-sm ${p.tile}`}>
                <p.icon className={`h-6 w-6 ${p.color}`} strokeWidth={2.2} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-foreground/70">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nudges */}
      <section id="nudges" className="border-y border-border bg-blush py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground"><Clock className="h-4 w-4" /> Nudges</span>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">Set it once. It happens every day.</h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Milk from Blinkit at 8 AM. Pizza from Domino's every Friday. Your recharge on the 1st. Windface runs your routine and asks only for a UPI tap.
            </p>
          </div>
          <div className="space-y-3">
            {nudges.map((n) => (
              <div key={n.title} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                <div className="rounded-xl bg-background p-2"><Logo domain={n.domain} name={n.app} /></div>
                <div className="flex-1">
                  <p className="font-semibold">{n.title}</p>
                  <p className="text-sm text-muted-foreground">{n.app} · {n.note}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${n.chip}`}>{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8 md:col-span-2">
            <ShieldCheck className="h-8 w-8 text-mint-ink" />
            <h3 className="mt-6 font-display text-4xl">Your vault, your rules.</h3>
            <p className="mt-3 max-w-lg text-muted-foreground">Share Aadhaar, PAN, passport or tickets in an encrypted vault. Windface uses them to fill forms and access services — only with your say-so.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Aadhaar", "PAN card", "Driving licence", "Passport", "Rent agreement"].map((d) => (
                <span key={d} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-sm"><Lock className="h-3.5 w-3.5" />{d}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <Plug className="h-8 w-8 text-lavender-ink" />
            <h3 className="mt-6 font-display text-4xl">Control centre</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {["See every site login", "Manage memory & data", "Revoke any permission", "Payment approvals log"].map((x) => (
                <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-mint-ink" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
            <Wallet className="h-7 w-7 text-babyblue-ink" />
            <p><span className="font-semibold">One-click UPI.</span> <span className="text-muted-foreground">Approve from GPay, PhonePe or Paytm.</span></p>
          </div>
          <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
            <Truck className="h-7 w-7 text-peach-ink" />
            <p><span className="font-semibold">Cash on delivery.</span> <span className="text-muted-foreground">Supported across multiple Indian sites.</span></p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-5xl md:text-6xl">{total}+ integrations.</h2>
          <p className="mt-3 text-lg text-muted-foreground">Beyond shopping — Windface plugs into your work and life tools too.</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {integrations.map((c, i) => (
              <button key={c.name} onClick={() => setCat(i)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${i === cat ? "bg-babyblue-ink text-primary-foreground" : "bg-muted text-foreground hover:bg-secondary"}`}>
                {c.name} <span className="opacity-60">{c.apps.length}</span>
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(integrations[cat]?.apps ?? []).map((a) => (
              <div key={a.slug} className="flex gap-4 rounded-2xl border border-border bg-background p-5">
                <Logo domain={a.domain} name={a.name} size="h-10 w-10" />
                <div>
                  <p className="font-semibold">{a.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="font-display text-5xl md:text-7xl">You're one tap away from your daily driver.</h2>
          <a href="#start" className="mt-10 inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:opacity-90">Start talking to Windface</a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Windface · Made in India
      </footer>
    </div>
  );
}

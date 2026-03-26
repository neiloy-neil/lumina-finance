import { ArrowUpRight, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import { useMemo, useState } from "react";

const transactions = [
  "Salary deposit • +$4,200",
  "Card purchase • Apple Store • -$249",
  "Transfer received • +€980",
  "Vault yield credited • +$42",
  "Travel budget moved • -$300",
  "Subscription charge • -$19",
];

const bentoCards = [
  {
    title: "Private wealth tools",
    copy: "Spending insights, auto-routing, and savings layers built into every account.",
    size: "lg:col-span-2",
    accent: "from-indigo-200/70 to-white/10",
  },
  {
    title: "Instant card controls",
    copy: "Freeze, unlock, and virtualize cards in one tap without leaving the flow.",
    size: "",
    accent: "from-rose-200/70 to-white/10",
  },
  {
    title: "Built-in FX intelligence",
    copy: "Live rates, clear fees, and country-aware budgeting for international transfers.",
    size: "",
    accent: "from-sky-200/70 to-white/10",
  },
  {
    title: "Security by design",
    copy: "Every card, wallet, and vault uses bank-grade controls with calm, readable alerts.",
    size: "lg:col-span-2",
    accent: "from-violet-200/70 to-white/10",
  },
];

function App() {
  const [cardTilt, setCardTilt] = useState({ rotateX: -8, rotateY: 14 });
  const [converterMode, setConverterMode] = useState("sending");

  const converterLabel = useMemo(
    () =>
      converterMode === "sending"
        ? {
            primary: "Sending",
            secondary: "Receiving",
            leftValue: "$2,500",
            rightValue: "EUR 2,291.75",
          }
        : {
            primary: "Receiving",
            secondary: "Sending",
            leftValue: "EUR 2,291.75",
            rightValue: "$2,500",
          },
    [converterMode],
  );

  const handleCardMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = -(((y / rect.height) - 0.5) * 18);
    setCardTilt({ rotateX, rotateY });
  };

  const resetCard = () => {
    setCardTilt({ rotateX: -8, rotateY: 14 });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7fb] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-indigo-300/50 blur-[120px]" />
        <div className="absolute right-[-8%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-rose-300/45 blur-[120px]" />
        <div className="absolute bottom-[-12%] left-[22%] h-[26rem] w-[26rem] rounded-full bg-sky-200/40 blur-[120px]" />
      </div>

      <header className="px-6 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/55 px-5 py-3 shadow-[0_24px_80px_rgba(99,102,241,0.12)] backdrop-blur-xl">
          <a href="#top" className="text-lg font-semibold tracking-tight text-slate-950">
            Lumina Finance
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-950">
              Features
            </a>
            <a href="#security" className="transition hover:text-slate-950">
              Security
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            style={{ color: "#ffffff" }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 hover:text-white"
          >
            Open Account
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="px-6 pb-20 pt-10 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16">
        <section className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/45 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Secure daily banking for global teams
            </span>
            <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl">
              Banking that feels
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-rose-500 bg-clip-text text-transparent">
                {" "}
                precise, calm, and effortless.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Lumina Finance blends premium cards, instant transfers, and beautiful
              money controls into one neobank experience that feels engineered, not cluttered.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                style={{ color: "#ffffff" }}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white transition hover:opacity-90 hover:text-white"
              >
                Get Started
              </a>
              <a
                href="#features"
                style={{ color: "#0f172a" }}
                className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/40 px-7 py-4 text-base font-semibold text-slate-900 backdrop-blur-xl transition hover:bg-white/70 hover:text-slate-900"
              >
                Explore Product
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["FDIC partner banking", "No hidden FX fees", "24/7 fraud monitoring"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/60 bg-white/35 px-4 py-3 text-sm text-slate-700 backdrop-blur-xl"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.86fr]">
            <div
              className="relative [perspective:1400px]"
              onMouseMove={handleCardMove}
              onMouseLeave={resetCard}
            >
              <div
                className="glass-card mx-auto aspect-[1.58/1] w-full max-w-[34rem] rounded-[2rem] p-6 transition-transform duration-300"
                style={{
                  transform: `rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex h-full flex-col justify-between rounded-[1.6rem] bg-[linear-gradient(145deg,rgba(15,23,42,0.96),rgba(30,41,59,0.78),rgba(99,102,241,0.68))] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.24)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.2em] text-white/70">
                      Lumina Black
                    </span>
                    <WalletCards className="h-7 w-7 text-white/80" />
                  </div>
                  <div>
                    <p className="font-['Public_Sans',ui-sans-serif] text-[1.8rem] tracking-[0.22em] text-white">
                      4826 0194 2764 1108
                    </p>
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                          Card Holder
                        </p>
                        <p className="mt-2 text-lg font-medium">Ava Morgan</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                          Balance
                        </p>
                        <p className="mt-2 font-['Public_Sans',ui-sans-serif] text-3xl font-semibold">
                          $28,420
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-[2rem] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    Currency Converter
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setConverterMode((current) =>
                        current === "sending" ? "receiving" : "sending",
                      )
                    }
                    className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:opacity-90"
                  >
                    Switch
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-[1.5rem] border border-white/50 bg-white/40 p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      {converterLabel.primary}
                    </p>
                    <p className="mt-3 font-['Public_Sans',ui-sans-serif] text-3xl font-semibold text-slate-950 transition-all duration-300">
                      {converterLabel.leftValue}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/50 bg-white/30 p-4 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      {converterLabel.secondary}
                    </p>
                    <p className="mt-3 font-['Public_Sans',ui-sans-serif] text-3xl font-semibold text-slate-950 transition-all duration-300">
                      {converterLabel.rightValue}
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Trust Layer
                </p>
                <div className="mt-5 grid gap-3">
                  {["Virtual cards in one tap", "Smart fraud alerts", "Global spending insights"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-[1.25rem] border border-white/50 bg-white/35 px-4 py-3 text-sm text-slate-700 backdrop-blur-xl"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/35 py-4 shadow-[0_18px_70px_rgba(99,102,241,0.08)] backdrop-blur-xl">
          <div className="ticker-track flex min-w-max gap-4 px-4">
            {[...transactions, ...transactions].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-full border border-white/60 bg-white/45 px-5 py-3 text-sm text-slate-700 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto mt-16 max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Bento Features
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Premium money movement, layered with clarity.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {bentoCards.map((card) => (
              <article
                key={card.title}
                className={`glass-card rounded-[2rem] p-6 ${card.size}`}
              >
                <div
                  className={`rounded-[1.75rem] bg-gradient-to-br ${card.accent} p-6`}
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Lumina Layer
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-lg leading-8 text-slate-600">{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="security"
          className="mx-auto mt-16 max-w-7xl rounded-[2.5rem] border border-white/60 bg-white/35 px-8 py-10 shadow-[0_20px_80px_rgba(99,102,241,0.08)] backdrop-blur-xl"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Security & Precision
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                Clean surfaces. Serious financial controls.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Apple-like calm on the outside, layered precision underneath. Every action,
                limit, and movement is readable at a glance.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Approval time", value: "< 5 min" },
                { label: "FX spread", value: "0.2%" },
                { label: "Fraud checks", value: "24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-[1.75rem] p-5 text-center"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-4 font-['Public_Sans',ui-sans-serif] text-3xl font-semibold text-slate-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto mt-16 max-w-6xl rounded-[2.5rem] bg-slate-950 px-8 py-12 text-white shadow-[0_28px_90px_rgba(15,23,42,0.24)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Start with Lumina
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            The neobank for people who notice every detail.
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#top"
              style={{ color: "#0f172a" }}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:brightness-110 hover:text-slate-950"
            >
              Join Lumina
            </a>
            <a
              href="mailto:team@lumina.finance"
              style={{ color: "#ffffff" }}
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:text-white"
            >
              team@lumina.finance
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

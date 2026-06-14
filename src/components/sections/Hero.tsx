import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-classroom.png.asset.json";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <img src={heroBg.url} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.40]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/80" />
      </div>
      <div className="container-px mx-auto max-w-7xl py-20 md:py-32 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-soft px-3 py-1 text-xs font-medium text-slate-text"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sapphire" />
            MG Study Centre · 100% Results
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy leading-[1.05]"
          >
            Where focus meets <span className="text-sapphire">results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-slate-text leading-relaxed"
          >
            Tuitions for Classes 7th – 10th across State Board, CBSE & ICSE.
            Two branches, one philosophy: disciplined teaching, measurable progress.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="https://wa.me/917019140957?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20admission."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1ebe5b] transition-colors shadow-lg shadow-[#25D366]/25"
            >
              <MessageCircle size={16} />
              Contact us on WhatsApp
            </a>
            <a
              href="#branches"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy hover:bg-soft transition-colors"
            >
              Visit our branches
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "99%", v: "Pass rate" },
              { k: "12+", v: "Years teaching" },
              { k: "7-10", v: "Classes covered" },
              { k: "3", v: "Boards taught" },
            ].map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className={`rounded-2xl border border-border bg-soft p-6 ${
                  i % 3 === 0 ? "translate-y-4" : ""
                }`}
              >
                <div className="text-4xl font-bold text-navy">{s.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

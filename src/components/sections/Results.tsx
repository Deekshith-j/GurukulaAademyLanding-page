import { motion } from "framer-motion";
import toppers from "@/assets/toppers-2025.png.asset.json";

export function Results() {
  return (
    <section id="results" className="relative scroll-mt-24 overflow-hidden">
      <div className="bg-navy text-primary-foreground relative">
        <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-sapphire/40 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-10 h-96 w-96 rounded-full bg-coral/30 blur-[120px]" />

        <div className="container-px mx-auto max-w-7xl py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-sapphire/90 font-semibold"
            >
              SSLC 2025-26
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              100% Results.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-white/70 max-w-xl"
            >
              Congratulations to all our SSLC toppers — a celebration of disciplined teaching and the hard work of every student.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white"
          >
            <img
              src={toppers.url}
              alt="SSLC 2025-26 Toppers — Gurukula Academy and Smart Scholars Tuition"
              className="w-full h-auto block"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

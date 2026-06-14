import { motion } from "framer-motion";
import classroom from "@/assets/classroom.png.asset.json";

const boards = [
  { name: "State Board", desc: "Mastery aligned to the state curriculum." },
  { name: "CBSE", desc: "Concept-first teaching for NCERT excellence." },
  { name: "ICSE", desc: "Depth & detail for analytical thinkers." },
];

const viewport = { once: true, amount: 0.3 };

export function About() {
  return (
    <section id="about" className="relative bg-transparent scroll-mt-24 overflow-hidden">
      {/* Background classroom photo */}
      <div className="absolute inset-0 -z-10">
        <img
          src={classroom.url}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="container-px mx-auto max-w-7xl py-24 md:py-32 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">
              About Us
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy leading-tight">
              Tuitions taught with intent.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 lg:pt-2"
          >
            <p className="text-lg text-slate-text leading-relaxed">
              We coach students of Classes 7th to 10th across every core subject — Mathematics,
              Science, English, Social Studies and language. Small batches, daily feedback,
              and a strict focus on conceptual mastery. The same standards in both our branches.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {boards.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group rounded-2xl border border-border p-8 bg-background/80 backdrop-blur hover:bg-soft transition-colors"
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                0{i + 1}
              </div>
              <div className="mt-6 text-2xl font-semibold text-navy">{b.name}</div>
              <p className="mt-3 text-sm text-slate-text leading-relaxed">{b.desc}</p>
              <div className="mt-8 h-px w-10 bg-sapphire group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

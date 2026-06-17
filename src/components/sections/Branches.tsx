import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import gurukula from "@/assets/gurukula-logo.asset.json";
import smart from "@/assets/smart-scholars-logo.asset.json";

const branches = [
  {
    slug: "gurukula-academy",
    to: "/gurukula-academy",
    name: "Gurukula Academy",
    tag: "Branch One",
    desc: "Focused, structured tuitions built for excellence.",
    address: "4 & 10, 1st A Cross, Muthurayappa Layout, Doddabommasandra, Bengaluru, Karnataka 560097",
    logo: gurukula.url,
    cardClass: "bg-background border-sapphire/20 hover:border-sapphire/40",
    cornerClass: "before:bg-[radial-gradient(circle_at_top_left,rgba(75,124,214,0.24),transparent_58%)] after:bg-[radial-gradient(circle_at_bottom_right,rgba(75,124,214,0.18),transparent_56%)]",
  },
  {
    slug: "smart-scholar-tuition",
    to: "/smart-scholar-tuition",
    name: "Smart Scholar Tuition",
    tag: "Branch Two",
    desc: "MG Study Centre — calm, disciplined tuitions for Classes 1 to 10.",
    address: "Main Road, Neelgiri Topu, Vigneshwara Nagar, Madeshwara Extension, Sunkadakatte, Bengaluru, Karnataka 560091 · Classes 1–10",
    logo: smart.url,
    cardClass: "bg-background border-coral/30 hover:border-coral/50",
    cornerClass: "before:bg-[radial-gradient(circle_at_top_left,rgba(255,137,77,0.24),transparent_58%)] after:bg-[radial-gradient(circle_at_bottom_right,rgba(255,137,77,0.18),transparent_56%)]",
  },
];

export function Branches() {
  return (
    <section id="branches" className="bg-transparent scroll-mt-24">
      <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">
            Our Branches
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy">
            Two branches. One commitment.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {branches.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border p-8 md:p-10 transition-colors before:absolute before:left-0 before:top-0 before:h-36 before:w-36 before:pointer-events-none after:absolute after:right-0 after:bottom-0 after:h-40 after:w-40 after:pointer-events-none ${b.cardClass} ${b.cornerClass}`}
            >
              <div className="relative z-10 flex items-start justify-between">
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {b.tag}
                </div>
                <div className="h-16 w-16 rounded-xl bg-soft flex items-center justify-center overflow-hidden">
                  <img src={b.logo} alt={b.name} className="h-full w-full object-contain p-1.5" />
                </div>
              </div>
              <h3 className="relative z-10 mt-6 text-3xl font-bold text-navy">{b.name}</h3>
              <p className="relative z-10 mt-4 text-slate-text leading-relaxed">{b.desc}</p>
              <div className="relative z-10 mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} /> {b.address}
              </div>
              <div className="relative z-10 mt-10 flex items-center justify-between">
                <Link
                  to={b.to}
                  className="inline-flex items-center gap-2 rounded-full bg-navy text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-sapphire transition-colors"
                >
                  View details
                  <ArrowUpRight size={16} />
                </Link>
                <div className="h-px flex-1 ml-6 bg-border" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

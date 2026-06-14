import { motion } from "framer-motion";
import owner1 from "@/assets/owner-1.asset.json";
import owner2 from "@/assets/owner-2.asset.json";

function OwnerCard({ img, name, qual, delay }: { img: string; name: string; qual: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-soft">
        <img src={img} alt={name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="mt-5">
        <div className="text-xl font-semibold text-navy">{name}</div>
        <div className="mt-1 text-sm text-muted-foreground">{qual}</div>
      </div>
    </motion.div>
  );
}

export function Vision() {
  return (
    <section id="vision" className="bg-transparent scroll-mt-24">
      <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">
            Vision & Leadership
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy">
            Built on conviction, run with care.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-3">
            <OwnerCard
              img={owner2.url}
              name="Gowthama S H"
              qual="M.Sc., B.Ed. — 15+ years teaching"
              delay={0}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 rounded-3xl bg-background border border-border p-8 md:p-12"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">
              Our Vision
            </div>
            <p className="mt-6 text-lg md:text-xl text-slate-text leading-[1.85]">
              To shape confident, curious learners — students who think clearly, work hard,
              and approach exams without fear. We pair experienced teachers with small
              batches, individual attention, and a relentless focus on fundamentals.
            </p>
            <div className="mt-8 h-px w-16 bg-sapphire" />
            <p className="mt-6 text-base text-slate-text leading-[1.85]">
              Our strategy is simple: master concepts, practice deeply, revise on schedule,
              and measure progress every week. Both branches follow the same playbook so
              every student gets the same standard of care.
            </p>
          </motion.div>
          <div className="lg:col-span-3">
            <OwnerCard
              img={owner1.url}
              name="Manjula K B"
              qual="M.Sc., B.Ed. — 10+ years teaching"
              delay={0.1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

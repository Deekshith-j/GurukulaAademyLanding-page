import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, MessageCircle, Facebook, Instagram, ShieldCheck, Award, Users, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import gurukula from "@/assets/gurukula-logo.asset.json";

export const Route = createFileRoute("/gurukula-academy")({
  head: () => ({
    meta: [
      { title: "Gurukula Academy | Premier Coaching by MG Study Centre" },
      {
        name: "description",
        content:
          "Welcome to Gurukula Academy, an exclusive learning program by MG Study Centre. We offer expert coaching and superior educational results. Enroll today.",
      },
      { property: "og:title", content: "Gurukula Academy | Premier Coaching by MG Study Centre" },
      {
        property: "og:description",
        content: "Welcome to Gurukula Academy, an exclusive learning program by MG Study Centre. We offer expert coaching and superior educational results.",
      },
    ],
  }),
  component: GurukulaAcademyPage,
});

function GurukulaAcademyPage() {
  const waUrl = `https://wa.me/919740099677?text=${encodeURIComponent(`Hello Gurukula Academy, I'd like to enquire about admission.`)}`;

  const facilities = [
    { title: "Dedicated Doubt Sessions", desc: "Doubt-clearing sessions every evening to ensure no student lags behind." },
    { title: "Regular Assessment", desc: "Weekly tests and detailed progress reports shared with parents regularly." },
    { title: "Homework Reviews", desc: "Daily homework monitoring to build structure and academic discipline." },
    { title: "Mock Exams", desc: "Rigorous preparatory exams and mock tests ahead of board assessments." },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Gurukula Academy",
    "url": "https://mgstudycentre.in/gurukula-academy",
    "logo": "https://mgstudycentre.in/__l5e/assets-v1/75fd730d-f55b-44ea-a1f5-3de627cbbd48/gurukula-logo.jpeg",
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "MG Study Centre",
      "url": "https://mgstudycentre.in"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="bg-background overflow-x-hidden min-h-screen">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-soft border-b border-border py-16 md:py-24 lg:py-32">
          {/* Radial Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(75,124,214,0.18),transparent_55%)] pointer-events-none" />
          <div className="container-px mx-auto max-w-7xl relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
            >
              <ArrowLeft size={14} /> Back to home
            </Link>

            <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sapphire/10 text-sapphire text-xs font-semibold tracking-wider uppercase">
                  An exclusive program by MG Study Centre
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] tracking-tight">
                  Gurukula Academy
                </h1>
                <p className="mt-6 text-lg md:text-xl text-slate-text max-w-2xl leading-relaxed">
                  Building strong conceptual foundations and disciplined academic habits for students of Classes 7th to 10th.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sapphire to-navy text-white px-7 py-3.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle size={16} /> Enroll Today
                  </a>
                  <a
                    href="tel:+919740099677"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background text-navy px-7 py-3.5 text-sm font-semibold hover:bg-soft transition-all"
                  >
                    <Phone size={16} /> Contact Us
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sapphire to-navy opacity-30 blur transition duration-1000 group-hover:opacity-40" />
                  <div className="relative h-44 w-44 md:h-56 md:w-56 rounded-2xl bg-background border border-sapphire/20 shadow-xl flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={gurukula.url}
                      alt="Gurukula Academy logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section: H2s: About and Why Choose */}
        <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: About Our Gurukula Program */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-sapphire font-bold">
                Program Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                About Our Gurukula Program
              </h2>
              <p className="text-slate-text leading-relaxed">
                Gurukula Academy offers a rigorous and immersive learning environment styled around accountability, personal responsibility, and deep structural understanding of topics. We design our classroom instruction to break complex ideas into interactive, manageable concepts.
              </p>
              <p className="text-slate-text leading-relaxed">
                By maintaining small batch sizes, our experienced educators can give personalized attention to every student. We cover State Board, CBSE, and ICSE structures with high standards of discipline and measurable output.
              </p>

              {/* Address card */}
              <div className="p-6 rounded-2xl border border-border bg-soft/60 space-y-4 mt-8">
                <h3 className="font-semibold text-navy">Branch Details</h3>
                <div className="flex gap-3 text-slate-text text-sm">
                  <MapPin size={16} className="text-sapphire shrink-0 mt-0.5" />
                  <span>4 & 10, 1st A Cross, Muthurayappa Layout, Doddabommasandra, Bengaluru, Karnataka 560097</span>
                </div>
                <div className="flex gap-3 text-slate-text text-sm">
                  <Phone size={16} className="text-sapphire shrink-0 mt-0.5" />
                  <a href="tel:+919740099677" className="hover:underline">+91 97400 99677</a>
                </div>
              </div>
            </div>

            {/* Right side: Why Choose Gurukula Academy? */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-sapphire font-bold">
                  Core Advantages
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                  Why Choose Gurukula Academy?
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {facilities.map((f, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-border bg-background shadow-sm space-y-3 hover:border-sapphire/40 transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-sapphire/5 text-sapphire flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-navy text-base">{f.title}</h3>
                    <p className="text-slate-text text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA section */}
        <section className="bg-navy text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(75,124,214,0.15),transparent_60%)] pointer-events-none" />
          <div className="container-px mx-auto max-w-5xl text-center relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Academic Journey?</h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Admissions are open for new academic batches. Connect with our counselors to book a session.
            </p>
            <div className="pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-8 py-4 text-sm font-semibold hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle size={16} /> Contact Advisor via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

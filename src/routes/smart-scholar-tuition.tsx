import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import smart from "@/assets/smart-scholars-logo.asset.json";

export const Route = createFileRoute("/smart-scholar-tuition")({
  head: () => ({
    meta: [
      { title: "Smart Scholars Tuitions | Smart Scholar Tuition | Expert Coaching by MG Study Centre" },
      {
        name: "description",
        content:
          "Join Smart Scholars Tuitions (Smart Scholar Tuition), a specialized learning initiative by MG Study Centre. Empowering students of Classes 1st to 10th with personalized tutoring and academic excellence.",
      },
      { name: "keywords", content: "Smart Scholars Tuitions, Smart Scholar Tuition, MG Study Centre, tuitions in Sunkadakatte, Class 1 to 10 coaching Bengaluru, private tutor Sunkadakatte, home tutors Bengaluru" },
      { property: "og:title", content: "Smart Scholars Tuitions | Smart Scholar Tuition | MG Study Centre" },
      {
        property: "og:description",
        content: "Empower your child with Smart Scholars Tuitions (Smart Scholar Tuition) by MG Study Centre. Personalized tutoring and academic excellence for Classes 1 to 10.",
      },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: "/__l5e/assets-v1/62076bb2-e77a-438f-9fac-d979eed5799b/smart-scholars-logo.jpeg" }
    ],
  }),
  component: SmartScholarTuitionPage,
});

function SmartScholarTuitionPage() {
  const whatsappNumber = "917019140957";
  const address = "Main Road, Neelgiri Topu, Vigneshwara Nagar, Madeshwara Extension, Sunkadakatte, Bengaluru, Karnataka 560091 · Classes 1–10";
  const phoneNumber = "+91 70191 40957";
  const facebookUrl = "https://www.facebook.com/people/smart-scholars-tuition/61590648988220/";
  const instagramUrl = "https://www.instagram.com/smart_scholarstuitions?utm_source=qr&igsh=ZnMxbW41dHg4Z210";

  const facilities = [
    "Tuitions for Classes 1 to 10 — all subjects",
    "Personal mentor for every student",
    "Daily home-work review",
    "Mock exams & quarterly parent meetings",
  ];

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Smart Scholar Tuition, I'd like to enquire about admission.`)}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Smart Scholar Tuition",
    "url": "https://mgstudycentre.in/smart-scholar-tuition",
    "logo": "https://mgstudycentre.in/__l5e/assets-v1/62076bb2-e77a-438f-9fac-d979eed5799b/smart-scholars-logo.jpeg",
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-soft border-b border-border py-10 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,137,77,0.18),transparent_55%)] pointer-events-none" />
          <div className="container-px mx-auto max-w-7xl relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
            >
              <ArrowLeft size={14} /> Back to home
            </Link>

            <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">
              <div className="order-2 lg:order-1 flex-1 text-center lg:text-left">
                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
                  Smart Scholar Tuition
                </h1>
                <p className="mt-4 text-base md:text-xl text-slate-text max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  MG Study Centre — calm, focused learning for Classes 1 to 10.
                </p>
                <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Smart Scholar Tuition on Facebook"
                    className="inline-flex h-10 w-10 rounded-full border border-border bg-background items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Smart Scholar Tuition on Instagram"
                    className="inline-flex h-10 w-10 rounded-full border border-border bg-background items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-navy text-white px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle size={15} /> Enquire Now
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 shrink-0 flex justify-center">
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-2xl bg-background border border-coral/30 shadow-lg flex items-center justify-center overflow-hidden p-2">
                  <img src={smart.url} alt="Smart Scholar Tuition Logo" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities + Map Info */}
        <section className="container-px mx-auto max-w-7xl py-14 md:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-10">
            {/* Smart Scholar Class Details */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Smart Scholar Class Details
              </h2>
              <p className="text-slate-text leading-relaxed text-sm md:text-base">
                Join Smart Scholar Tuition, a specialized learning initiative by MG Study Centre. Empowering students with personalized tutoring and academic excellence. We focus on low student-to-teacher ratios to support interactive, structured study schedules.
              </p>
            </div>

            {/* Benefits of Smart Scholar Tuition */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Benefits of Smart Scholar Tuition
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {facilities.map((f, i) => (
                  <li
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-coral/30 bg-background p-5 transition-all hover:-translate-y-0.5 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-24 before:w-24 before:pointer-events-none before:bg-[radial-gradient(circle_at_top_left,rgba(255,137,77,0.22),transparent_65%)]"
                  >
                    <div className="relative z-10 text-xs font-semibold text-coral">0{i + 1}</div>
                    <div className="relative z-10 mt-2 text-slate-text leading-relaxed text-sm md:text-base">
                      {f}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="relative overflow-hidden rounded-2xl border border-coral/30 p-5 md:p-6 bg-background before:absolute before:right-0 before:bottom-0 before:h-40 before:w-40 before:pointer-events-none before:bg-[radial-gradient(circle_at_bottom_right,rgba(255,137,77,0.2),transparent_60%)]">
              <div className="relative z-10 grid sm:grid-cols-2 gap-5 text-left">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                  <div className="mt-2 flex gap-2 text-navy font-medium text-sm md:text-base break-words">
                    <MapPin size={16} className="text-coral shrink-0 mt-0.5" />
                    <span className="flex-1">{address}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="mt-2 flex gap-2 text-navy font-medium text-sm md:text-base">
                    <Phone size={16} className="text-coral shrink-0 mt-0.5" />
                    <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="hover:underline">{phoneNumber}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 h-full flex flex-col justify-stretch">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[320px] lg:min-h-[480px] rounded-3xl overflow-hidden border border-coral/30 shadow-lg flex-1">
              <iframe
                title="Smart Scholar Tuition map"
                src="https://www.google.com/maps?q=12.9960378,77.4999583&z=16&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Sticky WhatsApp */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 text-sm font-semibold shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5b] transition-colors"
      >
        <MessageCircle size={16} /> Chat on WhatsApp
      </a>
    </>
  );
}

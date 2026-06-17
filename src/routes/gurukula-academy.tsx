import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import gurukula from "@/assets/gurukula-logo.asset.json";

export const Route = createFileRoute("/gurukula-academy")({
  head: () => ({
    meta: [
      { title: "Gurukula Academy | Premier Coaching Classes 7th to 10th by MG Study Centre" },
      {
        name: "description",
        content:
          "Welcome to Gurukula Academy by MG Study Centre. We offer premier coaching and tuitions for Classes 7th, 8th, 9th, and 10th (CBSE, ICSE, State Board) with superior academic results. Enroll today.",
      },
      { name: "keywords", content: "Gurukula Academy, MG Study Centre, coaching center Doddabommasandra, Class 7 to 10 tuitions Bengaluru, CBSE tuitions, ICSE coaching, State Board tuitions Bengaluru" },
      { property: "og:title", content: "Gurukula Academy | Premier Coaching & Tuitions by MG Study Centre" },
      {
        property: "og:description",
        content: "Welcome to Gurukula Academy by MG Study Centre. We offer expert coaching for Classes 7th to 10th across State Board, CBSE & ICSE curricula.",
      },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: "/__l5e/assets-v1/75fd730d-f55b-44ea-a1f5-3de627cbbd48/gurukula-logo.jpeg" }
    ],
  }),
  component: GurukulaAcademyPage,
});

function GurukulaAcademyPage() {
  const whatsappNumber = "919740099677";
  const address = "4 & 10, 1st A Cross, Muthurayappa Layout, Doddabommasandra, Bengaluru, Karnataka 560097";
  const phoneNumber = "+91 97400 99677";
  const facebookUrl = "https://www.facebook.com/people/M-G-Study/pfbid0CJc6YFe6Arr5XuHamaYvh4yRQd8k4NPfcGHGkCERdYdnnSdbUgQ6kTKG9Hfhd7Cgl/";
  const instagramUrl = "https://www.instagram.com/gurukulahq?utm_source=qr&igsh=MWdwcTRybDB6ZTY1Mw%3D%3D";
  
  const facilities = [
    "Dedicated doubt-clearing sessions every evening",
    "Weekly tests & detailed progress reports",
    "Daily home-work review",
    "Mock exams & quarterly parent meetings",
  ];

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Gurukula Academy, I'd like to enquire about admission.`)}`;

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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-soft border-b border-border py-10 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(75,124,214,0.18),transparent_55%)] pointer-events-none" />
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
                  Gurukula Academy
                </h1>
                <p className="mt-4 text-base md:text-xl text-slate-text max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Focus, structure & excellence for Classes 7–10.
                </p>
                <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Gurukula Academy on Facebook"
                    className="inline-flex h-10 w-10 rounded-full border border-border bg-background items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Gurukula Academy on Instagram"
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
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sapphire to-navy text-white px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <MessageCircle size={15} /> Enquire Now
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 shrink-0 flex justify-center">
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-2xl bg-background border border-sapphire/25 shadow-lg flex items-center justify-center overflow-hidden p-2">
                  <img src={gurukula.url} alt="Gurukula Academy Logo" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities + Map Info */}
        <section className="container-px mx-auto max-w-7xl py-14 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-10">
            {/* Gurukula Academy Class Details */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Gurukula Academy Class Details
              </h2>
              <p className="text-slate-text leading-relaxed text-sm md:text-base">
                Join Gurukula Academy, a specialized learning initiative by MG Study Centre. Empowering students with disciplined learning to achieve superior results. We focus on conceptual depth and structured study schedules.
              </p>
            </div>

            {/* Why Choose Gurukula Academy? */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                Why Choose Gurukula Academy?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilities.map((f, i) => (
                  <li
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-sapphire/25 bg-background p-5 transition-all hover:-translate-y-0.5 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-24 before:w-24 before:pointer-events-none before:bg-[radial-gradient(circle_at_top_left,rgba(75,124,214,0.22),transparent_65%)]"
                  >
                    <div className="relative z-10 text-xs font-semibold text-sapphire">0{i + 1}</div>
                    <div className="relative z-10 mt-2 text-slate-text leading-relaxed text-sm md:text-base">
                      {f}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="relative overflow-hidden rounded-2xl border border-sapphire/25 p-5 md:p-6 bg-background before:absolute before:right-0 before:bottom-0 before:h-40 before:w-40 before:pointer-events-none before:bg-[radial-gradient(circle_at_bottom_right,rgba(75,124,214,0.2),transparent_60%)]">
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                  <div className="mt-2 flex gap-2 text-navy font-medium text-sm md:text-base break-words">
                    <MapPin size={16} className="text-sapphire shrink-0 mt-0.5" />
                    <span className="flex-1">{address}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="mt-2 flex gap-2 text-navy font-medium text-sm md:text-base">
                    <Phone size={16} className="text-sapphire shrink-0 mt-0.5" />
                    <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="hover:underline">{phoneNumber}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 h-full flex flex-col justify-stretch">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[320px] lg:min-h-[480px] rounded-3xl overflow-hidden border border-sapphire/25 shadow-lg flex-1">
              <iframe
                title="Gurukula Academy map"
                src="https://www.google.com/maps?q=13.0633745,77.5585166&z=16&output=embed"
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

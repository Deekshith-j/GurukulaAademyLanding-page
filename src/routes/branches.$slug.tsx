import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import gurukula from "@/assets/gurukula-logo.asset.json";
import smart from "@/assets/smart-scholars-logo.asset.json";

type Branch = {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  logo: string;
  mapsQuery: string;
  facilities: string[];
};

const branches: Record<string, Branch> = {
  "gurukula-academy": {
    name: "Gurukula Academy",
    tagline: "Focus, structure & excellence for Classes 7–10.",
    address: "4 & 10, 1st A Cross, Muthurayappa Layout, Doddabommasandra, Bengaluru, Karnataka 560097",
    phone: "+91 97400 99677",
    whatsapp: "919740099677",
    facebook: "https://www.facebook.com/people/M-G-Study/pfbid0CJc6YFe6Arr5XuHamaYvh4yRQd8k4NPfcGHGkCERdYdnnSdbUgQ6kTKG9Hfhd7Cgl/",
    instagram: "https://www.instagram.com/gurukulahq?utm_source=qr&igsh=MWdwcTRybDB6ZTY1Mw%3D%3D",
    logo: gurukula.url,
    mapsQuery: "13.0633745,77.5585166",
    facilities: [
      "Dedicated doubt-clearing sessions every evening",
      "Weekly tests & detailed progress reports",
      "Daily home-work review",
      "Mock exams & quarterly parent meetings",
    ],
  },
  "smart-scholars": {
    name: "Smart Scholars Tuitions",
    tagline: "MG Study Centre — calm, focused learning for Classes 1 to 10.",
    address: "Main Road, Neelgiri Topu, Vigneshwara Nagar, Madeshwara Extension, Sunkadakatte, Bengaluru, Karnataka 560091 · Classes 1–10",
    phone: "+91 70191 40957",
    whatsapp: "917019140957",
    facebook: "https://www.facebook.com/people/smart-scholars-tuition/61590648988220/",
    instagram: "https://www.instagram.com/smart_scholarstuitions?utm_source=qr&igsh=ZnMxbW41dHg4Z210",
    logo: smart.url,
    mapsQuery: "12.9960378,77.4999583",
    facilities: [
      "Tuitions for Classes 1 to 10 — all subjects",
      "Personal mentor for every student",
      "Daily home-work review",
      "Mock exams & quarterly parent meetings",
    ],
  },
};


export const Route = createFileRoute("/branches/$slug")({
  loader: ({ params }) => {
    const b = branches[params.slug];
    if (!b) throw notFound();
    return { branch: b };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.branch.name} — Branch` },
      { name: "description", content: loaderData?.branch.tagline ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <Link to="/" className="text-sapphire">← Branch not found. Go home</Link>
    </div>
  ),
  component: BranchPage,
});

function BranchPage() {
  const { branch } = Route.useLoaderData() as { branch: Branch };
  const waUrl = `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(`Hello ${branch.name}, I'd like to enquire about admission.`)}`;

  const isGurukula = branch.name.includes("Gurukula");
  const heroGradient = isGurukula
    ? "before:bg-[radial-gradient(circle_at_top_left,rgba(75,124,214,0.32),transparent_60%)] after:bg-[radial-gradient(circle_at_bottom_right,rgba(75,124,214,0.22),transparent_60%)]"
    : "before:bg-[radial-gradient(circle_at_top_left,rgba(255,137,77,0.32),transparent_60%)] after:bg-[radial-gradient(circle_at_bottom_right,rgba(255,137,77,0.22),transparent_60%)]";
  const accentText = isGurukula ? "text-sapphire" : "text-coral";
  const accentBorder = isGurukula ? "border-sapphire/25" : "border-coral/30";

  return (
    <>
      <Header />
      <main className="bg-background overflow-x-hidden">
        {/* Hero */}
        <section
          className={`relative overflow-hidden bg-soft border-b border-border before:absolute before:left-0 before:top-0 before:h-72 before:w-72 before:pointer-events-none after:absolute after:right-0 after:bottom-0 after:h-80 after:w-80 after:pointer-events-none ${heroGradient}`}
        >
          <div className="container-px mx-auto max-w-7xl py-14 md:py-24 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy"
            >
              <ArrowLeft size={14} /> Back to home
            </Link>
            <div className="mt-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-end">
              <div className="lg:col-span-9 order-2 lg:order-1">
                <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">
                  Branch
                </div>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.05] break-words">
                  {branch.name}
                </h1>
                <p className="mt-5 text-base md:text-xl text-slate-text max-w-2xl leading-relaxed">
                  {branch.tagline}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={branch.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${branch.name} on Facebook`}
                    className="inline-flex h-10 w-10 rounded-full border border-border bg-background items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href={branch.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${branch.name} on Instagram`}
                    className="inline-flex h-10 w-10 rounded-full border border-border bg-background items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-3 flex order-1 lg:order-2 lg:justify-end">
                <div className={`h-20 w-20 md:h-28 md:w-28 rounded-2xl bg-background border ${accentBorder} shadow-lg flex items-center justify-center overflow-hidden`}>
                  <img src={branch.logo} alt={branch.name} className="h-full w-full object-contain p-2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities + map */}
        <section className="container-px mx-auto max-w-7xl py-14 md:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className={`text-xs uppercase tracking-[0.3em] ${accentText} font-semibold`}>
              Facilities
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
              What you get at this branch.
            </h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {branch.facilities.map((f, i) => (
                <li
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border ${accentBorder} bg-background p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                    isGurukula
                      ? "before:absolute before:left-0 before:top-0 before:h-24 before:w-24 before:pointer-events-none before:bg-[radial-gradient(circle_at_top_left,rgba(75,124,214,0.22),transparent_65%)]"
                      : "before:absolute before:left-0 before:top-0 before:h-24 before:w-24 before:pointer-events-none before:bg-[radial-gradient(circle_at_top_left,rgba(255,137,77,0.22),transparent_65%)]"
                  }`}
                >
                  <div className={`relative z-10 text-xs font-semibold ${accentText}`}>0{i + 1}</div>
                  <div className="relative z-10 mt-2 text-slate-text leading-relaxed text-sm md:text-base">
                    {f}
                  </div>
                </li>
              ))}
            </ul>

            <div
              className={`mt-10 relative overflow-hidden rounded-2xl border ${accentBorder} p-5 md:p-6 bg-background before:absolute before:right-0 before:bottom-0 before:h-40 before:w-40 before:pointer-events-none ${
                isGurukula
                  ? "before:bg-[radial-gradient(circle_at_bottom_right,rgba(75,124,214,0.2),transparent_60%)]"
                  : "before:bg-[radial-gradient(circle_at_bottom_right,rgba(255,137,77,0.2),transparent_60%)]"
              }`}
            >
              <div className="relative z-10 grid sm:grid-cols-2 gap-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                  <div className="mt-2 flex gap-2 text-navy font-medium text-sm md:text-base break-words">
                    <MapPin size={16} className={`${accentText} shrink-0 mt-0.5`} /> <span className="flex-1">{branch.address}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="mt-2 flex gap-2 text-navy font-medium text-sm md:text-base">
                    <Phone size={16} className={`${accentText} shrink-0 mt-0.5`} /> <a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className={`aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[320px] lg:min-h-[480px] rounded-3xl overflow-hidden border ${accentBorder} shadow-lg`}>
              <iframe
                title={`${branch.name} map`}
                src={`https://www.google.com/maps?q=${branch.mapsQuery}&z=16&output=embed`}
                className="h-full w-full"
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
        className="fixed bottom-28 right-4 md:bottom-16 md:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3.5 text-sm font-semibold shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5b] transition-colors"
      >
        <MessageCircle size={16} /> Chat on WhatsApp
      </a>
    </>
  );
}

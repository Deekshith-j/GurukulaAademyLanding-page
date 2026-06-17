import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, MessageCircle, Facebook, Instagram, ShieldCheck, Award, Users, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import smart from "@/assets/smart-scholars-logo.asset.json";

export const Route = createFileRoute("/smart-scholar-tuition")({
  head: () => ({
    meta: [
      { title: "Smart Scholar Tuition | Expert Coaching by MG Study Centre" },
      {
        name: "description",
        content:
          "Join Smart Scholar Tuition, a specialized learning initiative by MG Study Centre. Empowering students with personalized tutoring and academic excellence.",
      },
      { property: "og:title", content: "Smart Scholar Tuition | Expert Coaching by MG Study Centre" },
      {
        property: "og:description",
        content: "Join Smart Scholar Tuition, a specialized learning initiative by MG Study Centre. Empowering students with personalized tutoring and academic excellence.",
      },
    ],
  }),
  component: SmartScholarTuitionPage,
});

function SmartScholarTuitionPage() {
  const waUrl = `https://wa.me/917019140957?text=${encodeURIComponent(`Hello Smart Scholar Tuition, I'd like to enquire about admission.`)}`;

  const benefits = [
    { title: "Personal Mentor Support", desc: "Every student gets paired with a personal mentor to monitor progress and build skills." },
    { title: "Comprehensive Coverage", desc: "Dedicated tuitions for Classes 1 to 10 across all core subjects and curricula." },
    { title: "Mock Tests & Reports", desc: "Periodic examinations and parent-teacher meetings to assess student progress." },
    { title: "Calm, Focused Environment", desc: "Quiet study zones designed to keep distractions minimal and focus maximum." },
  ];

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
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-soft border-b border-border py-16 md:py-24 lg:py-32">
          {/* Radial Gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,137,77,0.18),transparent_55%)] pointer-events-none" />
          <div className="container-px mx-auto max-w-7xl relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
            >
              <ArrowLeft size={14} /> Back to home
            </Link>

            <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral/10 text-coral text-xs font-semibold tracking-wider uppercase">
                  A specialized learning program by MG Study Centre
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.1] tracking-tight">
                  Smart Scholar Tuition
                </h1>
                <p className="mt-6 text-lg md:text-xl text-slate-text max-w-2xl leading-relaxed">
                  Personalized attention, calm study environments, and structured mentorship for students from Class 1st to 10th.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-navy text-white px-7 py-3.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle size={16} /> Enroll Today
                  </a>
                  <a
                    href="tel:+917019140957"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background text-navy px-7 py-3.5 text-sm font-semibold hover:bg-soft transition-all"
                  >
                    <Phone size={16} /> Contact Us
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-coral to-navy opacity-30 blur transition duration-1000 group-hover:opacity-40" />
                  <div className="relative h-44 w-44 md:h-56 md:w-56 rounded-2xl bg-background border border-coral/20 shadow-xl flex items-center justify-center overflow-hidden p-4">
                    <img
                      src={smart.url}
                      alt="Smart Scholar Tuition logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section: H2s: Smart Scholar Class Details & Benefits of Smart Scholar Tuition */}
        <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Smart Scholar Class Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold">
                Program Structure
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                Smart Scholar Class Details
              </h2>
              <p className="text-slate-text leading-relaxed">
                Smart Scholar Tuition is built around individualized support. We acknowledge that every child has a unique pace of learning, which is why we pair students with dedicated mentors who track their progress daily.
              </p>
              <p className="text-slate-text leading-relaxed">
                We offer classes from 1st standard to 10th standard for all core subjects under State, CBSE, and ICSE syllabus boards. We focus heavily on clear concept building, homework monitoring, and mock tests.
              </p>

              {/* Address card */}
              <div className="p-6 rounded-2xl border border-border bg-soft/60 space-y-4 mt-8">
                <h3 className="font-semibold text-navy">Branch Details</h3>
                <div className="flex gap-3 text-slate-text text-sm">
                  <MapPin size={16} className="text-coral shrink-0 mt-0.5" />
                  <span>Main Road, Neelgiri Topu, Vigneshwara Nagar, Madeshwara Extension, Sunkadakatte, Bengaluru, Karnataka 560091</span>
                </div>
                <div className="flex gap-3 text-slate-text text-sm">
                  <Phone size={16} className="text-coral shrink-0 mt-0.5" />
                  <a href="tel:+917019140957" className="hover:underline">+91 70191 40957</a>
                </div>
              </div>
            </div>

            {/* Right side: Benefits of Smart Scholar Tuition */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-coral font-bold">
                  Core Advantages
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                  Benefits of Smart Scholar Tuition
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-border bg-background shadow-sm space-y-3 hover:border-coral/40 transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-coral/5 text-coral flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-navy text-base">{b.title}</h3>
                    <p className="text-slate-text text-xs leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA section */}
        <section className="bg-navy text-white py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,137,77,0.15),transparent_60%)] pointer-events-none" />
          <div className="container-px mx-auto max-w-5xl text-center relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Learning Smartly?</h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Unlock your true learning potential with personalized tutoring. Connect with our advisors to enroll.
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

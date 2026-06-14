import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  { q: "What classes do you teach?", a: "We coach students of Classes 7th, 8th, 9th and 10th across all core subjects." },
  { q: "Which boards are supported?", a: "State Board, CBSE and ICSE — with curriculum-specific teaching and practice." },
  { q: "What is the batch size?", a: "Small batches with focused attention on each student. Weekly progress is shared with parents." },
  { q: "How do I book admission?", a: "Fill the form on the left — it will open WhatsApp with your details so we can confirm a slot." },
];

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("Gurukula Academy");
  const [klass, setKlass] = useState("8th");
  const [consent, setConsent] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const classOptions =
    branch === "Smart Scholars Tuitions"
      ? ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]
      : ["7th", "8th", "9th", "10th"];

  const handleBranchChange = (value: string) => {
    setBranch(value);
    const nextOptions =
      value === "Smart Scholars Tuitions"
        ? ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]
        : ["7th", "8th", "9th", "10th"];
    if (!nextOptions.includes(klass)) setKlass(nextOptions[0]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !consent) return;
    const waNumber = branch === "Gurukula Academy" ? "919740099677" : "917019140957";
    const msg = `Hello, I'd like to enquire about admission.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ABranch: ${encodeURIComponent(branch)}%0AClass: ${encodeURIComponent(klass)}`;
    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-gradient-to-b from-[#eaf1ff] via-[#dbe7ff] to-[#eaf1ff] overflow-hidden"
    >
      {/* decorative blue glows */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-sapphire/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-sapphire/15 blur-3xl" />
      <div className="relative container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">
              Book Your Admission
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy">
              Let's get you started.
            </h2>
            <p className="mt-5 text-slate-text">
              Fill the form — we'll open WhatsApp with your details so our team can confirm a slot.
            </p>

            <form onSubmit={submit} className="mt-10 space-y-5">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={80}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-sapphire outline-none py-3 text-navy text-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  inputMode="tel"
                  maxLength={15}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-sapphire outline-none py-3 text-navy text-lg"
                  placeholder="10-digit mobile"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Select Branch</label>
                  <select
                    value={branch}
                    onChange={(e) => handleBranchChange(e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-sapphire outline-none py-3 text-navy text-lg"
                  >
                    <option>Gurukula Academy</option>
                    <option>Smart Scholars Tuitions</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Class</label>
                  <select
                    value={klass}
                    onChange={(e) => setKlass(e.target.value)}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-sapphire outline-none py-3 text-navy text-lg"
                  >
                    {classOptions.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <label className="flex items-start gap-3 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-sapphire shrink-0"
                />
                <span className="text-[11px] text-muted-foreground leading-snug">
                  I agree to share my name, phone and enquiry details with the institute
                  only for the purpose of this admission enquiry. My data will not be
                  shared with anyone else and I may withdraw consent anytime.
                </span>
              </label>
              <button
                type="submit"
                disabled={!consent}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 text-sm font-semibold hover:bg-[#1ebe5b] transition-colors shadow-lg shadow-[#25D366]/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle size={16} /> Connect on WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">FAQ</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy">Questions, answered.</h2>
            <div className="mt-10 flex flex-col gap-3 md:gap-2">
              {faqs.map((f, i) => {
                const open = openIdx === i;
                return (
                  <div
                    key={f.q}
                    className={`rounded-2xl border bg-white/60 backdrop-blur-sm transition-all duration-300 ${
                      open ? "border-sapphire/40 shadow-sm" : "border-border"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-4 md:px-5 py-4 md:py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-base md:text-lg font-semibold text-navy">{f.q}</span>
                      <ChevronDown
                        size={20}
                        className={`text-sapphire transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 md:px-5 pb-4 md:pb-5 text-slate-text leading-relaxed text-sm md:text-base">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

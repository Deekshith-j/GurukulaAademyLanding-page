import { Facebook, Instagram } from "lucide-react";

const links = ["About Us", "Results", "Vision", "Gallery", "Branches", "Contact Us"];
const hashes = ["about", "results", "vision", "gallery", "branches", "contact"];

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-lg font-semibold">Gurukula Academy <span className="text-white/40">|</span> Smart Scholars</div>
            <div className="mt-2 text-xs tracking-[0.3em] uppercase text-white/50">MG Study Centre</div>
            <p className="mt-5 text-sm text-white/65 max-w-sm leading-relaxed">
              Tuitions for Classes 7th – 10th. State Board, CBSE & ICSE.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50">Explore</div>
            <ul className="mt-5 space-y-2.5">
              {links.map((l, i) => (
                <li key={l}>
                  <a href={`/#${hashes[i]}`} className="text-sm text-white/80 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/50">Follow</div>
            <div className="mt-5 space-y-4">
              <div>
                <div className="text-xs text-white/50 mb-2">Gurukula Academy</div>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/people/M-G-Study/pfbid0CJc6YFe6Arr5XuHamaYvh4yRQd8k4NPfcGHGkCERdYdnnSdbUgQ6kTKG9Hfhd7Cgl/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Gurukula Academy on Facebook"
                    className="inline-flex h-10 w-10 rounded-full border border-white/15 items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/gurukulahq?utm_source=qr&igsh=MWdwcTRybDB6ZTY1Mw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Gurukula Academy on Instagram"
                    className="inline-flex h-10 w-10 rounded-full border border-white/15 items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
              <div>
                <div className="text-xs text-white/50 mb-2">Smart Scholars Tuitions</div>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/people/smart-scholars-tuition/61590648988220/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Smart Scholars on Facebook"
                    className="inline-flex h-10 w-10 rounded-full border border-white/15 items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/smart_scholarstuitions?utm_source=qr&igsh=ZnMxbW41dHg4Z210"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Smart Scholars on Instagram"
                    className="inline-flex h-10 w-10 rounded-full border border-white/15 items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-col gap-1">
            <div>© {new Date().getFullYear()} Gurukula Academy & Smart Scholars Tuitions. All rights reserved.</div>
            <div className="text-[10px] text-white/40">
              Gurukula Academy and Smart Scholars Tuition are initiatives of MG Study Centre.
            </div>
          </div>
          <div>Crafted for focus & results.</div>
        </div>
      </div>
    </footer>
  );
}

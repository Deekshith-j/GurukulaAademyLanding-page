import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import gurukulaLogo from "@/assets/gurukula-logo.asset.json";
import smartLogo from "@/assets/smart-scholars-logo.asset.json";

const links = [
  { label: "About Us", hash: "#about" },
  { label: "Results", hash: "#results" },
  { label: "Vision", hash: "#vision" },
  { label: "Gallery", hash: "#gallery" },
  { label: "Branches", hash: "#branches" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.03)]"
          : "bg-background/70 backdrop-blur-sm border-border/30"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between gap-2 py-2.5 md:py-3 relative">
        <Link to="/" className="flex flex-col leading-tight min-w-0 flex-1">
          {/* Mobile: compact dual-logo with stacked names */}
          <div className="flex items-center gap-2 md:hidden min-w-0 overflow-hidden">
            <div className="flex items-center gap-1 shrink-0">
              <img
                src={gurukulaLogo.url}
                alt="Gurukula Academy"
                className="h-6 w-6 rounded-md object-cover ring-1 ring-border/20 shadow-sm"
              />
              <img
                src={smartLogo.url}
                alt="Smart Scholars Tuitions"
                className="h-6 w-6 rounded-md object-cover ring-1 ring-border/20 shadow-sm"
              />
            </div>
            <div className="min-w-0 leading-tight">
              <div className="text-[10px] min-[380px]:text-[11px] font-semibold text-foreground truncate">
                Gurukula · Smart Scholars
              </div>
              <div className="text-[8px] min-[380px]:text-[8.5px] tracking-[0.18em] uppercase text-muted-foreground truncate">
                MG Study Centre
              </div>
            </div>
          </div>

          {/* Desktop / tablet: full names */}
          <div className="hidden md:flex items-center gap-2.5 text-sm font-semibold min-w-0">
            <img
              src={gurukulaLogo.url}
              alt="Gurukula Academy"
              className="h-8 w-8 rounded-lg object-cover ring-1 ring-border/20 shadow-sm shrink-0"
            />
            <span className="truncate text-foreground font-bold">
              Gurukula Academy
            </span>
            <span className="h-3.5 w-px bg-border/60 shrink-0" />
            <img
              src={smartLogo.url}
              alt="Smart Scholars Tuitions"
              className="h-8 w-8 rounded-lg object-cover ring-1 ring-border/20 shadow-sm shrink-0"
            />
            <span className="truncate text-foreground font-bold">
              Smart Scholars Tuitions
            </span>
          </div>
          <div className="hidden md:block text-[9px] tracking-[0.25em] uppercase text-muted-foreground mt-0.5 ml-[2.6rem]">
            MG Study Centre
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 shrink-0">
          {links.map((l) => (
            <a
              key={l.label}
              href={`/${l.hash}`}
              className="relative py-1 text-xs font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-sapphire to-navy text-white px-5 py-2.5 text-sm font-semibold shadow-[0_6px_20px_-6px_rgba(37,99,235,0.55)] hover:shadow-[0_8px_24px_-6px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition-all"
          >
            Enquire
          </a>
        </nav>

        <button
          className="lg:hidden text-foreground p-1.5 rounded-md hover:bg-muted shrink-0"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-px mx-auto max-w-7xl py-3 flex flex-col gap-0.5">
            {links.map((l) => (
              <a
                key={l.label}
                href={`/${l.hash}`}
                onClick={() => setOpen(false)}
                className="text-xs font-semibold text-muted-foreground hover:text-foreground py-2 px-2 rounded-md hover:bg-muted transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 text-sm font-semibold text-white py-2.5 px-2 rounded-full bg-gradient-to-r from-sapphire to-navy text-center shadow-[0_4px_16px_-4px_rgba(37,99,235,0.45)]"
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-new-1.jpeg.asset.json";
import g2 from "@/assets/gallery-new-2.jpeg.asset.json";
import g3 from "@/assets/gallery-new-3.jpeg.asset.json";
import g4 from "@/assets/gallery-new-4.jpeg.asset.json";
import g5 from "@/assets/gallery-new-5.jpeg.asset.json";
import g6 from "@/assets/gallery-new-6.jpeg.asset.json";
import g7 from "@/assets/gallery-new-7.jpeg.asset.json";
import g8 from "@/assets/gallery-new-8.jpeg.asset.json";
import e1 from "@/assets/gallery-extra-1.jpeg.asset.json";
import e2 from "@/assets/gallery-extra-2.jpeg.asset.json";
import e3 from "@/assets/gallery-extra-3.jpeg.asset.json";
import e4 from "@/assets/gallery-extra-4.jpeg.asset.json";
import e5 from "@/assets/gallery-extra-5.jpeg.asset.json";

// New classroom images
const n1 = "/gallery/classroom-whiteboard.jpg";
const n2 = "/gallery/students-writing.jpg";
const n3 = "/gallery/practice-test-board.jpg";

// Uploaded images
const m1 = "/gallery/gurukula-whiteboard-test.jpg";
const m2 = "/gallery/gurukula-classroom-writing-1.jpg";
const m3 = "/gallery/gurukula-classroom-test.jpg";
const m4 = "/gallery/gurukula-classroom-study.jpg";
const m5 = "/gallery/gurukula-classroom-writing-2.jpg";

const row1 = [g1.url, e2.url, n1, m1, g2.url, e3.url, g3.url, m2, n2, e1.url, m3, g4.url, e4.url, g5.url, n3, e5.url, g6.url, g7.url, g8.url];
const row2 = [e5.url, n3, m4, g8.url, e4.url, g6.url, m5, n1, e3.url, g4.url, e2.url, n2, g2.url, e1.url, g7.url, g5.url, g3.url, g1.url];

type RowHandle = {
  el: HTMLDivElement | null;
  inner: HTMLDivElement | null;
  offset: number;
  paused: boolean;
  dragStartX: number | null;
  dragStartOffset: number;
};

function Row({
  images,
  speed,
  handleRef,
}: {
  images: string[];
  speed: string;
  handleRef: React.MutableRefObject<RowHandle>;
}) {
  const apply = (animate: boolean) => {
    const h = handleRef.current;
    if (!h.el) return;
    h.el.style.transition = animate ? "transform 0.6s cubic-bezier(0.65,0,0.35,1)" : "none";
    h.el.style.transform = `translateX(${h.offset}px)`;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const h = handleRef.current;
    h.dragStartX = e.clientX;
    h.dragStartOffset = h.offset;
    h.paused = true;
    if (h.inner) h.inner.style.animationPlayState = "paused";
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const h = handleRef.current;
    if (h.dragStartX === null) return;
    h.offset = h.dragStartOffset + (e.clientX - h.dragStartX);
    apply(false);
  };
  const endDrag = (e: React.PointerEvent) => {
    const h = handleRef.current;
    if (h.dragStartX === null) return;
    h.dragStartX = null;
    h.paused = false;
    if (h.inner) h.inner.style.animationPlayState = "running";
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      className="overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <div
        ref={(el) => {
          handleRef.current.el = el;
        }}
        style={{ transform: "translateX(0px)", transition: "transform 0.6s cubic-bezier(0.65,0,0.35,1)" }}
      >
        <div
          ref={(el) => {
            handleRef.current.inner = el;
          }}
          className={`flex gap-5 ${speed}`}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-5 shrink-0 py-4">
              {images.map((src, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="relative group shrink-0 px-2"
                >
                  {/* Blue-Orange Gradient Glow Behind Card */}
                  <div className="absolute inset-x-4 inset-y-2 -z-10 rounded-2xl bg-gradient-to-r from-sapphire/65 to-coral/65 opacity-70 blur-md transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:blur-lg" />
                  
                  <div className="relative h-48 sm:h-56 md:h-72 w-64 sm:w-80 md:w-[420px] overflow-hidden rounded-2xl bg-soft border border-border/80 shadow-md">
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-102"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const h1 = useRef<RowHandle>({ el: null, inner: null, offset: 0, paused: false, dragStartX: null, dragStartOffset: 0 });
  const h2 = useRef<RowHandle>({ el: null, inner: null, offset: 0, paused: false, dragStartX: null, dragStartOffset: 0 });

  const nudge = (dir: -1 | 1) => {
    const step = dir * 320;
    [h1, h2].forEach((ref) => {
      const h = ref.current;
      h.offset += step;
      if (h.el) {
        h.el.style.transition = "transform 0.6s cubic-bezier(0.65,0,0.35,1)";
        h.el.style.transform = `translateX(${h.offset}px)`;
      }
    });
  };

  return (
    <section id="gallery" className="bg-transparent scroll-mt-24 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-sapphire font-semibold">
              Gallery
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-navy">
              Moments from our classrooms.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => nudge(1)}
              aria-label="Previous"
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:bg-soft transition-colors"
            >
              <ChevronLeft size={18} className="text-navy" />
            </button>
            <button
              onClick={() => nudge(-1)}
              aria-label="Next"
              className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:bg-soft transition-colors"
            >
              <ChevronRight size={18} className="text-navy" />
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-5 pb-24 md:pb-32">
        <Row images={row1} speed="animate-marquee-slow" handleRef={h1} />
        <Row images={row2} speed="animate-marquee-slower" handleRef={h2} />
      </div>
    </section>
  );
}

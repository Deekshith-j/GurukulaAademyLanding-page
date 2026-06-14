import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gurukula from "@/assets/gurukula-logo.asset.json";
import smart from "@/assets/smart-scholars-logo.asset.json";

export function Splash() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("splash_seen");
    if (seen) { setShow(false); return; }
    const t = setTimeout(() => {
      sessionStorage.setItem("splash_seen", "1");
      setShow(false);
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-10 md:gap-16">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                src={gurukula.url}
                alt="Gurukula Academy"
                className="h-24 w-24 md:h-32 md:w-32 object-contain"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-16 md:h-20 w-px bg-border origin-center"
              />
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                src={smart.url}
                alt="Smart Scholars Tuitions"
                className="h-24 w-24 md:h-32 md:w-32 object-contain"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xs tracking-[0.4em] uppercase text-muted-foreground"
            >
              MG Study Centre
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

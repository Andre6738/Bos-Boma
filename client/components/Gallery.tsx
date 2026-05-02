import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { GALLERY_IMAGES } from '../data/site';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? 0 : (i + 1) % GALLERY_IMAGES.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? 0 : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="section relative overflow-hidden bg-bone-50">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Moments captured"
          title="An archive of real celebrations"
          subtitle="Tap any image to view it full size. Every photo is a real moment from the BosBoma bushveld."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1], delay: (i % 4) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-sand-100 ring-1 ring-ink/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-copper/40"
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/40" />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-bone-50/25 text-bone-50 ring-1 ring-bone-50/50 backdrop-blur">
                  <Maximize2 size={20} />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4"
            onClick={close}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-bone-50/10 text-bone-50 backdrop-blur transition-colors hover:bg-bone-50/20 sm:left-6 sm:h-14 sm:w-14"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-bone-50/10 text-bone-50 backdrop-blur transition-colors hover:bg-bone-50/20 sm:right-6 sm:h-14 sm:w-14"
            >
              <ChevronRight size={26} />
            </button>
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-bone-50/10 text-bone-50 backdrop-blur transition-colors hover:bg-bone-50/20 sm:right-8 sm:top-8"
            >
              <X size={22} />
            </button>
            <motion.img
              key={active}
              src={GALLERY_IMAGES[active].src}
              alt={GALLERY_IMAGES[active].alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-card"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

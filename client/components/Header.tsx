import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { LOGO, SITE } from '../data/site';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#specials', label: 'Specials' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#awards', label: 'Awards' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Find Us' },
  { href: '#contact', label: 'Contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-bone-50/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-prose flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="BosBoma home">
          <img
            src={LOGO}
            alt="BosBoma"
            className={`h-9 w-auto transition-all sm:h-11 ${scrolled || open ? '' : 'brightness-0 invert'}`}
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-ink-soft hover:text-copper' : 'text-bone-50 hover:text-sand-200'
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-bone-50 shadow-soft transition-all hover:bg-copper-dark hover:shadow-glow"
          >
            <Phone size={16} />
            Book a Tour
          </a>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${
            scrolled || open
              ? 'bg-ink/5 text-ink hover:bg-ink/10'
              : 'bg-bone-50/15 text-bone-50 hover:bg-bone-50/25'
          }`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink/5 bg-bone-50 transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-prose flex flex-col gap-1 py-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-sand-50 hover:text-copper"
            >
              {n.label}
            </a>
          ))}
          <a
            href={SITE.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3.5 text-sm font-semibold text-bone-50 shadow-soft"
          >
            <Phone size={16} />
            Book a Tour
          </a>
        </nav>
      </div>
    </header>
  );
}

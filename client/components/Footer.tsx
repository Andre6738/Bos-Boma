import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { LOGO, SITE } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-bone-100">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-copper to-transparent" />
      <div className="container-prose grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <img src={LOGO} alt="BosBoma" className="h-14 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-bone-100/80">
            BosBoma is a private bushveld wedding estate just north of Pretoria. Exclusive use,
            tailored celebrations and unforgettable evenings under the African sky.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-bone-50/5 ring-1 ring-bone-50/15 transition-colors hover:bg-copper hover:text-bone-50"
            >
              <Facebook size={18} />
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-bone-50/5 ring-1 ring-bone-50/15 transition-colors hover:bg-copper hover:text-bone-50"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sand-200">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="text-bone-100/80 hover:text-copper">About</a></li>
            <li><a href="#features" className="text-bone-100/80 hover:text-copper">Features</a></li>
            <li><a href="#gallery" className="text-bone-100/80 hover:text-copper">Gallery</a></li>
            <li><a href="#reviews" className="text-bone-100/80 hover:text-copper">Reviews</a></li>
            <li><a href="#location" className="text-bone-100/80 hover:text-copper">Find Us</a></li>
            <li><a href="#contact" className="text-bone-100/80 hover:text-copper">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sand-200">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-bone-100/85 hover:text-copper">
                <Phone size={14} className="text-copper" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="inline-flex items-center gap-2 break-all text-bone-100/85 hover:text-copper">
                <Mail size={14} className="text-copper" /> {SITE.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-bone-100/85">
              <MapPin size={14} className="mt-1 text-copper" /> {SITE.locationLabel}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone-50/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-5 text-xs text-bone-100/60 sm:flex-row">
          <p>&copy; {year} BosBoma. All rights reserved.</p>
          <p>Crafted with care in the bushveld.</p>
        </div>
      </div>
    </footer>
  );
}

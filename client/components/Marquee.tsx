import { Sparkles, Award, Heart, MapPin, Trees, Star } from 'lucide-react';

const ITEMS = [
  { icon: Star, label: 'Top 10 Wedding Venue 2024' },
  { icon: Award, label: 'BG & WG Member 2026' },
  { icon: Heart, label: 'Real couples, real reviews' },
  { icon: Trees, label: 'Bushveld escape' },
  { icon: MapPin, label: 'Just north of Pretoria' },
  { icon: Sparkles, label: 'Exclusive use, always' }
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-gradient-to-r from-bush via-bush-dark to-bush py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bush to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bush to-transparent" />
      <div className="flex w-max animate-marquee gap-12 will-change-transform">
        {loop.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-bone-50/90"
            >
              <Icon size={16} className="text-copper-light" />
              {it.label}
              <span className="text-copper-light">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

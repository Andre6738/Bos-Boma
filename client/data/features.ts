import {
  ShieldCheck,
  Flame,
  Trees,
  UtensilsCrossed,
  Sparkles,
  HeartHandshake,
  type LucideIcon
} from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Exclusive bushveld privacy',
    description: 'Celebrate in total seclusion. One event, one space, always yours.'
  },
  {
    icon: Trees,
    title: 'Open-air boma elegance',
    description: 'Dine and dance under the stars in a refined, rustic setting.'
  },
  {
    icon: Sparkles,
    title: 'Bush chapel ceremony',
    description: 'Say your vows surrounded by indigenous trees and tranquil bush sounds.'
  },
  {
    icon: UtensilsCrossed,
    title: 'No corkage, authentic feasts',
    description: 'Enjoy homemade cuisine and bring your own drinks. No hidden fees.'
  },
  {
    icon: Flame,
    title: 'Copper-lit campfire nights',
    description: 'Gather around glowing firepits for a warm, cinematic evening.'
  },
  {
    icon: HeartHandshake,
    title: 'Tailored planning guidance',
    description: 'Our team supports you from first visit to final toast.'
  }
];

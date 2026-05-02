const CDN = 'https://cdn.prod.website-files.com/69958b3287002fb62620f5e1';

export interface Award {
  title: string;
  subtitle: string;
  date: string;
  image: string;
}

export const AWARDS: Award[] = [
  {
    title: 'Top 10 Wedding Venue in Gauteng',
    subtitle: 'Tourism Awards',
    date: '18 May 2024',
    image: `${CDN}/69959b8fa1c89d99b0cd68c2_Screenshot%202026-02-18%20125718.png`
  },
  {
    title: 'BG & WG Proud Member 2026',
    subtitle: 'Member Certification',
    date: '2026',
    image: `${CDN}/69afd2d1c1a2ea1e6d565444_BG%26WG%20Proud%20Member%202026.png`
  }
];

export interface Special {
  title: string;
  description: string;
  image: string;
  badge?: string;
}

export const SPECIALS: Special[] = [
  {
    title: 'Elopement 2026',
    description:
      'An intimate, all-included escape into the bushveld for couples who want the moment to be everything and the noise to be nothing.',
    image: `${CDN}/699613ff7e1e75ad2ccaea15_Elopement-2026.png`,
    badge: 'Limited dates'
  },
  {
    title: 'Featured Special',
    description:
      'Our latest offer, freshly announced. Reach out for full pricing and what is included.',
    image: `${CDN}/69e60ea5d684958dbf4da1ec_WhatsApp%20Image%202026-04-17%20at%2010.14.32%20AM.jpeg`,
    badge: 'Now on'
  }
];

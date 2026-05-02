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
    image: '/images/award-top10.png'
  },
  {
    title: 'BG & WG Proud Member 2026',
    subtitle: 'Member Certification',
    date: '2026',
    image: '/images/award-bgwg.png'
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
    image: '/images/special-elopement.png',
    badge: 'Limited dates'
  },
  {
    title: 'Featured Special',
    description:
      'Our latest offer, freshly announced. Reach out for full pricing and what is included.',
    image: '/images/special-featured.jpeg',
    badge: 'Now on'
  }
];

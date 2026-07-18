export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  href?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "first-year-advice",
    title: "First-year university advice",
    category: "Content",
    year: "July 2026",
    description:
      "Carousel on lessons I wish I had known earlier.",
    image: "/images/advice.jpg",
    imageAlt: "Advice I would have paid to know in my first year of university",
    imageWidth: 2160,
    imageHeight: 2880,
    href: "https://www.instagram.com/p/DaLUfgoEcxo/",
    accent: "#000000",
  },
  {
    slug: "day-in-my-life-uoft",
    title: "Day in my life",
    category: "Content",
    year: "April 2026",
    description:
      "Finals-season day-in-the-life reel as a CS and biology student.",
    image: "/images/diml.jpg",
    imageAlt: "Day in my life as a 4.0 CS and biology student during finals at UofT",
    imageWidth: 2160,
    imageHeight: 3840,
    href: "https://www.instagram.com/p/DXu14iwD3Zz/",
    accent: "#000000",
  },
  {
    slug: "moft-wallet",
    title: "MOFT Trackable Tripod Wallet",
    category: "Partnership",
    year: "June 2026",
    description:
      "Short-form review for MOFT's trackable tripod wallet",
    image: "/images/moft.jpg",
    imageAlt: "MOFT trackable tripod wallet brand collaboration",
    imageWidth: 2160,
    imageHeight: 3020,
    href: "https://www.instagram.com/p/DZfvvKlxdWR/",
    accent: "#000000",
  },
];
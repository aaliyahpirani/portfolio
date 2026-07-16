export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "first-year-advice",
    title: "First-year university advice",
    category: "Content",
    year: "2024",
    description:
      "Carousel on lessons I wish I had known earlier — study habits, campus life, and navigating first year at university.",
    image: "/images/portfolio-1.jpg",
    imageAlt: "Advice I would have paid to know in my first year of university",
    href: "https://www.instagram.com/p/DaLUfgoEcxo/",
  },
  {
    slug: "day-in-my-life-uoft",
    title: "Day in my life @ UofT",
    category: "Content",
    year: "2025",
    description:
      "Finals-season day-in-the-life reel as a CS and biology student — studying, routines, and life at the University of Toronto.",
    image: "/images/portfolio-2.jpg",
    imageAlt: "Day in my life as a 4.0 CS and biology student during finals at UofT",
    href: "https://www.instagram.com/p/DXu14iwD3Zz/",
  },
  {
    slug: "moft-wallet",
    title: "MOFT Trackable Tripod Wallet",
    category: "Brand partnership",
    year: "2025",
    description:
      "Short-form review and storytelling for MOFT's trackable tripod wallet — product demo and creator-led brand content.",
    image: "/images/portfolio-3.jpg",
    imageAlt: "MOFT trackable tripod wallet brand collaboration",
    href: "https://www.instagram.com/p/DZfvvKlxdWR/",
  },
];

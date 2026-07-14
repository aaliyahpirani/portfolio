export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "harbor-light",
    title: "Harbor Light",
    category: "Editorial",
    year: "2025",
    description: "A photo essay on coastal mornings and quiet infrastructure.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Ocean waves at sunrise",
  },
  {
    slug: "glass-rooms",
    title: "Glass Rooms",
    category: "Architecture",
    year: "2025",
    description: "Study of light moving through modern interiors.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Bright modern office interior",
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    category: "Brand",
    year: "2024",
    description: "Identity system for a travel journal series.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Mountain landscape with fog",
  },
  {
    slug: "night-market",
    title: "Night Market",
    category: "Documentary",
    year: "2024",
    description: "Color and motion after dark in a city market.",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "City skyline at dusk",
  },
];

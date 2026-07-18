import { FadeIn } from "@/components/FadeIn";
import {
  SoftwareProjectShowcase,
  type SoftwareProject,
} from "@/components/SoftwareProjectShowcase";

export const metadata = {
  title: "Software — Aaliyah Pirani",
  description:
    "Software projects and research — medical robotics, simulation, and full-stack work.",
};

const projects: SoftwareProject[] = [
  {
    year: "May 2026–present",
    category: "Research",
    title: "Deformable materials simulation",
    description:
      "GPU-accelerated simulation built using FlexiCubes and NVIDIA Warp, extending an existing deformable-body pipeline that inlcuded stretching and sculpting functionality with a tearing force model to reproduce soft-tissue rupture during surgery and laser ablation. Used to visualize skin tearing and train robotic manipulation policies at the MedCVR Lab, University of Toronto.",
    tech: ["Python", "NVIDIA Warp", "FlexiCubes", "cuda"],
    href: "https://github.com/aaliyahpirani/medcvr",
    accent: "#0f6e6a",
  },
  {
    year: "January 2026",
    category: "Project",
    title: "Palate",
    description:
      "Group dining app that resolves restaurant deadlocks through a five-stage session: preference capture, vibe check, AI keyword generation, parallel swipe filtering, and blind voting. Post-meal feedback aggregates per-cuisine and per-tag statistics into each user's profile, sharpening Gemini's matchmaking suggestion prompts over time.",
    tech: ["Next.js", "Node.js", "Gemini API", "MongoDB", "Python"],
    href: "https://github.com/aaliyahpirani/palate_",
    accent: "#c45c3e",
  },
  {
    year: "November–December 2025",
    category: "Team project",
    title: "SnackOverflow",
    description:
      "Team recipe app built in Java by six developers, structured around Clean Architecture and SOLID principles. Integrates the Spoonacular API for search and discovery, with account-based saving, custom recipe creation, portion editing, tagging, meal planning, and dietary filtering — my first large-scale exposure to layered design and maintainable object-oriented code.",
    tech: ["Java", "MongoDB", "Spoonacular API", "Clean Architecture", "OOP"],
    href: "https://github.com/aaliyahpirani/snack-overflow",
    accent: "#3d7a4f",
  },
  {
    year: "November 2025",
    category: "Project",
    title: "Bear With Me",
    description:
      "Pronunciation analysis tool for young children with speech difficulties, embedded in a stuffed bear via Raspberry Pi to keep interaction off screens. Captures speech through an onboard microphone, evaluates pronunciation with Azure's Speech Pronunciation Assessment API, and responds using ElevenLabs text-to-speech and a conneted microphone. Includes a parent dashboard for tracking progress over time.",
    tech: [
      "Raspberry Pi",
      "Azure API",
      "ElevenLabs API",
      "Python",
    ],
    href: "https://github.com/aaliyahpirani/BearWithMe",
    accent: "#825e4c",
  },
  {
    year: "2025",
    category: "Project",
    title: "Neural network from scratch",
    description:
      "Personal project built out of curiosity — a feedforward neural network implemented with only NumPy, using sigmoid activations, backpropagation, and stochastic gradient descent. Trained on the MNIST handwritten digit dataset; my first hands-on entry into machine learning and how networks learn from data.",
    tech: ["Python", "NumPy", "Machine learning"],
    href: "https://github.com/aaliyahpirani/neuralnet-from-scratch",
    accent: "#6b5344",
  },
  {
    year: "2024–2025",
    category: "Team project",
    title: "Aqualens",
    description:
      "Flutter mobile app built with Engineers Without Borders UofT in partnership with CGEN, used by water quality testers in Mexico to capture and store field measurements. Designed for intuitive on-the-ground use in low-friction workflows; I owned the login and authentication system and contributed to the broader UX for reliable data entry and storage.",
    tech: ["Dart", "Flutter"],
    href: "https://github.com/ewbuoft/aqualens-2425",
    accent: "#2f6fad",
  },
];

export default function SoftwarePage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-8 md:pt-36 md:pb-32">
      <FadeIn>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-serif)] text-5xl leading-none tracking-[-0.04em] md:text-7xl">
          Cool things I've bui<span className="italic">lt</span>
        </h1>
        <p className="mt-6 max-w-xl font-[family-name:var(--font-montserrat)] text-lg text-muted">
          AKA my engineering portfolio.
        </p>
      </FadeIn>

      <SoftwareProjectShowcase projects={projects} />
    </section>
  );
}

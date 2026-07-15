const words = [
  {
    text: "pilot",
    className:
      "top-[6%] left-[68%] rotate-[-14deg] font-[family-name:var(--font-romantic)] text-[clamp(2rem,4vw,3.25rem)] opacity-[0.14]",
  },
  {
    text: "air cadet",
    className:
      "top-[18%] left-[4%] rotate-[8deg] font-[family-name:var(--font-sue-ellen)] text-[clamp(1.5rem,3vw,2.4rem)] opacity-[0.12]",
  },
  {
    text: "student",
    className:
      "top-[28%] right-[6%] rotate-[-6deg] font-[family-name:var(--font-birthstone)] text-[clamp(2.25rem,5vw,3.75rem)] opacity-[0.16]",
  },
  {
    text: "creator",
    className:
      "top-[42%] left-[8%] rotate-[12deg] font-[family-name:var(--font-romantic)] text-[clamp(1.75rem,3.5vw,2.75rem)] opacity-[0.13]",
  },
  {
    text: "researcher",
    className:
      "top-[52%] right-[10%] rotate-[-10deg] font-[family-name:var(--font-sue-ellen)] text-[clamp(1.4rem,2.8vw,2.2rem)] opacity-[0.11]",
  },
  {
    text: "engineer",
    className:
      "top-[62%] left-[62%] rotate-[5deg] font-[family-name:var(--font-imbue)] text-[clamp(1.75rem,3.2vw,2.6rem)] opacity-[0.1]",
  },
  {
    text: "storyteller",
    className:
      "top-[74%] left-[12%] rotate-[-8deg] font-[family-name:var(--font-birthstone)] text-[clamp(1.8rem,3.8vw,3rem)] opacity-[0.14]",
  },
  {
    text: "builder",
    className:
      "top-[12%] left-[38%] rotate-[16deg] font-[family-name:var(--font-romantic)] text-[clamp(1.3rem,2.5vw,2rem)] opacity-[0.1]",
  },
  {
    text: "flyer",
    className:
      "bottom-[18%] right-[22%] rotate-[-18deg] font-[family-name:var(--font-sue-ellen)] text-[clamp(1.6rem,3vw,2.5rem)] opacity-[0.12]",
  },
  {
    text: "scholar",
    className:
      "bottom-[8%] left-[48%] rotate-[7deg] font-[family-name:var(--font-romantic)] text-[clamp(1.4rem,2.6vw,2.1rem)] opacity-[0.11]",
  },
  {
    text: "toronto",
    className:
      "top-[36%] left-[48%] rotate-[-4deg] font-[family-name:var(--font-birthstone)] text-[clamp(1.5rem,3vw,2.4rem)] opacity-[0.09]",
  },
  {
    text: "collaborator",
    className:
      "bottom-[28%] left-[28%] rotate-[11deg] font-[family-name:var(--font-sue-ellen)] text-[clamp(1.2rem,2.4vw,1.9rem)] opacity-[0.1]",
  },
  {
    text: "learner",
    className:
      "top-[8%] left-[22%] rotate-[-9deg] font-[family-name:var(--font-birthstone)] text-[clamp(1.6rem,3.2vw,2.5rem)] opacity-[0.12]",
  },
  {
    text: "curious",
    className:
      "top-[22%] right-[28%] rotate-[14deg] font-[family-name:var(--font-romantic)] text-[clamp(1.5rem,3vw,2.35rem)] opacity-[0.11]",
  },
  {
    text: "explorer",
    className:
      "top-[48%] left-[32%] rotate-[-12deg] font-[family-name:var(--font-sue-ellen)] text-[clamp(1.3rem,2.6vw,2rem)] opacity-[0.1]",
  },
  {
    text: "maker",
    className:
      "top-[58%] right-[32%] rotate-[9deg] font-[family-name:var(--font-birthstone)] text-[clamp(1.4rem,2.8vw,2.2rem)] opacity-[0.12]",
  },
  {
    text: "dreamer",
    className:
      "bottom-[38%] right-[4%] rotate-[-7deg] font-[family-name:var(--font-romantic)] text-[clamp(1.5rem,3vw,2.4rem)] opacity-[0.1]",
  },
  {
    text: "coder",
    className:
      "top-[68%] right-[42%] rotate-[15deg] font-[family-name:var(--font-imbue)] text-[clamp(1.2rem,2.4vw,1.85rem)] opacity-[0.09]",
  },
  {
    text: "leader",
    className:
      "bottom-[14%] right-[48%] rotate-[-11deg] font-[family-name:var(--font-birthstone)] text-[clamp(1.35rem,2.7vw,2.1rem)] opacity-[0.11]",
  },
  {
    text: "mentor",
    className:
      "top-[32%] left-[18%] rotate-[6deg] font-[family-name:var(--font-sue-ellen)] text-[clamp(1.25rem,2.5vw,1.95rem)] opacity-[0.1]",
  },
  {
    text: "innovator",
    className:
      "bottom-[42%] left-[52%] rotate-[-5deg] font-[family-name:var(--font-romantic)] text-[clamp(1.15rem,2.3vw,1.8rem)] opacity-[0.09]",
  },
  {
    text: "calgary",
    className:
      "top-[46%] right-[2%] rotate-[10deg] font-[family-name:var(--font-birthstone)] text-[clamp(1.3rem,2.6vw,2rem)] opacity-[0.1]",
  },
  {
    text: "thinker",
    className:
      "bottom-[52%] left-[4%] rotate-[-16deg] font-[family-name:var(--font-imbue)] text-[clamp(1.2rem,2.4vw,1.9rem)] opacity-[0.1]",
  },
];

export function ScatteredWords() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {words.map((word) => (
        <span
          key={word.text}
          className={`absolute leading-none tracking-wide text-ink lowercase whitespace-nowrap ${word.className}`}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
}

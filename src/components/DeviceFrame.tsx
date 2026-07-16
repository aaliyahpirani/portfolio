type DeviceType = "laptop" | "phone" | "tablet" | "desktop" | "embedded";

type DeviceFrameProps = {
  device: DeviceType;
  accent: string;
  label: string;
  className?: string;
};

export function DeviceFrame({
  device,
  accent,
  label,
  className = "",
}: DeviceFrameProps) {
  const screen = (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `linear-gradient(145deg, ${accent}22 0%, ${accent}44 45%, #12181f18 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,24,31,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18,24,31,0.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 flex items-end p-4 md:p-5">
        <p className="font-[family-name:var(--font-montserrat)] text-[0.65rem] tracking-[0.14em] text-ink/70 uppercase md:text-xs">
          {label}
        </p>
      </div>
    </div>
  );

  if (device === "phone") {
    return (
      <div
        className={`relative mx-auto w-[min(100%,11.5rem)] rounded-[2rem] border-[6px] border-ink/90 bg-ink/90 p-1.5 shadow-[0_24px_48px_rgba(18,24,31,0.18)] ${className}`}
      >
        <div className="absolute top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-ink/90" />
        <div className="aspect-[9/19] overflow-hidden rounded-[1.4rem] bg-bg">
          {screen}
        </div>
      </div>
    );
  }

  if (device === "tablet") {
    return (
      <div
        className={`relative mx-auto w-[min(100%,18rem)] rounded-[1.75rem] border-[7px] border-ink/85 bg-ink/85 p-2 shadow-[0_24px_48px_rgba(18,24,31,0.18)] ${className}`}
      >
        <div className="aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-bg">
          {screen}
        </div>
      </div>
    );
  }

  if (device === "embedded") {
    return (
      <div
        className={`relative mx-auto w-[min(100%,14rem)] ${className}`}
      >
        <div className="rounded-2xl border border-line bg-bg p-4 shadow-[0_20px_40px_rgba(18,24,31,0.12)]">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#c5e4e1]" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line">
            {screen}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <span className="h-1.5 rounded-full bg-line" />
            <span className="h-1.5 rounded-full bg-line" />
            <span className="h-1.5 rounded-full bg-line" />
          </div>
        </div>
        <div className="absolute -right-3 -bottom-3 h-10 w-10 rounded-lg border border-line bg-bg-deep shadow-sm" />
        <div className="absolute -left-2 top-1/2 h-8 w-3 -translate-y-1/2 rounded-full bg-ink/20" />
      </div>
    );
  }

  if (device === "desktop") {
    return (
      <div className={`mx-auto w-[min(100%,24rem)] ${className}`}>
        <div className="overflow-hidden rounded-t-xl border-[7px] border-b-0 border-ink/85 bg-ink/85 p-2 pb-0">
          <div className="aspect-[16/10] overflow-hidden rounded-t-lg bg-bg">
            {screen}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-10 w-28 rounded-b-xl border-x-[7px] border-b-[7px] border-ink/85 bg-ink/85" />
        </div>
        <div className="mx-auto -mt-1 h-3 w-40 rounded-b-lg bg-ink/25" />
      </div>
    );
  }

  return (
    <div className={`mx-auto w-[min(100%,22rem)] ${className}`}>
      <div className="overflow-hidden rounded-t-xl border-[6px] border-b-0 border-ink/85 bg-ink/85 p-2 pb-0 shadow-[0_20px_40px_rgba(18,24,31,0.14)]">
        <div className="aspect-[16/10] overflow-hidden rounded-t-lg bg-bg">
          {screen}
        </div>
      </div>
      <div className="mx-4 h-2 rounded-b-md bg-ink/80" />
      <div className="mx-auto h-3 w-[70%] rounded-b-xl bg-ink/70" />
    </div>
  );
}

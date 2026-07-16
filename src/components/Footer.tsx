export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep px-5 py-8 md:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.1em] text-muted uppercase">
          © {new Date().getFullYear()} Aaliyah Pirani. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
}

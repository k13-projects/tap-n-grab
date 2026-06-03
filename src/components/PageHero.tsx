import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

/** Shared dark "techy" intro band used across interior pages for a cohesive look. */
const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="bg-gradient-ink pt-40 pb-24 text-ink-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">{subtitle}</p>
        )}
        {children && (
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;

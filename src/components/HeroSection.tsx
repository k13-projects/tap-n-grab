import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Picture from '@/components/Picture';

const BENEFITS = [
  { icon: Zap, text: 'Zero Cost, Zero Work' },
  { icon: Clock, text: 'Available 24/7' },
  { icon: Users, text: 'Resident-Loved' },
  { icon: CheckCircle, text: 'Stylish & Modern' },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-ink pt-32 pb-20 text-ink-foreground">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-teal/20 blur-[120px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-teal ring-1 ring-ink-3">
              <span className="h-2 w-2 rounded-full bg-brand-teal" />
              Now introducing
            </span>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                The all-new
                <span className="block bg-gradient-to-r from-brand-teal to-zone-chill bg-clip-text text-transparent">
                  Tap-N-Grab Smart Store
                </span>
              </h1>
              <p className="max-w-lg text-xl text-ink-muted">
                A premium, glass-front market that runs itself. Snacks, cold
                drinks, and frozen treats behind a single tap — 24/7, with zero
                work for your property team.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/property-managers">
                  Schedule a Tour
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-ink-3 bg-transparent text-ink-foreground hover:bg-white/5 hover:text-white"
              >
                <Link to="/machines">Explore the lineup</Link>
              </Button>
            </div>

            <div className="grid max-w-lg grid-cols-2 gap-3">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-ink-3"
                >
                  <benefit.icon className="h-5 w-5 shrink-0 text-brand-teal" />
                  <span className="text-sm font-medium text-ink-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-ink-muted">
              <div className="flex -space-x-2" aria-hidden="true">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-brand-teal ring-2 ring-ink" />
                ))}
              </div>
              <span>Trusted by 50+ luxury apartment communities</span>
            </div>
          </div>

          {/* Product showcase */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-ink-3 shadow-glow">
              <Picture
                src="/lovable-uploads/tng-smart-store.png"
                alt="The Tap-N-Grab Smart Store — a three-bay glass-front market in an upscale lobby"
                width={1408}
                height={768}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              {/* Logo sign on the machine valance */}
              <img
                src="/lovable-uploads/5c006de5-ed16-49aa-94f2-83f4ff2451e8.png"
                alt="Tap-N-Grab"
                className="absolute left-1/2 top-[5%] h-[9%] w-auto -translate-x-1/2 drop-shadow"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-xl border border-ink-3 bg-ink-2/90 px-5 py-4 text-center backdrop-blur">
              <div className="text-2xl font-bold text-brand-teal">24/7</div>
              <div className="text-xs text-ink-muted">Always open</div>
            </div>
            <div className="absolute -top-5 -right-5 rounded-xl border border-ink-3 bg-ink-2/90 px-5 py-4 text-center backdrop-blur">
              <div className="text-2xl font-bold text-brand-teal">0%</div>
              <div className="text-xs text-ink-muted">Management work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

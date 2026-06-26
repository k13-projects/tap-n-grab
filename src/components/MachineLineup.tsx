import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Picture from '@/components/Picture';
import { MACHINES, ZONES, STATUS_LABELS, type Machine, type ZoneKey } from '@/data/machines';

const ZONE_CLASS: Record<ZoneKey, string> = {
  pantry: 'bg-zone-pantry',
  chill: 'bg-zone-chill',
  frost: 'bg-zone-frost',
};

function StatusBadge({ status }: { status: Machine['status'] }) {
  const styles =
    status === 'flagship'
      ? 'bg-brand-teal text-white'
      : status === 'new'
        ? 'bg-zone-chill/15 text-zone-chill ring-1 ring-zone-chill/30'
        : 'bg-white/5 text-ink-muted ring-1 ring-ink-3';
  return (
    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}

const MachineLineup = () => {
  const [activeId, setActiveId] = useState(MACHINES[0].id);
  const active = MACHINES.find((m) => m.id === activeId) ?? MACHINES[0];

  return (
    <section id="machines" className="bg-gradient-ink py-24 text-ink-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            The Lineup
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            One platform. Every footprint.
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            From a single cooler to a full modular market wall — mix temperature
            zones to fit any community, all behind the same effortless tap.
          </p>
        </div>

        {/* Selector */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {MACHINES.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveId(m.id)}
              aria-pressed={m.id === activeId}
              className={`inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                m.id === activeId
                  ? 'bg-brand-teal text-white shadow-glow'
                  : 'bg-white/5 text-ink-muted ring-1 ring-ink-3 hover:bg-white/10 hover:text-ink-foreground'
              }`}
            >
              {m.shortName}
            </button>
          ))}
        </div>

        {/* Active machine spotlight */}
        <div className="grid items-center gap-10 rounded-3xl border border-ink-3 bg-ink-2/60 p-6 backdrop-blur-sm lg:grid-cols-2 lg:p-10">
          <div className="overflow-hidden rounded-2xl border border-ink-3 bg-black/40 shadow-glow">
            <Picture
              src={active.image}
              alt={`${active.name} smart store`}
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <StatusBadge status={active.status} />
              <span className="text-sm text-ink-muted">{active.bestFor}</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">{active.name}</h3>
            <p className="mt-1 text-lg font-medium text-brand-teal">{active.tagline}</p>
            <p className="mt-4 text-ink-muted">{active.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {active.zones.map((zone, i) => (
                <span
                  key={`${zone}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-ink-muted ring-1 ring-ink-3"
                >
                  <span className={`h-2 w-2 rounded-full ${ZONE_CLASS[zone]}`} />
                  {ZONES[zone].name} · {ZONES[zone].temp}
                </span>
              ))}
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-3 bg-ink-3 sm:grid-cols-4">
              {active.specs.map((spec) => (
                <div key={spec.label} className="bg-ink-2 p-4 text-center">
                  <dt className="text-[11px] uppercase tracking-wide text-ink-muted">{spec.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="group">
                <Link to="/property-managers">
                  Schedule a Tour
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-3 bg-transparent text-ink-foreground hover:bg-white/5 hover:text-white"
              >
                <Link to="/gallery">See it in a community</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineLineup;

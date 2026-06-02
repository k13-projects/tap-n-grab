import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MACHINES, ZONES, STATUS_LABELS, type Machine, type ZoneKey } from '@/data/machines';

const ZONE_CLASS: Record<ZoneKey, string> = {
  pantry: 'bg-zone-pantry',
  chill: 'bg-zone-chill',
  frost: 'bg-zone-frost',
};

/** Original CSS rendering of a glass-front cabinet with glowing temperature bays. */
function MachineGlyph({ machine }: { machine: Machine }) {
  return (
    <div className="flex h-44 items-end justify-center gap-1.5" aria-hidden="true">
      {machine.zones.map((zone, i) => (
        <div
          key={`${zone}-${i}`}
          className="relative flex h-full w-12 flex-col overflow-hidden rounded-md border border-ink-3 bg-ink-2 sm:w-14"
        >
          {/* glass glow */}
          <span
            className={`absolute inset-x-0 top-0 h-1 ${ZONE_CLASS[zone]}`}
          />
          <span
            className={`absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full ${ZONE_CLASS[zone]} opacity-20 blur-xl`}
          />
          {/* faux shelves */}
          <div className="mt-3 flex flex-1 flex-col justify-evenly px-1.5">
            {[0, 1, 2, 3].map((s) => (
              <span key={s} className="h-1.5 rounded-sm bg-white/10" />
            ))}
          </div>
          {/* zone label */}
          <span className="pb-1 text-center text-[9px] font-semibold uppercase tracking-wider text-ink-muted">
            {ZONES[zone].name}
          </span>
        </div>
      ))}
    </div>
  );
}

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
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
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
        <div className="grid items-center gap-10 rounded-3xl border border-ink-3 bg-ink-2/60 p-8 backdrop-blur-sm lg:grid-cols-2 lg:p-12">
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border border-ink-3 bg-gradient-glass p-8 shadow-glow">
              <MachineGlyph machine={active} />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
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
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <StatusBadge status={active.status} />
              <span className="text-sm text-ink-muted">{active.bestFor}</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight">{active.name}</h3>
            <p className="mt-1 text-lg font-medium text-brand-teal">{active.tagline}</p>
            <p className="mt-4 text-ink-muted">{active.description}</p>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-3 bg-ink-3 sm:grid-cols-4">
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

import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake, Refrigerator, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MachineLineup from '@/components/MachineLineup';
import { Button } from '@/components/ui/button';
import { MACHINES, ZONES, STATUS_LABELS, type ZoneKey } from '@/data/machines';

const ZONE_META: Record<ZoneKey, { icon: typeof Snowflake; ring: string; dot: string; text: string }> = {
  pantry: { icon: Package, ring: 'ring-zone-pantry/30', dot: 'bg-zone-pantry', text: 'text-zone-pantry' },
  chill: { icon: Refrigerator, ring: 'ring-zone-chill/30', dot: 'bg-zone-chill', text: 'text-zone-chill' },
  frost: { icon: Snowflake, ring: 'ring-zone-frost/30', dot: 'bg-zone-frost', text: 'text-zone-frost' },
};

const Machines = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Dark intro band */}
        <section className="bg-gradient-ink pt-40 pb-24 text-ink-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
              The Machines
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              A smart store that fits any community.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
              Four models, one effortless tap. Start with a single cooler or
              build a full modular market wall — every Tap-N-Grab machine shares
              the same premium glass-front design and hands-off operation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
                <a href="#machines">Compare the lineup</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Interactive spotlight (reused) */}
        <MachineLineup />

        {/* Temperature zones explainer */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
                Temperature Zones
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                Three ways to keep it fresh
              </h2>
              <p className="mt-4 text-lg text-brand-gray">
                Every modular machine is built from glass-front bays. Mix the
                zones your community actually reaches for.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {(Object.keys(ZONES) as ZoneKey[]).map((key) => {
                const zone = ZONES[key];
                const meta = ZONE_META[key];
                const Icon = meta.icon;
                return (
                  <div
                    key={key}
                    className={`rounded-2xl border border-border bg-gradient-card p-8 shadow-soft ring-1 ${meta.ring}`}
                  >
                    <div className={`inline-flex rounded-xl bg-brand-teal-light p-3 ${meta.text}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${meta.dot}`} />
                      <h3 className="text-xl font-bold text-brand-dark">{zone.name}</h3>
                      <span className="ml-auto text-xs font-semibold uppercase tracking-wide text-brand-gray">
                        {zone.temp}
                      </span>
                    </div>
                    <p className="mt-3 text-brand-gray">{zone.carries}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Full comparison grid */}
        <section className="bg-brand-teal-light py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                The full lineup
              </h2>
              <p className="mt-4 text-lg text-brand-gray">
                From boutique buildings to flagship towers — there's a footprint
                for every community.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MACHINES.map((m) => (
                <div
                  key={m.id}
                  className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        m.status === 'flagship'
                          ? 'bg-brand-teal text-white'
                          : m.status === 'new'
                            ? 'bg-zone-chill/15 text-zone-chill ring-1 ring-zone-chill/30'
                            : 'bg-brand-teal-light text-brand-gray'
                      }`}
                    >
                      {STATUS_LABELS[m.status]}
                    </span>
                    <div className="flex gap-1">
                      {m.zones.map((z, i) => (
                        <span key={`${z}-${i}`} className={`h-2 w-2 rounded-full ${ZONE_META[z].dot}`} />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-teal">{m.tagline}</p>
                  <p className="mt-3 flex-1 text-sm text-brand-gray">{m.bestFor}</p>
                  <dl className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
                    {m.specs.map((s) => (
                      <div key={s.label} className="flex justify-between">
                        <dt className="text-brand-gray">{s.label}</dt>
                        <dd className="font-medium text-brand-dark">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/property-managers">
                  Find the right fit for your property
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Machines;

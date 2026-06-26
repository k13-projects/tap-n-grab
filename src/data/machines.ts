/**
 * Tap-N-Grab machine lineup.
 *
 * The lineup keeps the original all-in-one Market and adds a modular,
 * temperature-zoned smart-store system (Duo / Trio) for larger communities.
 * Each "zone" is a glass-front bay tuned to a temperature band.
 */

export type ZoneKey = 'pantry' | 'chill' | 'frost';

export interface Zone {
  key: ZoneKey;
  name: string;
  /** Plain-language temperature description. */
  temp: string;
  /** What this bay is merchandised with. */
  carries: string;
  /** Tailwind-friendly HSL token name defined in index.css. */
  accentVar: string;
}

export const ZONES: Record<ZoneKey, Zone> = {
  pantry: {
    key: 'pantry',
    name: 'Pantry',
    temp: 'Ambient',
    carries: 'Snacks, grab-and-go meals, everyday essentials',
    accentVar: '--zone-pantry',
  },
  chill: {
    key: 'chill',
    name: 'Chill',
    temp: 'Refrigerated',
    carries: 'Cold drinks, fresh food, dairy, craft beverages',
    accentVar: '--zone-chill',
  },
  frost: {
    key: 'frost',
    name: 'Frost',
    temp: 'Frozen',
    carries: 'Ice cream, frozen meals, late-night treats',
    accentVar: '--zone-frost',
  },
};

export interface Machine {
  id: string;
  /** Marketing model name, e.g. "Tap-N-Grab Trio". */
  name: string;
  /** Short model label used in compact UI. */
  shortName: string;
  status: 'new' | 'flagship' | 'classic';
  tagline: string;
  description: string;
  /** Glass-front bays this configuration ships with. */
  zones: ZoneKey[];
  /** Recommended community size. */
  bestFor: string;
  /** Headline spec chips. */
  specs: { label: string; value: string }[];
  /** Approximate footprint, width in inches. */
  footprintIn: number;
  /** Photographic product shot (.png; Picture resolves the .avif sibling). */
  image: string;
}

export const MACHINES: Machine[] = [
  {
    id: 'trio',
    name: 'Tap-N-Grab Trio',
    shortName: 'Trio',
    status: 'flagship',
    tagline: 'The full market, in one wall.',
    description:
      'Our flagship three-bay smart store. Pantry, Chill, and Frost side by side give residents a complete corner store — ambient snacks, cold drinks, and frozen treats — behind a single tap.',
    zones: ['pantry', 'chill', 'frost'],
    bestFor: '200+ unit communities & flagship lobbies',
    specs: [
      { label: 'Bays', value: '3 zones' },
      { label: 'SKUs', value: 'Up to 320' },
      { label: 'Checkout', value: 'Tap & grab' },
      { label: 'Restock', value: 'Data-driven' },
    ],
    footprintIn: 108,
    image: '/lovable-uploads/tng-smart-store.png',
  },
  {
    id: 'duo',
    name: 'Tap-N-Grab Duo',
    shortName: 'Duo',
    status: 'new',
    tagline: 'Cold and convenient, paired.',
    description:
      'A two-bay smart store pairing Chill and Pantry. The right-sized amenity for mid-size buildings that want fresh drinks and snacks without a full market wall.',
    zones: ['chill', 'pantry'],
    bestFor: '120–250 unit communities',
    specs: [
      { label: 'Bays', value: '2 zones' },
      { label: 'SKUs', value: 'Up to 210' },
      { label: 'Checkout', value: 'Tap & grab' },
      { label: 'Restock', value: 'Data-driven' },
    ],
    footprintIn: 72,
    image: '/lovable-uploads/tng-smart-store-duo.png',
  },
  {
    id: 'market',
    name: 'Tap-N-Grab Market',
    shortName: 'Market',
    status: 'classic',
    tagline: 'The original all-in-one.',
    description:
      'The smart market that started it all. One glass-front cabinet with a curated mix of snacks and cold drinks — the proven amenity now thousands of residents reach for every day.',
    zones: ['chill', 'pantry'],
    bestFor: 'Established communities of any size',
    specs: [
      { label: 'Bays', value: 'All-in-one' },
      { label: 'SKUs', value: 'Up to 150' },
      { label: 'Checkout', value: 'Tap & grab' },
      { label: 'Restock', value: 'Managed' },
    ],
    footprintIn: 40,
    image: '/lovable-uploads/tng-machine-lobby.png',
  },
  {
    id: 'mini',
    name: 'Tap-N-Grab Mini',
    shortName: 'Mini',
    status: 'new',
    tagline: 'Big convenience, small footprint.',
    description:
      'A compact single-door cooler for smaller lobbies and high-friction corners. Slips into tight spaces and still delivers the full tap-and-grab experience.',
    zones: ['chill'],
    bestFor: 'Boutique buildings under 120 units',
    specs: [
      { label: 'Bays', value: '1 zone' },
      { label: 'SKUs', value: 'Up to 80' },
      { label: 'Checkout', value: 'Tap & grab' },
      { label: 'Restock', value: 'Managed' },
    ],
    footprintIn: 28,
    image: '/lovable-uploads/tng-hero-lobby.png',
  },
];

export const STATUS_LABELS: Record<Machine['status'], string> = {
  flagship: 'Flagship',
  new: 'New',
  classic: 'Original',
};

// Business data + homepage SEO now live in business.json, edited via the
// Keystatic backend (/keystatic). Everything below still imports BIZ/SEO the
// same way, so pages don't change when the client edits their details.
import business from './business.json';

export const BIZ = {
  name: business.name,
  legalName: business.legalName,
  tagline: business.tagline,
  phone: business.phone,
  phoneHref: business.phoneHref,
  email: business.email,
  licence: business.licence,
  abn: business.abn,
  base: business.base,
  geo: { lat: business.lat, lng: business.lng },
  rating: business.rating,
  reviewCount: business.reviewCount,
  yearsTrading: business.yearsTrading,
  url: business.url,
};

// Editable homepage metadata (title tag + meta description).
export const SEO = {
  title: business.seoTitle,
  description: business.seoDescription,
};

export const SERVICES = [
  {
    slug: 'switchboard-upgrades',
    code: '01',
    title: 'Switchboard upgrades',
    short: 'Old fuse boxes replaced with modern boards, safety switches on every circuit, certified to AS/NZS 3000.',
    from: 'from $1,450',
    body: [
      'If your switchboard still runs ceramic fuses or has no safety switches, it was built for a house that owned one TV and a kettle. Modern loads need modern protection.',
      'A switchboard upgrade replaces the old board with a new panel: RCD safety switches on every circuit, circuit breakers sized to your actual wiring, surge protection, and clear labelling so any future electrician knows exactly what they are looking at.',
      'Every upgrade is tested end to end and you get a Certificate of Compliance for Electrical Work (CCEW) when the job is done.',
    ],
    faqs: [
      { q: 'How do I know if my switchboard needs upgrading?', a: 'Warning signs: ceramic fuses, no safety switches (RCDs), breakers that trip often, flickering lights, or a board installed before the 1990s. If your board has asbestos backing panels it should be replaced by law when worked on.' },
      { q: 'How long does a switchboard upgrade take?', a: 'Most residential switchboard upgrades take half a day to a full day. Power is off for part of that time and back on before I leave.' },
      { q: 'Do I get a compliance certificate?', a: 'Yes. Every switchboard upgrade comes with a Certificate of Compliance for Electrical Work (CCEW) as required in NSW.' },
    ],
  },
  {
    slug: 'lighting-and-downlights',
    code: '02',
    title: 'Lighting & downlights',
    short: 'LED downlight installs and replacements, dimmers, outdoor and garden lighting, designed and certified.',
    from: 'from $95 per point',
    body: [
      'Lighting is the cheapest renovation a house can get. Swapping old halogens for quality LED downlights cuts the running cost by around 80% and removes a real fire risk from your ceiling.',
      'I install and replace downlights, pendants, wall lights, dimmers, sensor lights and outdoor lighting. Everything is wired to AS/NZS 3000 and IC-rated fittings are used where insulation is present.',
      'For new builds and renovations I can plan the lighting layout with you before the plasterer shows up, which is exactly when it should happen.',
    ],
    faqs: [
      { q: 'Can I replace halogen downlights with LED myself?', a: 'Plug-in lamps yes, but anything hardwired must legally be done by a licensed electrician in Australia. Halogen transformers usually need replacing too, which is licensed work.' },
      { q: 'How much do LED downlights cost to install?', a: 'Typically from $95 per point installed including a quality IC-rated LED fitting, with better pricing for whole-house jobs. You get a fixed quote before work starts.' },
    ],
  },
  {
    slug: 'power-points-and-rewiring',
    code: '03',
    title: 'Power points & rewiring',
    short: 'New power points, USB outlets, dedicated circuits, and full or partial house rewires on older homes.',
    from: 'from $180',
    body: [
      'Not enough power points is the most common complaint in older homes, and powerboards daisy-chained behind the TV are how house fires start.',
      'I add new power points, USB-C outlets, dedicated circuits for ovens, air conditioners and workshops, and run full or partial rewires on homes still carrying cloth-insulated or rubber wiring.',
      'Rewires are quoted room by room so you can stage the work. All new circuits are protected by safety switches and certified on completion.',
    ],
    faqs: [
      { q: 'How do I know if my house needs rewiring?', a: 'Homes wired before the 1970s often carry rubber or cloth insulated cable that becomes brittle and dangerous. Warning signs: crumbling insulation at fittings, frequent trips, buzzing outlets, or two-pin sockets. An inspection can confirm it in under an hour.' },
      { q: 'How much does it cost to add a power point?', a: 'A standard new power point starts around $180 installed, depending on wall type and cable run. Multiple points in one visit bring the per-point price down.' },
    ],
  },
  {
    slug: 'safety-inspections-and-smoke-alarms',
    code: '04',
    title: 'Safety inspections & smoke alarms',
    short: 'Full electrical safety inspections with a written report, plus interconnected photoelectric smoke alarms.',
    from: 'from $280',
    body: [
      'An electrical safety inspection covers the switchboard, wiring condition, earthing, safety switches, smoke alarms and every accessible fitting, finished with a written report in plain English: what is safe, what needs attention, and what it will cost.',
      'Ideal before buying a home, after buying one, or for landlords meeting NSW rental compliance obligations.',
      'I supply and install interconnected photoelectric smoke alarms to AS 3786, hardwired with battery backup, which is what current standards expect.',
    ],
    faqs: [
      { q: 'What does an electrical safety inspection include?', a: 'Switchboard condition, safety switch testing, wiring condition, earthing system, smoke alarms, and visual checks of accessible outlets and fittings. You get a written report with photos and prioritised recommendations.' },
      { q: 'What smoke alarms are required in NSW?', a: 'At least one working smoke alarm per level of the home. Photoelectric, interconnected alarms are the current recommendation, and hardwired alarms must be installed by a licensed electrician.' },
    ],
  },
  {
    slug: 'ev-charger-installation',
    code: '05',
    title: 'EV charger installation',
    short: 'Home EV charging installed properly: load assessment, dedicated circuit, any major charger brand.',
    from: 'from $990',
    body: [
      'A wall charger turns an EV from a planning exercise into a car that is simply full every morning. But a 7kW charger is the biggest single load in your house, and it needs a proper load assessment, not just a big cable.',
      'I install Tesla Wall Connectors, Zappi, Fronius, Wallbox and most major brands on a dedicated protected circuit, with load management where the switchboard needs it.',
      'If your board cannot take the extra load, I will tell you before any work starts and quote the upgrade as a separate line, not a surprise.',
    ],
    faqs: [
      { q: 'Can I charge my EV from a normal power point?', a: 'Yes, at about 10km of range per hour. A dedicated 7kW wall charger adds around 40km per hour and charges overnight easily. The wall charger also protects the circuit properly for continuous load.' },
      { q: 'Does my switchboard need upgrading for an EV charger?', a: 'Sometimes. A load assessment during the quote tells you before anything is installed. Many modern boards take a charger with a simple circuit addition; older boards may need an upgrade first.' },
    ],
  },
  {
    slug: 'emergency-electrician',
    code: '06',
    title: 'Emergency electrician',
    short: 'No power, burning smells, sparking outlets, storm damage. 24/7 across Sydney metro.',
    from: '24/7 call-out',
    body: [
      'Some electrical problems wait until Monday. Sparking outlets, burning smells, buzzing switchboards and total power loss do not.',
      'I run a 24/7 emergency line across the Sydney metro area. You get a straight answer on the phone about whether it is dangerous, what to switch off, and how fast I can be there.',
      'Emergency work is made safe first, then quoted properly for the permanent fix. No 2am invoice surprises.',
    ],
    faqs: [
      { q: 'What counts as an electrical emergency?', a: 'Burning smells from outlets or the switchboard, sparking, buzzing, water in electrical fittings, repeated tripping you cannot reset, or full power loss when your neighbours still have power. If in doubt, call — the phone advice is free.' },
      { q: 'What should I do while waiting for an emergency electrician?', a: 'Turn off the main switch at the switchboard if it is safe to reach, unplug appliances in the affected area, and keep everyone away from anything that is sparking, hot, or wet.' },
    ],
  },
] as const;

export const SUBURBS = [
  'Marrickville', 'Newtown', 'Dulwich Hill', 'Petersham', 'Stanmore',
  'Leichhardt', 'Ashfield', 'Summer Hill', 'Earlwood', 'Tempe',
  'Alexandria', 'Erskineville', 'St Peters', 'Sydenham', 'Balmain',
];

// Fault-finder triage tree: symptom → one refinement → fixed price band.
export type TriageResult = {
  band: string;
  when: string;
  note: string;
  href: string;
  cta: string;
  emergency?: boolean;
};
export type TriageOption = { label: string; result: TriageResult };
export type TriageFault = {
  code: string;
  label: string;
  ask?: string;
  options?: TriageOption[];
  result?: TriageResult;
};

export const TRIAGE: TriageFault[] = [
  {
    code: 'F-01',
    label: 'Power is out or keeps tripping',
    ask: 'How much of the place is affected?',
    options: [
      {
        label: 'One circuit — some lights or outlets',
        result: {
          band: '$180 – $320',
          when: 'SAME DAY',
          note: 'Fault-find on the affected circuit, fixed price confirmed on the phone before the van moves. Most single-circuit faults are found and fixed in one visit.',
          href: '/services/power-points-and-rewiring/',
          cta: 'Book a fault-find',
        },
      },
      {
        label: 'The whole house',
        result: {
          band: 'FIXED PHONE QUOTE',
          when: '24/7 · PRIORITY',
          note: 'If your neighbours still have power, this is a supply or switchboard fault and it jumps the queue. Phone advice is free — you will know what to switch off before I arrive.',
          href: '/services/emergency-electrician/',
          cta: 'Call the emergency line',
          emergency: true,
        },
      },
    ],
  },
  {
    code: 'F-02',
    label: 'Old switchboard or ceramic fuses',
    ask: 'How big is the home?',
    options: [
      {
        label: '1–2 bedrooms / unit',
        result: {
          band: '$1,450 – $1,950',
          when: 'THIS WEEK',
          note: 'Full board replacement: RCD safety switches on every circuit, surge protection, labelled, tested and CCEW-certified. Power back on the same day.',
          href: '/services/switchboard-upgrades/',
          cta: 'Get the fixed quote',
        },
      },
      {
        label: '3+ bedrooms / house',
        result: {
          band: '$1,950 – $2,800',
          when: 'THIS WEEK',
          note: 'Bigger board, more circuits, same standard: safety switches on everything, surge protection, clear labelling, tested end to end with a CCEW on completion.',
          href: '/services/switchboard-upgrades/',
          cta: 'Get the fixed quote',
        },
      },
    ],
  },
  {
    code: 'F-03',
    label: 'Need more power points',
    ask: 'How many are we talking?',
    options: [
      {
        label: 'One or two points',
        result: {
          band: 'FROM $180 / POINT',
          when: 'THIS WEEK',
          note: 'Standard new point installed from $180 depending on wall type and cable run — USB-C outlets available. Exact fixed price before work starts.',
          href: '/services/power-points-and-rewiring/',
          cta: 'Get the fixed quote',
        },
      },
      {
        label: 'A whole room or the house',
        result: {
          band: 'QUOTED ROOM BY ROOM',
          when: 'INSPECTION FIRST',
          note: 'Multiple points in one visit brings the per-point price down, and older wiring gets checked while the walls are open. Quoted room by room so you can stage it.',
          href: '/services/power-points-and-rewiring/',
          cta: 'Book the inspection',
        },
      },
    ],
  },
  {
    code: 'F-04',
    label: 'Lighting or downlights',
    ask: 'What is the scope?',
    options: [
      {
        label: 'A few fittings (up to ~6)',
        result: {
          band: 'FROM $95 / POINT',
          when: 'THIS WEEK',
          note: 'Quality IC-rated LED fittings supplied and installed from $95 per point — cuts running cost ~80% versus halogen and removes a fire risk from the ceiling.',
          href: '/services/lighting-and-downlights/',
          cta: 'Get the fixed quote',
        },
      },
      {
        label: 'Whole house / renovation',
        result: {
          band: 'WHOLE-HOUSE RATE',
          when: 'PLANNED WITH YOU',
          note: 'Whole-house jobs get a better per-point rate and a lighting plan before the plasterer shows up — which is exactly when it should happen.',
          href: '/services/lighting-and-downlights/',
          cta: 'Plan the lighting',
        },
      },
    ],
  },
  {
    code: 'F-05',
    label: 'Want an EV charger',
    ask: 'What is your switchboard like?',
    options: [
      {
        label: 'Modern board with breakers',
        result: {
          band: '$990 – $1,400',
          when: 'THIS WEEK',
          note: 'Dedicated protected circuit, load assessment included, any major brand — Tesla, Zappi, Fronius, Wallbox. Charging overnight from day one.',
          href: '/services/ev-charger-installation/',
          cta: 'Get the fixed quote',
        },
      },
      {
        label: 'Old board / not sure',
        result: {
          band: 'ASSESSED FIRST',
          when: 'LOAD CHECK IN THE QUOTE',
          note: 'A 7kW charger is the biggest single load in the house. The load assessment happens at quote time — if the board needs upgrading you hear it before any work starts, as a separate line, not a surprise.',
          href: '/services/ev-charger-installation/',
          cta: 'Book the assessment',
        },
      },
    ],
  },
  {
    code: 'F-06',
    label: 'Burning smell, sparks or buzzing',
    result: {
      band: 'STOP — MAKE IT SAFE',
      when: 'RIGHT NOW · 24/7',
      note: 'Turn off the main switch at the switchboard if it is safe to reach, unplug appliances in the affected area, and keep everyone away from anything sparking, hot or wet. Then call — the phone advice is free.',
      href: '/services/emergency-electrician/',
      cta: 'Call the emergency line',
      emergency: true,
    },
  },
];

export const HOME_FAQS = [
  { q: 'Are you a licensed electrician?', a: 'Yes — NSW Lic 345678C, fully insured, and every job is certified with a CCEW where required. Licence details are on every quote and invoice.' },
  { q: 'Do you charge a call-out fee?', a: 'No call-out fee for quoted work in the service area. Emergency call-outs have a fixed attendance fee that is quoted on the phone before I get in the van.' },
  { q: 'How fast can you come out?', a: 'Emergencies: same day, 24/7. Quoted work: usually within the week. You get an arrival window by SMS, not a "sometime Thursday".' },
  { q: 'Do you give fixed quotes?', a: 'Yes. You approve a fixed price before work starts. If something unexpected turns up inside a wall, you hear about it and approve it before it is touched.' },
  { q: 'Which areas do you cover?', a: 'Sydney Inner West as the home patch — Marrickville, Newtown, Leichhardt, Ashfield and surrounds — plus greater Sydney metro for larger jobs and emergencies.' },
];

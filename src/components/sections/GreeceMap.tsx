"use client";

const MAINLAND =
  "M158.5 11.4 L164.6 19.7 L158.6 36.6 L155.5 47.6 L141.1 45.2 L123.8 45.9 L108.3 50.8 L106.6 64.2 L114.4 72.5 L103.5 69.6 L108.3 82.7 L98.2 78.2 L94.9 72.4 L84.3 57.7 L79.2 76.4 L93.2 107.3 L91.9 113.4 L87.0 117.5 L79.8 126.4 L91.2 135.5 L108.7 151.5 L110.6 174.5 L99.7 161.3 L89.0 167.6 L95.7 179.1 L93.6 188.0 L87.1 182.3 L88.2 202.7 L90.6 225.7 L80.1 212.4 L75.1 215.5 L66.2 203.8 L58.3 195.3 L52.1 171.9 L54.6 154.7 L66.2 149.6 L86.6 164.4 L92.2 157.2 L84.8 153.1 L73.9 148.1 L58.0 149.1 L52.4 147.5 L41.3 129.8 L49.3 125.2 L41.4 121.6 L28.9 99.8 L29.2 95.4 L32.6 89.8 L32.1 81.6 L38.8 76.5 L41.9 63.1 L45.8 52.0 L54.6 44.3 L67.1 35.2 L79.9 34.8 L88.8 27.3 L101.7 24.8 L110.6 19.1 L121.4 21.6 L130.4 25.7 L145.9 27.7 L154.8 19.3 L155.9 10.3 Z";

const CRETE =
  "M106.3 263 L111.4 260.6 L114.8 265.7 L122.7 268.1 L130.7 268.1 L140.6 272.3 L146.0 270.6 L146.1 277.3 L152.3 276 L157.7 272.2 L157.1 280.9 L152.7 284.2 L134.9 286.5 L125.2 286.8 L119.2 278.3 L107.0 274.7 L100.8 274.3 L99.8 267.9 L101.1 261.7 L105.1 262.2 Z";

const EVIA =
  "M97.1 123.7 L101.7 131.3 L111.6 135.3 L114.1 148.9 L119.2 156.7 L121.7 161.8 L118.3 162 L113.5 156.5 L110.8 149 L104.3 146.4 L99.0 137.7 L91.3 128.3 L85.8 128.2 L91.4 121.8 L97.1 123.7 Z";

const ISLANDS = [
  "M160.4 108.5 L164.3 120 L159.9 123 L154.0 118.7 L149.8 110.2 L155.2 106.8 Z", // Lesvos
  "M190.7 247 L188.0 238.4 L192.1 230 L198.9 226.4 L197.0 235.5 L193.3 242.2 Z", // Rhodes
  "M26.6 104.4 L20.9 98.2 L17.5 90.7 L22.6 89.5 L22.0 93.8 L23.4 101.4 Z", // Corfu
  "M37.8 147.1 L41.6 156.9 L37.7 157.8 L34.5 153.1 L33.6 149 L36.8 143.3 Z", // Zakynthos
  "M153.7 153.8 L149.4 152.8 L150.9 145.7 L148.5 139.3 L154.0 140.5 L155.0 150.4 Z", // Chios
];

const NODES = [
  [87.6, 55.7], // Thessaloniki
  [44.2, 94.0], // Ioannina
  [104.0, 160.6], // Athens
  [62.5, 150.0], // Patra
  [133.0, 272.0], // Crete
  [194.0, 236.0], // Rhodes
];

export function GreeceMap() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(22,155,255,0.2),transparent_55%)]" />
      <div className="relative">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-electric-bright uppercase">
          Περιοχή δραστηριοποίησης
        </p>
        <svg
          viewBox="0 0 230 300"
          className="mx-auto h-auto w-full max-w-[250px]"
          role="img"
          aria-label="Σκίτσο χάρτη Ελλάδας με σημεία δραστηριότητας"
        >
          <defs>
            <filter id="greece-glow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="greece-fill" x1="20%" y1="0%" x2="85%" y2="100%">
              <stop offset="0%" stopColor="rgba(22,155,255,0.16)" />
              <stop offset="100%" stopColor="rgba(8,24,39,0.85)" />
            </linearGradient>
          </defs>

          <path
            d={MAINLAND}
            fill="url(#greece-fill)"
            stroke="#4DB8FF"
            strokeWidth="1.65"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#greece-glow)"
          />
          <path
            d={CRETE}
            fill="url(#greece-fill)"
            stroke="#4DB8FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
            filter="url(#greece-glow)"
          />
          <path
            d={EVIA}
            fill="rgba(10,28,45,0.7)"
            stroke="rgba(77,184,255,0.85)"
            strokeWidth="1.25"
            strokeLinejoin="round"
            filter="url(#greece-glow)"
          />
          {ISLANDS.map((d) => (
            <path
              key={d.slice(0, 24)}
              d={d}
              fill="rgba(10,28,45,0.65)"
              stroke="rgba(77,184,255,0.7)"
              strokeWidth="1.1"
              strokeLinejoin="round"
              filter="url(#greece-glow)"
            />
          ))}

          {NODES.map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="7.5" fill="rgba(22,155,255,0.16)" />
              <circle cx={cx} cy={cy} r="3" fill="#67D9FF" filter="url(#greece-glow)" />
            </g>
          ))}
        </svg>
        <div className="mt-4 text-center">
          <p className="font-display text-2xl font-semibold text-ink">Ελλάδα</p>
          <p className="text-electric-bright">& Εξωτερικό</p>
        </div>
      </div>
    </div>
  );
}

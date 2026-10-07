"use client";

export function GreeceMap() {
  return (
    <div className="glass relative overflow-hidden rounded-2xl p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(22,155,255,0.18),transparent_55%)]" />
      <div className="relative">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-electric-bright uppercase">
          Περιοχή δραστηριοποίησης
        </p>
        <svg
          viewBox="0 0 320 280"
          className="mx-auto h-auto w-full max-w-[280px]"
          role="img"
          aria-label="Στυλιζαρισμένος χάρτης Ελλάδας με σημεία δραστηριότητας"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M118 28c18-6 42-8 62 2 14 7 24 20 28 36 6 22 2 40-8 54l18 10c12 8 20 22 18 38-3 22-22 34-42 38l-8 22c-4 10-14 16-26 14-16-2-24-14-22-28l4-18c-20 2-40-6-52-22-14-18-16-42-8-62 6-14 16-22 28-28l8-20c4-12 14-18 28-18Z"
            fill="rgba(10,28,45,0.65)"
            stroke="rgba(77,184,255,0.55)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          <path
            d="M210 168c22 4 40 18 46 38 4 14-2 28-16 34-12 5-26 2-34-8l-12-18c-4-8 0-18 8-24 4-4 6-10 8-22Z"
            fill="rgba(10,28,45,0.55)"
            stroke="rgba(77,184,255,0.45)"
            strokeWidth="1.2"
          />
          {[
            [145, 72],
            [168, 110],
            [132, 138],
            [188, 152],
            [220, 198],
            [112, 168],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="8" fill="rgba(22,155,255,0.15)" />
              <circle cx={cx} cy={cy} r="3.5" fill="#4DB8FF" filter="url(#glow)" />
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

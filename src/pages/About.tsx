export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-3xl mx-auto">
      <p className="text-xs tracking-[0.15em] uppercase mb-8" style={{ color: 'var(--color-muted)' }}>
        About
      </p>

      <h2
        className="text-5xl mb-12"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}
      >
        Self introduction
      </h2>

      <div className="space-y-6 text-base leading-relaxed" style={{ color: 'var(--color-ink)', fontWeight: 300 }}>
        <p>
          東京在住・在学の高校２年生。
          主に C++ で競技プログラミングをしています。
        </p>
        <p>
          競技科学に関心があり、情報オリンピックのほか、数学オリンピックなどに出場しました。物理チャレンジに挑戦してみようか迷っているところです。
        </p>
        <p>
          フィギュアスケート観戦や映画鑑賞、最近はあまりやっていませんが Hoyoverse 社のゲームが好きです。
        </p>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <p className="text-xs tracking-[0.15em] uppercase mb-6" style={{ color: 'var(--color-muted)' }}>
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {['C++', 'Python', 'Pandas'].map(s => (
            <span
              key={s}
              className="px-4 py-1.5 text-sm"
              style={{
                border: '1px solid rgba(26,25,23,0.15)',
                borderRadius: '999px',
                color: 'var(--color-ink)',
                fontWeight: 300,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
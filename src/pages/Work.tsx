const works = [
  {
    num: '01',
    title: 'xxxxxx',
    desc: 'ここに説明文が入る',
    tags: ['タグ', 'タグ'],
    year: '2026',
  },
  {
    num: '02',
    title: 'xxxxxx',
    desc: 'ここに説明文が入る',
    tags: ['タグ', 'タグ'],
    year: '2026',
  },
  {
    num: '03',
    title: 'xxxxxx',
    desc: 'ここに説明文が入る',
    tags: ['タグ', 'タグ'],
    year: '2026',
  },
]

export default function Work() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-3xl mx-auto">
      <p className="text-xs tracking-[0.15em] uppercase mb-8" style={{ color: 'var(--color-muted)' }}>
        Work
      </p>
      <h2
        className="text-5xl mb-16"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Selected works
      </h2>
      <p className="text-base mb-16 leading-relaxed" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
        やりたかっただけ　何か作ったら載せる
      </p>
      <div className="space-y-0">
        {works.map((w, i) => (
          <div
            key={w.num}
            className="group py-8 flex gap-8 items-start cursor-pointer"
            style={{
              borderTop: '1px solid rgba(26,25,23,0.1)',
              borderBottom: i === works.length - 1 ? '1px solid rgba(26,25,23,0.1)' : 'none',
              transition: 'background 0.2s',
            }}
          >
            <span className="text-xs pt-1 w-6 shrink-0" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
              {w.num}
            </span>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-2">
                <h3
                  className="text-xl"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  {w.title}
                </h3>
                <span className="text-xs" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
                  {w.year}
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
                {w.desc}
              </p>
              <div className="flex gap-2">
                {w.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1"
                    style={{
                      border: '1px solid rgba(26,25,23,0.12)',
                      borderRadius: '999px',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
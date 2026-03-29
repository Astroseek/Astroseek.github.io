const sections = [
  {
    label: 'Manga',
    items: ['メダリスト', 'ONE PIECE', '僕のヒーローアカデミア', 'チ。-地球の運動について-'],
  },
  {
    label: 'Movies',
    items: ['ウィキッド ふたりの魔女 / 永遠の約束', 'The fall 落下の王国', 'モアナと伝説の海', 'トゥルーマン・ショー', 'ガタカ'],
  },
  {
    label: 'Music',
    items: ['IVE - Accendio', 'Mili - Salt, Pepper, Birds, and the Thought Police', '米津玄師 - BOW AND ARROW', 'Wicked - The girl in the bubble / For good', 'RADWIMPS - スパークル / すずめ'],
  },
  {
    label: 'Figure skating',
    items: ['Ilia Malinin', 'Alysa Liu', '島田麻央', '渡辺倫果'],
  },
]

export default function Likes() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-3xl mx-auto">
      <p className="text-xs tracking-[0.15em] uppercase mb-8" style={{ color: 'var(--color-muted)' }}>
        Likes
      </p>
      <h2
        className="text-5xl mb-16"
        style={{ fontFamily: 'var(--font-display)'}}
      >
        Things I love
      </h2>

      <div className="space-y-12">
        {sections.map(s => (
          <div key={s.label}>
            <p
              className="text-xs tracking-[0.12em] uppercase mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              {s.label}
            </p>
            <ul className="space-y-2">
              {s.items.map(item => (
                <li
                  key={item}
                  className="text-base flex items-center gap-3"
                  style={{ fontWeight: 300, color: 'var(--color-ink)' }}
                >
                  <span style={{ width: '16px', height: '1px', background: 'var(--color-accent)', display: 'inline-block', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
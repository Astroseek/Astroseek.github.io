const achievements = [
  {
    year: '2026',
    title: '第６回ヨーロッパ女子情報オリンピック イタリア大会 日本代表',
    desc: 'JOIG 25/26 ファイナル銀賞で選出',
  },
  {
    title: '情報処理学会 第88回全国大会 情報科学の達人 優秀ポスター発表賞',
    desc: 'タイトル：Bron-kerbosch algorithm における頂点探索順序の比較評価',
  },
  {
    title: 'IELTS Academic overall 7.5',
    desc: 'L7.5 R9.0 W6.5 S6.5',
  },
  {
    title: '第22回日本情報オリンピック 本選敢闘賞',
    desc: '323点逆ボーダー　JOIGでは優秀賞',
  },
  {
    title: '第１回日本女子数学オリンピック 銅賞',
    desc: 'この結果を受け、第15回ヨーロッパ女子数学オリンピック代表次席（派遣なし）',
  },
  {
    year: '2025',
    title: '第36回日本数学オリンピック 予選Aランク',
  },
  {
    title: '弓道初段',
  },
  {
    title: 'SuperCon 2025 / パソコン甲子園 / プログラミング甲子園 本選進出',
  },
  {
    title: '第５回ヨーロッパ女子情報オリンピック ドイツ大会 ６位 金メダル',
    desc: 'この結果を受け、文部科学大臣特別賞受賞',
  },
  {
    title: '第５回ヨーロッパ女子情報オリンピック ドイツ大会 日本代表',
    desc: 'JOIG24/25 銅賞、JOIG春季トレーニング2位で選出',
  },
  {
    year: '2024',
    title: 'GCI 2024 Winter 修了',
  },
  {
    title: '競技プログラミング 開始',
  },
]

export default function Achievement() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-3xl mx-auto">
      <p className="text-xs tracking-[0.15em] uppercase mb-8" style={{ color: 'var(--color-muted)' }}>
        Achievement
      </p>
      <h2
        className="text-5xl mb-16"
        style={{ fontFamily: 'var(--font-display)'}}
      >
        Milestones
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[52px] top-2 bottom-2"
          style={{ width: '1px', background: 'rgba(26,25,23,0.1)' }}
        />

        <div className="space-y-10">
          {achievements.map((a, i) => (
            <div key={i} className="flex gap-6 items-start">
              {/* Year */}
              <div className="w-12 shrink-0 text-right">
                <span className="text-xs" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
                  {a.year}
                </span>
              </div>
              {/* Dot */}
              <div className="shrink-0 mt-1.5 z-10">
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    border: '2px solid var(--color-paper)',
                    outline: '1px solid var(--color-accent)',
                  }}
                />
              </div>
              {/* Content */}
              <div className="pb-2">
                <h3
                  className="text-lg mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                >
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
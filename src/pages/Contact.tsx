const links = [
  {
    label: 'AtCoder',
    handle: '@Astroseek',
    url: 'https://atcoder.jp/users/Astroseek',
    desc: '競技プログラミングアカウント',
  },
  {
    label: 'Twitter / X',
    handle: '@astroseeeek',
    url: 'https://x.com/astroseeeek',
    desc: 'コンテスト結果・報告など',
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-8 max-w-3xl mx-auto">
      <p className="text-xs tracking-[0.15em] uppercase mb-8" style={{ color: 'var(--color-muted)' }}>
        Contact
      </p>
      <h2
        className="text-5xl mb-6"
        style={{ fontFamily: 'var(--font-display)'}}
      >
        Links
      </h2>
      <p className="text-base mb-16 leading-relaxed" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
        
      </p>

      {/* Email
      <a
        href="mailto:yourname@example.com"
        className="block mb-12 group"
        style={{ textDecoration: 'none' }}
      >
        <p className="text-xs tracking-[0.12em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>
          Email
        </p>
        <p
          className="text-2xl"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: 'var(--color-ink)',
            transition: 'opacity 0.2s',
          }}
        >
          yourname@example.com
        </p>
      </a> */}

      {/* SNS Links */}
      <div
        className="space-y-0"
        style={{ borderTop: '1px solid rgba(26,25,23,0.1)' }}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center py-5 group"
            style={{
              borderBottom: '1px solid rgba(26,25,23,0.1)',
              textDecoration: 'none',
              color: 'var(--color-ink)',
            }}
          >
            <div>
              <p className="text-sm font-medium mb-0.5">{l.label}</p>
              <p className="text-xs" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
                {l.desc}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm" style={{ color: 'var(--color-muted)', fontWeight: 300 }}>
                {l.handle}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '20px',
                  height: '1px',
                  background: 'var(--color-muted)',
                  transition: 'width 0.3s',
                }}
                className="group-hover:w-8"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
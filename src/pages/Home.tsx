import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/home_background.jpg'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image — replace src with your own photo */}
      <img
        src={heroImage}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1.2s ease',
          filter: 'brightness(0.8)',
        }}
      />

      {/* Overlay gradient — bottom fade for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 40%, rgba(26,25,23,0.7) 100%)',
        }}
      />

      {/* Text block — bottom-left */}
      <div
        className="absolute bottom-16 left-10 right-10"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
        }}
      >
        <p
          className="text-sm tracking-[0.2em] uppercase mb-3"
          style={{ color: 'rgba(245,243,239,0.6)', fontWeight: 300 }}
        >
          Japanese high school student<br /> &amp; competitive programmer
        </p>
        <h1
          className="text-8xl leading-tight mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-paper)',
            // fontStyle: 'italic',
          }}
        >
          Astroseek
        </h1>
        <p
          className="text-base leading-relaxed max-w-sm"
          style={{ color: 'rgba(245,243,239,0.75)', fontWeight: 300 }}
        >
          競技プログラミングをしています。<br />AIとバトルしながらこれを作っています 楽しい〜
        </p>

        {/* Scroll hint → navigate to about */}
        <button
          onClick={() => navigate('/about')}
          className="mt-8 flex items-center gap-3 group"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(245,243,239,0.5)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            padding: 0,
          }}
        >
          <span
            style={{
              display: 'block',
              width: '32px',
              height: '1px',
              background: 'rgba(245,243,239,0.4)',
              transition: 'width 0.3s',
            }}
            className="group-hover:w-[48px]"
          />
          ENTER
        </button>
      </div>
    </div>
  )
}
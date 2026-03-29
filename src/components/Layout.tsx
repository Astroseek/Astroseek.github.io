import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About' },
  { to: '/work',        label: 'Work' },
  { to: '/likes',       label: 'Likes' },
  { to: '/achievement', label: 'Achievement' },
  { to: '/contact',     label: 'Contact' },
]

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          borderBottom: isHome ? 'none' : '1px solid rgba(26,25,23,0.1)',
          background: isHome ? 'transparent' : 'rgba(245,243,239,0.92)',
          backdropFilter: isHome ? 'none' : 'blur(12px)',
          transition: 'background 0.4s, border 0.4s',
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="text-sm tracking-[0.15em] uppercase"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)', textDecoration: 'none', fontWeight: 500 }}
        >
          Astroseek
        </NavLink>

        {/* Nav */}
        <nav className="flex gap-7">
          {navItems.filter(n => n.to !== '/').map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                fontSize: '13px',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                color: isActive ? 'var(--color-ink)' : 'var(--color-muted)',
                fontWeight: isActive ? 500 : 300,
                transition: 'color 0.2s',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer — hidden on home */}
      {!isHome && (
        <footer
          className="px-8 py-6 text-xs"
          style={{
            borderTop: '1px solid rgba(26,25,23,0.1)',
            color: 'var(--color-muted)',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>© 2026 Astroseek</span>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '13px' }}>
            made with care
          </span>
        </footer>
      )}
    </div>
  )
}
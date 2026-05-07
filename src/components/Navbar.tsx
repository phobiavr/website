import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const sections = [
  { id: 'home',    label: 'Əsas səhifə' },
  { id: 'offers',  label: 'Təkliflər' },
  { id: 'games',   label: 'Oyunlar' },
  { id: 'prices',  label: 'Qiymətlər' },
  { id: 'about',   label: 'Haqqımızda' },
  { id: 'blog',    label: 'Bloq' },
  { id: 'contact', label: 'Əlaqə' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome])

  function handleClick(e: React.MouseEvent, id: string) {
    e.preventDefault()
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <nav className="navbar">
      <span className="logo">
        <Link to="/"><img src="/img/logo.png" alt="Phober" /></Link>
      </span>
      <ul id="menu">
        {sections.map(({ id, label }) => (
          <li key={id} className={isHome && activeId === id ? 'active' : ''}>
            <a href={`#${id}`} onClick={e => handleClick(e, id)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

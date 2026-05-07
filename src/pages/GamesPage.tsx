import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api, imgUrl, type Game, type Genre } from '../api'

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([])
  const [genres, setGenres] = useState<Genre[]>([])
  const [activeGenre, setActiveGenre] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([api.games.list(1, 100), api.genres.list()])
      .then(([g, gen]) => {
        setGames(g.data ?? [])
        setGenres(gen)
      })
      .finally(() => setLoading(false))
  }, [])

  const filtered = activeGenre ? games.filter(g => g.genre_id === activeGenre) : games

  return (
    <div style={{ background: `url('/img/s3.jpg') center/cover no-repeat`, minHeight: '100vh' }}>
      <Navbar />
      <div className="container" style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="games-filter">
          <h1 className="heading">Oyunlar</h1>
          <ul>
            <li>
              <a href="#" className={activeGenre === null ? 'active' : ''} onClick={e => { e.preventDefault(); setActiveGenre(null) }}>
                Hamısı
              </a>
            </li>
            {genres.map(g => (
              <li key={g.id}>
                <a
                  href="#"
                  className={activeGenre === g.id ? 'active' : ''}
                  onClick={e => { e.preventDefault(); setActiveGenre(g.id) }}
                >
                  {g.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <div className="state-msg">Yüklənir...</div>
        ) : (
          <div className="games-grid">
            {filtered.map(g => (
              <Link key={g.id} to={`/games/${g.id}`} className="game-tile">
                <div className="game-tile__bg" style={{ background: `url('${imgUrl(g.image_url) || '/img/batmanarkhamvranalisis.jpg'}')` }} />
                <div className="game-tile__info">
                  <h3>{g.name}</h3>
                  <p>{g.description}</p>
                </div>
                <span className="game-tile__more">Ətraflı</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

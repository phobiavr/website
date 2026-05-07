import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api, imgUrl, type Game } from '../api'

export default function GamePage() {
  const { id } = useParams<{ id: string }>()
  const [game, setGame] = useState<Game | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    api.games.get(Number(id))
      .then(setGame)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return (
    <div className="game-page">
      <Navbar />
      <div className="state-msg">Yüklənir...</div>
    </div>
  )

  if (!game) return (
    <div className="game-page">
      <Navbar />
      <div className="state-msg">Oyun tapılmadı</div>
    </div>
  )

  return (
    <div className="game-page">
      <Navbar />
      <div className="game-inner">
        <div>
          <h1 className="page-heading">{game.name}</h1>
          <div className="youtube-player">
            <div style={{ height: 320, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)' }}>
              Video
            </div>
          </div>
          <div className="game-gallery">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={imgUrl(game.image_url) || '/img/maxresdefault-(1).jpg'} alt="" />
            ))}
          </div>
        </div>
        <div className="game-descr">
          <p className="p">{game.description}</p>
          <div className="game-options">
            {game.genre && (
              <div>
                <span>Janr: </span>
                <span>{game.genre.name}</span>
              </div>
            )}
            {game.players && (
              <div>
                <span>Oyuncu sayı: </span>
                <span>{game.players}</span>
              </div>
            )}
            {game.rating && (
              <div>
                <span>Rating: </span>
                <span>{game.rating}</span>
              </div>
            )}
          </div>
          <Link to="/#contact" className="reserve-btn sm" style={{ float: 'right', marginTop: 50 }}>
            Rezervasiya
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

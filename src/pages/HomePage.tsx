import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { api, imgUrl, type Game, type Device, type TariffPlan, type Post } from '../api'
import Footer from '../components/Footer'

export default function HomePage() {
  const [games, setGames] = useState<Game[]>([])
  const [devices, setDevices] = useState<Device[]>([])
  const [tariffs, setTariffs] = useState<TariffPlan[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })

  useEffect(() => {
    api.games.list(1, 12).then(r => setGames(r.data ?? []))
    api.devices.list().then(setDevices)
    api.tariffPlans.list().then(setTariffs)
    api.posts.list(1, 4).then(r => setPosts(r.data ?? []))
  }, [])

  async function handleReservation(e: React.FormEvent) {
    e.preventDefault()
    await api.schedule.create(formData)
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const heroSlides = [
    { bg: '/img/galaxy1.jpg' },
    { bg: '/img/s2.jpg' },
  ]

  return (
    <div className="fullpage">

      {/* ── Hero ── */}
      <section className="section" id="home">
        <div className="hero-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            style={{ height: '100%' }}
          >
            {heroSlides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="hero-slide" style={{ background: `url(${s.bg})`, height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="hero-caption">
                    <h1>WELCOME TO <br /> VIRTUAL REALITY</h1>
                    <p>Experience the future of entertainment with our cutting-edge VR technology.</p>
                    <a href="#contact" className="reserve-btn">Rezervasiya</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Offers / Devices ── */}
      <section className="section" id="offers" style={{ background: `url('/img/s2.jpg')` }}>
        <div className="section-content container">
          <h1 className="heading">Təkliflər</h1>
          <p className="p" style={{ maxWidth: 720 }}>
            Experience immersive VR with our top-tier devices. Each headset delivers an unparalleled virtual reality experience.
          </p>
          {devices.length > 0 ? (
            <Swiper
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={27}
              navigation
              style={{ maxWidth: 990, margin: '40px auto 0', paddingTop: 100 }}
            >
              {devices.map(d => (
                <SwiperSlide key={d.id}>
                  <div className="offer-card" style={{ background: `url('${imgUrl(d.image_url) || '/img/1.jpg'}')` }}>
                    <div className="offer-card__content">
                      <h2>{d.name}</h2>
                      <p>{d.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={27}
              navigation
              style={{ maxWidth: 990, margin: '40px auto 0', paddingTop: 100 }}
            >
              {[
                { name: 'OCULUS RIFT', bg: '/img/1.jpg', device: '/img/Untitled-1.png' },
                { name: 'HTC VIVE', bg: '/img/2.jpg', device: '/img/Untitled-2.png' },
                { name: 'PS4 VR', bg: '/img/3.jpg', device: '/img/Untitled-3.png' },
                { name: 'VIRTUIX OMNI', bg: '/img/4.jpg', device: '/img/Untitled-4.png' },
              ].map(d => (
                <SwiperSlide key={d.name}>
                  <div className="offer-card" style={{ background: `url('${d.bg}')` }}>
                    <div className="offer-card__device" style={{ background: `url('${d.device}')` }} />
                    <div className="offer-card__content">
                      <h2>{d.name}</h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>

      {/* ── Games ── */}
      <section className="section" id="games" style={{ background: `url('/img/s3.jpg')` }}>
        <div className="section-content container">
          <div className="games-filter">
            <h1 className="heading">Oyunlar</h1>
          </div>
          <div className="games-grid">
            {games.slice(0, 12).map(g => (
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
          <div className="other-games">
            <Link to="/games">Digər oyunlar</Link>
          </div>
        </div>
      </section>

      {/* ── Prices ── */}
      <section className="section" id="prices" style={{ background: `url('/img/s4.jpg')` }}>
        <div className="section-content container">
          <h1 className="heading">Qiymətlər</h1>
          {tariffs.length > 0 ? (
            <Swiper modules={[Navigation]} navigation style={{ marginTop: 40 }}>
              {tariffs.map(t => (
                <SwiperSlide key={t.id}>
                  <div className="price-card">
                    {t.images && t.images.length > 0 && (
                      <div className="price-card__images">
                        {t.images.slice(0, 3).map((img, i) => (
                          <img key={i} src={img} alt="" />
                        ))}
                      </div>
                    )}
                    <div className="price-card__body">
                      <h2>{t.name}</h2>
                      <p className="p">{t.description}</p>
                      <div className="price-items">
                        <ul>
                          <li>
                            <span className="price-value">{t.price} <sup>azn</sup></span>
                            <span className="price-desc"><p>{t.duration} dəq</p></span>
                          </li>
                        </ul>
                      </div>
                      <a href="#contact" className="price-reserve">Rezervasiya</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper modules={[Navigation]} navigation style={{ marginTop: 40 }}>
              {[
                { name: 'VR CINEMA', price: 15, items: ['15 azn / lorem ipsum', '20 azn / lorem ipsum', '25 azn / lorem ipsum'] },
                { name: 'VR ARENA', price: 25, items: ['25 azn / lorem ipsum', '35 azn / lorem ipsum'] },
              ].map(t => (
                <SwiperSlide key={t.name}>
                  <div className="price-card">
                    <div className="price-card__body">
                      <h2>{t.name}</h2>
                      <div className="price-items">
                        <ul>
                          <li>
                            <span className="price-value">{t.price} <sup>azn</sup></span>
                          </li>
                        </ul>
                      </div>
                      <a href="#contact" className="price-reserve">Rezervasiya</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>

      {/* ── About ── */}
      <section className="section" id="about" style={{ background: `url('/img/s5.jpg')` }}>
        <div className="section-content container">
          <h1 className="heading">Haqqımızda</h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            <div>
              <p className="p">
                Phober — Azərbaycanın ən böyük virtual reallıq mərkəzidir. Biz sizə ən müasir VR texnologiyaları ilə unudulmaz təcrübə yaşadırıq.
              </p>
              <p className="p">
                Mərkəzimizdə HTC Vive, Oculus Rift, PlayStation VR və Virtuix Omni kimi qabaqcıl cihazlarla onlarca oyun arasından seçim edə bilərsiniz.
              </p>
            </div>
            <div style={{
              height: 350, borderRadius: 15, overflow: 'hidden',
              background: `url('/img/vrinfo.jpg') center/cover no-repeat`,
              boxShadow: '3px 11px 17px rgba(0,0,0,0.38)'
            }} />
          </div>
          <div style={{ display: 'flex', gap: 20, marginTop: 40, overflowX: 'auto' }}>
            {['/img/mwrimage.jpg', '/img/batmanarkhamvranalisis.jpg', '/img/mwrimage.jpg'].map((src, i) => (
              <div key={i} style={{ minWidth: 280, height: 160, borderRadius: 15, background: `url('${src}') center/cover`, boxShadow: '3px 11px 17px rgba(0,0,0,0.38)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ── */}
      <section className="section" id="blog" style={{ background: `url('/img/s6.jpg')` }}>
        <div className="section-content container">
          <h1 className="heading">Bloq</h1>
          <p className="p">Son xəbərlər və VR dünyasından maraqlı məqalələr.</p>
          {posts.length > 0 && (
            <Swiper modules={[Navigation]} navigation slidesPerView={1} style={{ marginTop: 30 }}>
              {posts.slice(0, 4).map(post => (
                <SwiperSlide key={post.id}>
                  <div style={{ display: 'flex', gap: 0, borderRadius: 15, overflow: 'hidden', maxWidth: 800 }}>
                    <div style={{
                      width: 600, height: 435,
                      background: `url('${imgUrl(post.image_url) || '/img/rendition1.img.jpg'}') center/cover`,
                      borderRadius: '15px 0 0 15px'
                    }} />
                    <div style={{
                      width: 363, padding: '60px 50px 0',
                      background: `url('/img/file_12018_Star.jpg') center/cover`,
                      position: 'relative', borderRadius: '0 15px 15px 0'
                    }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,30,52,0.9)', borderRadius: '0 15px 15px 0' }} />
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 37, color: 'var(--cyan)', textTransform: 'uppercase', fontWeight: 'bold' }}>{post.title}</h2>
                        <p style={{ color: 'var(--white)', marginTop: 15, fontSize: 15 }}>{post.body?.slice(0, 120)}...</p>
                        <Link to={`/blog/${post.id}`} style={{
                          display: 'inline-block', marginTop: 30, padding: '10px 22px',
                          border: '2px solid var(--cyan)', borderRadius: '0 5px 5px 0',
                          color: 'var(--cyan)', textTransform: 'uppercase', marginLeft: 44, position: 'relative'
                        }}>Daha ətraflı</Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div style={{ marginTop: 20 }}>
            <Link to="/blog" className="reserve-btn sm">Bütün yazılar</Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section contact-section" id="contact" style={{ background: `url('/img/c.jpg')` }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-col">
              <h1 className="heading">Əlaqə</h1>
              <p className="p">Bizimlə əlaqə saxlayın. Hər hansı sualınız üçün hazırıq.</p>
              <ul className="contacts-list">
                <li><a href="tel:+994126606060"><img src="/img/icons/call-answer.svg" alt="" /><span>(+994 12) 660 60 60</span></a></li>
                <li><a href="tel:+994518914040"><img src="/img/icons/smartphone-call.svg" alt="" /><span>(+994 51) 891 40 40</span></a></li>
                <li><a href="mailto:info@phober.az"><img src="/img/icons/letter.svg" alt="" /><span>info@phober.az</span></a></li>
                <li><a href="#"><img src="/img/icons/point.svg" alt="" /><span>Baku, Azerbaijan. Nargiz Center, floor 3</span></a></li>
              </ul>
              <ul className="social-list">
                <li><a href="#" style={{ background: `url('/img/icons/fb.svg')` }} /></li>
                <li><a href="#" style={{ background: `url('/img/icons/insta.svg')` }} /></li>
                <li><a href="#" style={{ background: `url('/img/icons/twitter.svg')` }} /></li>
                <li><a href="#" style={{ background: `url('/img/icons/youtube.svg')` }} /></li>
              </ul>
            </div>
            <div className="contact-col" style={{ paddingLeft: 100, paddingRight: 0 }}>
              <h1 className="heading">Rezervasiya</h1>
              <p className="p">Onlayn rezervasiya edin.</p>
              <form className="reservation-form" onSubmit={handleReservation}>
                <input className="form-field" type="text" placeholder="Ad Soyad"
                  value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                <input className="form-field" type="tel" placeholder="Telefon"
                  value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                <input className="form-field" type="email" placeholder="Email"
                  value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                <textarea className="form-field" rows={3} placeholder="Mesaj"
                  value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
                <div className="form-footer">
                  <span>* Zəruri sahələri doldurun</span>
                  <button type="submit" className="btn">Göndər</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="map-area" />
        <Footer />
      </section>

    </div>
  )
}

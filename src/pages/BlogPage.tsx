import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api, imgUrl, type Post } from '../api'

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.posts.list(1, 50)
      .then(r => setPosts(r.data ?? []))
      .finally(() => setLoading(false))
  }, [])

  const heroSlides = posts.slice(0, 3)

  return (
    <div>
      <Navbar />

      {/* Hero slider */}
      {heroSlides.length > 0 ? (
        <Swiper modules={[Autoplay]} loop autoplay={{ delay: 5000 }} style={{ height: 732 }}>
          {heroSlides.map(post => (
            <SwiperSlide key={post.id}>
              <div className="blog-hero" style={{ background: `url('${imgUrl(post.image_url) || '/img/81.jpg'}') center/cover` }}>
                <div className="container">
                  <h1>{post.title}</h1>
                  <p>{post.body?.slice(0, 120)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="blog-hero" style={{ background: `url('/img/81.jpg') center/cover` }}>
          <div className="container">
            <h1>Bloq</h1>
          </div>
        </div>
      )}

      {/* Posts list */}
      <div className="blog-list-section">
        <div className="container">
          {loading ? (
            <div className="state-msg">Yüklənir...</div>
          ) : (
            posts.map(post => (
              <Link key={post.id} to={`/blog/${post.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="blog-item">
                  <div
                    className="blog-item__img"
                    style={{ background: `url('${imgUrl(post.image_url) || '/img/mwrimage.jpg'}') center/cover` }}
                  />
                  <div className="blog-item__body">
                    <h2>{post.title}</h2>
                    <p>{post.body?.slice(0, 180)}...</p>
                    <div className="blog-item__date">
                      {new Date(post.created_at).toLocaleDateString('az-AZ')}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

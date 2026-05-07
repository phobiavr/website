import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { api, imgUrl, type Post } from '../api'

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [related, setRelated] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    Promise.all([
      api.posts.list(1, 50),
    ]).then(([all]) => {
      const data = all.data ?? []
      const found = data.find(p => p.id === Number(id)) ?? null
      setPost(found)
      setRelated(data.filter(p => p.id !== Number(id)).slice(0, 6))
    }).finally(() => setLoading(false))
  }, [id])

  if (loading) return (
    <div className="blog-post-page">
      <Navbar />
      <div className="state-msg">Yüklənir...</div>
    </div>
  )

  if (!post) return (
    <div className="blog-post-page">
      <Navbar />
      <div className="state-msg">Yazı tapılmadı</div>
    </div>
  )

  return (
    <div className="blog-post-page">
      <Navbar />
      <div className="blog-post-container">
        <div className="blog-post-card">
          <div
            className="blog-post-card__cover"
            style={{ background: `url('${imgUrl(post.image_url) || '/img/mwrimage.jpg'}') center/cover` }}
          />
          <div className="blog-post-card__body">
            <h1>{post.title}</h1>
            <p className="p">{post.body}</p>
            <p className="blog-item__date" style={{ marginTop: 20 }}>
              {new Date(post.created_at).toLocaleDateString('az-AZ')}
            </p>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div style={{ background: '#fff', borderRadius: 15, marginTop: 15, padding: '30px 35px 50px', marginBottom: 80 }}>
            <div style={{ display: 'flex', gap: 35, overflowX: 'auto' }}>
              {related.map(p => (
                <a key={p.id} href={`/blog/${p.id}`} style={{ minWidth: 222, textDecoration: 'none', color: '#021740' }}>
                  <div style={{
                    height: 165, borderRadius: 15, marginBottom: 10,
                    background: `url('${imgUrl(p.image_url) || '/img/mwrimage.jpg'}') center/cover`
                  }} />
                  <h3 style={{ fontSize: 25, fontWeight: 'bold' }}>{p.title}</h3>
                  <p style={{ fontSize: 15 }}>{p.body?.slice(0, 80)}...</p>
                  <div style={{ fontSize: 14, opacity: 0.65, marginTop: 8 }}>
                    {new Date(p.created_at).toLocaleDateString('az-AZ')}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

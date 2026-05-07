import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/main.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import GamePage from './pages/GamePage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'

function HomeLayout() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  )
}
